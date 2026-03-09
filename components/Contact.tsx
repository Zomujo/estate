"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  "General Construction",
  "Real Estate Development & Sales",
  "Architectural Design & Planning",
  "Project Management & Consulting",
  "Other",
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
      gsap.fromTo(
        rightRef.current,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-apex-dark border-t border-apex-border py-28 md:py-36 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-10 md:px-20 grid md:grid-cols-2 gap-16 md:gap-24">
        {/* Left — details */}
        <div ref={leftRef} className="flex flex-col gap-10">
          <div>
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-apex-gold mb-4">
              Get In Touch
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-apex-cream leading-tight">
              Ready to Start Your Project?
            </h2>
          </div>
          <p className="font-sans text-sm text-apex-muted leading-relaxed max-w-sm">
            Whether you have a fully drafted plan or are just beginning to
            explore your real estate options in Ghana, our team is ready to
            listen.
          </p>

          <div className="flex flex-col gap-6">
            {/* Address */}
            <div className="flex gap-4 items-start">
              <div className="mt-1 text-apex-gold shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1C6.24 1 4 3.24 4 6c0 4 5 11 5 11s5-7 5-11c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.4" />
                  <circle cx="9" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </div>
              <div>
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-apex-gold mb-1">Office</p>
                <p className="font-sans text-sm text-apex-muted">Airport Residential Area, Accra, Ghana</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-start">
              <div className="mt-1 text-apex-gold shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 2h4l1.5 4-2 1.5c1 2 2.5 3.5 4.5 4.5L12.5 10l4 1.5V15c0 .55-.45 1-1 1C6.28 16 2 11.72 2 3c0-.55.45-1 1-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-apex-gold mb-1">Phone / WhatsApp</p>
                <a href="tel:0241197843" className="font-sans text-sm text-apex-muted hover:text-apex-cream transition-colors">
                  0241197843
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start">
              <div className="mt-1 text-apex-gold shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="4" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M2 5l7 5 7-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-apex-gold mb-1">Email</p>
                <a href="mailto:admin@zabelobuilders.com" className="font-sans text-sm text-apex-muted hover:text-apex-cream transition-colors">
                  admin@zabelobuilders.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div ref={rightRef}>
          {submitted ? (
            <div className="h-full flex flex-col items-start justify-center gap-4 py-12">
              <div className="w-12 h-px bg-apex-gold" />
              <h3 className="font-display text-4xl text-apex-cream">Message Received.</h3>
              <p className="font-sans text-sm text-apex-muted leading-relaxed">
                Thank you for reaching out. A member of our team will be in touch with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-apex-muted">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="John Mensah"
                    className="bg-transparent border-b border-apex-border focus:border-apex-gold outline-none font-sans text-sm text-apex-cream placeholder:text-apex-border py-3 transition-colors duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-apex-muted">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="bg-transparent border-b border-apex-border focus:border-apex-gold outline-none font-sans text-sm text-apex-cream placeholder:text-apex-border py-3 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-apex-muted">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="0200 000 0000"
                  className="bg-transparent border-b border-apex-border focus:border-apex-gold outline-none font-sans text-sm text-apex-cream placeholder:text-apex-border py-3 transition-colors duration-300"
                />
              </div>

              {/* Service */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-apex-muted">
                  Service Required
                </label>
                <select
                  required
                  defaultValue=""
                  className="bg-apex-dark border-b border-apex-border focus:border-apex-gold outline-none font-sans text-sm text-apex-muted py-3 transition-colors duration-300 cursor-pointer"
                >
                  <option value="" disabled>Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-apex-dark text-apex-cream">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-apex-muted">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="bg-transparent border-b border-apex-border focus:border-apex-gold outline-none font-sans text-sm text-apex-cream placeholder:text-apex-border py-3 resize-none transition-colors duration-300"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-3 bg-apex-gold text-apex-black font-sans text-sm tracking-widest uppercase px-8 py-4 hover:bg-apex-gold-light transition-colors duration-300 w-full sm:w-auto"
              >
                Send Message
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
