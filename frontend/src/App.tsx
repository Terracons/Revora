import { useState } from "react";
import { useContent } from "./hooks/useContent";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ProblemSection from "./components/ProblemSection";
import PartnerSection from "./components/PartnerSection";
import Services from "./components/Services";
import ProcessSteps from "./components/ProcessSteps";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";

export default function App() {
  const { content, loading, error } = useContent();
  const [isContactOpen, setContactOpen] = useState(false);

  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <p className="text-sm uppercase tracking-widest text-gray-400">
          Loading Revora…
        </p>
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-white px-6 text-center">
        <p className="text-lg font-semibold text-brand-ink">
          Couldn't reach the Revora API
        </p>
        <p className="max-w-md text-sm text-gray-500">
          Make sure the FastAPI backend is running (see README) and that
          VITE_API_URL points to it. {error}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onContactClick={openContact} />
      <main>
        <Hero hero={content.hero} onPrimaryClick={openContact} />
        <Stats
          heading={content.stats_heading}
          subheading={content.stats_subheading}
          stats={content.stats}
        />
        <ProblemSection
          heading={content.problem_heading}
          subheading={content.problem_subheading}
          problems={content.problems}
        />
        <PartnerSection
          heading={content.partner_heading}
          subheading={content.partner_subheading}
          benefits={content.partner_benefits}
        />
        <Services
          heading={content.services_heading}
          subheading={content.services_subheading}
          services={content.services}
        />
        <ProcessSteps
          heading={content.process_heading}
          subheading={content.process_subheading}
          steps={content.process_steps}
        />
        <Testimonials
          heading={content.testimonials_heading}
          subheading={content.testimonials_subheading}
          testimonials={content.testimonials}
        />
        <FAQ faqs={content.faqs} />
        <CTA
          heading={content.cta_heading}
          subheading={content.cta_subheading}
          onPrimaryClick={openContact}
        />
      </main>
      <Footer />
      <ContactModal open={isContactOpen} onClose={closeContact} />
    </div>
  );
}
