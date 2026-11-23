"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const lenis = typeof window !== "undefined" ? (window as any).__lenis : null;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.0 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.15, rotate: 15 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          data-cursor="OPEN"
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-blue-600 dark:bg-blue-500 text-white shadow-xl shadow-blue-500/25 border border-white/20 focus:outline-none transition-colors"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
