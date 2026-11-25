"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineItemProps {
  item: TimelineEntry;
  index: number;
  total: number;
}

function TimelineItem({ item, index, total }: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  
  // Trigger when milestone approaches center viewport
  const isInView = useInView(itemRef, {
    margin: "-20% 0px -35% 0px",
  });

  return (
    <div
      ref={itemRef}
      className="flex justify-start pt-8 sm:pt-14 md:pt-20 gap-3 sm:gap-6 md:gap-10 relative group"
    >
      {/* ── Left Sticky Date / Milestone Beacon ─────────────────── */}
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-24 sm:top-32 md:top-36 self-start max-w-xs lg:max-w-sm md:w-full">
        {/* Milestone Beacon Node */}
        <div className="relative h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 absolute left-0.5 sm:left-2 md:left-2 flex items-center justify-center">
          {/* Active Concentric Aura Radar Wave */}
          {isInView && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.8, 2.2], opacity: [0.8, 0.4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 rounded-full bg-[#FF6600]/30 -z-10"
            />
          )}

          {/* Outer Housing */}
          <div
            className={`h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-full border flex items-center justify-center transition-all duration-500 shadow-md ${
              isInView
                ? "bg-white dark:bg-[#0E131F] border-[#FF6600] shadow-[0_0_20px_rgba(255,102,0,0.45)] scale-110"
                : "bg-slate-100 dark:bg-slate-900 border-slate-300 dark:border-slate-800 scale-100"
            }`}
          >
            {/* Center Core Light */}
            <div
              className={`h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 rounded-full transition-all duration-500 ${
                isInView
                  ? "bg-gradient-to-tr from-[#FF5500] to-[#FF7711] shadow-[0_0_10px_#FF6600] scale-110"
                  : "bg-slate-400 dark:bg-slate-600"
              }`}
            />
          </div>
        </div>

        {/* Desktop Sticky Date Title */}
        <div className="hidden md:block pl-16 lg:pl-20">
          <motion.h3
            animate={{
              color: isInView ? "#FF6600" : undefined,
              x: isInView ? 4 : 0,
            }}
            transition={{ duration: 0.3 }}
            className={`text-xl lg:text-2xl font-black font-mono tracking-tight transition-colors duration-300 flex items-center gap-2 ${
              isInView
                ? "text-[#FF6600] font-black"
                : "text-slate-400 dark:text-slate-500 font-bold"
            }`}
          >
            {item.title}
          </motion.h3>
          <span className="font-mono text-[10px] tracking-widest uppercase font-semibold text-slate-400 dark:text-slate-500 block mt-0.5">
            MILESTONE 0{index + 1} / 0{total}
          </span>
        </div>
      </div>

      {/* ── Right Content Card with Cinema Scroll Entrance ─────── */}
      <motion.div
        initial={{ opacity: 0.35, y: 24 }}
        animate={{
          opacity: isInView ? 1 : 0.6,
          y: isInView ? 0 : 12,
        }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative pl-10 sm:pl-14 md:pl-4 pr-0 sm:pr-2 w-full min-w-0"
      >
        {/* Mobile Date Badge */}
        <div className="md:hidden flex items-center gap-2 mb-2.5">
          <span
            className={`font-mono text-xs font-black tracking-tight px-3 py-1 rounded-full border transition-all ${
              isInView
                ? "bg-[#FF6600] text-white border-[#FF6600] shadow-[0_4px_12px_rgba(255,102,0,0.35)]"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
            }`}
          >
            {item.title}
          </span>
          <span className="font-mono text-[10px] text-slate-400">
            0{index + 1}
          </span>
        </div>

        {/* Content Container (Sharply Rendered, Zero Blur) */}
        <div className={`transition-all duration-500 rounded-2xl sm:rounded-3xl ${
          isInView
            ? "ring-1 ring-[#FF6600]/25 shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
            : "shadow-md"
        }`}>
          {item.content}
        </div>
      </motion.div>
    </div>
  );
}

export const Timeline = ({
  data,
  headerTitle = "Career Experience & Track Record",
  headerSubtitle = "A chronological walkthrough of software engineering achievements, production leadership at Foxconn, and hardware operations.",
}: {
  data: TimelineEntry[];
  headerTitle?: string;
  headerSubtitle?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Dynamic height recalculation with ResizeObserver
  useEffect(() => {
    if (!ref.current) return;

    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    resizeObserver.observe(ref.current);
    window.addEventListener("resize", updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 85%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const cometY = useTransform(scrollYProgress, [0, 1], [0, height]);

  return (
    <div
      className="w-full bg-[#FDFBF7] dark:bg-[#070A12] font-sans px-3 sm:px-6 md:px-12 transition-colors duration-500 overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto pt-12 sm:pt-20 pb-6 sm:pb-8">
        <div className="flex items-center space-x-2 text-[#FF6600] font-mono text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CHRONOLOGICAL MILESTONES &amp; IMPACT</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-3 sm:mb-4 max-w-4xl leading-tight">
          {headerTitle}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed">
          {headerSubtitle}
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 sm:pb-28">
        {data.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            index={index}
            total={data.length}
          />
        ))}

        {/* ── Background Track Line ────────────────────────────── */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-4.5 sm:left-6.5 md:left-7 top-0 overflow-hidden w-[2px] bg-slate-200 dark:bg-slate-800 [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)] pointer-events-none"
        >
          {/* Active Energy Beam Drawn Synchronized with Scroll */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-[#FF5500] via-[#FF6600] to-[#3B82F6] rounded-full shadow-[0_0_12px_rgba(255,102,0,0.85)]"
          />
        </div>

        {/* ── Leading Laser Comet Head ─────────────────────────── */}
        <motion.div
          style={{
            y: cometY,
            opacity: opacityTransform,
          }}
          className="absolute left-4.5 sm:left-6.5 md:left-7 -ml-[5px] -mt-[6px] top-0 pointer-events-none z-30"
        >
          {/* Glowing Comet Tip */}
          <div className="relative w-3.5 h-3.5 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_12px_#FF6600,0_0_24px_#FF6600,0_0_36px_#FF8800] border-2 border-[#FF6600]" />
            <div className="absolute inset-0 rounded-full bg-[#FF6600]/60 animate-ping" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
