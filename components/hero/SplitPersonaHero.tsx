"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Code2, Server, ArrowUpRight, Layers } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function SplitPersonaHero() {
  const [activeSide, setActiveSide] = useState<"left" | "right" | "both">("both");

  return (
    <section
      id="hero"
      aria-label="Interactive Introduction"
      className="relative min-h-[90vh] flex flex-col justify-between pt-28 pb-12 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Top Header Tagline */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
        <div className="inline-flex items-center space-x-2 font-mono text-xs font-bold text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3.5 py-1.5 rounded-full shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>NAGARAJ K — DUAL CORE ENGINEER</span>
        </div>
        <p className="font-mono text-xs text-slate-500 uppercase tracking-widest">
          Hover over left or right to explore dual engineering focus
        </p>
      </div>

      {/* Main Split Persona Interactive Container */}
      <div className="relative w-full rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden min-h-[480px] md:min-h-[540px] grid grid-cols-1 md:grid-cols-2 transition-all duration-500">
        
        {/* LEFT SIDE: FRONT-END UI ENGINEER */}
        <Link
          href="/work"
          onMouseEnter={() => setActiveSide("left")}
          onMouseLeave={() => setActiveSide("both")}
          className={`group relative p-8 md:p-14 flex flex-col justify-between transition-all duration-500 cursor-pointer border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 ${
            activeSide === "left"
              ? "bg-slate-100/90 dark:bg-slate-800/90"
              : activeSide === "right"
              ? "opacity-40 grayscale-25 bg-slate-50/50 dark:bg-slate-950/50"
              : "bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50"
          }`}
        >
          {/* Background Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="relative z-10 flex flex-col space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs font-bold tracking-widest text-slate-900 dark:text-white uppercase">
                &lt;FRONT-END ENGINEER&gt;
              </span>
            </div>

            <h1 className="font-sans font-extrabold text-3xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.05]">
              Intuitive UI &amp; <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">Reactive State.</span>
            </h1>

            <p className="font-sans text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-md">
              Specialized in Next.js, React, TypeScript, and modern Tailwind systems. Built for speed, accessibility, and pixel-perfect design systems.
            </p>

            {/* Pill Tags */}
            <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-bold">
                Next.js / React
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-bold">
                TypeScript
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-bold">
                Tailwind CSS
              </span>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="pt-8 flex items-center justify-between font-mono text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            <span>EXPLORE FRONT-END PROJECTS</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </Link>

        {/* RIGHT SIDE: SYSTEMS & .NET INTEGRATOR */}
        <Link
          href="/work"
          onMouseEnter={() => setActiveSide("right")}
          onMouseLeave={() => setActiveSide("both")}
          className={`group relative p-8 md:p-14 flex flex-col justify-between transition-all duration-500 cursor-pointer ${
            activeSide === "right"
              ? "bg-slate-100/90 dark:bg-slate-800/90"
              : activeSide === "left"
              ? "opacity-40 grayscale-25 bg-slate-50/50 dark:bg-slate-950/50"
              : "bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50"
          }`}
        >
          {/* Background Subtle Code Grid */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="relative z-10 flex flex-col space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md">
                <Server className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs font-bold tracking-widest text-slate-900 dark:text-white uppercase">
                &lt;SYSTEMS INTEGRATOR&gt;
              </span>
            </div>

            <h2 className="font-sans font-extrabold text-3xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.05]">
              Robust APIs &amp; <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400">.NET Backend.</span>
            </h2>

            <p className="font-sans text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-md">
              Engineered with ASP.NET Core REST Web APIs, C# business logic, Entity Framework ORM, and SQL Server data persistence.
            </p>

            {/* Pill Tags */}
            <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-bold">
                ASP.NET Core
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-bold">
                C# Web API
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-bold">
                SQL Server
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-bold">
                Entity Framework
              </span>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="relative z-10 pt-8 flex items-center justify-between font-mono text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            <span>EXPLORE ARCHITECTURE</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </Link>

        {/* Center Divider Interactive Badge */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-mono text-[11px] font-bold px-4 py-2 rounded-full border-2 border-white dark:border-slate-900 shadow-xl flex items-center space-x-2">
            <Layers className="w-4 h-4 text-blue-400 dark:text-blue-600" />
            <span>NAGARAJ K</span>
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
        <div className="flex items-center space-x-4">
          <span>Positioning: {siteConfig.positioning}</span>
        </div>
        <div className="flex items-center space-x-6 font-semibold">
          <Link href="/work" className="text-blue-600 dark:text-blue-400 hover:underline">
            View Selected Work →
          </Link>
          <Link href="/contact" className="text-slate-900 dark:text-white hover:underline">
            Get In Touch ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
