"use client";

import React from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { siteConfig } from "@/data/siteConfig";

export function StatusIndicator({ compact = false }: { compact?: boolean }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="inline-flex items-center gap-2 font-mono text-[11px] md:text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full shadow-2xs">
      <span className="relative flex h-2 w-2">
        {!shouldReduceMotion && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
        )}
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
      </span>
      {!compact && <span>{siteConfig.status}</span>}
    </div>
  );
}
