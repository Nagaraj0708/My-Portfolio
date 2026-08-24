"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export interface TimelineEntry {
  title: string; // e.g. "04/2023 — Present" or "2023 — Present"
  content: React.ReactNode;
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

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-slate-950 font-sans px-3 sm:px-6 md:px-12 transition-colors duration-400 overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto pt-10 sm:pt-16 pb-6 sm:pb-8">
        <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 block mb-1.5 sm:mb-2">
          CAREER TIMELINE
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-3 sm:mb-4 max-w-4xl leading-tight">
          {headerTitle}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed">
          {headerSubtitle}
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-16 sm:pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-6 sm:pt-10 md:pt-20 gap-3 sm:gap-6 md:gap-10"
          >
            {/* Left Sticky Year / Date Marker */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-28 sm:top-36 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10 absolute left-1 sm:left-2.5 md:left-3 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 flex items-center justify-center shadow-md">
                <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 rounded-full bg-blue-600 dark:bg-blue-400 border border-blue-200 dark:border-blue-800 animate-pulse" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-black font-mono text-slate-900 dark:text-white tracking-tight">
                {item.title}
              </h3>
            </div>

            {/* Right Main Content */}
            <div className="relative pl-10 sm:pl-14 md:pl-4 pr-0 sm:pr-2 w-full min-w-0">
              <h3 className="md:hidden block text-base sm:text-xl mb-2 sm:mb-3 text-left font-black font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Vertical Animated Glowing Line Beam */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-4.5 sm:left-7 md:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-slate-200 dark:via-slate-800 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.8)]"
          />
        </div>
      </div>
    </div>
  );
};
