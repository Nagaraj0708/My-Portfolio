import React from "react";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span
      className={`inline-block font-mono text-xs md:text-sm font-medium tracking-widest uppercase text-accent ${className}`}
    >
      {children}
    </span>
  );
}
