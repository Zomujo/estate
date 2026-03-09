"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const specs = [
  { label: "Total Plots", value: "50+" },
  { label: "Plot Size", value: "100ft × 70ft" },
  { label: "Legal Status", value: "Fully Titled" },
  { label: "Entry Price", value: "From GHS 85K" },
];

export default function FeaturedProject() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { scale: 1.06 },
        {
          scale: 1,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );

      gsap.fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-apex-black border-t border-apex-border py-28 md:py-36 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-10 md:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-apex-gold mb-4">
              Featured Project
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-apex-cream">
              Current Developments.
            </h2>
          </div>
        </div>

        {/* Project card */}
        <div className="relative overflow-hidden group">
          {/* Image */}
          <div
            ref={imgRef}
            className="w-full h-[65vh] min-h-[480px] bg-cover bg-center"
            style={{ backgroundImage: "url('/nsawam-bg.jpg')" }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-apex-black via-apex-black/50 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-r from-apex-black/60 to-transparent" />

          {/* Content on image */}
          <div ref={textRef} className="absolute inset-0 flex flex-col justify-end p-8 md:p-14">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              {/* Left */}
              <div className="flex flex-col gap-4 max-w-lg">
                <span className="font-sans text-xs tracking-[0.4em] uppercase text-apex-gold">
                  Nsawam, Greater Accra Region
                </span>
                <h3 className="font-display text-4xl md:text-6xl text-apex-cream leading-none">
                  The Zabelo Horizon
                </h3>
                <p className="font-sans text-sm text-apex-muted leading-relaxed max-w-sm">
                  A master-planned gated community of 50+ premium plots in
                  Ghana's fastest-growing commuter corridor. Fully titled.
                  Affordable. Yours.
                </p>
                <a
                  href="/projects/zabelo-horizon"
                  className="inline-flex items-center gap-3 font-sans text-sm tracking-widest uppercase text-apex-gold hover:gap-5 transition-all duration-300 mt-2 group/link"
                >
                  Explore The Project
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                    <path
                      d="M0 6h18M13 1l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>

              {/* Right — specs grid */}
              <div className="grid grid-cols-2 gap-px bg-apex-border/50 shrink-0">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="bg-apex-black/70 backdrop-blur-sm px-6 py-4 flex flex-col gap-1"
                  >
                    <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-apex-muted">
                      {spec.label}
                    </span>
                    <span className="font-display text-2xl text-apex-cream">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
