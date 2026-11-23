"use client";

import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  FileText,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { HeroOrbitArc } from "@/components/HeroOrbitArc";

/* ── Interactive 3D Perspective Tilt ──────────────────────── */
function TiltFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 220, damping: 22 });
  const mouseY = useSpring(y, { stiffness: 220, damping: 22 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xVal = (e.clientX - rect.left) / rect.width - 0.5;
    const yVal = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xVal);
    y.set(yVal);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const scrollTo = (id: string) => {
    const lenis = typeof window !== "undefined" ? (window as any).__lenis : null;
    const elem = document.getElementById(id);
    if (elem) {
      if (lenis) {
        lenis.scrollTo(elem, { offset: -70, duration: 1.0 });
      } else {
        const top = elem.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <div
      id="hero"
      className="relative w-full flex flex-col justify-between bg-[#FDFBF7] dark:bg-[#070A12] text-neutral-900 dark:text-white transition-colors duration-500 overflow-hidden pt-16 sm:pt-20 md:pt-20 pb-0"
    >
      {/* ── Technical Grid Mesh ──────────────────────────────── */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2430_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      {/* ── Soft Warm Radial Ambient Light ───────────────────── */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#FF6600]/8 rounded-full blur-[130px] pointer-events-none" />

      {/* ── Main Landing Stage ───────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col items-center text-center">

        {/* Clean, High-Impact Typographic Headline */}
        <h1 className="font-sans font-black tracking-tight text-neutral-900 dark:text-white leading-[1.08] max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem]">
          I&apos;m{" "}
          <span className="relative inline-block text-[#FF6600]">
            Nagaraj
            {/* Elegant curved underline */}
            <svg className="absolute -bottom-1 inset-x-0 w-full h-2 text-[#FF6600]/40" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0 15 Q 50 2 100 15" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </span>
          , <br className="hidden sm:inline" />
          <span className="text-neutral-900 dark:text-neutral-100">
            Front-End Developer
          </span>
        </h1>

        {/* Concise Subtitle */}
        <p className="font-sans text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-400 mt-2 max-w-2xl font-normal leading-relaxed">
          Bringing Foxconn manufacturing precision to enterprise Angular SPAs, high-throughput RxJS pipelines, and ASP.NET Core web systems.
        </p>

        {/* ── Clean Hero Action CTAs (Above the fold, properly placed) ── */}
        <div className="flex items-center justify-center gap-3.5 mt-3 sm:mt-4 mb-4 sm:mb-6 z-20">
          <button
            onClick={() => scrollTo("projects")}
            className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-[#FF6600] hover:bg-[#E65C00] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#FF6600]/30 flex items-center gap-2 cursor-pointer transition-all border border-white/20 select-none hover:scale-105 active:scale-95"
          >
            <span>Explore Work</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href={siteConfig.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            download="Nagaraj Resume.pdf"
            className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-white/90 dark:bg-[#0E131F]/90 text-neutral-800 dark:text-white border border-neutral-300 dark:border-white/15 font-mono text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-neutral-100 dark:hover:bg-[#151C2C] flex items-center gap-2 cursor-pointer transition-all select-none backdrop-blur-md hover:scale-105 active:scale-95"
          >
            <FileText className="w-4 h-4 text-[#FF6600]" />
            <span>Resume</span>
          </a>
        </div>

        {/* ── Centerpiece: Warm Sunset Arc & High-Res Seated Cutout Portrait ── */}
        <div className="relative mt-3 sm:mt-5 mb-4 w-full max-w-5xl flex justify-center items-center">

          {/* ── Premium Tech-Stack Orbit Arc Decoration ── */}
          <HeroOrbitArc />

          {/* Warm Geometric Arc Backdrop */}
          <div className="absolute bottom-0 w-[280px] sm:w-[380px] md:w-[440px] h-[140px] sm:h-[190px] md:h-[220px] bg-gradient-to-t from-[#FF6600] via-[#FF7A1A] to-[#FFA04D] rounded-t-full shadow-[0_20px_50px_rgba(255,102,0,0.3)] z-0" />

          {/* Concentric Subtle Radial Ring */}
          <div className="absolute bottom-0 w-[310px] sm:w-[420px] md:w-[490px] h-[155px] sm:h-[210px] md:h-[245px] border border-[#FF6600]/30 rounded-t-full z-0 pointer-events-none" />

          {/* ── Seated Portrait (Completely Unobstructed from Head to Shoes) ── */}
          <TiltFrame className="relative z-10 w-[260px] sm:w-[320px] md:w-[360px] h-[300px] sm:h-[370px] md:h-[410px] flex items-end justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/nagaraj-seated.png"
                alt="Nagaraj K — Front-End Developer"
                fill
                priority
                quality={100}
                className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)] select-none pointer-events-none"
                sizes="(max-width: 768px) 320px, 420px"
              />
            </div>
          </TiltFrame>

        </div>

      </div>

      {/* ── Curved Dark Card Transition (Reference 1) ─────────── */}
      <div className="w-full h-10 md:h-14 bg-[#070A12] rounded-t-[36px] md:rounded-t-[50px] border-t border-white/10 relative z-20 -mb-1 shadow-[0_-20px_40px_rgba(0,0,0,0.4)]" />
    </div>
  );
}
