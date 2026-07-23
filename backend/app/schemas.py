from datetime import datetime

from pydantic import BaseModel, EmailStr, Field


class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    phone: str | None = Field(default=None, max_length=40)
    company: str | None = Field(default=None, max_length=120)
    message: str | None = Field(default=None, max_length=2000)
    source: str = Field(default="contact_form", max_length=60)


class ContactRead(BaseModel):
    id: int
    name: str
    email: EmailStr
    phone: str | None
    company: str | None
    message: str | None
    source: str
    created_at: datetime

    class Config:
        from_attributes = True


class StatItem(BaseModel):
    value: str
    label: str
    description: str


class ProblemItem(BaseModel):
    index: str
    title: str
    description: str


class PartnerBenefit(BaseModel):
    title: str
    description: str


class ServiceItem(BaseModel):
    icon: str
    title: str
    description: str


class ProcessStep(BaseModel):
    step: str
    title: str
    description: str


class Testimonial(BaseModel):
    name: str
    role: str
    metric_value: str
    metric_label: str
    quote: str
    image: str


class FAQItem(BaseModel):
    question: str
    answer: str


class HeroContent(BaseModel):
    badge: str
    heading: str
    subheading: str
    primary_cta: str
    secondary_cta: str


class SiteContent(BaseModel):
    hero: HeroContent
    stats_heading: str
    stats_subheading: str
    stats: list[StatItem]
    problem_heading: str
    problem_subheading: str
    problems: list[ProblemItem]
    partner_heading: str
    partner_subheading: str
    partner_benefits: list[PartnerBenefit]
    services_heading: str
    services_subheading: str
    services: list[ServiceItem]
    process_heading: str
    process_subheading: str
    process_steps: list[ProcessStep]
    testimonials_heading: str
    testimonials_subheading: str
    testimonials: list[Testimonial]
    faqs: list[FAQItem]
    cta_heading: str
    cta_subheading: str
