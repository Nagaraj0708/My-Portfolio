"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Layers,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { TextScramble } from "@/components/ui/TextScramble";
import { SpringCardJump } from "@/components/ui/SpringCardJump";

const SERVICE_EXTRAS = {
  "frontend-dev": {
    badge: "Angular 14+ & RxJS",
    features: [
      "Modular feature architecture",
      "Strict TypeScript contracts",
      "Dynamic theme tokens",
      "Zero-leak RxJS subscriptions",
    ],
    glow: "rgba(255, 102, 0, 0.15)",
  },
  "ui-engineering": {
    badge: "Cognitive UX & Micro-Interactions",
    features: [
      "Fitts's Law hit target ergonomics",
      "Framer Motion physics springs",
      "WAI-ARIA accessible patterns",
      "Doherty threshold (<400ms) snappy feel",
    ],
    glow: "rgba(255, 102, 0, 0.15)",
  },
  "api-integration": {
    badge: ".NET Core & C#",
    features: [
      "HttpInterceptor auth & refresh",
      "DTO serialization contracts",
      "EF Core data layer integration",
      "Automated CI/CD build pipelines",
    ],
    glow: "rgba(255, 102, 0, 0.15)",
  },
  "business-apps": {
    badge: "Foxconn Rigor",
    features: [
      "Multi-tenant clinical & HR SPAs",
      "Real-time inventory pipelines",
      "Defensive input validation",
      "$20K+ manufacturing cost savings",
    ],
    glow: "rgba(255, 102, 0, 0.15)",
  },
};

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Layers: Layers,
  Building2: Building2,
};

export function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="services"
      aria-label="Services & Architecture"
      className="relative bg-[#070A12] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* ── Soft Ambient Warm Glow ───────────────────────────── */}
      <div className="absolute top-12 left-10 w-48 h-48 bg-[#FF6600]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading (Matching Reference 1 Staging) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#FF6600] font-mono text-xs font-bold uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5" />
              <TextScramble text="SERVICES & CORE COMPETENCIES" />
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Engineered for <span className="text-[#FF6600]">Scale &amp; Precision</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-neutral-400 max-w-md font-normal leading-relaxed">
            From architecture design to production deployment: delivering enterprise front-end systems that merge hardware QA discipline with top-tier UI craft.
          </p>
        </div>

        {/* ── Glassmorphic Service Cards Grid with Cursor Spotlight ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Code2;
            const extra = SERVICE_EXTRAS[service.id as keyof typeof SERVICE_EXTRAS] || SERVICE_EXTRAS["frontend-dev"];

            return (
              <SpringCardJump key={service.id} delay={idx * 0.08} className="h-full">
                <div
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={(e) => {
                    setHoveredIdx(null);
                    e.currentTarget.style.removeProperty("--mouse-x");
                    e.currentTarget.style.removeProperty("--mouse-y");
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                  }}
                  className="relative rounded-3xl p-6 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#FF6600]/50 shadow-xl backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden h-full"
                >
                  {/* Interactive cursor-following spotlight glow */}
                  <div
                    className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 0%), ${extra.glow}, transparent 75%)`,
                    }}
                  />

                  {/* Card Top: Number & Icon Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-black text-[#FF6600] bg-[#FF6600]/10 border border-[#FF6600]/20 px-2.5 py-1 rounded-full">
                        {service.number}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#FF6600] transition-all duration-300 shadow-md">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3 className="font-sans font-black text-xl text-white group-hover:text-[#FF6600] transition-colors mb-2">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="font-sans text-xs text-neutral-400 leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Card Bottom: Bullet Points */}
                  <div className="pt-4 border-t border-white/10 space-y-2">
                    <div className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#FF6600] mb-2">
                      {extra.badge}
                    </div>
                    {extra.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6600] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Subtle bottom border accent */}
                  <div className="absolute bottom-0 inset-x-0 h-[2px] bg-[#FF6600] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </SpringCardJump>
            );
          })}
        </div>

        {/* Architecture Guarantee Pill */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Strict TypeScript contracts • WAI-ARIA accessible DOM • Zero runtime state leaks</span>
          </div>
        </div>
      </div>
    </section>
  );
}
