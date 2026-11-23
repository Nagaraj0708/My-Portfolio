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

const cardThemes = [
  {
    gradientBorder: "from-[#FF6600] via-[#FF8533] to-[#FFA04D]",
    badge: "bg-[#FF6600]/10 text-[#FF6600] border-[#FF6600]/30",
    iconBg: "bg-[#FF6600] text-white",
    glow: "shadow-[0_25px_60px_rgba(255,102,0,0.22)]",
    verified: "text-[#FF6600] bg-[#FF6600]/10 border-[#FF6600]/25",
  },
  {
    gradientBorder: "from-emerald-500 via-teal-400 to-cyan-400",
    badge: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
    iconBg: "bg-emerald-500 text-white",
    glow: "shadow-[0_25px_60px_rgba(16,185,129,0.22)]",
    verified: "text-emerald-500 bg-emerald-500/10 border-emerald-500/25",
  },
  {
    gradientBorder: "from-amber-500 via-orange-400 to-amber-300",
    badge: "bg-amber-500/10 text-amber-500 border-amber-500/30",
    iconBg: "bg-amber-500 text-white",
    glow: "shadow-[0_25px_60px_rgba(245,158,11,0.22)]",
    verified: "text-amber-500 bg-amber-500/10 border-amber-500/25",
  },
];

function CardInner({
  card,
  idx,
  total,
  theme,
  isTop,
}: {
  card: VerseCardItem;
  idx: number;
  total: number;
  theme: (typeof cardThemes)[0];
  isTop: boolean;
}) {
  return (
    <div
      className={cn(
        "w-full h-full p-6 sm:p-8 rounded-[22px] flex flex-col justify-between relative overflow-hidden backdrop-blur-xl text-left select-none",
        isTop
          ? "bg-white dark:bg-[#0B0F17] border-neutral-200 dark:border-white/15"
          : "bg-neutral-100/95 dark:bg-[#070A12]/95 border-neutral-300 dark:border-white/10"
      )}
    >
      {/* Subtle Watermark Quote Icon */}
      <Quote className="absolute -right-3 -bottom-3 w-28 h-28 text-neutral-200/40 dark:text-white/5 pointer-events-none z-0" />

      <div className="relative z-10">
        {/* Header Tag & Counter */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={cn(
              "font-mono text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border shadow-2xs flex items-center space-x-1.5",
              theme.badge
            )}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{card.tag}</span>
          </span>

          <div className="flex items-center space-x-2 font-mono text-xs text-neutral-500 dark:text-neutral-400 font-bold">
            <span className="bg-neutral-100 dark:bg-white/10 px-2.5 py-1 rounded-lg border border-neutral-200 dark:border-white/10">
              {idx + 1} / {total}
            </span>
            {isTop && (
              <span className="text-[#FF6600] font-extrabold hidden sm:inline">
                Tap or swipe &rarr;
              </span>
            )}
          </div>
        </div>

        {/* Title & Testimonial Content */}
        <h3 className="font-sans font-black text-xl sm:text-2xl text-neutral-900 dark:text-white mb-3 tracking-tight">
          {card.title}
        </h3>
        <p className="font-sans text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal italic relative pl-4 border-l-2 border-[#FF6600]/60">
          &ldquo;{card.content}&rdquo;
        </p>
      </div>

      {/* Footer Author & Company Role */}
      <div className="pt-4 border-t border-neutral-200/80 dark:border-white/10 flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-3">
          <div
            className={cn(
              "w-10 h-10 rounded-full font-mono font-black text-sm flex items-center justify-center shadow-md",
              theme.iconBg
            )}
          >
            {card.author.charAt(0)}
          </div>
          <div>
            <h4 className="font-sans font-black text-sm text-neutral-900 dark:text-white leading-none">
              {card.author}
            </h4>
            <span className="font-mono text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 mt-1 block">
              {card.role}
            </span>
          </div>
        </div>

        <div
          className={cn(
            "flex items-center space-x-1 px-3 py-1 rounded-full border text-xs font-mono font-bold shadow-2xs",
            theme.verified
          )}
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Verified</span>
        </div>
      </div>
    </div>
  );
}

export function VerseCards({
  items,
  className,
}: {
  items: VerseCardItem[];
  className?: string;
}) {
  const [[page, direction], setPage] = useState([0, 0]);

  const total = items.length;
  const activeIdx = ((page % total) + total) % total;
  const nextIdx = (activeIdx + 1) % total;
  const thirdIdx = (activeIdx + 2) % total;

  const paginate = (newDirection: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setPage(([currPage]) => [currPage + newDirection, newDirection]);
  };

  const activeCard = items[activeIdx];
  const nextCard = items[nextIdx];
  const thirdCard = items[thirdIdx];

  const activeTheme = cardThemes[activeIdx % cardThemes.length];
  const nextTheme = cardThemes[nextIdx % cardThemes.length];
  const thirdTheme = cardThemes[thirdIdx % cardThemes.length];

  return (
    <div
      className={cn(
        "relative w-full max-w-2xl mx-auto flex flex-col items-center select-none space-y-8",
        className
      )}
    >
      {/* ── 3D Fan-Out Stacked Cards Stage with Apple-Grade Spring Physics ── */}
      <div className="relative w-full h-[330px] flex items-center justify-center">
        {/* Layer 3: Back Card (Deepest in stack) */}
        {total > 2 && (
          <motion.div
            key={`layer-3-${thirdCard.id}`}
            animate={{
              scale: 0.88,
              y: 28,
              rotate: -3,
              opacity: 0.5,
            }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="absolute inset-0 rounded-3xl p-[2px] bg-neutral-300 dark:bg-white/5 pointer-events-none z-10 shadow-sm"
            style={{ transformOrigin: "bottom center" }}
          >
            <CardInner
              card={thirdCard}
              idx={thirdIdx}
              total={total}
              theme={thirdTheme}
              isTop={false}
            />
          </motion.div>
        )}

        {/* Layer 2: Middle Card */}
        {total > 1 && (
          <motion.div
            key={`layer-2-${nextCard.id}`}
            animate={{
              scale: 0.94,
              y: 14,
              rotate: 2.5,
              opacity: 0.8,
            }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="absolute inset-0 rounded-3xl p-[2px] bg-neutral-300 dark:bg-white/10 pointer-events-none z-20 shadow-md"
            style={{ transformOrigin: "bottom center" }}
          >
            <CardInner
              card={nextCard}
              idx={nextIdx}
              total={total}
              theme={nextTheme}
              isTop={false}
            />
          </motion.div>
        )}

        {/* Layer 1: Active Top Card with Fluid Drag-to-Swipe & Throw-Off Physics */}
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={`top-${page}`}
            custom={direction}
            variants={{
              enter: (d: number) => ({
                scale: 0.94,
                y: 14,
                x: d < 0 ? -160 : 0,
                opacity: 0.85,
                rotate: d < 0 ? -6 : 2.5,
              }),
              center: {
                scale: 1,
                y: 0,
                x: 0,
                opacity: 1,
                rotate: 0,
                zIndex: 30,
              },
              exit: (d: number) => ({
                x: d >= 0 ? -380 : 380,
                opacity: 0,
                rotate: d >= 0 ? -16 : 16,
                scale: 0.9,
                transition: {
                  duration: 0.32,
                  ease: [0.32, 0.72, 0, 1],
                },
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            onClick={(e) => paginate(1, e)}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.65}
            onDragEnd={(_, info) => {
              const swipeThreshold = 50;
              const velocityThreshold = 300;
              if (
                info.offset.x < -swipeThreshold ||
                info.velocity.x < -velocityThreshold
              ) {
                paginate(1);
              } else if (
                info.offset.x > swipeThreshold ||
                info.velocity.x > velocityThreshold
              ) {
                paginate(-1);
              }
            }}
            transition={{
              type: "spring",
              stiffness: 340,
              damping: 26,
              mass: 0.8,
            }}
            className={cn(
              "absolute inset-0 rounded-3xl p-[2px] cursor-grab active:cursor-grabbing z-30 select-none",
              `bg-gradient-to-r ${activeTheme.gradientBorder} ${activeTheme.glow}`
            )}
            style={{ transformOrigin: "bottom center" }}
          >
            <CardInner
              card={activeCard}
              idx={activeIdx}
              total={total}
              theme={activeTheme}
              isTop={true}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Interactive Controls & Pagination Dots ── */}
      <div className="flex items-center space-x-4 pt-2 z-20">
        <button
          onClick={(e) => paginate(-1, e)}
          className="p-3 rounded-2xl bg-white dark:bg-[#0B0F17] border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-200 hover:text-[#FF6600] hover:border-[#FF6600]/40 transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
          aria-label="Previous card"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Animated Pill Dots */}
        <div className="flex items-center space-x-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                const diff = i - activeIdx;
                if (diff !== 0) {
                  paginate(diff);
                }
              }}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                i === activeIdx
                  ? "w-8 bg-gradient-to-r from-[#FF5500] to-[#FF7711] shadow-xs"
                  : "w-2.5 bg-neutral-300 dark:bg-white/20 hover:bg-neutral-400"
              )}
              aria-label={`Go to card ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={(e) => paginate(1, e)}
          className="p-3 rounded-2xl bg-white dark:bg-[#0B0F17] border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-200 hover:text-[#FF6600] hover:border-[#FF6600]/40 transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
          aria-label="Next card"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
