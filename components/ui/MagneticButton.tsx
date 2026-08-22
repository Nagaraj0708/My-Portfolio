"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  asLink?: boolean;
  href?: string;
  dataCursor?: string;
  className?: string;
}

export function MagneticButton({
  children,
  variant = "primary",
  asLink = false,
  href,
  dataCursor,
  className = "",
  onClick,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "inline-flex items-center justify-center font-mono text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg rounded-lg px-6 py-3.5 select-none";

  const variantStyles = {
    primary:
      "bg-accent text-white hover:bg-blue-700 border border-accent shadow-md shadow-blue-500/20 active:scale-95",
    secondary:
      "bg-white text-text-primary border border-slate-200 hover:border-slate-400 hover:shadow-sm shadow-2xs active:scale-95",
    ghost:
      "bg-transparent text-text-secondary hover:text-text-primary border border-transparent hover:border-slate-200 hover:bg-white/50",
  };

  const combinedClass = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 20, mass: 0.5 }}
      data-cursor={dataCursor}
      className="inline-block"
    >
      {asLink && href ? (
        <a href={href} className={combinedClass} data-cursor={dataCursor}>
          {children}
        </a>
      ) : (
        <button
          className={combinedClass}
          onClick={onClick}
          data-cursor={dataCursor}
          {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          {children}
        </button>
      )}
    </motion.div>
  );

  return content;
}
