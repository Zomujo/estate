"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Better active section detection
      if (pathname === "/") {
        // Trigger section change when the section crosses the top third of the screen
        const scrolledPosition = window.scrollY + (window.innerHeight / 3);
        
        // Find the section currently in view by checking which one we've scrolled past
        let current = "";
        
        // We know the sections are in this vertical order on the page
        const orderedSections = ["home", "about", "services", "projects", "contact"];
        
        for (const section of orderedSections) {
          const element = document.getElementById(section);
          if (element) {
            // If we've scrolled past the top of this section
            if (element.offsetTop <= scrolledPosition) {
              current = `#${section}`;
            }
          }
        }
        
        if (current) {
          setActiveHash(current);
        } else if (window.scrollY < 100) {
           setActiveHash("#home");
        }
      }
    };
    
    // Set initial hash
    if (typeof window !== "undefined") {
      setActiveHash(window.location.hash);
    }
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Handle cross-page linking
  const getHref = (href: string) => {
    if (pathname === "/") return href; // On homepage, use just the hash
    return `/${href}`; // On other pages, go to root + hash
  };

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    setActiveHash(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-apex-black/95 backdrop-blur-sm border-b border-apex-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-10 md:px-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group" onClick={() => setActiveHash("#home")}>
          <span className="font-display text-2xl text-apex-cream tracking-widest uppercase">
            Zabelo
          </span>
          <span className="text-[10px] font-sans text-apex-gold tracking-[0.3em] uppercase">
            Builders
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {pathname === "/" ? (
            links.map((link) => {
              const isActive = activeHash === link.href;
              return (
                <Link
                  key={link.href}
                  href={getHref(link.href)}
                  onClick={() => handleLinkClick(link.href)}
                  className={`font-sans text-sm tracking-widest uppercase transition-colors duration-300 relative ${
                    isActive ? "text-apex-gold" : "text-apex-muted hover:text-apex-cream"
                  }`}
                >
                  {link.label}
                  {/* Active indicator dot */}
                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-apex-gold" />
                  )}
                </Link>
              );
            })
          ) : (
            <Link
              href="/"
              onClick={() => handleLinkClick("#home")}
              className="font-sans text-sm tracking-widest uppercase text-apex-muted hover:text-apex-cream transition-colors duration-300 relative"
            >
              Back to Home
            </Link>
          )}
        </nav>

        {/* CTA */}
        <Link
          href={getHref("#contact")}
          onClick={() => handleLinkClick("#contact")}
          className="hidden md:inline-flex items-center gap-2 border border-apex-gold text-apex-gold font-sans text-sm tracking-widest uppercase px-6 py-2.5 hover:bg-apex-gold hover:text-apex-black transition-all duration-300"
        >
          Speak to an Expert
        </Link>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-apex-cream transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-apex-cream transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-apex-cream transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-8 pt-4 pb-6 gap-6 border-t border-apex-border mt-4 bg-apex-black">
          {pathname === "/" ? (
            links.map((link) => {
              const isActive = activeHash === link.href;
              return (
                <Link
                  key={link.href}
                  href={getHref(link.href)}
                  onClick={() => handleLinkClick(link.href)}
                  className={`font-sans text-sm tracking-widest uppercase transition-colors duration-300 ${
                    isActive ? "text-apex-gold border-l-2 border-apex-gold pl-2 -ml-2.5" : "text-apex-muted hover:text-apex-cream"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })
          ) : (
            <Link
              href="/"
              onClick={() => handleLinkClick("#home")}
              className="font-sans text-sm tracking-widest uppercase transition-colors duration-300 text-apex-muted hover:text-apex-cream"
            >
              Back to Home
            </Link>
          )}

          <Link
            href={getHref("#contact")}
            onClick={() => handleLinkClick("#contact")}
            className="inline-flex items-center justify-center border border-apex-gold text-apex-gold font-sans text-sm tracking-widest uppercase px-6 py-2.5 hover:bg-apex-gold hover:text-apex-black transition-all duration-300 mt-2"
          >
            Speak to an Expert
          </Link>
        </nav>
      </div>
    </header>
  );
}
