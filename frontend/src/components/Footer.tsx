const SOLUTIONS = [
  "Brand Strategy",
  "Website Design",
  "Social Media Management",
  "Search Engine Optimization",
  "Paid Advertising",
  "Website Maintenance",
];

const COMPANY = ["Portfolio", "Our Service", "Testimonials", "FAQs", "Contact us"];

const CONNECT = [
  { label: "agenvyrevora@gmail.com", href: "mailto:agenvyrevora@gmail.com" },
  { label: "+2348000000000", href: "tel:+2348000000000" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Twitter (X)", href: "#" },
  { label: "TikTok", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-ink px-6 py-16 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-blue text-sm font-bold text-white">
              R
            </span>
            <span className="text-lg font-bold tracking-wide">
              REVORA
              <span className="block -mt-1 text-[10px] font-medium tracking-[0.3em] text-brand-blue">
                AGENCY
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/60">
            Helping businesses grow through strategic branding, high-converting
            websites, and digital marketing that delivers measurable results.
          </p>
        </div>

        <FooterColumn title="Solutions" items={SOLUTIONS} />
        <FooterColumn title="Company" items={COMPANY} />

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/50">Connect</h4>
          <ul className="mt-4 space-y-3">
            {CONNECT.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-sm text-white/70 hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
        <p>© {new Date().getFullYear()} Revora Agency. Precision Digital Growth.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-widest text-white/50">{title}</h4>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="text-sm text-white/70 hover:text-white">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
