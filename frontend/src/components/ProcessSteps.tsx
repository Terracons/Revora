import type { ProcessStepItem } from "../types/content";

interface ProcessStepsProps {
  heading: string;
  subheading: string;
  steps: ProcessStepItem[];
}

export default function ProcessSteps({ heading, subheading, steps }: ProcessStepsProps) {
  return (
    <section className="bg-blue-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">{subheading}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.step} className="relative">
              <span className="pointer-events-none absolute -top-6 left-0 text-6xl font-extrabold text-brand-blue/10">
                {step.step}
              </span>
              <h3 className="relative text-lg font-bold text-brand-ink">{step.title}</h3>
              <p className="relative mt-3 text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
