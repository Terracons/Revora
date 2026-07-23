import html
import logging

import resend

from app.config import settings

logger = logging.getLogger(__name__)

resend.api_key = settings.resend_api_key or ""


def send_new_lead_notification(
    *,
    name: str,
    email: str,
    phone: str | None,
    company: str | None,
    message: str | None,
    source: str,
) -> None:
    """Email the site owner about a new lead. No-op if notifications aren't configured."""
    if not settings.resend_api_key or not settings.notify_email:
        return

    def row(label: str, value: str | None) -> str:
        if not value:
            return ""
        return f"<p><strong>{html.escape(label)}:</strong> {html.escape(value)}</p>"

    body = "".join(
        [
            row("Name", name),
            row("Email", email),
            row("Phone", phone),
            row("Company", company),
            row("Source", source),
            row("Message", message),
        ]
    )

    try:
        resend.Emails.send(
            {
                "from": settings.from_email,
                "to": [settings.notify_email],
                "reply_to": email,
                "subject": f"New lead: {name}",
                "html": body,
            }
        )
    except Exception:
        logger.exception("Failed to send lead notification email")
