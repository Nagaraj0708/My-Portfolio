"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, FolderKanban, ExternalLink, UserCheck, BookOpen, Layers, CheckCircle2 } from "lucide-react";
import { projectsData, Project } from "@/data/projects";
import { ProjectMockupPlaceholder } from "./ProjectMockupPlaceholder";
import { CaseStudyModal } from "./CaseStudyModal";

/* ─── 3D Perspective Card ─────────────────────────────────── */
function ProjectCard({ project, idx }: { project: Project; idx: number }) {
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [10, -10]), { stiffness: 220, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-10, 10]), { stiffness: 220, damping: 25 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  }

  function onMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000, rotateX, rotateY }}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={onMouseLeave}
      className="group relative [transform-style:preserve-3d] cursor-pointer h-full"
    >
      {/* Stitch Glassmorphic Elevated Card */}
      <div
        className={`relative bg-white dark:bg-slate-900/90 border rounded-3xl p-5 shadow-md flex flex-col justify-between h-full transition-all duration-400 ${
          isHovered
            ? "border-blue-500/60 dark:border-blue-500/50 shadow-[0_25px_60px_rgba(37,99,235,0.18)] -translate-y-1"
            : "border-neutral-200/90 dark:border-slate-800/90 hover:shadow-xl"
        }`}
      >
        {/* Subtle Ambient Core Glow */}
        {isHovered && (
          <div className="absolute -inset-px rounded-3xl bg-blue-500/15 pointer-events-none blur-xs" />
        )}

        <div>
          {/* Top Interactive Mockup Frame */}
          <div className="relative w-full h-[210px] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-200/80 dark:border-slate-800 shrink-0">
            {/* Number badge */}
            <div className="absolute top-3 left-3 bg-neutral-900/90 text-white font-mono text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border border-neutral-700/80 backdrop-blur-md z-10 shadow-md">
              0{project.id}
            </div>

            {/* Author Badge */}
            <div className="absolute bottom-2.5 left-3 bg-neutral-900/90 text-emerald-400 font-mono text-[10px] font-bold px-3 py-1 rounded-full border border-emerald-500/40 backdrop-blur-md z-10 shadow-md flex items-center space-x-1.5">
              <UserCheck className="w-3 h-3 text-emerald-400" />
              <span>Lead Developer — Nagaraj K</span>
            </div>

            {/* Live badge */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute top-3 right-3 bg-amber-500 text-black font-mono text-[10px] font-black px-3 py-1 rounded-full border border-amber-300 backdrop-blur-md z-10 shadow-md flex items-center space-x-1 hover:scale-105 transition-transform"
              >
                <span>LIVE DEMO</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            <ProjectMockupPlaceholder
              type={project.placeholderMockupType}
              title={project.title}
              image={project.image}
            />

            {/* Hover overlay with "Explore Case Study" */}
            <div className={`absolute inset-0 bg-neutral-950/80 backdrop-blur-xs flex items-center justify-center transition-opacity duration-300 z-20 ${isHovered ? "opacity-100" : "opacity-0"}`}>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-11 h-11 rounded-full bg-blue-600/30 border border-blue-400/60 flex items-center justify-center shadow-lg animate-pulse">
                  <BookOpen className="w-5 h-5 text-blue-300" />
                </div>
                <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">Explore Case Study</span>
              </div>
            </div>
          </div>

          {/* Project Title & Summary */}
          <div className="flex flex-col space-y-2 mt-5 mb-4 px-1">
            <h3
              title={project.tooltipText}
              className="font-sans font-black text-lg text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
            >
              {project.title}
            </h3>
            <p className="font-sans text-xs text-neutral-600 dark:text-slate-300 leading-relaxed line-clamp-2">
              {project.overview}
            </p>
          </div>
        </div>

        {/* Card Footer Tech Pills */}
        <div className="pt-4 border-t border-neutral-100 dark:border-slate-800 flex items-center justify-between gap-2 px-1">
          <div className="flex flex-wrap items-center gap-1.5 overflow-hidden">
            {project.stack.slice(0, 3).map((tech: string, tIdx: number) => (
              <span
                key={tIdx}
                className="font-mono text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-slate-800 text-neutral-700 dark:text-slate-300 border border-neutral-200/80 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isHovered ? "bg-blue-600 border-blue-600 text-white scale-110" : "border-neutral-200 dark:border-slate-700 text-neutral-400"}`}>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Projects Section ───────────────────────────────────── */
export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "enterprise", label: "Enterprise Systems" },
    { id: "photography", label: "Client Platforms" },
  ];

  const filteredProjects = filterCategory === "all"
    ? projectsData
    : filterCategory === "enterprise"
    ? projectsData.filter(p => ["clinical", "hr", "inventory"].includes(p.placeholderMockupType))
    : projectsData.filter(p => ["photography", "gym", "tea", "popcorn"].includes(p.placeholderMockupType));

  return (
    <section
      id="projects"
      aria-label="Selected Projects Showcase"
      className="relative py-12 sm:py-16 md:py-24 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Top Ambient Accent Border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col space-y-2.5 sm:space-y-3"
        >
          <div className="inline-flex items-center space-x-2 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            <FolderKanban className="w-3.5 h-3.5" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">EXECUTIVE SHOWCASE</span>
          </div>
          <h2 className="font-sans font-black text-2xl sm:text-3xl md:text-5xl text-neutral-900 dark:text-white tracking-tight leading-tight">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">Enterprise &amp; Production Work.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-500 dark:text-slate-400 max-w-md leading-relaxed">
            Click any card to launch the comprehensive architecture case study and engineering breakdown.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-mono text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                filterCategory === cat.id
                  ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-md"
                  : "bg-white dark:bg-slate-900 border border-neutral-200 dark:border-slate-800 text-neutral-600 dark:text-slate-300 hover:bg-neutral-50 dark:hover:bg-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 6-Card Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} onClick={() => setSelectedProject(project)} className="h-full">
              <ProjectCard project={project} idx={idx} />
            </div>
          ))}
        </AnimatePresence>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
