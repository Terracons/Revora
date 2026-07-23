import { useState } from "react";

interface NavbarProps {
  onContactClick: () => void;
}

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Service", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar({ onContactClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header id="home" className="sticky top-0 z-40 border-b border-white/10 bg-brand-ink">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-10">
        <div className="flex items-center gap-8">
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-blue text-sm font-bold text-white">
              R
            </span>
            <span className="text-lg font-bold tracking-wide text-white">
              REVORA
              <span className="block -mt-1 text-[10px] font-medium tracking-[0.3em] text-brand-blue">
                AGENCY
              </span>
            </span>
          </a>
          <button
            type="button"
            onClick={onContactClick}
            className="hidden rounded-md bg-brand-blue px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-blue-dark sm:inline-block"
          >
            Contact Us
          </button>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="lg:hidden text-white"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-brand-ink px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/90"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onContactClick();
              }}
              className="rounded-md bg-brand-blue px-5 py-2 text-sm font-semibold text-white"
            >
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
