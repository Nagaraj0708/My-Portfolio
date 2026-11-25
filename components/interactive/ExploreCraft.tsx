"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, Move, RefreshCw } from "lucide-react";

interface CraftTag {
  id: string;
  name: string;
  category: string;
  colorClass: string;
  darkColorClass: string;
  initialX: number;
  initialY: number;
}

const craftTags: CraftTag[] = [
  { id: "1", name: "Angular 14+", category: "Frontend Engine", colorClass: "bg-blue-600 text-white", darkColorClass: "dark:bg-blue-500 dark:text-white", initialX: 0, initialY: 0 },
  { id: "2", name: "TypeScript", category: "Strict Typing", colorClass: "bg-indigo-600 text-white", darkColorClass: "dark:bg-indigo-500 dark:text-white", initialX: 120, initialY: -40 },
  { id: "3", name: "ASP.NET Core API", category: "Backend Micro-Services", colorClass: "bg-purple-600 text-white", darkColorClass: "dark:bg-purple-500 dark:text-white", initialX: -140, initialY: 30 },
  { id: "4", name: "RxJS Pipelines", category: "Reactive State", colorClass: "bg-pink-600 text-white", darkColorClass: "dark:bg-pink-500 dark:text-white", initialX: 160, initialY: 50 },
  { id: "5", name: "SQL Server", category: "Relational Schema", colorClass: "bg-cyan-600 text-white", darkColorClass: "dark:bg-cyan-500 dark:text-white", initialX: -110, initialY: -50 },
  { id: "6", name: "UI Engineering", category: "Pixel-Perfect Layouts", colorClass: "bg-emerald-600 text-white", darkColorClass: "dark:bg-emerald-500 dark:text-white", initialX: 50, initialY: 70 },
  { id: "7", name: "Azure DevOps", category: "CI/CD Pipelines", colorClass: "bg-slate-900 text-white", darkColorClass: "dark:bg-slate-100 dark:text-slate-900", initialX: -60, initialY: 80 },
];

export function ExploreCraft() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="craft"
      aria-label="Explore My Craft Interactive Canvas"
      className="py-10 md:py-14 px-4 md:px-8 max-w-6xl mx-auto border-t border-slate-200/80 dark:border-slate-800 overflow-hidden"
    >
      <div className="flex flex-col items-center text-center space-y-4 mb-12 max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-2 font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-800">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SIGNATURE ELASTIC INTERACTION</span>
        </div>

        <h2 className="font-sans font-extrabold text-3xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
          EXPLORE MY CRAFT
        </h2>

        <p className="font-sans text-base md:text-lg text-slate-600 dark:text-slate-300">
          Drag and pull the interactive technology modules below to experience physical elastic spring dynamics.
        </p>
      </div>

      {/* Interactive Elastic Canvas Stage */}
      <div
        ref={constraintsRef}
        data-cursor="drag"
        className="relative w-full h-[360px] md:h-[420px] rounded-3xl bg-slate-100/70 dark:bg-slate-900/80 border-2 border-dashed border-slate-300 dark:border-slate-800 p-8 flex items-center justify-center overflow-hidden shadow-inner group"
      >
        {/* Subtle Background Guide Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        {/* Center Hint Prompt */}
        <div className="flex flex-col items-center space-y-2 text-slate-400 dark:text-slate-500 pointer-events-none select-none z-0 opacity-75 group-hover:opacity-100 transition-opacity">
          <Move className="w-8 h-8 animate-pulse text-blue-500" />
          <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            PULL &amp; RELEASE MODULES
          </span>
        </div>

        {/* Floating Draggable Elastic Cards */}
        {craftTags.map((tag) => (
          <motion.div
            key={tag.id}
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.4}
            dragTransition={{ bounceStiffness: 400, bounceDamping: 18 }}
            whileDrag={{ scale: 1.1, zIndex: 50, cursor: "grabbing" }}
            whileHover={{ scale: 1.05, zIndex: 40 }}
            initial={{
              x: isMobile ? tag.initialX * 0.45 : tag.initialX,
              y: isMobile ? tag.initialY * 0.65 : tag.initialY,
            }}
            className={`absolute cursor-grab select-none px-3.5 py-2 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl flex flex-col space-y-0.5 border border-white/20 transition-shadow ${tag.colorClass} ${tag.darkColorClass}`}
          >
            <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest font-black opacity-80">
              {tag.category}
            </span>
            <span className="font-sans font-extrabold text-xs sm:text-sm md:text-base tracking-tight">
              {tag.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
