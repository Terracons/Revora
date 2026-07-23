import type { PartnerBenefit } from "../types/content";

interface PartnerSectionProps {
  heading: string;
  subheading: string;
  benefits: PartnerBenefit[];
}

const IMAGE =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80";

export default function PartnerSection({ heading, subheading, benefits }: PartnerSectionProps) {
  return (
    <section className="bg-brand-ink py-24 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl">
          <img src={IMAGE} alt="Business partners collaborating" className="h-full w-full object-cover" loading="lazy" />
        </div>

        <div>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">{heading}</h2>
          <p className="mt-6 text-white/70">{subheading}</p>

          <ul className="mt-10 space-y-8">
            {benefits.map((benefit) => (
              <li key={benefit.title} className="flex gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold">{benefit.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
