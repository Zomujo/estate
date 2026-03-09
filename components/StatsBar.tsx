"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 200, suffix: "+", label: "Families Housed" },
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 100, suffix: "%", label: "Litigation-Free Titles" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-apex-dark border-y border-apex-border">
      <div className="max-w-6xl mx-auto px-10 md:px-20 py-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-apex-border">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-apex-dark flex flex-col items-center justify-center py-10 px-6 gap-2 group"
          >
            <span className="font-display text-5xl md:text-6xl text-apex-gold">
              <Counter target={stat.value} suffix={stat.suffix} />
            </span>
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-apex-muted text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
