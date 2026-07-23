from fastapi import APIRouter, BackgroundTasks, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.email import send_new_lead_notification
from app.models import ContactSubmission
from app.schemas import ContactCreate, ContactRead

router = APIRouter(prefix="/api/contact", tags=["contact"])


@router.post("", response_model=ContactRead, status_code=201)
def create_contact_submission(
    payload: ContactCreate, background_tasks: BackgroundTasks, db: Session = Depends(get_db)
) -> ContactSubmission:
    """Store a lead from the 'Book a Free Discovery Call' / Contact Us forms."""
    submission = ContactSubmission(**payload.model_dump())
    db.add(submission)
    db.commit()
    db.refresh(submission)
    background_tasks.add_task(
        send_new_lead_notification,
        name=submission.name,
        email=submission.email,
        phone=submission.phone,
        company=submission.company,
        message=submission.message,
        source=submission.source,
    )
    return submission


@router.get("", response_model=list[ContactRead])
def list_contact_submissions(db: Session = Depends(get_db)) -> list[ContactSubmission]:
    """List submitted leads. Intended for internal/admin use only.

    NOTE: in production this should sit behind authentication before being
    exposed publicly.
    """
    return db.query(ContactSubmission).order_by(ContactSubmission.created_at.desc()).all()
