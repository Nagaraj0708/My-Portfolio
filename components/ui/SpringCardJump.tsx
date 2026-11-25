"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface SpringCardJumpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  tiltIntensity?: number;
}

export function SpringCardJump({
  children,
  delay = 0,
  className = "",
  tiltIntensity = 10,
}: SpringCardJumpProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]), {
    stiffness: 280,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]), {
    stiffness: 280,
    damping: 24,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);

    // Specular light sheen coordinates
    el.style.setProperty("--sheen-x", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--sheen-y", `${(y + 0.5) * 100}%`);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{
        opacity: 0,
        y: 45,
        scale: 0.92,
        rotateX: 12,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
      }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18, // Gives the signature physical "jump and settle" spring overshoot
        mass: 0.7,
        delay,
      }}
      style={{
        perspective: 1200,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative will-change-transform ${className}`}
    >
      {/* Specular Gliding Glass Sheen */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 transition-opacity duration-300 z-30"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at var(--sheen-x, 50%) var(--sheen-y, 50%), rgba(255, 255, 255, 0.12), transparent 70%)`,
        }}
      />
      {children}
    </motion.div>
  );
}
