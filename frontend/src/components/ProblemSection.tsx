import type { ProblemItem } from "../types/content";

interface ProblemSectionProps {
  heading: string;
  subheading: string;
  problems: ProblemItem[];
}

export default function ProblemSection({ heading, subheading, problems }: ProblemSectionProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-gray-500">{subheading}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.index}
              className="rounded-2xl border border-gray-200 p-8 transition hover:border-brand-blue/40 hover:shadow-sm"
            >
              <span className="text-xs font-bold text-brand-blue">{problem.index}</span>
              <h3 className="mt-3 text-lg font-bold text-brand-ink">{problem.title}</h3>
              <p className="mt-3 text-sm text-gray-500">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
