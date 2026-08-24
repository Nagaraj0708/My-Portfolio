"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, MapPin, Zap, CheckCircle2, Sparkles, Box } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { SocialFlipButton, PopButton, CreepyButton } from "@/components/ui/vengence-buttons";

/* ── Technical Stack Tokens ───────────────────────────────── */
const HERO_STACK = [
  { id: 1, name: "Angular 14+", designation: "RxJS, Modules & Directives", iconText: "NG", badgeBg: "bg-red-600" },
  { id: 2, name: "TypeScript", designation: "Strict Typing & Interfaces", iconText: "TS", badgeBg: "bg-blue-600" },
  { id: 3, name: "ASP.NET Core", designation: "Web APIs & EF Core", iconText: ".NET", badgeBg: "bg-purple-600" },
  { id: 4, name: "RxJS", designation: "Reactive Streams & State", iconText: "Rx", badgeBg: "bg-pink-600" },
  { id: 5, name: "SQL Server", designation: "T-SQL & Stored Procedures", iconText: "SQL", badgeBg: "bg-emerald-600" },
];

const MARQUEE_ITEMS = [
  "Angular 14+", "•", "TypeScript", "•", "ASP.NET Core", "•", "RxJS", "•",
  "SQL Server", "•", "Next.js", "•", "Tailwind CSS", "•", "Azure DevOps", "•",
  "Entity Framework", "•", "C#", "•", "Framer Motion", "•"
];

/* ── Micro Animations ─────────────────────────────────────── */
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Hero Component ───────────────────────────────────────── */
export function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [portraitSrc, setPortraitSrc] = useState("/nagaraj-portrait-hd.png");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="hero" className="relative w-full min-h-screen flex flex-col justify-between bg-[#F8F7F4] text-[#1A1A1A] overflow-hidden">

      {/* ── Background Subtle Grid Mesh ──────────────────────── */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* ── Top Ambient Accent Line ──────────────────────────── */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 z-30" />

      {/* ── Main Container ───────────────────────────────────── */}
      <section aria-label="Hero Section" className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7 lg:pt-8 pb-6 sm:pb-8 flex-1">

        {/* Upper Availability & Location Pill */}
        <FadeUp delay={0.05} className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-mono text-xs font-bold text-neutral-800 tracking-wide">NAGARAJ K</span>
            <span className="text-neutral-300">|</span>
            <span className="font-mono text-xs font-semibold text-neutral-500">FRONT-END DEVELOPER</span>
          </div>
        </FadeUp>

        {/* Hero Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* LEFT CONTENT COLUMN (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">

            {/* Headline */}
            <FadeUp delay={0.1} className="space-y-4">
              <h1 className="font-sans font-black tracking-tight text-neutral-900 leading-[1.05]" style={{ fontSize: "clamp(2.5rem, 4.5vw, 4.2rem)" }}>
                Crafting High-Impact <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Enterprise Web Systems
                </span>
              </h1>
              <p className="font-sans text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl font-normal">
                Front-End Developer bringing hardware engineering discipline and manufacturing precision to enterprise Angular SPAs &amp; ASP.NET Core web platforms.
              </p>
            </FadeUp>

            {/* Impact Metrics Grid */}
            <FadeUp delay={0.2} className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-sm">
              <div className="flex flex-col">
                <span className="font-mono font-black text-2xl sm:text-3xl text-neutral-900 leading-none">1+ Yr</span>
                <span className="font-sans text-xs font-medium text-neutral-500 mt-1.5">Company Experience</span>
              </div>
              <div className="flex flex-col border-l border-neutral-200 pl-4">
                <span className="font-mono font-black text-2xl sm:text-3xl text-neutral-900 leading-none">10+</span>
                <span className="font-sans text-xs font-medium text-neutral-500 mt-1.5">Enterprise Projects</span>
              </div>
              <div className="flex flex-col border-l border-neutral-200 pl-4">
                <span className="font-mono font-black text-2xl sm:text-3xl text-blue-600 leading-none">$20K+</span>
                <span className="font-sans text-xs font-medium text-neutral-500 mt-1.5">Foxconn Cost Saved</span>
              </div>
            </FadeUp>

            {/* CTAs & Stack */}
            <FadeUp delay={0.3} className="space-y-6 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                {/* Primary Vengence Pop Button */}
                <PopButton
                  icon={Box}
                  onClick={() => {
                    const el = document.getElementById("projects");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span>Explore 3D Work Showcase</span>
                  <ArrowRight className="w-4 h-4" />
                </PopButton>

                {/* Vengence Social Flip Button */}
                <SocialFlipButton
                  frontLabel="GitHub Profile"
                  backLabel="Open Repositories"
                  href={siteConfig.github}
                />

                {/* Secondary Download Button */}
                <a
                  href={siteConfig.resumePdf}
                  download="Nagaraj Resume.pdf"
                  className="inline-flex items-center gap-2 font-mono text-xs font-semibold px-5 py-3 rounded-2xl bg-white border border-neutral-300 text-neutral-800 hover:bg-neutral-50 hover:border-neutral-400 transition-all shadow-xs"
                >
                  <Download className="w-4 h-4 text-neutral-500" />
                  <span>Download CV</span>
                </a>
              </div>

              {/* Core Stack Tooltip */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-200/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] font-bold uppercase text-neutral-400 tracking-wider">Core Stack</span>
                  <AnimatedTooltip items={HERO_STACK} />
                </div>
              </div>
            </FadeUp>

          </div>

          {/* RIGHT DEVELOPER PORTRAIT CARD (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <FadeUp delay={0.25} className="w-full max-w-md">
              <div className="relative rounded-3xl p-3 bg-white border border-neutral-200 shadow-xl shadow-neutral-200/50">

                {/* Image Container with portrait ratio */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100">
                  <Image
                    src={portraitSrc}
                    alt="Nagaraj K — Front-End Developer"
                    fill
                    priority
                    quality={100}
                    onError={() => setPortraitSrc("/nagaraj-portrait.jpg")}
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-top hover:scale-103 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient highlight mask at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent pointer-events-none" />

                  {/* Bottom Info Floating Glass Card */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/80 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-sans font-black text-neutral-900 text-lg leading-tight">Nagaraj K</h3>
                        <p className="font-mono text-xs font-semibold text-neutral-500 mt-0.5">Enterprise Web Systems Engineer</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </FadeUp>
          </div>

        </div>

      </section>

      {/* ── Marquee Ticker ───────────────────────────────────── */}
      <div className="relative z-20 border-t border-b border-neutral-200/90 bg-white py-3">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-8 whitespace-nowrap w-max"
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <span
              key={idx}
              className={`font-mono text-xs font-bold tracking-wider ${item === "•" ? "text-blue-500" : "text-neutral-400 uppercase"
                }`}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>

    </div>
  );
}
