"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { StatusIndicator } from "./StatusIndicator";

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export function MobileNav({ isOpen, onClose, items }: MobileNavProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-999 flex flex-col justify-between bg-white/95 backdrop-blur-xl p-6 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-900">
              NAGARAJ K
            </span>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Close Navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links List */}
          <nav className="flex flex-col space-y-6 my-auto">
            {items.map((item, idx) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + idx * 0.08, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="font-sans text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors flex items-center justify-between group"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-slate-400 group-hover:text-blue-600">
                    0{idx + 1}
                  </span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Footer Status */}
          <div className="border-t border-slate-200 pt-4 flex flex-col space-y-2">
            <StatusIndicator />
            <span className="font-mono text-xs text-slate-500">
              Based in Chennai, India
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
