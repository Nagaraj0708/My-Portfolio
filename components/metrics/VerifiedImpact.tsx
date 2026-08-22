"use client";

import React, { useEffect, useState, useRef } from "react";
import { metricsData } from "@/data/metrics";

export function VerifiedImpact() {
  return (
    <section
      id="impact"
      aria-label="Verified Engineering Impact"
      className="py-10 md:py-14 px-4 md:px-8 max-w-6xl mx-auto border-t border-slate-200/80 dark:border-slate-800"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {metricsData.map((m, idx) => (
          <MetricCounter key={idx} metric={m} />
        ))}
      </div>
    </section>
  );
}

function MetricCounter({
  metric,
}: {
  metric: {
    label: string;
    value: number;
    prefix?: string;
    suffix?: string;
    description: string;
  };
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = metric.value;
          const duration = 1200;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [metric.value, hasAnimated]);

  return (
    <div
      ref={ref}
      className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs flex flex-col space-y-2 text-center"
    >
      <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
        {metric.label}
      </span>

      <span className="font-sans font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
        {metric.prefix}
        {count}
        {metric.suffix}
      </span>

      <p className="font-sans text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {metric.description}
      </p>
    </div>
  );
}
