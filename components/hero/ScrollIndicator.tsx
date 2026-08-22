"use client";

import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`transition-opacity duration-500 font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-500 flex items-center gap-2 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <span>SCROLL TO EXPLORE</span>
      <ArrowDown className="w-3.5 h-3.5 text-blue-600 animate-bounce" />
    </div>
  );
}
