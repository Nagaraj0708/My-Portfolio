"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface LoaderProps {
  onComplete?: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [stage, setStage] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    const timer1 = setTimeout(() => setStage(1), 250);
    const timer2 = setTimeout(() => setStage(2), 550);
    const timer3 = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 850);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [shouldReduceMotion, onComplete]);

  if (!isVisible || shouldReduceMotion) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 z-10000 flex flex-col items-center justify-center bg-white"
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="font-mono text-xl md:text-2xl font-bold tracking-widest text-slate-900 flex items-center gap-2">
            <span>NK</span>
            <span className="text-blue-600 font-light">/</span>
          </div>

          <div className="h-5 flex items-center justify-center">
            <span className="font-mono text-xs font-semibold tracking-widest text-slate-500 uppercase">
              {stage === 0 && "INIT..."}
              {stage === 1 && "INITIALIZING..."}
              {stage >= 2 && "INITIALIZING EXPERIENCE..."}
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
