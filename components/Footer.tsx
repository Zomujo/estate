const footerLinks = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "General Construction", href: "#services" },
      { label: "Real Estate & Sales", href: "#services" },
      { label: "Architectural Design", href: "#services" },
      { label: "Project Management", href: "#services" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Airport Residential Area, Accra", href: "#" },
      { label: "0241197843", href: "tel:0241197843" },
      { label: "admin@zabelobuilders.com", href: "mailto:admin@zabelobuilders.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-apex-black border-t border-apex-border">
      <div className="max-w-6xl mx-auto px-10 md:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 md:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-display text-3xl text-apex-cream tracking-widest uppercase">Zabelo</p>
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-apex-gold">Builders</p>
            </div>
            <p className="font-sans text-sm text-apex-muted leading-relaxed max-w-xs">
              Building Tomorrow's Ghana, Today. Excellence in every square meter, from Accra to Kumasi.
            </p>
            <div className="h-px w-12 bg-apex-gold" />
            <p className="font-sans text-xs text-apex-muted">
              Accra · Kumasi · Nsawam
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading} className="flex flex-col gap-5">
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-apex-gold">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-apex-muted hover:text-apex-cream transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-apex-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-apex-muted">
            © {new Date().getFullYear()} Zabelo Builders. All rights reserved.
          </p>
          <p className="font-sans text-xs text-apex-muted">
            Built with integrity · Ghana 🇬🇭
          </p>
        </div>
      </div>
    </footer>
  );
}
