"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollDissolveRevealProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollDissolveReveal({ children, className }: ScrollDissolveRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.1, 0.7, 1]);
  const filterBlur = useTransform(scrollYProgress, [0, 0.7, 1], ["blur(12px)", "blur(4px)", "blur(0px)"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, filter: filterBlur, scale, y }}
      className={cn("transition-all duration-300 ease-out", className)}
    >
      {children}
    </motion.div>
  );
}
