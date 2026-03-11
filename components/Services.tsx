"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "General Construction",
    tagline: "Built to last. Engineered to impress.",
    items: [
      {
        name: "Residential & Commercial Building",
        desc: "Custom homes, luxury apartments, corporate offices, and retail spaces built to exact specifications.",
      },
      {
        name: "Civil Engineering Works",
        desc: "Infrastructure development, road works, and drainage systems that stand the test of time.",
      },
    ],
  },
  {
    number: "02",
    title: "Real Estate Development & Sales",
    tagline: "Prime land. Verified titles. No surprises.",
    items: [
      {
        name: "Prime Properties",
        desc: "Access to exclusive, legally vetted lands and modern developments in highly sought-after neighborhoods.",
      },
      {
        name: "Property Management",
        desc: "Comprehensive maintenance and tenant management to ensure your investment continues to grow in value.",
      },
    ],
  },
  {
    number: "03",
    title: "Architectural Design & Planning",
    tagline: "Where vision meets blueprint.",
    items: [
      {
        name: "Concept to Reality",
        desc: "Cutting-edge 3D modeling and architectural planning that blends modern aesthetics with functional, climate-responsive design.",
      },
    ],
  },
  {
    number: "04",
    title: "Project Management & Consulting",
    tagline: "Your project. Our full attention.",
    items: [
      {
        name: "Diaspora Support",
        desc: "Dedicated project oversight for clients abroad. Regular video updates, financial reporting, and strict site supervision — so you can build back home with total peace of mind.",
      },
    ],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      rowRefs.current.forEach((row, i) => {
        gsap.fromTo(
          row,
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 78%",
              onEnter: () => setActiveIndex(i),
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-apex-black py-28 md:py-36 border-t border-apex-border scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-10 md:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-apex-gold mb-4">
              What We Do
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-apex-cream">
              Our Services.
            </h2>
          </div>
          <p className="font-sans text-sm text-apex-cream/70 max-w-xs leading-relaxed md:text-right">
            End-to-end solutions across construction, real estate, design, and project management.
          </p>
        </div>

        {/* Service rows */}
        <div className="flex flex-col divide-y divide-apex-border">
          {services.map((service, i) => (
            <div
              key={service.number}
              ref={(el) => { rowRefs.current[i] = el; }}
              className={`group grid md:grid-cols-[120px_1fr_1fr] gap-6 md:gap-12 py-12 cursor-default transition-all duration-500 ${
                activeIndex === i ? "opacity-100" : "opacity-60 hover:opacity-100"
              }`}
            >
              {/* Number */}
              <div className="flex items-start">
                <span
                  className={`font-display text-5xl transition-colors duration-300 ${
                    activeIndex === i ? "text-apex-gold" : "text-apex-border group-hover:text-apex-gold/50"
                  }`}
                >
                  {service.number}
                </span>
              </div>

              {/* Title + tagline */}
              <div className="flex flex-col justify-start gap-3">
                <h3 className="font-display text-3xl md:text-4xl text-apex-cream leading-tight">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-apex-gold italic">
                  {service.tagline}
                </p>
              </div>

              {/* Sub-items */}
              <div className="flex flex-col gap-6">
                {service.items.map((item) => (
                  <div key={item.name} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-3">
                      <span className="w-4 h-px bg-apex-gold" />
                      <h4 className="font-sans text-sm font-semibold tracking-wide text-apex-cream">
                        {item.name}
                      </h4>
                    </div>
                    <p className="font-sans text-sm text-apex-cream/70 leading-relaxed pl-7">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
