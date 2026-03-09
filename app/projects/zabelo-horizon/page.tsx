"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const rationales = [
  {
    title: "1. The Infrastructure Catalyst",
    desc: "The government’s \"Big Push\" is opening the Nsawam-Accra belt into a seamless commuter zone. Current 2-hour travel times are projected to drop significantly as new interchanges and highway expansions complete. You are buying in before the price surge.",
  },
  {
    title: "2. Strategic Land Banking",
    desc: "Real estate is about timing. By securing a plot at The Zabelo Horizon today, you are positioning yourself in a high-growth corridor. As the roads open up, land values in this \"Commuter Belt\" are expected to appreciate by 50-70% within the next 36 months.",
  },
  {
    title: "3. Professional-Grade Security",
    desc: "We are creating a sanctuary. The project is a fully gated estate with 24/7 perimeter security, ensuring that \"Peace of Mind\" is a standard feature, not an upgrade.",
  },
];

const specs = [
  { label: "Total Plots", value: "50+ Premium Plots" },
  { label: "Plot Dimensions", value: "100ft × 70ft (Standard Full Plot)" },
  { label: "Legal Status", value: "Fully Titled Land (Registration Guaranteed)" },
  { label: "Development Type", value: "Gated Estate Community" },
  { label: "Internal Roads", value: "Master-Planned & Demarcated" },
  { label: "Utilities", value: "Solar-Grid Provisioned, Independent Water" },
];

const faqs = [
  {
    q: "Is the land truly \"Litigation-Free\"?",
    a: "At Zabelo Builders, our reputation is our greatest asset. Every plot in The Horizon has undergone a triple-point verification process through the Lands Commission and local traditional authorities. Your purchase is backed by a 100% legal guarantee.",
  },
  {
    q: "Nsawam feels far from my office in Accra. Why move there?",
    a: "Consider the \"Satellite City\" model. Just as professionals in the USA live in New Jersey to work in Manhattan, Nsawam is becoming Accra's premium suburb. With the current road expansions, your commute will soon be faster and smoother than many cross-city Accra routes—all while living in a cleaner, greener environment.",
  },
  {
    q: "What infrastructure will the estate provide?",
    a: "Unlike traditional \"land sales,\" Zabelo is building a community. We provide demarcated internal roads, a secure gated entrance, and a planned layout for utility connections (Electricity and Water), saving you the headache of basic infrastructure setup.",
  },
  {
    q: "Can I pay in installments?",
    a: "Yes. We offer structured payment plans tailored to your monthly cash flow. Our goal is to move you from \"Renter\" to \"Owner\" without financial strain.",
  },
];

export default function ZabeloHorizonProject() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  // For FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo(
        heroRef.current,
        { scale: 1.05 },
        { scale: 1, duration: 2, ease: "power2.out" }
      );
      
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
      );

      gsap.fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.6, ease: "power3.out" }
      );

      // Scroll animations for sections
      gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-apex-black selection:bg-apex-gold/30 selection:text-apex-cream text-apex-cream">
      <Navbar />

      {/* I. Hero Section (The Vision) */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div ref={heroRef} className="absolute inset-0 w-full h-full">
          <Image
            src="/nsawam-bg.jpg"
            alt="The Zabelo Horizon Nsawam"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-apex-black/80 via-apex-black/50 to-apex-black" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-10 md:px-20 text-center mt-20">
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-apex-gold mb-6">
            The Zabelo Horizon: Nsawam
          </p>
          <h1 ref={titleRef} className="font-display text-5xl md:text-7xl leading-tight mb-8">
            Secure Your Future in Ghana’s Next Great Commuter Corridor.
          </h1>
          <p ref={textRef} className="font-sans text-lg text-apex-muted leading-relaxed max-w-2xl mx-auto mb-10">
            Accra is expanding, and the smart capital is moving North. The Zabelo Horizon is a master-planned gated community of 50+ premium plots engineered for the young Ghanaian professional.
          </p>
          <a
            href="#contact-sales"
            className="inline-flex items-center gap-2 bg-apex-gold text-apex-black font-sans text-sm tracking-widest uppercase px-8 py-4 hover:bg-apex-gold-light transition-colors duration-300"
          >
            Secure Your Plot
          </a>
        </div>
      </section>

      {/* II. Strategic Rationale — Cinematic Intro */}
      <section className="border-t border-apex-border">
        {/* Full-width cinematic image banner */}
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <div className="absolute inset-0 w-full h-full fade-up">
            <Image
              src="/nsawam_road.png"
              alt="Nsawam Road Infrastructure"
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-apex-black/90 via-apex-black/60 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-apex-dark via-transparent to-apex-black/40" />
          
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-6xl mx-auto px-10 md:px-20 w-full">
              <p className="font-sans text-xs tracking-[0.4em] uppercase text-apex-gold mb-4 fade-up">
                Strategic Rationale
              </p>
              <h2 className="font-display text-5xl md:text-7xl text-apex-cream leading-tight max-w-2xl fade-up">
                Why Nsawam?<br />Why Now?
              </h2>
              <p className="font-sans text-base text-apex-muted leading-relaxed max-w-lg mt-6 fade-up">
                Under the President&apos;s Infrastructure Agenda, the Nsawam belt is undergoing a radical transformation. It is no longer a distance—it is the future.
              </p>
            </div>
          </div>
        </div>

        {/* Staggered rationale cards */}
        <div className="bg-apex-dark py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-10 md:px-20">
            <div className="flex flex-col gap-0">
              {rationales.map((item, i) => (
                <div 
                  key={i} 
                  className={`fade-up grid md:grid-cols-12 gap-8 py-12 border-b border-apex-border ${
                    i === 0 ? "border-t border-apex-border" : ""
                  }`}
                >
                  {/* Number */}
                  <div className="md:col-span-2">
                    <span className="font-display text-6xl text-apex-gold/20">
                      0{i + 1}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <div className="md:col-span-4 flex items-start">
                    <h3 className="font-display text-2xl md:text-3xl text-apex-cream leading-snug">
                      {item.title.replace(/^\d+\.\s*/, "")}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <div className="md:col-span-6 flex items-start">
                    <p className="font-sans text-sm text-apex-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* III & IV. Specs & Financials */}
      <section className="py-24 md:py-32 border-t border-apex-border">
        <div className="max-w-6xl mx-auto px-10 md:px-20 grid md:grid-cols-2 gap-20">
          
          {/* Specifications */}
          <div className="fade-up">
            <h2 className="font-display text-4xl mb-10">Project Specifications</h2>
            <div className="flex flex-col gap-6">
              {specs.map((spec, i) => (
                <div key={i} className="flex flex-col gap-1 border-b border-apex-border pb-6">
                  <span className="font-sans text-xs tracking-[0.2em] uppercase text-apex-gold">
                    {spec.label}
                  </span>
                  <span className="font-sans text-lg text-apex-cream">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Financials */}
          <div className="fade-up bg-apex-dark p-10 md:p-14 border border-apex-border flex flex-col justify-center">
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-apex-gold mb-4">
              The Financial Structure
            </p>
            <h2 className="font-display text-4xl mb-6">Luxury Within Reach.</h2>
            <p className="font-sans text-apex-muted leading-relaxed mb-10">
              We believe that professional success should be rewarded with homeownership. We have stripped away the predatory pricing of central Accra to offer a high-value entry point.
            </p>
            
            <div className="bg-apex-black p-8 border border-apex-gold/20 mb-8">
              <span className="block font-sans text-xs tracking-[0.2em] uppercase text-apex-gold mb-2">
                Investment Entry
              </span>
              <span className="font-display text-4xl md:text-5xl text-apex-cream">
                <span className="text-2xl text-apex-muted mr-2">GHS</span>
                85,000<span className="text-xl text-apex-muted"> - 95,000</span>
              </span>
            </div>

            <ul className="flex flex-col gap-4 font-sans text-sm text-apex-muted">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-apex-gold mt-2 shrink-0" />
                <span><strong className="text-apex-cream font-medium">Flexible Financing:</strong> Bespoke payment structures designed for young professionals.</span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-apex-gold mt-2 shrink-0" />
                <span><strong className="text-apex-cream font-medium">Title Assurance:</strong> No litigation. No hidden fees. Every plot comes with a verified, traceable title.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Visual Break */}
        <div className="max-w-6xl mx-auto px-10 md:px-20 mt-20 md:mt-32 fade-up">
           <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden border border-apex-gold/20">
             <div className="absolute inset-0 w-full h-full">
               <Image
                 src="/zabelo_gated.png"
                 alt="Zabelo Builders Gated Community"
                 fill
                 sizes="(max-width: 768px) 100vw, 1152px"
                 style={{ objectFit: "cover", objectPosition: "center" }}
               />
             </div>
             <div className="absolute inset-0 bg-linear-to-t from-apex-black/80 to-transparent" />
             <div className="absolute bottom-10 left-10">
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-apex-gold mb-2">
                  Artist Impression
                </p>
                <p className="font-display text-2xl text-apex-cream">
                  The Platinum Gates
                </p>
             </div>
           </div>
        </div>
      </section>

      {/* V. FAQS */}
      <section className="py-24 md:py-32 border-t border-apex-border bg-apex-dark">
        <div className="max-w-4xl mx-auto px-10 md:px-20 fade-up">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl mb-4">Everything You Need to Know</h2>
            <p className="font-sans text-apex-muted">Common questions about The Zabelo Horizon.</p>
          </div>

          <div className="flex flex-col border-t border-apex-border">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-apex-border">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left py-8 flex items-center justify-between group"
                >
                  <span className="font-display text-xl md:text-2xl text-apex-cream group-hover:text-apex-gold transition-colors pr-8">
                    {faq.q}
                  </span>
                  <span className={`text-apex-gold transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === i ? "max-h-60 opacity-100 pb-8" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-sans text-apex-muted leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VI. CTA */}
      <section id="contact-sales" className="py-32 bg-apex-black border-t border-apex-border text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-apex-gold/5" />
        <div className="max-w-3xl mx-auto px-10 relative z-10 fade-up">
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-apex-gold mb-6">
            Limited Availability
          </p>
          <h2 className="font-display text-5xl md:text-7xl mb-8">Secure Your Plot Today.</h2>
          <p className="font-sans text-lg text-apex-muted leading-relaxed mb-12">
            The Zabelo Horizon is limited to 50 professionals. This is an invitation to be part of an elite group of early-stage investors in Ghana’s newest commuter hub.
          </p>
          <a
            href="mailto:admin@zabelobuilders.com?subject=Inquiry: The Zabelo Horizon"
            className="inline-flex items-center gap-2 bg-apex-gold text-apex-black font-sans text-sm tracking-widest uppercase px-10 py-5 hover:bg-apex-cream transition-colors duration-300"
          >
            Contact Sales Team
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
