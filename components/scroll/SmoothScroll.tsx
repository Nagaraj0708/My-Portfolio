"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Disable on reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    if (typeof window !== "undefined") {
      (window as any).__lenis = lenis;
    }

    // Keep Lenis synchronized with all DOM mutations, dynamic content, and image loads
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    resizeObserver.observe(document.body);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Initial resize after mount and after DOM settles
    lenis.resize();
    const timer = setTimeout(() => lenis.resize(), 500);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
      resizeObserver.disconnect();
      if (typeof window !== "undefined") {
        (window as any).__lenis = null;
      }
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
