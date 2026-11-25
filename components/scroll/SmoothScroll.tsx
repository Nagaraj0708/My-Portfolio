"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Disable on reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

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

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Keep Lenis synchronized with all DOM mutations, dynamic content, and image loads
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(document.body);

    // Initial resize after mount and after DOM settles
    lenis.resize();
    ScrollTrigger.refresh();
    const timer = setTimeout(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      gsap.ticker.remove(updateTicker);
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
