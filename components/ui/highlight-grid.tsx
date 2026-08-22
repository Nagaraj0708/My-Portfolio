"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface HighlightGridItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
}

export function HighlightGrid({ items, className }: { items: HighlightGridItem[]; className?: string }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {items.map((item, idx) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.08 }}
          onMouseEnter={() => setHoveredIdx(idx)}
          onMouseLeave={() => setHoveredIdx(null)}
          className="relative group p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between"
        >
          {/* Subtle hover gradient glow */}
          {hoveredIdx === idx && (
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent pointer-events-none" />
          )}

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              {item.badge && (
                <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                  {item.badge}
                </span>
              )}
            </div>

            <h3 className="font-sans font-black text-xl text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {item.title}
            </h3>
            <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 block mb-3">
              {item.subtitle}
            </span>
            <p className="font-sans text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            <span>Explore Architecture</span>
            <span>&rarr;</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
