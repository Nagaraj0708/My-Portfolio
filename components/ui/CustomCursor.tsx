"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Elite studio spring physics: ultra-responsive lead dot, smooth trailing outer ring
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 450, mass: 0.4 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 450, mass: 0.4 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (
      typeof window === "undefined" ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    setMounted(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        "button, a, input, select, textarea, [data-cursor], [role='button'], .cursor-pointer"
      );
      setIsHovering(!!interactive);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!mounted || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Precision Micro Dot (Inverts against any background) */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white mix-blend-difference pointer-events-none z-50"
        animate={{
          scale: isClicking ? 0.6 : isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Elegant Fluid Studio Aura Ring */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 rounded-full border border-white/60 mix-blend-difference pointer-events-none z-40 backdrop-blur-[0.5px]"
        animate={{
          width: isClicking ? 20 : isHovering ? 46 : 28,
          height: isClicking ? 20 : isHovering ? 46 : 28,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 0.15)" : "transparent",
          borderColor: isHovering ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.4)",
        }}
        transition={{
          type: "spring",
          damping: 26,
          stiffness: 350,
          mass: 0.35,
        }}
      />
    </div>
  );
}
