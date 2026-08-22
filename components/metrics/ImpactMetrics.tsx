import React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { metricsData } from "@/data/metrics";
import { Counter } from "./Counter";

export function ImpactMetrics() {
  return (
    <section
      id="metrics"
      aria-label="Verified Impact Metrics"
      className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto border-t border-slate-200/80"
    >
      <div className="flex flex-col space-y-3 mb-12 text-center items-center">
        <Eyebrow>VERIFIED METRICS</Eyebrow>
        <h2 className="font-sans font-bold text-2xl md:text-3xl text-slate-900 tracking-tight">
          Quantifiable Results
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
        {metricsData.map((metric, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-3 pt-6 md:pt-0 md:px-6">
            <Counter
              value={metric.value}
              prefix={metric.prefix}
              suffix={metric.suffix}
            />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
              {metric.label}
            </span>
            <p className="font-sans text-sm text-slate-600 max-w-xs leading-relaxed">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
