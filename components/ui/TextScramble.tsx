"use client";

import React, { useState, useEffect, useRef } from "react";

const GLYPHS = "ABCDEF0123456789_#@*&%$<>~";

interface TextScrambleProps {
  text: string;
  className?: string;
  triggerOnHover?: boolean;
  triggerOnView?: boolean;
}

export function TextScramble({
  text,
  className = "",
  triggerOnHover = true,
  triggerOnView = true,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const isScramblingRef = useRef(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  const scramble = () => {
    if (isScramblingRef.current) return;
    isScramblingRef.current = true;

    let iteration = 0;
    const maxIterations = text.length * 3;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, idx) => {
            if (char === " ") return " ";
            if (idx < iteration / 3) {
              return text[idx];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );

      iteration++;

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        isScramblingRef.current = false;
      }
    }, 28);
  };

  useEffect(() => {
    if (!triggerOnView) return;
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            scramble();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerOnView, text]);

  return (
    <span
      ref={elementRef}
      onMouseEnter={() => {
        if (triggerOnHover) scramble();
      }}
      className={`inline-block select-none cursor-default font-mono ${className}`}
    >
      {displayText}
    </span>
  );
}
