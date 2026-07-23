import type { TestimonialItem } from "../types/content";

interface TestimonialsProps {
  heading: string;
  subheading: string;
  testimonials: TestimonialItem[];
}

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
];

export default function Testimonials({ heading, subheading, testimonials }: TestimonialsProps) {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-gray-500">{subheading}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={t.name} className="overflow-hidden rounded-2xl border border-gray-200">
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={FALLBACK_IMAGES[i % FALLBACK_IMAGES.length]}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-brand-ink">{t.name}</h3>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-extrabold text-brand-blue">{t.metric_value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      {t.metric_label}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm italic text-gray-600">"{t.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
