"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface KineticRollingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

export function KineticRollingText({
  words,
  interval = 3000,
  className = "",
}: KineticRollingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  const currentWord = words[index];

  return (
    <span
      className={`inline-grid relative overflow-hidden align-top text-center justify-items-center min-h-[1.15em] ${className}`}
      style={{ perspective: 1000 }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={currentWord}
          initial={{ y: "85%", rotateX: -65, opacity: 0 }}
          animate={{ y: "0%", rotateX: 0, opacity: 1 }}
          exit={{ y: "-85%", rotateX: 65, opacity: 0 }}
          transition={{
            duration: 0.42,
            ease: [0.16, 1, 0.3, 1], // Apple / After-Effects expo spring curve
          }}
          className="col-start-1 row-start-1 inline-flex items-center space-x-0.5 origin-bottom whitespace-nowrap will-change-transform"
        >
          {currentWord.split("").map((char, charIdx) => (
            <motion.span
              key={`${char}-${charIdx}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: charIdx * 0.02,
                duration: 0.35,
                ease: "easeOut",
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
