"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Maximize2, Minimize2, Sparkles, ArrowRight } from "lucide-react";

export interface BentoTile {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  colSpan?: string;
  bgGradient?: string;
  icon: React.ReactNode;
}

export function ExpandableBentoGrid({ items, className }: { items: BentoTile[]; className?: string }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-5", className)}>
      {items.map((tile, idx) => {
        const isExpanded = expandedId === tile.id;

        return (
          <motion.div
            key={tile.id}
            layout
            initial={{ opacity: 0, y: 45, scale: 0.93 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -6, scale: 1.01 }}
            onClick={() => setExpandedId(isExpanded ? null : tile.id)}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.removeProperty("--mouse-x");
              e.currentTarget.style.removeProperty("--mouse-y");
            }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 20,
              delay: idx * 0.08,
            }}
            className={cn(
              "relative p-7 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl cursor-pointer overflow-hidden flex flex-col justify-between group will-change-transform",
              tile.colSpan || "col-span-1",
              isExpanded && "md:col-span-3 bg-slate-950 border-blue-500/80 shadow-2xl"
            )}
          >
            {/* Cursor-following spotlight glow */}
            <div
              className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 0%), rgba(255, 102, 0, 0.12), transparent 75%)",
              }}
            />
            {/* Top Row */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700 text-blue-400 group-hover:scale-110 transition-transform">
                  {tile.icon}
                </div>
                <button className="text-slate-400 hover:text-white transition-colors cursor-pointer p-1">
                  {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>

              <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest block mb-1">
                {tile.subtitle}
              </span>
              <h3 className="font-sans font-black text-xl text-white mb-3 group-hover:text-blue-300 transition-colors">
                {tile.title}
              </h3>

              <p className={cn("font-sans text-xs md:text-sm text-slate-300 leading-relaxed font-normal", !isExpanded && "line-clamp-3")}>
                {tile.content}
              </p>
            </div>

            {/* Bottom Row */}
            <div className="pt-4 mt-6 border-t border-slate-800 flex items-center justify-between font-mono text-xs text-slate-500">
              <span>{isExpanded ? "Click to collapse" : "Click to expand bento view"}</span>
              <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
