"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

/**
 * Standardized Motion Design Timing & Easing Curves
 */
export const MOTION = {
  timing: {
    micro: 0.2,
    button: 0.25,
    normal: 0.4,
    reveal: 0.8,
    cinematic: 1.2,
  },
  ease: {
    expo: "expo.out",
    power4: "power4.out",
    power2: "power2.out",
    smooth: "power3.inOut",
    elastic: "elastic.out(1, 0.5)",
  },
  cubicBezier: [0.16, 1, 0.3, 1] as const,
};

/**
 * useMagnetic Hook
 * Gives buttons / interactive elements a fluid, spring-like magnetic pull
 * toward the mouse cursor with smooth damping and spring back.
 */
export function useMagnetic<T extends HTMLElement = HTMLElement>(
  intensity: number = 0.35,
  range: number = 100
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip on touch devices or reduced motion
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    let bounding = el.getBoundingClientRect();

    const handleResize = () => {
      bounding = el.getBoundingClientRect();
    };

    const handleMouseMove = (e: MouseEvent) => {
      bounding = el.getBoundingClientRect();
      const centerX = bounding.left + bounding.width / 2;
      const centerY = bounding.top + bounding.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY);

      if (distance < range) {
        gsap.to(el, {
          x: deltaX * intensity,
          y: deltaY * intensity,
          rotate: (deltaX / range) * 4,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
      } else {
        gsap.to(el, {
          x: 0,
          y: 0,
          rotate: 0,
          duration: 0.6,
          ease: "elastic.out(1.1, 0.4)",
          overwrite: "auto",
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        rotate: 0,
        duration: 0.6,
        ease: "elastic.out(1.1, 0.4)",
        overwrite: "auto",
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      gsap.killTweensOf(el);
    };
  }, [intensity, range]);

  return ref;
}

/**
 * useSpotlight Hook
 * Dynamically computes local relative mouse coordinates inside a card
 * and updates CSS custom properties (--mouse-x, --mouse-y) for a radial glow.
 */
export function useSpotlight<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty("--mouse-x", `${x}px`);
    el.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  return { ref, handleMouseMove };
}
