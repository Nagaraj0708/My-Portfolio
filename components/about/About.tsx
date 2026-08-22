"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { educationData, certificationData } from "@/data/experience";
import { Award, Briefcase, GraduationCap, Code2, Layers, TrendingUp, CheckCircle2, Check, Sparkles } from "lucide-react";

export function About() {
  const [activeStoryTab, setActiveStoryTab] = useState<"journey" | "foxconn" | "philosophy">("journey");

  return (
    <section
      id="about"
      aria-label="About Nagaraj K"
      className="pt-28 md:pt-36 pb-16 px-4 md:px-8 max-w-6xl mx-auto border-t border-slate-200/80 dark:border-slate-800"
    >
      {/* ── Section Label & Main Heading ──────────────────────── */}
      <div className="flex flex-col space-y-3 mb-12 max-w-2xl">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
          ABOUT ME
        </span>
        <h2 className="font-sans font-extrabold text-3xl md:text-5xl text-slate-900 dark:text-white tracking-tight leading-[1.08]">
          Building Meaningful <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">Digital Experiences</span>
        </h2>
      </div>

      {/* ── ROW 1: Story Narrative & Interactive Tabs ─────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
        {/* Left Column: Intro & Navigation Tabs */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <p className="font-sans text-base md:text-lg text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
            I am a Front-End Developer dedicated to building clean, accessible, and high-performance web applications tailored to enterprise requirements.
          </p>

          {/* Interactive Story Pills */}
          <div className="flex flex-col space-y-2.5 p-2 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800">
            <button
              onClick={() => setActiveStoryTab("journey")}
              className={`p-3.5 rounded-xl font-mono text-xs font-bold transition-all text-left flex items-center justify-between cursor-pointer ${
                activeStoryTab === "journey"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>01. Engineering Transition</span>
              </div>
              <span className="text-[10px]">&rarr;</span>
            </button>

            <button
              onClick={() => setActiveStoryTab("foxconn")}
              className={`p-3.5 rounded-xl font-mono text-xs font-bold transition-all text-left flex items-center justify-between cursor-pointer ${
                activeStoryTab === "foxconn"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <div className="flex items-center space-x-3">
                <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>02. Foxconn Leadership ($20K Win)</span>
              </div>
              <span className="text-[10px]">&rarr;</span>
            </button>

            <button
              onClick={() => setActiveStoryTab("philosophy")}
              className={`p-3.5 rounded-xl font-mono text-xs font-bold transition-all text-left flex items-center justify-between cursor-pointer ${
                activeStoryTab === "philosophy"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <div className="flex items-center space-x-3">
                <Briefcase className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>03. Software Mindset</span>
              </div>
              <span className="text-[10px]">&rarr;</span>
            </button>
          </div>
        </div>

        {/* Right Column: Dynamic Story View */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-center min-h-[320px]">
          <AnimatePresence mode="wait">
            {activeStoryTab === "journey" && (
              <motion.div
                key="journey"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4 font-sans text-base text-slate-600 dark:text-slate-300 leading-relaxed"
              >
                <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest">
                  CHAPTER 01 — THE FOUNDATION
                </span>
                <h3 className="font-sans font-extrabold text-2xl text-slate-900 dark:text-white">
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
                className="space-y-4 font-sans text-base text-slate-600 dark:text-slate-300 leading-relaxed"
              >
                <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest">
                  CHAPTER 02 — OPERATIONAL EXCELLENCE
                </span>
                <h3 className="font-sans font-extrabold text-2xl text-slate-900 dark:text-white">
                  Foxconn Manufacturing Leadership &amp; Dual Promotions
                </h3>
                <p>
                  Leading production line quality operations at Foxconn Pvt Ltd reinforced the value of process discipline, accountability, and operational efficiency.
                </p>
                <p className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-medium p-4 rounded-xl border border-slate-200 dark:border-slate-700">
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
                className="space-y-4 font-sans text-base text-slate-600 dark:text-slate-300 leading-relaxed"
              >
                <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest">
                  CHAPTER 03 — SOFTWARE ENGINEERING
                </span>
                <h3 className="font-sans font-extrabold text-2xl text-slate-900 dark:text-white">
                  Enterprise Angular &amp; .NET REST Web APIs
                </h3>
                <p>
                  Transitioning into front-end software development was a natural application of that systems mindset. Today, I build modular single-page applications with Angular and TypeScript, integrating REST Web APIs powered by ASP.NET Core and SQL Server.
                </p>
                <blockquote className="text-slate-900 dark:text-slate-100 font-medium border-l-4 border-slate-900 dark:border-white pl-4 py-2 my-2 bg-slate-100 dark:bg-slate-800 rounded-r-lg">
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
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-extrabold text-lg text-slate-900 dark:text-white">
                  Education &amp; Academic Degrees
                </h3>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400 font-bold">
                  Electronics &amp; Communication Engineering
                </span>
              </div>
            </div>
            <span className="font-mono text-[10px] font-bold text-slate-900 dark:text-white uppercase tracking-widest bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700 hidden sm:inline-block">
              2 DEGREES
            </span>
          </div>

          {/* Timeline List */}
          <div className="relative pl-5 border-l-2 border-slate-200 dark:border-slate-800 space-y-6">
            {educationData.map((edu, idx) => (
              <div key={idx} className="relative flex flex-col space-y-1.5 group">
                {/* Timeline Node Dot */}
                <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-slate-900 dark:bg-white border-2 border-white dark:border-slate-900 group-hover:scale-125 transition-transform" />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-extrabold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                    {edu.period}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {edu.badge}
                  </span>
                </div>

                <h4 className="font-sans font-bold text-base text-slate-900 dark:text-white leading-snug pt-1">
                  {edu.degree}
                </h4>

                <span className="font-sans font-semibold text-xs text-slate-600 dark:text-slate-400">
                  {edu.institution}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Bento Card: PROFESSIONAL CERTIFICATIONS */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-extrabold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  Professional Certifications
                </h3>
                <span className="font-mono text-xs text-blue-600 dark:text-blue-400 font-bold">
                  Verified Angular &amp; Front-End Credentials
                </span>
              </div>
            </div>
            <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-full border border-blue-200 dark:border-blue-800 hidden sm:inline-block">
              VERIFIED
            </span>
          </div>

          {/* Certifications Cards List */}
          <div className="space-y-4">
            {certificationData.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl flex items-center justify-between shadow-2xs hover:border-blue-400 dark:hover:border-blue-500 transition-all group"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-sm text-slate-900 dark:text-white transition-colors">
                      {cert.title}
                    </span>
                    <span className="font-sans text-xs text-blue-600 dark:text-blue-400 font-semibold">
                      {cert.issuer}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-full border border-blue-200 dark:border-blue-800 shrink-0">
                  {cert.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ROW 3: "WHAT DRIVES ME" Mini Cards Grid ─────────────── */}
      <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
        <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400 block mb-6">
          WHAT DRIVES ME
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Engineering */}
          <div className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 flex flex-col space-y-3">
            <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 w-fit group-hover:rotate-6 transition-transform">
              <Code2 className="w-5 h-5" />
            </div>
            <h4 className="font-sans font-bold text-lg text-slate-900 dark:text-white transition-colors">
              Engineering
            </h4>
            <p className="font-sans text-xs md:text-sm text-blue-600 dark:text-blue-400 font-semibold">
              Angular • TypeScript • Modern UI Development
            </p>
          </div>

          {/* Card 2: Experience */}
          <div className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-xl hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300 flex flex-col space-y-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 w-fit group-hover:rotate-6 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="font-sans font-bold text-lg text-slate-900 dark:text-white transition-colors">
              Experience
            </h4>
            <p className="font-sans text-xs md:text-sm text-indigo-600 dark:text-indigo-400 font-semibold">
              Real-world • Business Applications
            </p>
          </div>

          {/* Card 3: Growth */}
          <div className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-xl hover:border-emerald-400 dark:hover:border-emerald-500 transition-all duration-300 flex flex-col space-y-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 w-fit group-hover:rotate-6 transition-transform">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="font-sans font-bold text-lg text-slate-900 dark:text-white transition-colors">
              Growth
            </h4>
            <p className="font-sans text-xs md:text-sm text-emerald-600 dark:text-emerald-400 font-semibold">
              Continuous Learning • Problem Solving
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
