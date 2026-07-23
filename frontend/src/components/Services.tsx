import type { ServiceItem } from "../types/content";
import { IconFor } from "./icons";

interface ServicesProps {
  heading: string;
  subheading: string;
  services: ServiceItem[];
}

export default function Services({ heading, subheading, services }: ServicesProps) {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">
            Our Growth Solutions
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-gray-500">{subheading}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-200 p-8 transition hover:border-brand-blue/40 hover:shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <IconFor name={service.icon} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand-ink">{service.title}</h3>
              <p className="mt-3 text-sm text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
