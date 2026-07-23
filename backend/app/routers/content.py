from fastapi import APIRouter

from app.data.content import SITE_CONTENT
from app.schemas import SiteContent

router = APIRouter(prefix="/api/content", tags=["content"])


@router.get("", response_model=SiteContent)
def get_site_content() -> dict:
    """Return all copy/content needed to render the landing page.

    Kept as a single call so the frontend can render the whole page after
    one round trip. Split this into per-section endpoints if sections start
    needing independent caching or pagination later.
    """
    return SITE_CONTENT
