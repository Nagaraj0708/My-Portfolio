"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ArchitectureLayerItem } from "@/data/projects";

interface ArchitectureLayerProps {
  layer: ArchitectureLayerItem;
  isActive: boolean;
  onSelect: () => void;
  index: number;
}

export function ArchitectureLayer({
  layer,
  isActive,
  onSelect,
  index,
}: ArchitectureLayerProps) {
  return (
    <motion.div
      onClick={onSelect}
      data-cursor="SELECT"
      className={`cursor-pointer rounded-xl p-5 md:p-6 transition-all duration-300 border ${
        isActive
          ? "bg-white border-blue-600 shadow-xl shadow-blue-500/10 ring-2 ring-blue-600/20"
          : "bg-white/60 hover:bg-white border-slate-200 hover:border-slate-300 shadow-2xs"
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left Side: Number, Layer Name, Technologies */}
        <div className="flex items-start md:items-center space-x-4">
          <span
            className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md border ${
              isActive
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-slate-100 text-slate-500 border-slate-200"
            }`}
          >
            0{index + 1}
          </span>

          <div className="flex flex-col">
            <h3
              className={`font-sans font-bold text-lg md:text-xl transition-colors ${
                isActive ? "text-blue-600" : "text-slate-900"
              }`}
            >
              {layer.title}
            </h3>

            <div className="flex flex-wrap gap-1.5 mt-1">
              {layer.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Protocol Badge & Action */}
        <div className="flex items-center justify-between md:justify-end space-x-4">
          <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            {layer.protocol}
          </span>
          <ChevronRight
            className={`w-5 h-5 transition-transform duration-300 ${
              isActive ? "rotate-90 text-blue-600" : "text-slate-400"
            }`}
          />
        </div>
      </div>

      {/* Expanded Description */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 pt-4 border-t border-slate-200 text-slate-600 font-sans text-sm leading-relaxed"
        >
          {layer.description}
        </motion.div>
      )}
    </motion.div>
  );
}
