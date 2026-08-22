"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle2, Quote } from "lucide-react";

export interface VerseCardItem {
  id: string;
  tag: string;
  title: string;
  content: string;
  author: string;
  role: string;
  color: string;
}

export function VerseCards({ items, className }: { items: VerseCardItem[]; className?: string }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextCard = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % items.length);
  };

  const prevCard = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + items.length) % items.length);
  };

  // Distinct Gradient Accents & Backgrounds for high visibility contrast across all layers
  const cardThemes = [
    {
      gradientBorder: "from-blue-600 via-indigo-500 to-cyan-400",
      cardBgFront: "bg-white dark:bg-slate-900",
      cardBgBack1: "bg-slate-100 dark:bg-slate-800",
      cardBgBack2: "bg-slate-200 dark:bg-slate-850",
      badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
      iconBg: "bg-blue-600 text-white",
      glow: "shadow-[0_25px_60px_rgba(37,99,235,0.18)]",
    },
    {
      gradientBorder: "from-emerald-600 via-teal-500 to-emerald-400",
      cardBgFront: "bg-white dark:bg-slate-900",
      cardBgBack1: "bg-slate-100 dark:bg-slate-800",
      cardBgBack2: "bg-slate-200 dark:bg-slate-850",
      badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
      iconBg: "bg-emerald-600 text-white",
      glow: "shadow-[0_25px_60px_rgba(16,185,129,0.18)]",
    },
    {
      gradientBorder: "from-purple-600 via-pink-500 to-amber-400",
      cardBgFront: "bg-white dark:bg-slate-900",
      cardBgBack1: "bg-slate-100 dark:bg-slate-800",
      cardBgBack2: "bg-slate-200 dark:bg-slate-850",
      badge: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30",
      iconBg: "bg-purple-600 text-white",
      glow: "shadow-[0_25px_60px_rgba(168,85,247,0.18)]",
    },
  ];

  return (
    <div className={cn("relative w-full max-w-2xl mx-auto flex flex-col items-center select-none space-y-8", className)}>
      {/* 3D Fan-Out Stacked Cards Stage */}
      <div className="relative w-full h-[330px] flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          {items.map((card, idx) => {
            const isCurrent = idx === activeIdx;
            const offset = (idx - activeIdx + items.length) % items.length;

            if (offset > 2) return null; // Render top 3 cards in stack

            const theme = cardThemes[idx % cardThemes.length];

            // Card background styling based on depth offset to ensure 100% visual contrast
            const bgClass =
              offset === 0
                ? "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                : offset === 1
                ? "bg-slate-100/95 dark:bg-slate-800/95 border-slate-300 dark:border-slate-700"
                : "bg-slate-200/90 dark:bg-slate-850/90 border-slate-400/50 dark:border-slate-650";

            return (
              <motion.div
                key={card.id}
                onClick={nextCard}
                initial={{ scale: 0.85, y: 40, opacity: 0, rotate: 0 }}
                animate={{
                  scale: 1 - offset * 0.05,
                  y: offset * 18,
                  rotate: offset === 1 ? 3 : offset === 2 ? -4 : 0,
                  zIndex: items.length - offset,
                  opacity: 1 - offset * 0.2,
                }}
                exit={{ scale: 0.8, y: -60, opacity: 0, rotate: -8 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "absolute inset-0 rounded-3xl p-[2px] cursor-pointer transition-all duration-300",
                  offset === 0 ? `bg-gradient-to-r ${theme.gradientBorder} ${theme.glow}` : "bg-slate-300 dark:bg-slate-700 shadow-md"
                )}
                style={{
                  transformOrigin: "bottom center",
                }}
              >
                <div
                  className={cn(
                    "w-full h-full p-6 sm:p-8 rounded-[22px] flex flex-col justify-between relative overflow-hidden backdrop-blur-xl",
                    bgClass
                  )}
                >
                  {/* Watermark Quote Icon */}
                  <Quote className="absolute -right-3 -bottom-3 w-28 h-28 text-slate-200/50 dark:text-slate-800/40 pointer-events-none z-0" />

                  <div className="relative z-10">
                    {/* Header Tag & Counter */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={cn("font-mono text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full border shadow-2xs flex items-center space-x-1.5", theme.badge)}>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{card.tag}</span>
                      </span>

                      <div className="flex items-center space-x-2 font-mono text-xs text-slate-500 dark:text-slate-400 font-bold">
                        <span className="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
                          {idx + 1} / {items.length}
                        </span>
                        <span className="text-blue-600 dark:text-blue-400 font-extrabold hidden sm:inline">Tap to flip &rarr;</span>
                      </div>
                    </div>

                    {/* Title & Testimonial Content */}
                    <h3 className="font-sans font-black text-xl sm:text-2xl text-slate-900 dark:text-white mb-3 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal italic relative pl-4 border-l-2 border-blue-500/60">
                      &ldquo;{card.content}&rdquo;
                    </p>
                  </div>

                  {/* Footer Author & Company Role */}
                  <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between relative z-10">
                    <div className="flex items-center space-x-3">
                      <div className={cn("w-10 h-10 rounded-full font-mono font-black text-sm flex items-center justify-center shadow-md", theme.iconBg)}>
                        {card.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-sans font-black text-sm text-slate-900 dark:text-white leading-none">
                          {card.author}
                        </h4>
                        <span className="font-mono text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-1 block">
                          {card.role}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold shadow-2xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Interactive Controls & Pagination Dots */}
      <div className="flex items-center space-x-4 pt-2 z-20">
        <button
          onClick={prevCard}
          className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-500 transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
          aria-label="Previous card"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Dots */}
        <div className="flex items-center space-x-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                i === activeIdx
                  ? "w-8 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-400 shadow-xs"
                  : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
              )}
              aria-label={`Go to card ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextCard}
          className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-500 transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
          aria-label="Next card"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
