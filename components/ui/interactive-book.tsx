"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { BookOpen, ChevronRight, ChevronLeft, Award, CheckCircle2 } from "lucide-react";

export interface BookPage {
  pageNumber: number;
  chapterTitle: string;
  subtitle: string;
  body: string;
  highlights: string[];
}

export function InteractiveBook({ pages, className }: { pages: BookPage[]; className?: string }) {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, pages.length - 1));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 0));

  const page = pages[currentPage];

  return (
    <div className={cn("relative w-full max-w-4xl mx-auto py-8 select-none", className)}>
      {/* 3D Book Cover Container */}
      <div className="relative min-h-[380px] p-8 md:p-10 rounded-3xl bg-slate-900 border-2 border-slate-800 shadow-[0_30px_70px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden">
        {/* Book spine visual border */}
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-blue-700 to-slate-900 border-r border-slate-700" />

        {/* Top Header */}
        <div className="pl-6 flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-blue-400" />
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">
              EXECUTIVE ARCHITECTURE MANUAL — PAGE 0{currentPage + 1}
            </span>
          </div>

          <span className="font-mono text-xs text-slate-500">
            {currentPage + 1} / {pages.length}
          </span>
        </div>

        {/* Dynamic Page Content with 3D Flip Transition */}
        <div className="pl-6 py-6 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider block">
                {page.subtitle}
              </span>
              <h3 className="font-sans font-black text-2xl md:text-3xl text-white">{page.chapterTitle}</h3>
              <p className="font-sans text-sm md:text-base text-slate-300 leading-relaxed font-normal">
                {page.body}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {page.highlights.map((h, i) => (
                  <div key={i} className="flex items-center space-x-2 p-2 rounded-xl bg-slate-950/60 border border-slate-800 text-xs font-mono text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Navigation */}
        <div className="pl-6 pt-4 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-mono text-xs font-bold cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Page</span>
          </button>

          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-mono text-xs font-bold cursor-pointer shadow-md"
          >
            <span>Next Chapter</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
