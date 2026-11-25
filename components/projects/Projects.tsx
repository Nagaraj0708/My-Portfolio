"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  FolderKanban,
  ExternalLink,
  UserCheck,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { projectsData, Project } from "@/data/projects";
import { ProjectMockupPlaceholder } from "./ProjectMockupPlaceholder";
import { CaseStudyModal } from "./CaseStudyModal";
import { SpringCardJump } from "@/components/ui/SpringCardJump";
import { TextScramble } from "@/components/ui/TextScramble";

/* ─── 3D Perspective Card (Solid Drawing in 3D + Fitts's Law) ─ */
function ProjectCard({ project, idx }: { project: Project; idx: number }) {
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [7, -7]), { stiffness: 220, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-7, 7]), { stiffness: 220, damping: 25 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);

    // Dynamic spotlight variables
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }

  function onMouseLeave(e: React.MouseEvent<HTMLDivElement>) {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
    e.currentTarget.style.removeProperty("--mouse-x");
    e.currentTarget.style.removeProperty("--mouse-y");
  }

  return (
    <SpringCardJump delay={idx * 0.08} className="h-full">
      {/* Matte Elevated Card with Interactive Cursor Spotlight */}
      <div
        onMouseMove={onMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={onMouseLeave}
        data-cursor="project"
        className={`relative bg-white dark:bg-[#0B0F17] border rounded-3xl p-5 shadow-lg flex flex-col justify-between h-full transition-all duration-300 overflow-hidden cursor-pointer select-none ${
          isHovered
            ? "border-[#FF6600]/60 dark:border-[#FF6600]/60 shadow-[0_20px_50px_rgba(255,102,0,0.14)] -translate-y-1.5"
            : "border-neutral-200/90 dark:border-white/10 hover:shadow-xl"
        }`}
      >
        {/* Cursor-Following Spotlight Glow */}
        <div
          className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background:
              "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 0%), rgba(255, 102, 0, 0.12), transparent 75%)",
          }}
        />
        <div>
          {/* Top Interactive Mockup Frame */}
          <div className="relative w-full h-[220px] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-200/80 dark:border-white/10 shrink-0">
            {/* Number badge */}
            <div className="absolute top-3 left-3 bg-neutral-900/90 text-white font-mono text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border border-neutral-700/80 backdrop-blur-md z-10 shadow-md">
              0{project.id}
            </div>

            {/* Author Badge */}
            <div className="absolute bottom-2.5 left-3 bg-neutral-900/90 text-[#FF6600] font-mono text-[10px] font-bold px-3 py-1 rounded-full border border-[#FF6600]/40 backdrop-blur-md z-10 shadow-md flex items-center space-x-1.5">
              <UserCheck className="w-3 h-3 text-[#FF6600]" />
              <span>Nagaraj K • Architect</span>
            </div>

            {/* Live demo badge with pulsing radar */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute top-3 right-3 bg-[#FF6600] text-white font-mono text-[10px] font-black px-3 py-1 rounded-full border border-white/20 backdrop-blur-md z-10 shadow-md flex items-center space-x-1.5 hover:scale-105 transition-transform"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
                </span>
                <span>LIVE DEMO</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            <ProjectMockupPlaceholder
              type={project.placeholderMockupType}
              title={project.title}
              image={project.image}
            />

            {/* Hover overlay with "Launch Case Study" */}
            <div
              className={`absolute inset-0 bg-neutral-950/80 backdrop-blur-xs flex items-center justify-center transition-opacity duration-300 z-20 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#FF6600]/30 border border-[#FF6600]/60 flex items-center justify-center shadow-lg animate-pulse">
                  <BookOpen className="w-6 h-6 text-[#FF6600]" />
                </div>
                <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                  Launch Case Study
                </span>
              </div>
            </div>
          </div>

          {/* Project Title & Summary */}
          <div className="flex flex-col space-y-2 mt-5 mb-4 px-1">
            <h3
              title={project.tooltipText}
              className="font-sans font-black text-lg text-neutral-900 dark:text-white group-hover:text-[#FF6600] transition-colors"
            >
              {project.title}
            </h3>
            <p className="font-sans text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2">
              {project.overview}
            </p>
          </div>
        </div>

        {/* Card Footer Tech Pills */}
        <div className="pt-4 border-t border-neutral-100 dark:border-white/10 flex items-center justify-between gap-2 px-1">
          <div className="flex flex-wrap items-center gap-1.5 overflow-hidden">
            {project.stack.slice(0, 3).map((tech: string, tIdx: number) => (
              <span
                key={tIdx}
                className="font-mono text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
          <div
            className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
              isHovered
                ? "bg-[#FF6600] border-[#FF6600] text-white scale-110 shadow-md shadow-[#FF6600]/30"
                : "border-neutral-200 dark:border-white/15 text-neutral-400"
            }`}
          >
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </SpringCardJump>
  );
}

/* ─── Projects Section ───────────────────────────────────── */
export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Projects", count: projectsData.length },
    {
      id: "enterprise",
      label: "Enterprise SPAs",
      count: projectsData.filter((p) =>
        ["clinical", "hr", "inventory"].includes(p.placeholderMockupType)
      ).length,
    },
    {
      id: "photography",
      label: "Next.js & UI Craft",
      count: projectsData.filter((p) =>
        ["photography", "gym", "tea", "popcorn"].includes(p.placeholderMockupType)
      ).length,
    },
  ];

  const filteredProjects =
    filterCategory === "all"
      ? projectsData
      : filterCategory === "enterprise"
      ? projectsData.filter((p) =>
          ["clinical", "hr", "inventory"].includes(p.placeholderMockupType)
        )
      : projectsData.filter((p) =>
          ["photography", "gym", "tea", "popcorn"].includes(p.placeholderMockupType)
        );

  return (
    <section
      id="projects"
      aria-label="Selected Projects Showcase"
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Top Ambient Accent Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF6600]/40 to-transparent" />

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col space-y-3"
        >
          <div className="inline-flex items-center space-x-2 font-mono text-xs font-bold uppercase tracking-widest text-[#FF6600]">
            <FolderKanban className="w-3.5 h-3.5" />
            <TextScramble text="EXECUTIVE PRODUCTION WORK" />
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-neutral-900 dark:text-white tracking-tight leading-tight">
            Featured Systems &amp; <span className="text-[#FF6600]">Live Deployments</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-md leading-relaxed">
            Click any card to launch the comprehensive architecture case study and engineering breakdown.
          </p>
        </motion.div>

        {/* Filter Pills (Always neat single-row horizontal capsule) */}
        <div className="flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full bg-neutral-100 dark:bg-[#0B0F17] border border-neutral-200 dark:border-white/10 shrink-0 self-start lg:self-end overflow-x-auto max-w-full">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full font-mono text-[11px] sm:text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                filterCategory === cat.id
                  ? "bg-[#FF6600] text-white shadow-md shadow-[#FF6600]/25"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              <span>{cat.label}</span>
              <span className="px-1.5 py-0.5 rounded-full bg-black/20 text-[10px]">
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 6-Card Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="h-full"
            >
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
