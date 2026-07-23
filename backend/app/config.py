from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """App configuration, loaded from environment variables / .env file."""

    cors_origins: str = "http://localhost:5173"
    database_url: str = "sqlite:///./revora.db"

    @property
    def cors_origin_list(self) -> list[str]:
        return [origin.strip() for origin in self.cors_origins.split(",") if origin.strip()]

    class Config:
        env_file = ".env"


settings = Settings()
