"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Timeline" },
  { id: "contact", label: "Contact" },
];

export function ScrollProgressHUD() {
  const [activeSection, setActiveSection] = useState("hero");
  const [percent, setPercent] = useState(0);
  const [hovered, setHovered] = useState(false);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setPercent(Math.round(latest * 100));

      const scrollY = window.scrollY;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToSection = (id: string) => {
    const lenis = typeof window !== "undefined" ? (window as any).__lenis : null;
    const el = document.getElementById(id);
    if (el) {
      if (lenis) {
        lenis.scrollTo(el, { offset: -60, duration: 1.0 });
      } else {
        const top = el.getBoundingClientRect().top + window.scrollY - 60;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3 pointer-events-auto select-none"
      aria-label="Scroll Progress Timeline"
    >
      {/* ── Percentage Capsule ──────────────────────────────── */}
      <motion.div
        animate={{ opacity: hovered || percent > 5 ? 1 : 0.4 }}
        className="px-2 py-0.5 rounded-full bg-white/70 dark:bg-black/60 backdrop-blur-xl border border-white/80 dark:border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.08)] font-mono text-[10px] font-bold text-slate-800 dark:text-slate-200"
      >
        <span>{percent.toString().padStart(2, "0")}%</span>
      </motion.div>

      {/* ── Vertical Timeline Rail & Waypoint Dots ──────────── */}
      <div className="relative flex flex-col items-center py-2 px-1 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/70 dark:border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
        {/* Continuous Active Beam */}
        <div className="absolute top-2 bottom-2 w-[2px] bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            style={{ scaleY: smoothProgress, originY: 0 }}
            className="w-full h-full bg-gradient-to-b from-[#FF5500] via-[#FF6600] to-[#FF8800] rounded-full shadow-[0_0_8px_#FF6600]"
          />
        </div>

        {/* Section Waypoints */}
        <div className="flex flex-col gap-4 relative z-10">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;

            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="group relative flex items-center justify-end py-1 focus:outline-none"
                aria-label={`Scroll to ${sec.label}`}
              >
                {/* Hover Label Tooltip */}
                <span
                  className={`absolute right-6 px-2.5 py-1 rounded-lg font-mono text-[11px] font-bold tracking-wider uppercase transition-all duration-200 pointer-events-none whitespace-nowrap ${
                    hovered || isActive
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-2"
                  } ${
                    isActive
                      ? "bg-[#FF6600] text-white shadow-md shadow-[#FF6600]/30"
                      : "bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                  }`}
                >
                  {sec.label}
                </span>

                {/* Waypoint Dot */}
                <div
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-[#FF6600] scale-125 ring-4 ring-[#FF6600]/25 shadow-[0_0_8px_#FF6600]"
                      : "bg-slate-300 dark:bg-slate-700 hover:bg-[#FF6600]/70 hover:scale-110"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
