"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselSlide {
  id: string;
  title: string;
  category: string;
  image: string;
  desc: string;
}

export function PerspectiveCarousel({ slides, className }: { slides: CarouselSlide[]; className?: string }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setActiveIdx((p) => (p + 1) % slides.length);

  return (
    <div className={cn("relative w-full max-w-5xl mx-auto py-4 select-none", className)}>
      <div className="relative h-[280px] md:h-[320px] flex items-center justify-center perspective-[1100px] overflow-hidden">
        {slides.map((slide, idx) => {
          const offset = idx - activeIdx;
          const absOffset = Math.abs(offset);

          if (absOffset > 2) return null;

          return (
            <motion.div
              key={slide.id}
              onClick={() => setActiveIdx(idx)}
              animate={{
                rotateY: offset * -22,
                scale: 1 - absOffset * 0.16,
                x: offset * 190,
                opacity: 1 - absOffset * 0.32,
                zIndex: 10 - absOffset,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "absolute w-[250px] md:w-[310px] h-[260px] md:h-[295px] rounded-2xl p-4 bg-slate-900 border border-slate-800 shadow-2xl cursor-pointer flex flex-col justify-between overflow-hidden",
                offset === 0 && "border-blue-500/70 shadow-blue-500/25"
              )}
            >
              <div className="relative w-full h-[140px] md:h-[155px] rounded-xl overflow-hidden bg-slate-950 mb-2 border border-slate-800 shrink-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md text-[10px] font-mono font-bold text-blue-400 border border-blue-800/40">
                  {slide.category}
                </div>
              </div>

              <div>
                <h4 className="font-sans font-extrabold text-sm md:text-base text-white line-clamp-1 mb-0.5">{slide.title}</h4>
                <p className="font-sans text-xs text-slate-400 line-clamp-2 leading-snug">{slide.desc}</p>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between font-mono text-[11px] text-slate-500">
                <span>0{idx + 1} / 0{slides.length}</span>
                <span className="text-blue-400 font-bold">Inspect &rarr;</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Nav Controls */}
      <div className="flex items-center justify-center space-x-3 mt-3">
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 text-white flex items-center justify-center hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4.5 h-4.5" />
        </button>
        <button
          onClick={next}
          className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 text-white flex items-center justify-center hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <ChevronRight className="w-4.5 h-4.5" />
        </button>
      </div>
    </div>
  );
}
