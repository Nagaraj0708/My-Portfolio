import React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function BeyondTheCode() {
  return (
    <section
      id="beyond"
      aria-label="Beyond the Code"
      className="py-16 md:py-24 px-4 md:px-8 max-w-5xl mx-auto border-t border-slate-200/80"
    >
      <div className="flex flex-col space-y-3 mb-10">
        <Eyebrow>ACHIEVEMENTS &amp; SIGNALS</Eyebrow>
        <h2 className="font-sans font-bold text-2xl md:text-3xl text-slate-900 tracking-tight">
          Beyond the Code
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-200 pt-8">
        {/* Leadership */}
        <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col space-y-2">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-wider">
            01. LEADERSHIP &amp; RECOGNITION
          </span>
          <h3 className="font-sans font-bold text-lg text-slate-900">
            Dual Promotions at Foxconn
          </h3>
          <p className="font-sans text-sm text-slate-600 leading-relaxed">
            Earned two promotions within the first year for leadership, team accountability, and driving $20K+ in operational efficiency on the iPhone 11 production line.
          </p>
        </div>

        {/* Cricket */}
        <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col space-y-2">
          <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-wider">
            02. ATHLETIC DISCIPLINE
          </span>
          <h3 className="font-sans font-bold text-lg text-slate-900">
            2nd Division TNCA Cricket
          </h3>
          <p className="font-sans text-sm text-slate-600 leading-relaxed">
            Represented 2nd Division TNCA in competitive cricket—cultivating high-pressure decision making, focus, and team collaboration under competition.
          </p>
        </div>
      </div>
    </section>
  );
}
