"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { educationData, certificationData } from "@/data/experience";
import {
  Award,
  Briefcase,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
} from "lucide-react";

export function About() {
  const [activeStoryTab, setActiveStoryTab] = useState<
    "journey" | "foxconn" | "philosophy"
  >("journey");

  return (
    <section
      id="about"
      aria-label="About Nagaraj K"
      className="pt-28 md:pt-36 pb-16 px-4 md:px-8 max-w-6xl mx-auto border-t border-neutral-200/80 dark:border-white/10"
    >
      {/* ── Section Label & Main Heading ──────────────────────── */}
      <div className="flex flex-col space-y-3 mb-12 max-w-2xl">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF6600]">
          ABOUT ME
        </span>
        <h2 className="font-sans font-black text-3xl md:text-5xl text-neutral-900 dark:text-white tracking-tight leading-[1.08]">
          Building Meaningful <br />
          <span className="text-[#FF6600]">Digital Systems</span>
        </h2>
      </div>

      {/* ── ROW 1: Story Narrative with Polaroid & Interactive Tabs ─────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
        {/* Left Column: Polaroid Photo & Narrative intro (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          {/* Framed Editorial "Techie" Photo (User Uploaded) */}
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-white/10 shadow-xl group">
            <Image
              src="/nagaraj-polaroid.jpg"
              alt="Nagaraj K — Techie Portrait"
              fill
              className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 420px"
            />
            {/* Ambient vignette gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10">
              <div>
                <span className="font-sans font-black text-sm">Nagaraj K</span>
                <p className="font-mono text-[10px] text-[#FF6600] font-bold">
                  Frontend &amp; Systems Architect
                </p>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#FF6600] text-white flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Interactive Story Pills */}
          <div className="flex flex-col space-y-2 p-2 rounded-2xl bg-neutral-100/90 dark:bg-[#0B0F17] border border-neutral-200/90 dark:border-white/10">
            <button
              onClick={() => setActiveStoryTab("journey")}
              className={`p-3 rounded-xl font-mono text-xs font-bold transition-all text-left flex items-center justify-between cursor-pointer ${
                activeStoryTab === "journey"
                  ? "bg-white dark:bg-[#141824] text-neutral-900 dark:text-white shadow-sm border border-neutral-200 dark:border-white/10"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-4 h-4 text-[#FF6600]" />
                <span>01. Engineering Transition</span>
              </div>
              <span className="text-[10px]">&rarr;</span>
            </button>

            <button
              onClick={() => setActiveStoryTab("foxconn")}
              className={`p-3 rounded-xl font-mono text-xs font-bold transition-all text-left flex items-center justify-between cursor-pointer ${
                activeStoryTab === "foxconn"
                  ? "bg-white dark:bg-[#141824] text-neutral-900 dark:text-white shadow-sm border border-neutral-200 dark:border-white/10"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              <div className="flex items-center space-x-3">
                <Award className="w-4 h-4 text-emerald-500" />
                <span>02. Foxconn Leadership ($20K Win)</span>
              </div>
              <span className="text-[10px]">&rarr;</span>
            </button>

            <button
              onClick={() => setActiveStoryTab("philosophy")}
              className={`p-3 rounded-xl font-mono text-xs font-bold transition-all text-left flex items-center justify-between cursor-pointer ${
                activeStoryTab === "philosophy"
                  ? "bg-white dark:bg-[#141824] text-neutral-900 dark:text-white shadow-sm border border-neutral-200 dark:border-white/10"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              <div className="flex items-center space-x-3">
                <Briefcase className="w-4 h-4 text-[#FF6600]" />
                <span>03. Software Mindset</span>
              </div>
              <span className="text-[10px]">&rarr;</span>
            </button>
          </div>
        </div>

        {/* Right Column: Dynamic Story Narrative (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0B0F17] border border-neutral-200/90 dark:border-white/10 shadow-sm flex flex-col justify-center min-h-[320px]">
          <AnimatePresence mode="wait">
            {activeStoryTab === "journey" && (
              <motion.div
                key="journey"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4 font-sans text-base text-neutral-700 dark:text-neutral-300 leading-relaxed"
              >
                <span className="font-mono text-xs font-bold text-[#FF6600] uppercase tracking-widest">
                  CHAPTER 01 — THE FOUNDATION
                </span>
                <h3 className="font-sans font-black text-2xl text-neutral-900 dark:text-white">
                  Hardware Precision &amp; Systems Engineering
                </h3>
                <p>
                  My engineering journey is grounded in Electronics &amp; Communication Engineering—earning a Bachelor of Engineering from <strong>Meenakshi Sundararajan Engineering College</strong> (2016-2019) and a Diploma from <strong>Panimalar Polytechnic College</strong> (2013-2016).
                </p>
                <p>
                  This technical foundation instilled deep diagnostic logic, memory lifecycle awareness, and structured problem-solving before my full transition into enterprise front-end web development.
                </p>
              </motion.div>
            )}

            {activeStoryTab === "foxconn" && (
              <motion.div
                key="foxconn"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4 font-sans text-base text-neutral-700 dark:text-neutral-300 leading-relaxed"
              >
                <span className="font-mono text-xs font-bold text-emerald-500 uppercase tracking-widest">
                  CHAPTER 02 — OPERATIONAL EXCELLENCE
                </span>
                <h3 className="font-sans font-black text-2xl text-neutral-900 dark:text-white">
                  Foxconn Manufacturing Leadership &amp; Dual Promotions
                </h3>
                <p>
                  Leading production line quality operations at Foxconn Pvt Ltd reinforced the value of process discipline, accountability, and operational efficiency.
                </p>
                <p className="bg-neutral-100 dark:bg-white/5 text-neutral-900 dark:text-neutral-100 font-medium p-4 rounded-2xl border border-neutral-200 dark:border-white/10">
                  That experience taught me how small system bottlenecks accumulate and how continuous optimization yields measurable results—driving $20K in line efficiency improvements and earning dual promotions within my first year.
                </p>
              </motion.div>
            )}

            {activeStoryTab === "philosophy" && (
              <motion.div
                key="philosophy"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4 font-sans text-base text-neutral-700 dark:text-neutral-300 leading-relaxed"
              >
                <span className="font-mono text-xs font-bold text-[#FF6600] uppercase tracking-widest">
                  CHAPTER 03 — SOFTWARE ENGINEERING
                </span>
                <h3 className="font-sans font-black text-2xl text-neutral-900 dark:text-white">
                  Enterprise Angular &amp; .NET REST Web APIs
                </h3>
                <p>
                  Transitioning into front-end software development was a natural application of that systems mindset. Today, I build modular single-page applications with Angular and TypeScript, integrating REST Web APIs powered by ASP.NET Core and SQL Server.
                </p>
                <blockquote className="text-neutral-900 dark:text-neutral-100 font-medium border-l-4 border-[#FF6600] pl-4 py-2 my-2 bg-neutral-100 dark:bg-white/5 rounded-r-xl">
                  &ldquo;I bring hardware-grade precision and process discipline to web software—ensuring every UI component, reactive state pipeline, and API integration is built for real-world execution.&rdquo;
                </blockquote>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── ROW 2: Dedicated Bento Grid — Education & Certifications ────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Left Bento Card: ACADEMIC EDUCATION */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0B0F17] border border-neutral-200/90 dark:border-white/10 shadow-sm flex flex-col justify-between space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-white/10">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-neutral-100 dark:bg-white/5 text-neutral-900 dark:text-white border border-neutral-200 dark:border-white/10">
                <GraduationCap className="w-5 h-5 text-[#FF6600]" />
              </div>
              <div>
                <h3 className="font-sans font-black text-lg text-neutral-900 dark:text-white">
                  Education &amp; Academic Degrees
                </h3>
                <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400 font-bold">
                  Electronics &amp; Communication Engineering
                </span>
              </div>
            </div>
            <span className="font-mono text-[10px] font-bold text-[#FF6600] uppercase tracking-widest bg-[#FF6600]/10 px-2.5 py-1 rounded-full border border-[#FF6600]/20 hidden sm:inline-block">
              2 DEGREES
            </span>
          </div>

          {/* Timeline List */}
          <div className="relative pl-5 border-l-2 border-neutral-200 dark:border-white/10 space-y-6">
            {educationData.map((edu, idx) => (
              <div key={idx} className="relative flex flex-col space-y-1.5 group">
                <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-[#FF6600] border-2 border-white dark:border-[#0B0F17] group-hover:scale-125 transition-transform" />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-neutral-900 dark:text-white bg-neutral-100 dark:bg-white/5 px-2.5 py-0.5 rounded border border-neutral-200 dark:border-white/10">
                    {edu.period}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                    {edu.badge}
                  </span>
                </div>

                <h4 className="font-sans font-bold text-base text-neutral-900 dark:text-white leading-snug pt-1">
                  {edu.degree}
                </h4>

                <span className="font-sans font-semibold text-xs text-neutral-600 dark:text-neutral-400">
                  {edu.institution}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Bento Card: PROFESSIONAL CERTIFICATIONS */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0B0F17] border border-neutral-200/90 dark:border-white/10 shadow-sm flex flex-col justify-between space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-white/10">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-[#FF6600]/10 text-[#FF6600] border border-[#FF6600]/20">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-black text-lg text-neutral-900 dark:text-white">
                  Professional Certifications
                </h3>
                <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400 font-bold">
                  Industry Verified Credentials
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {certificationData.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200/80 dark:border-white/10 flex items-center justify-between gap-4"
              >
                <div>
                  <h4 className="font-sans font-bold text-sm text-neutral-900 dark:text-white">
                    {cert.title}
                  </h4>
                  <span className="font-sans text-xs text-neutral-500 dark:text-neutral-400">
                    {cert.issuer} {cert.badge ? `• ${cert.badge}` : ""}
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
