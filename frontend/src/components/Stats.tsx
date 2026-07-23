import type { StatItem } from "../types/content";

interface StatsProps {
  heading: string;
  subheading: string;
  stats: StatItem[];
}

export default function Stats({ heading, subheading, stats }: StatsProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl">
            {heading.split(" Into ")[0]}
            {heading.includes(" Into ") && (
              <>
                {" "}
                Into{" "}
                <span className="text-gray-400">
                  {heading.split(" Into ")[1]}
                </span>
              </>
            )}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-gray-500">{subheading}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-extrabold text-brand-ink sm:text-5xl">
                {stat.value.startsWith("3") ? (
                  <span className="text-brand-blue">{stat.value}</span>
                ) : (
                  stat.value
                )}
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-brand-ink">
                {stat.label}
              </p>
              <p className="mt-2 text-sm text-gray-500">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
