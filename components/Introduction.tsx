"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Introduction() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line draws itself in
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Label
      gsap.fromTo(
        labelRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Headline
      gsap.fromTo(
        headlineRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );

      // Body
      gsap.fromTo(
        bodyRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );

      // Decorative number
      gsap.fromTo(
        decorRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-apex-black py-28 md:py-36 overflow-hidden">
      <div className="max-w-6xl mx-auto px-10 md:px-20 grid md:grid-cols-2 gap-16 md:gap-24 items-center">

        {/* Left — decorative element */}
        <div className="relative flex items-center justify-center md:justify-start">
          <div ref={decorRef} className="relative">
            <span className="font-display text-[160px] md:text-[220px] leading-none text-apex-dark-2 select-none pointer-events-none">
              01
            </span>
            <div className="absolute inset-0 flex items-center justify-center md:justify-start pl-0 md:pl-8">
              <p className="font-display text-2xl md:text-3xl text-apex-gold italic max-w-[200px] leading-snug">
                More than buildings.
              </p>
            </div>
          </div>
        </div>

        {/* Right — copy */}
        <div className="flex flex-col gap-6">
          {/* Line draw */}
          <div
            ref={lineRef}
            className="h-px bg-apex-gold w-16"
            style={{ transform: "scaleX(0)", transformOrigin: "left" }}
          />

          <p ref={labelRef} className="font-sans text-xs tracking-[0.4em] uppercase text-apex-gold">
            Who We Are
          </p>

          <h2 ref={headlineRef} className="font-display text-5xl md:text-6xl text-apex-cream leading-tight">
            Excellence in Every Square Meter.
          </h2>

          <p ref={bodyRef} className="font-sans text-base text-apex-cream/75 leading-relaxed">
            At Zabelo Builders, we do more than construct buildings — we create
            the spaces where life and business thrive. Whether you are looking for
            your dream home in Accra, a commercial hub in Kumasi, or a trusted
            partner for a large-scale civil engineering project, our commitment to
            quality, transparency, and modern design sets us apart in the Ghanaian
            market.
          </p>

          <a
            href="#about"
            className="inline-flex items-center gap-3 font-sans text-sm tracking-widest uppercase text-apex-gold hover:gap-5 transition-all duration-300 mt-2 group"
          >
            Our Story
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
      </div>
    </section>
  );
}
