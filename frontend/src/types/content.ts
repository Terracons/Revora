export interface HeroContent {
  badge: string;
  heading: string;
  subheading: string;
  primary_cta: string;
  secondary_cta: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface ProblemItem {
  index: string;
  title: string;
  description: string;
}

export interface PartnerBenefit {
  title: string;
  description: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStepItem {
  step: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  metric_value: string;
  metric_label: string;
  quote: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SiteContent {
  hero: HeroContent;
  stats_heading: string;
  stats_subheading: string;
  stats: StatItem[];
  problem_heading: string;
  problem_subheading: string;
  problems: ProblemItem[];
  partner_heading: string;
  partner_subheading: string;
  partner_benefits: PartnerBenefit[];
  services_heading: string;
  services_subheading: string;
  services: ServiceItem[];
  process_heading: string;
  process_subheading: string;
  process_steps: ProcessStepItem[];
  testimonials_heading: string;
  testimonials_subheading: string;
  testimonials: TestimonialItem[];
  faqs: FAQItem[];
  cta_heading: string;
  cta_subheading: string;
}

export interface ContactFormPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  source?: string;
}
