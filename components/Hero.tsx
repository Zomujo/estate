"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const ticker = [
  "Excellence",
  "·",
  "Integrity",
  "·",
  "Craftsmanship",
  "·",
  "Innovation",
  "·",
  "Excellence",
  "·",
  "Integrity",
  "·",
  "Craftsmanship",
  "·",
  "Innovation",
  "·",
];

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Slight zoom-out on the background image on load
      tl.fromTo(
        imgRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 2.2, ease: "power2.out" },
        0
      );

      // Overlay fades from fully black to partial on load
      tl.fromTo(
        overlayRef.current,
        { opacity: 1 },
        { opacity: 0, duration: 1.6, ease: "power2.inOut" },
        0
      );

      // Headline words stagger up
      const words = headlineRef.current?.querySelectorAll("span");
      if (words) {
        tl.fromTo(
          words,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 1 },
          0.6
        );
      }

      // Sub-headline fades in
      tl.fromTo(
        subRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        1.2
      );

      // CTA buttons fade in
      tl.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        1.5
      );
    });

    return () => ctx.revert();
  }, []);

  const headlineWords = ["Building", "Tomorrow's", "Ghana,", "Today."];

  return (
    <section id="home" className="relative w-full h-screen min-h-[680px] flex flex-col justify-center overflow-hidden">
      {/* Background image with parallax container */}
      <div ref={imgRef} className="absolute inset-0 w-full h-full">
        <Image
          src="/hero-bg.jpg"
          alt="Zabelo Builders Hero"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {/* Permanent dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-apex-black/90 via-apex-black/60 to-apex-black/20" />
      <div className="absolute inset-0 bg-linear-to-t from-apex-black via-transparent to-apex-black/30" />

      {/* Load-in black overlay that fades out */}
      <div ref={overlayRef} className="absolute inset-0 bg-apex-black pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-20 pt-20 md:pt-24">
        {/* Eyebrow label */}
        <p className="font-sans text-xs tracking-[0.4em] uppercase text-apex-gold mb-6">
          Real Estate · Construction · Ghana
        </p>

        {/* Headline — each word is wrapped in a span for staggered animation */}
        <h1
          ref={headlineRef}
          className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[6.5rem] text-apex-cream leading-none mb-5 md:mb-8 max-w-4xl"
        >
          {headlineWords.map((word, i) => (
            <span
              key={i}
              className="inline-block mr-[0.2em] opacity-0"
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Sub-headline */}
        <p
          ref={subRef}
          className="font-sans text-sm md:text-lg text-apex-cream/75 leading-relaxed max-w-xl mb-6 md:mb-10 opacity-0"
        >
          From visionary real estate development to world-class construction
          execution, Zabelo Builders delivers excellence, integrity, and
          lasting value across Ghana.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row flex-wrap gap-3 opacity-0">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 bg-apex-gold text-apex-black font-sans text-sm tracking-widest uppercase px-8 py-4 hover:bg-apex-gold-light transition-colors duration-300 w-full sm:w-auto"
          >
            View Our Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border border-apex-cream/30 text-apex-cream font-sans text-sm tracking-widest uppercase px-8 py-4 hover:border-apex-cream hover:bg-apex-cream/5 transition-all duration-300 w-full sm:w-auto"
          >
            Speak to an Expert
          </a>
        </div>
      </div>

      {/* Scroll indicator — hidden on mobile to avoid overlapping CTA buttons */}
      <div className="absolute bottom-24 left-6 z-10 hidden md:flex items-center gap-3">
        <div className="w-px h-12 bg-apex-gold/40 relative overflow-hidden">
          <div className="absolute top-0 w-full bg-apex-gold animate-[scrollLine_1.8s_ease-in-out_infinite]" style={{ height: "40%" }} />
        </div>
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-apex-muted rotate-0">
          Scroll
        </span>
      </div>

      {/* Bottom ticker strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-apex-border/50 bg-apex-black/60 backdrop-blur-sm overflow-hidden py-3">
        <div className="flex animate-[ticker_30s_linear_infinite] whitespace-nowrap w-max">
          {[...ticker, ...ticker].map((word, i) => (
            <span
              key={i}
              className={`font-sans text-xs tracking-[0.3em] uppercase px-4 ${
                word === "·" ? "text-apex-gold" : "text-apex-muted"
              }`}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
