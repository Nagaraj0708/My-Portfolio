import React from "react";
import { Trophy, Award } from "lucide-react";

export function Achievements() {
  return (
    <section
      id="achievements"
      aria-label="Beyond Development Achievements"
      className="py-10 md:py-14 px-4 md:px-8 max-w-6xl mx-auto border-t border-slate-200/80 dark:border-slate-800"
    >
      <div className="flex flex-col space-y-3 mb-12 max-w-2xl">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          BEYOND DEVELOPMENT
        </span>
        <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight">
          Leadership &amp; Distinction
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Highlight 1: Dual Promotions at Foxconn */}
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col space-y-4">
          <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 w-fit border border-blue-200 dark:border-blue-800">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-sans font-bold text-xl text-slate-900 dark:text-white">
            Dual Leadership Promotions
          </h3>
          <p className="font-sans text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Earned dual promotions within the first year at Foxconn Pvt Ltd for demonstrating continuous process improvement, team leadership, and driving $20K in manufacturing line efficiency gains.
          </p>
        </div>

        {/* Highlight 2: TNCA 2nd Division Cricket */}
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col space-y-4">
          <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 w-fit border border-emerald-200 dark:border-emerald-800">
            <Trophy className="w-6 h-6" />
          </div>
          <h3 className="font-sans font-bold text-xl text-slate-900 dark:text-white">
            2nd Division TNCA Cricket
          </h3>
          <p className="font-sans text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Represented 2nd Division TNCA (Tamil Nadu Cricket Association) in competitive cricket, reinforcing team discipline, strategic focus under pressure, and long-term athletic commitment.
          </p>
        </div>
      </div>
    </section>
  );
}
