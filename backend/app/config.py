from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """App configuration, loaded from environment variables / .env file."""

    cors_origins: str = "http://localhost:5173"
    database_url: str = "sqlite:///./revora.db"

    # Email notifications (Resend) — sent when a lead is submitted.
    # Leave resend_api_key unset to disable notifications (e.g. local dev).
    resend_api_key: str | None = None
    notify_email: str | None = None
    from_email: str = "Revora <onboarding@resend.dev>"

    @property
    def cors_origin_list(self) -> list[str]:
        return [origin.strip() for origin in self.cors_origins.split(",") if origin.strip()]

    class Config:
        env_file = ".env"


settings = Settings()
