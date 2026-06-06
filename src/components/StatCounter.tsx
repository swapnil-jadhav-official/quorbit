"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  number: string; // e.g. "3×", "140%", "$94K", "31%"
  label: string;
  sub: string;
}

function parse(raw: string): { prefix: string; value: number; suffix: string } {
  const prefix = raw.startsWith("$") ? "$" : "";
  const stripped = raw.replace("$", "");
  const suffix = stripped.replace(/[0-9.]/g, "");
  const value = parseFloat(stripped.replace(/[^0-9.]/g, "")) || 0;
  return { prefix, value, suffix };
}

export default function StatCounter({ number, label, sub }: Props) {
  const { prefix, value, suffix } = parse(number);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1400;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <div ref={ref} className="px-5 py-8 sm:px-8 sm:py-10 flex flex-col gap-1.5">
      <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-yellow leading-none tracking-tight tabular-nums">
        {prefix}{display}{suffix}
      </span>
      <span className="text-xs font-semibold text-ice leading-snug mt-1">{label}</span>
      <span className="text-xs text-ice-muted">{sub}</span>
    </div>
  );
}
