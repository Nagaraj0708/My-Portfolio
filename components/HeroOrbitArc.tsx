"use client";

import React from "react";
import {
  AngularIcon,
  RxjsIcon,
  TypeScriptIcon,
  NextjsIcon,
  DotNetIcon,
  ReactIcon,
  TailwindIcon,
} from "@/components/ui/Icons";

export function HeroOrbitArc() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none absolute bottom-[35px] sm:bottom-[clamp(48px,9vh,95px)] left-1/2 -translate-x-1/2 w-[345px] sm:w-[clamp(500px,96vh,1080px)] h-[175px] sm:h-[clamp(250px,48vh,540px)] z-0 overflow-visible origin-bottom transition-all duration-300"
    >
      <style>{`
        @keyframes heroOrbitFloat {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-5px);
          }
        }
        @keyframes heroOrbitFloatApex {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-5px);
          }
        }
      `}</style>

      {/* ── 1. SVG Orbit Arc (ViewBox 0 0 800 400) ───────────────── */}
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main Arc Gradient: Transparent -> Orange (#FF6A00) -> Transparent */}
          <linearGradient id="orbitArcGradient" x1="0%" y1="100%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.1" />
            <stop offset="16%" stopColor="#FF6A00" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#FF6A00" stopOpacity="0.95" />
            <stop offset="84%" stopColor="#FF6A00" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FF6A00" stopOpacity="0.1" />
          </linearGradient>

          {/* Glow Filter for Traveling Dot */}
          <filter id="orbitDotGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Hidden TextPath Arc (Radius 368px, slightly larger than main arc) */}
          <path
            id="orbitTextArcPath"
            d="M 32 395 A 368 368 0 0 1 768 395"
            fill="none"
          />
        </defs>

        {/* ── 1a. Thin Solid Gradient Semicircle Arc (Visible across all viewports) ── */}
        <path
          d="M 55 395 A 345 345 0 0 1 745 395"
          fill="none"
          stroke="url(#orbitArcGradient)"
          strokeWidth="1.5"
          className="block"
        />

        {/* ── 1b. Dotted Dashed Orbit Trajectory in Orange ── */}
        <path
          d="M 70 395 A 330 330 0 0 1 730 395"
          fill="none"
          stroke="#FF6A00"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          strokeLinecap="round"
          className="block"
        />

        {/* ── 2. Arc Text along larger textPath (Responsive typography) ── */}
        <text
          letterSpacing="6px"
          fill="#1c1c24"
          fillOpacity="0.55"
          className="hidden sm:block font-mono text-[10px] md:text-[11px] font-medium uppercase select-none dark:fill-neutral-300 dark:fill-opacity-50"
        >
          <textPath href="#orbitTextArcPath" startOffset="50%" textAnchor="middle">
            ANGULAR • RXJS • TYPESCRIPT • NEXT.JS • .NET CORE • REACT • TAILWIND
          </textPath>
        </text>

        {/* ── 3. Glowing Orange (#FF6A00) Dot Travelling Continuously along Arc (9s) ── */}
        <g className="block">
          {/* Subtle Outer Halo */}
          <circle r="7" fill="#FF6A00" opacity="0.3" filter="url(#orbitDotGlow)">
            <animateMotion
              path="M 55 395 A 345 345 0 0 1 745 395"
              dur="9s"
              repeatCount="indefinite"
            />
          </circle>
          {/* Core Glow Dot */}
          <circle r="4" fill="#FF6A00">
            <animateMotion
              path="M 55 395 A 345 345 0 0 1 745 395"
              dur="9s"
              repeatCount="indefinite"
            />
          </circle>
          {/* Intense Center Specular Highlight */}
          <circle r="1.5" fill="#FFFFFF">
            <animateMotion
              path="M 55 395 A 345 345 0 0 1 745 395"
              dur="9s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>

      {/* ── 4. Symmetrical Celestial Orbit Nodes (FULLY VISIBLE ON MOBILE & DESKTOP) ── */}

      {/* Node 1: Lower Left (158°) — Matches text "ANGULAR" */}
      <div
        style={{
          left: "11%",
          top: "67%",
          animation: "heroOrbitFloat 5s ease-in-out infinite 0.4s",
        }}
        className="flex pointer-events-auto absolute z-20 items-center justify-center w-7 h-7 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white/95 dark:bg-[#0E131F]/95 border border-white/90 dark:border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:scale-115 hover:border-red-500/60 hover:shadow-red-500/20 transition-all cursor-pointer group"
      >
        <AngularIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
        <span className="absolute -bottom-6 sm:-bottom-7 left-1/2 -translate-x-1/2 font-mono font-bold text-[9px] sm:text-[10px] text-neutral-800 dark:text-neutral-200 bg-white/95 dark:bg-[#0B0F17]/95 px-1.5 sm:px-2 py-0.5 rounded-md shadow-md border border-neutral-200/80 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30">
          Angular
        </span>
      </div>

      {/* Node 2: Mid Left (132°) — Matches text "RXJS" */}
      <div
        style={{
          left: "22%",
          top: "36%",
          animation: "heroOrbitFloat 5s ease-in-out infinite 1.2s",
        }}
        className="flex pointer-events-auto absolute z-20 items-center justify-center w-7 h-7 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white/95 dark:bg-[#0E131F]/95 border border-white/90 dark:border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:scale-115 hover:border-pink-500/60 hover:shadow-pink-500/20 transition-all cursor-pointer group"
      >
        <RxjsIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
        <span className="absolute -bottom-6 sm:-bottom-7 left-1/2 -translate-x-1/2 font-mono font-bold text-[9px] sm:text-[10px] text-neutral-800 dark:text-neutral-200 bg-white/95 dark:bg-[#0B0F17]/95 px-1.5 sm:px-2 py-0.5 rounded-md shadow-md border border-neutral-200/80 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30">
          RxJS
        </span>
      </div>

      {/* Node 3: Upper Left (106°) — Matches text "TYPESCRIPT" */}
      <div
        style={{
          left: "38.5%",
          top: "17.5%",
          animation: "heroOrbitFloat 5s ease-in-out infinite 2.0s",
        }}
        className="flex pointer-events-auto absolute z-20 items-center justify-center w-7 h-7 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white/95 dark:bg-[#0E131F]/95 border border-white/90 dark:border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:scale-115 hover:border-blue-500/60 hover:shadow-blue-500/20 transition-all cursor-pointer group"
      >
        <TypeScriptIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
        <span className="absolute -bottom-6 sm:-bottom-7 left-1/2 -translate-x-1/2 font-mono font-bold text-[9px] sm:text-[10px] text-neutral-800 dark:text-neutral-200 bg-white/95 dark:bg-[#0B0F17]/95 px-1.5 sm:px-2 py-0.5 rounded-md shadow-md border border-neutral-200/80 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30">
          TypeScript
        </span>
      </div>

      {/* Node 4: Top Center Apex (90°) — Matches text "NEXT.JS" */}
      <div
        style={{
          left: "50%",
          top: "14%",
          animation: "heroOrbitFloatApex 5s ease-in-out infinite 2.8s",
        }}
        className="flex pointer-events-auto absolute z-30 items-center justify-center w-8 h-8 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/95 dark:bg-[#0E131F]/95 border border-white/90 dark:border-white/20 shadow-[0_6px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.6)] backdrop-blur-xl hover:scale-115 hover:border-[#FF6A00]/60 hover:shadow-[#FF6A00]/25 transition-all cursor-pointer group"
      >
        <NextjsIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
        <span className="absolute -bottom-6 sm:-bottom-7 left-1/2 -translate-x-1/2 font-mono font-bold text-[9px] sm:text-[10px] text-neutral-800 dark:text-neutral-200 bg-white/95 dark:bg-[#0B0F17]/95 px-1.5 sm:px-2 py-0.5 rounded-md shadow-md border border-neutral-200/80 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30">
          Next.js
        </span>
      </div>

      {/* Node 5: Upper Right (74°) — Matches text ".NET CORE" */}
      <div
        style={{
          left: "61.5%",
          top: "17.5%",
          animation: "heroOrbitFloat 5s ease-in-out infinite 3.6s",
        }}
        className="flex pointer-events-auto absolute z-20 items-center justify-center w-7 h-7 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white/95 dark:bg-[#0E131F]/95 border border-white/90 dark:border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:scale-115 hover:border-purple-500/60 hover:shadow-purple-500/20 transition-all cursor-pointer group"
      >
        <DotNetIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
        <span className="absolute -bottom-6 sm:-bottom-7 left-1/2 -translate-x-1/2 font-mono font-bold text-[9px] sm:text-[10px] text-neutral-800 dark:text-neutral-200 bg-white/95 dark:bg-[#0B0F17]/95 px-1.5 sm:px-2 py-0.5 rounded-md shadow-md border border-neutral-200/80 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30">
          .NET
        </span>
      </div>

      {/* Node 6: Mid Right (48°) — Matches text "REACT" */}
      <div
        style={{
          left: "78%",
          top: "36%",
          animation: "heroOrbitFloat 5s ease-in-out infinite 4.4s",
        }}
        className="flex pointer-events-auto absolute z-20 items-center justify-center w-7 h-7 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white/95 dark:bg-[#0E131F]/95 border border-white/90 dark:border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:scale-115 hover:border-sky-400/60 hover:shadow-sky-400/20 transition-all cursor-pointer group"
      >
        <ReactIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
        <span className="absolute -bottom-6 sm:-bottom-7 left-1/2 -translate-x-1/2 font-mono font-bold text-[9px] sm:text-[10px] text-neutral-800 dark:text-neutral-200 bg-white/95 dark:bg-[#0B0F17]/95 px-1.5 sm:px-2 py-0.5 rounded-md shadow-md border border-neutral-200/80 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30">
          React
        </span>
      </div>

      {/* Node 7: Lower Right (22°) — Matches text "TAILWIND" */}
      <div
        style={{
          left: "89%",
          top: "67%",
          animation: "heroOrbitFloat 5s ease-in-out infinite 0.8s",
        }}
        className="flex pointer-events-auto absolute z-20 items-center justify-center w-7 h-7 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white/95 dark:bg-[#0E131F]/95 border border-white/90 dark:border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:scale-115 hover:border-cyan-400/60 hover:shadow-cyan-400/20 transition-all cursor-pointer group"
      >
        <TailwindIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
        <span className="absolute -bottom-6 sm:-bottom-7 left-1/2 -translate-x-1/2 font-mono font-bold text-[9px] sm:text-[10px] text-neutral-800 dark:text-neutral-200 bg-white/95 dark:bg-[#0B0F17]/95 px-1.5 sm:px-2 py-0.5 rounded-md shadow-md border border-neutral-200/80 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30">
          Tailwind
        </span>
      </div>
    </div>
  );
}
