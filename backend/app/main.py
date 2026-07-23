from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.database import Base, engine
from app.routers import contact, content

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Revora Agency API",
    description="Content and lead-capture API powering the Revora landing page.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origin_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(content.router)
app.include_router(contact.router)


@app.get("/api/health", tags=["health"])
def health_check() -> dict:
    return {"status": "ok"}
