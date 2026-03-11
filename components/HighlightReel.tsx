"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    number: "01",
    title: "End-to-End Solutions",
    body: "From architectural design and land acquisition to turnkey construction — we handle every stage so you don't have to.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 22V10l10-6 10 6v12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="10" y="14" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Uncompromising Quality",
    body: "Strict adherence to international building codes and premium materials. Every square meter is built to outlast generations.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 14l3.5 3.5L19 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "On-Time Delivery",
    body: "Efficient project management that respects your schedule and budget. No surprises, no delays — just results.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Diaspora Trusted",
    body: "Seamless, transparent project tracking for clients living abroad. Build back home with total peace of mind.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 14h20M14 4c-3 4-3 16 0 20M14 4c3 4 3 16 0 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function HighlightReel() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            delay: i * 0.12,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 65%",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-apex-dark py-28 md:py-36 border-t border-apex-border">
      <div className="max-w-6xl mx-auto px-10 md:px-20">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-apex-gold mb-4">
              Why Zabelo
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-apex-cream">
              What Sets Us Apart.
            </h2>
          </div>
          <p className="font-sans text-sm text-apex-cream/70 max-w-xs leading-relaxed md:text-right">
            Four pillars that define every project we take on, from the first brick to final handover.
          </p>
        </div>

        {/* Cards — asymmetric stagger: first row offset */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-apex-border">
          {highlights.map((item, i) => (
            <div
              key={item.number}
              ref={(el) => { cardsRef.current[i] = el; }}
              className={`bg-apex-dark group flex flex-col gap-6 p-8 relative overflow-hidden cursor-default
                ${i % 2 === 1 ? "md:mt-8 lg:mt-0" : ""}
                ${i === 1 || i === 3 ? "lg:mt-10" : ""}
              `}
            >
              {/* Gold top border that extends on hover */}
              <div className="absolute top-0 left-0 h-px bg-apex-gold w-12 group-hover:w-full transition-all duration-500 ease-out" />

              {/* Number */}
              <span className="font-display text-4xl text-apex-border group-hover:text-apex-gold/20 transition-colors duration-300 select-none">
                {item.number}
              </span>

              {/* Icon */}
              <div className="text-apex-gold">{item.icon}</div>

              {/* Text */}
              <div className="flex flex-col gap-3 flex-1">
                <h3 className="font-display text-2xl text-apex-cream group-hover:text-apex-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-apex-cream/70 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
