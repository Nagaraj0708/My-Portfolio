"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "glow";
  className?: string;
}

export function AnimatedButton({
  children,
  variant = "primary",
  className,
  ...props
}: AnimatedButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(
        "relative group inline-flex items-center justify-center px-6 py-3 rounded-2xl font-mono text-xs font-bold transition-all cursor-pointer overflow-hidden select-none",
        variant === "primary" &&
          "bg-neutral-900 text-white dark:bg-white dark:text-slate-900 shadow-md hover:shadow-xl",
        variant === "secondary" &&
          "bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/50",
        variant === "glow" &&
          "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-blue-500/30",
        className
      )}
      {...(props as any)}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
    </motion.button>
  );
}
