import React from "react";
import { Trophy, Award, Sparkles, Star } from "lucide-react";

export function Achievements() {
  return (
    <section
      id="achievements"
      aria-label="Beyond Development Achievements"
      className="py-16 md:py-20 px-4 md:px-8 max-w-6xl mx-auto border-t border-neutral-200/80 dark:border-white/10"
    >
      <div className="flex flex-col space-y-3 mb-12 max-w-2xl text-left">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/25 w-fit">
          <Star className="w-3.5 h-3.5 text-[#FF6600]" />
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#FF6600]">
            HONORS &amp; DISTINCTIONS
          </span>
        </div>
        <h2 className="font-sans font-black text-3xl md:text-4xl text-neutral-900 dark:text-white tracking-tight">
          Performance &amp; Leadership Distinction
        </h2>
        <p className="font-sans text-sm md:text-base text-neutral-600 dark:text-neutral-400">
          Verifiable career milestones, organizational honors, and athletic discipline that drive real-world engineering excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        
        {/* Highlight 1: Rising Star Award (Current Company) */}
        <div className="p-7 rounded-3xl bg-gradient-to-br from-amber-500/10 via-white to-amber-500/5 dark:from-amber-500/10 dark:via-[#0B0F17] dark:to-transparent border border-amber-500/30 dark:border-amber-500/25 shadow-lg shadow-amber-500/5 flex flex-col justify-between space-y-4 hover:border-amber-500/50 transition-all select-none group text-left">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-amber-500/15 text-amber-500 border border-amber-500/30 group-hover:scale-105 transition-transform shadow-xs">
                <Sparkles className="w-6 h-6 text-amber-500" />
              </div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/15 px-2.5 py-0.5 rounded-full">
                Recent Award
              </span>
            </div>
            <div>
              <h3 className="font-sans font-black text-lg text-neutral-900 dark:text-white leading-tight">
                Rising Star Award
              </h3>
              <span className="font-mono text-xs font-semibold text-[#FF6600] block mt-0.5">
                I-Net Secure Labs
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
              Awarded the prestigious <strong className="text-amber-600 dark:text-amber-400 font-bold">Rising Star Award</strong> in recognition of outstanding individual performance, rapid enterprise SPA delivery, and engineering velocity.
            </p>
          </div>
          <div className="pt-3 border-t border-amber-500/15 font-mono text-[10px] text-amber-600 dark:text-amber-400 font-bold">
            &bull; Enterprise Performance Excellence
          </div>
        </div>

        {/* Highlight 2: Dual Promotions at Foxconn */}
        <div className="p-7 rounded-3xl bg-white/80 dark:bg-[#0B0F17]/85 border border-neutral-200/90 dark:border-white/10 shadow-sm flex flex-col justify-between space-y-4 hover:border-[#FF6600]/40 transition-all select-none group text-left">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-[#FF6600]/10 text-[#FF6600] border border-[#FF6600]/25 group-hover:scale-105 transition-transform shadow-xs">
                <Award className="w-6 h-6 text-[#FF6600]" />
              </div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-white/5 px-2.5 py-0.5 rounded-full">
                Manufacturing
              </span>
            </div>
            <div>
              <h3 className="font-sans font-black text-lg text-neutral-900 dark:text-white leading-tight">
                Dual Leadership Promotions
              </h3>
              <span className="font-mono text-xs font-semibold text-[#FF6600] block mt-0.5">
                Foxconn Technology Group
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
              Earned dual promotions within the first year at Foxconn for driving continuous Kaizen quality improvements, cross-functional leadership, and $20,000+ in production line yield efficiency.
            </p>
          </div>
          <div className="pt-3 border-t border-neutral-100 dark:border-white/5 font-mono text-[10px] text-neutral-500 dark:text-neutral-400 font-bold">
            &bull; $20,000+ Production Cost Saved
          </div>
        </div>

        {/* Highlight 3: TNCA 2nd Division Cricket */}
        <div className="p-7 rounded-3xl bg-white/80 dark:bg-[#0B0F17]/85 border border-neutral-200/90 dark:border-white/10 shadow-sm flex flex-col justify-between space-y-4 hover:border-emerald-500/40 transition-all select-none group text-left">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/25 group-hover:scale-105 transition-transform shadow-xs">
                <Trophy className="w-6 h-6 text-emerald-500" />
              </div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                Athletics
              </span>
            </div>
            <div>
              <h3 className="font-sans font-black text-lg text-neutral-900 dark:text-white leading-tight">
                2nd Division TNCA Cricket
              </h3>
              <span className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400 block mt-0.5">
                Tamil Nadu Cricket Association
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
              Competed in 2nd Division TNCA state-level cricket, instilling relentless mental focus, high-stakes tactical decision-making, and athletic discipline under high-pressure environments.
            </p>
          </div>
          <div className="pt-3 border-t border-neutral-100 dark:border-white/5 font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
            &bull; State Competitive Discipline
          </div>
        </div>

      </div>
    </section>
  );
}
