"use client";

import React from "react";
import { Wrench, Code2, Layout, Layers, Building2 } from "lucide-react";
import { servicesData } from "@/data/services";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Layers: Layers,
  Building2: Building2,
};

export function Services() {
  const hoverItems = servicesData.map((s) => ({
    id: s.id,
    number: s.number,
    title: s.title,
    description: s.description,
    icon: iconMap[s.iconName],
  }));

  return (
    <section
      id="services"
      aria-label="Services Offered"
      className="py-10 md:py-14 px-4 md:px-8 max-w-6xl mx-auto border-t border-slate-200/80 dark:border-slate-800"
    >
      <div className="flex flex-col space-y-3 mb-10 max-w-2xl text-left">
        <div className="inline-flex items-center space-x-2 font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          <Wrench className="w-3.5 h-3.5" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">SERVICES</span>
        </div>
        <h2 className="font-sans font-extrabold text-3xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
          WHAT I <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">BUILD</span>
        </h2>
        <p className="font-sans text-base md:text-lg text-slate-600 dark:text-slate-300">
          Tailored engineering capabilities for enterprise web interfaces, API integrations, and software products.
        </p>
      </div>

      {/* Aceternity Card Hover Effect Grid */}
      <HoverEffect items={hoverItems} />
    </section>
  );
}
