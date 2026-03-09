"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "Integrity",
    desc: "Absolute transparency in pricing, land documentation, and project reporting.",
  },
  {
    title: "Innovation",
    desc: "Utilizing modern technology and sustainable building practices.",
  },
  {
    title: "Craftsmanship",
    desc: "Paying attention to the smallest details for a flawless finish.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { scale: 1.06 },
        {
          scale: 1,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: imgRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: contentRef.current, start: "top 75%" },
        }
      );

      const cards = valuesRef.current?.querySelectorAll(".value-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: valuesRef.current, start: "top 75%" },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="bg-apex-dark border-t border-apex-border scroll-mt-20">
      {/* Top — full width image with story overlay */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div ref={imgRef} className="absolute inset-0 w-full h-full">
          <Image
            src="/about-bg.jpg"
            alt="About Zabelo Builders"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-apex-black/95 via-apex-black/70 to-apex-black/20" />
        <div className="absolute inset-0 bg-linear-to-t from-apex-dark via-transparent to-transparent" />

        {/* Story content */}
        <div ref={contentRef} className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-10 md:px-20 w-full grid md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center gap-6">
              <p className="font-sans text-xs tracking-[0.4em] uppercase text-apex-gold">
                Our Story
              </p>
              <h2 className="font-display text-5xl md:text-6xl text-apex-cream leading-tight">
                Building Trust Since Day One.
              </h2>
              <p className="font-sans text-sm text-apex-muted leading-relaxed max-w-md">
                Zabelo Builders was founded with a singular vision: to elevate
                the standard of construction and real estate in Ghana. Our team
                of expert engineers, architects, and project managers combines
                deep local knowledge with global best practices to deliver
                spaces that are innovative, sustainable, and structurally
                flawless.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="hidden md:flex flex-col justify-center gap-8">
              <div className="border-l-2 border-apex-gold pl-6">
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-apex-gold mb-2">
                  Mission
                </p>
                <p className="font-sans text-sm text-apex-muted leading-relaxed">
                  To deliver innovative, high-quality, and sustainable real
                  estate and construction solutions that enhance the structural
                  landscape of Ghana and provide unparalleled value to our
                  clients.
                </p>
              </div>
              <div className="border-l-2 border-apex-gold/30 pl-6">
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-apex-gold mb-2">
                  Vision
                </p>
                <p className="font-sans text-sm text-apex-muted leading-relaxed">
                  To be the premier real estate and construction firm in West
                  Africa, recognized for our integrity, architectural
                  brilliance, and commitment to community development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom — Core Values */}
      <div ref={valuesRef} className="max-w-6xl mx-auto px-10 md:px-20 py-20">
        <p className="font-sans text-xs tracking-[0.4em] uppercase text-apex-gold mb-12">
          Core Values
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-apex-border">
          {values.map((val) => (
            <div
              key={val.title}
              className="value-card bg-apex-dark p-10 flex flex-col gap-4 group"
            >
              <div className="w-8 h-px bg-apex-gold group-hover:w-16 transition-all duration-500" />
              <h3 className="font-display text-3xl text-apex-cream">
                {val.title}
              </h3>
              <p className="font-sans text-sm text-apex-muted leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
