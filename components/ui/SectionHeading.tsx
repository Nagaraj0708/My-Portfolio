import React from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  children,
  as: Component = "h2",
  className = "",
}: SectionHeadingProps) {
  return (
    <Component
      className={`font-sans font-extrabold text-slate-900 tracking-tight leading-[1.05] text-[clamp(2.25rem,5.5vw,4.5rem)] ${className}`}
    >
      {children}
    </Component>
  );
}
