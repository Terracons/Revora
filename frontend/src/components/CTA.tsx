interface CTAProps {
  heading: string;
  subheading: string;
  onPrimaryClick: () => void;
}

export default function CTA({ heading, subheading, onPrimaryClick }: CTAProps) {
  const words = heading.split(" ");
  const highlightIndex = words.findIndex((word) => word.toLowerCase().startsWith("grow"));

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl rounded-3xl bg-brand-ink px-8 py-16 text-center text-white">
        <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
          {words.map((word, i) => (
            <span key={i} className={i === highlightIndex ? "text-brand-blue" : undefined}>
              {word}
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-white/70">{subheading}</p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={onPrimaryClick}
            className="w-full rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue-dark sm:w-auto"
          >
            Book a Free Discovery Call
          </button>
          <a
            href="#services"
            className="w-full rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            Explore Our Service
          </a>
        </div>
      </div>
    </section>
  );
}
