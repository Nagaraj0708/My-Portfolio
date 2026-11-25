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
    offset: ["start 90%", "start 60%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.35, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [20, 0]);

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, y }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
