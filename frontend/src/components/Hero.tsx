import type { HeroContent } from "../types/content";

interface HeroProps {
  hero: HeroContent;
  onPrimaryClick: () => void;
}

const COLLAGE_IMAGES = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=400&q=80",
];

export default function Hero({ hero, onPrimaryClick }: HeroProps) {
  return (
    <section className="bg-brand-ink pb-20 pt-20 text-center text-white">
      <div className="mx-auto max-w-4xl px-6">
        <span className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-ink">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2 3 14h7l-1 8 11-14h-7l0-6Z" />
          </svg>
          {hero.badge}
        </span>

        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          {hero.heading}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
          {hero.subheading}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={onPrimaryClick}
            className="w-full rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue-dark sm:w-auto"
          >
            {hero.primary_cta}
          </button>
          <a
            href="#services"
            className="w-full rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            {hero.secondary_cta}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-3 gap-4 px-6 sm:grid-cols-6">
        {COLLAGE_IMAGES.map((src, i) => (
          <div
            key={src}
            className="aspect-[3/4] overflow-hidden rounded-xl bg-white/5"
            style={{ marginTop: i % 2 === 0 ? "0" : "1.5rem" }}
          >
            <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
