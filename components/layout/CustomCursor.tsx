"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const cursorX = useSpring(0, { stiffness: 350, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 350, damping: 28 });

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsPointerFine(mediaQuery.matches);

    const handlePointerChange = (e: MediaQueryListEvent) => {
      setIsPointerFine(e.matches);
    };

    mediaQuery.addEventListener("change", handlePointerChange);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest(
          "[data-cursor], a, button, input, [role='button']"
        ) as HTMLElement | null;

        if (interactiveEl) {
          setIsHovered(true);
          const cursorText = interactiveEl.getAttribute("data-cursor");
          setLabel(cursorText || null);
        } else {
          setIsHovered(false);
          setLabel(null);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      mediaQuery.removeEventListener("change", handlePointerChange);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY]);

  if (!mounted || !isPointerFine || shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-9999"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        animate={{
          width: isHovered ? 52 : 10,
          height: isHovered ? 52 : 10,
          backgroundColor: isHovered ? "rgba(37, 99, 235, 0.12)" : "#0F172A",
          borderColor: isHovered ? "#2563EB" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="flex items-center justify-center rounded-full border border-solid shadow-sm overflow-hidden backdrop-blur-xs"
      >
        {isHovered && label && (
          <span className="font-mono text-[9px] font-extrabold text-accent tracking-wider uppercase">
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
