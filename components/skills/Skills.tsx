"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, Database, Layers, Terminal, Cpu,
  Zap, Shield, Server, GitBranch, Globe,
  Cloud, Monitor, LayoutGrid, Sparkles, ArrowUpRight,
} from "lucide-react";
import { SolarSystem } from "@/components/ui/solar-system";

/* ─── Skill Data ──────────────────────────────────────────── */
interface SkillItem {
  id: string;
  name: string;
  category: "frontend" | "backend" | "database" | "tools";
  label: string;
  proficiency: string;
  level: number;
  note: string;
  icon: React.ComponentType<{ className?: string }>;
  accentFrom: string;
  accentTo: string;
  glow: string;
}

const SKILLS: SkillItem[] = [
  { id: "angular",  name: "Angular 14+",          category: "frontend",  label: "Frontend",  proficiency: "Primary",        level: 95, icon: Zap,        accentFrom: "from-red-500",     accentTo: "to-pink-500",    glow: "rgba(239,68,68,0.35)",    note: "Reactive hierarchy • RxJS pipelines • Standalone APIs" },
  { id: "ts",       name: "TypeScript",             category: "frontend",  label: "Frontend",  proficiency: "Expert",         level: 92, icon: Code2,      accentFrom: "from-blue-500",    accentTo: "to-cyan-500",    glow: "rgba(59,130,246,0.35)",   note: "Strict typing • Generics • Interface contracts" },
  { id: "js",       name: "JavaScript ES6+",        category: "frontend",  label: "Frontend",  proficiency: "Expert",         level: 90, icon: Globe,      accentFrom: "from-yellow-500",  accentTo: "to-amber-500",   glow: "rgba(234,179,8,0.35)",    note: "Async/Await • Functional patterns • DOM" },
  { id: "html",     name: "HTML5 & Semantic DOM",   category: "frontend",  label: "Frontend",  proficiency: "Expert",         level: 97, icon: LayoutGrid, accentFrom: "from-orange-500",  accentTo: "to-red-500",     glow: "rgba(249,115,22,0.35)",   note: "WAI-ARIA • Semantic structure • SEO" },
  { id: "css",      name: "CSS3 & Tailwind",        category: "frontend",  label: "Frontend",  proficiency: "Expert",         level: 93, icon: Sparkles,   accentFrom: "from-indigo-500",  accentTo: "to-violet-500",  glow: "rgba(99,102,241,0.35)",   note: "Responsive layout • Animations • CSS vars" },
  { id: "nextjs",   name: "Next.js",                category: "frontend",  label: "Frontend",  proficiency: "Expert",         level: 88, icon: Layers,     accentFrom: "from-slate-400",   accentTo: "to-white",       glow: "rgba(148,163,184,0.35)",  note: "SSR • Static generation • App router" },
  { id: "dotnet",   name: "ASP.NET Core",           category: "backend",   label: "Backend",   proficiency: "Integrated",     level: 80, icon: Server,     accentFrom: "from-purple-500",  accentTo: "to-indigo-500",  glow: "rgba(168,85,247,0.35)",   note: "Middleware • RESTful APIs • JWT" },
  { id: "webapi",   name: ".NET Web API",            category: "backend",   label: "Backend",   proficiency: "Integrated",     level: 82, icon: Cpu,        accentFrom: "from-violet-500",  accentTo: "to-purple-500",  glow: "rgba(139,92,246,0.35)",   note: "Decoupled controllers • DTO serialization" },
  { id: "csharp",   name: "C#",                      category: "backend",   label: "Backend",   proficiency: "Proficient",     level: 75, icon: Terminal,   accentFrom: "from-green-500",   accentTo: "to-emerald-500", glow: "rgba(34,197,94,0.35)",    note: "OOP architecture • LINQ • Async" },
  { id: "ef",       name: "Entity Framework Core",   category: "backend",   label: "Backend",   proficiency: "Proficient",     level: 72, icon: Shield,     accentFrom: "from-teal-500",    accentTo: "to-cyan-500",    glow: "rgba(20,184,166,0.35)",   note: "DbContext ORM • Code-first migrations" },
  { id: "sql",      name: "SQL Server (T-SQL)",      category: "database",  label: "Database",  proficiency: "Proficient",     level: 78, icon: Database,   accentFrom: "from-emerald-500", accentTo: "to-teal-500",    glow: "rgba(16,185,129,0.35)",   note: "Schema design • Stored procedures • Indexing" },
  { id: "azure",    name: "Azure DevOps",            category: "tools",     label: "Workflow",  proficiency: "Daily Workflow", level: 88, icon: GitBranch,  accentFrom: "from-blue-500",    accentTo: "to-sky-500",     glow: "rgba(14,165,233,0.35)",   note: "CI/CD pipelines • Work item tracking" },
  { id: "git",      name: "Git & GitHub",             category: "tools",     label: "Workflow",  proficiency: "Daily Workflow", level: 90, icon: GitBranch,  accentFrom: "from-slate-400",   accentTo: "to-slate-300",   glow: "rgba(100,116,139,0.35)",  note: "Branch management • PR reviews" },
  { id: "aws",      name: "Linux & AWS",              category: "tools",     label: "Workflow",  proficiency: "Operational",    level: 65, icon: Cloud,      accentFrom: "from-amber-500",   accentTo: "to-orange-500",  glow: "rgba(245,158,11,0.35)",   note: "Ubuntu server config • Nginx hosting" },
  { id: "vscode",   name: "VS Code & Visual Studio",  category: "tools",    label: "Workflow",  proficiency: "Daily Workflow", level: 96, icon: Monitor,    accentFrom: "from-sky-500",     accentTo: "to-blue-500",    glow: "rgba(56,189,248,0.35)",   note: "Angular CLI • Debugging • Extensions" },
];

const CATEGORIES = [
  { id: "all",      label: "All",      count: SKILLS.length },
  { id: "frontend", label: "Frontend", count: SKILLS.filter(s => s.category === "frontend").length },
  { id: "backend",  label: "Backend",  count: SKILLS.filter(s => s.category === "backend").length },
  { id: "database", label: "Database", count: SKILLS.filter(s => s.category === "database").length },
  { id: "tools",    label: "Workflow", count: SKILLS.filter(s => s.category === "tools").length },
];

/* ─── Project skills breakdown ───────────────────────────── */
const PROJECT_SKILLS = [
  {
    name: "Shiyarah Weddings",
    type: "photography",
    color: "from-amber-500 to-rose-500",
    glow: "rgba(245,158,11,0.25)",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
  },
  {
    name: "FiFusion Studio",
    type: "gym",
    color: "from-emerald-500 to-cyan-500",
    glow: "rgba(16,185,129,0.25)",
    stack: ["Next.js", "TypeScript", "Biometrics", "Framer Motion", "Vercel"],
  },
  {
    name: "Chaiwala Co.",
    type: "tea",
    color: "from-amber-600 to-yellow-500",
    glow: "rgba(217,119,6,0.25)",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Ritual Timers", "Vercel"],
  },
  {
    name: "Popcorn & Company",
    type: "popcorn",
    color: "from-amber-500 to-yellow-500",
    glow: "rgba(245,158,11,0.25)",
    stack: ["Angular 14+", "TypeScript", "RxJS", "PrimeNG", "Vercel"],
  },
  {
    name: "Clinical EMR System",
    type: "clinical",
    color: "from-blue-500 to-cyan-500",
    glow: "rgba(59,130,246,0.25)",
    stack: ["Angular 14+", "RxJS", "ASP.NET Core", "C#", "SQL Server"],
  },
  {
    name: "HR Management",
    type: "hr",
    color: "from-purple-500 to-violet-500",
    glow: "rgba(168,85,247,0.25)",
    stack: ["Angular 14+", "RxJS", "ASP.NET Core", "EF Core", "SQL Server"],
  },
  {
    name: "Inventory & Logistics",
    type: "inventory",
    color: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.25)",
    stack: ["Angular 14+", "RxJS", ".NET Web API", "SQL Server"],
  },
];

/* ─── Compact Skill Card ──────────────────────────────────── */
function SkillCard({ skill, idx }: { skill: SkillItem; idx: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group cursor-default"
    >
      {/* Outer ambient glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-[2px] rounded-xl blur-md pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 30% 30%, ${skill.glow}, transparent 70%)` }}
      />

      <div
        className="relative z-10 h-full rounded-xl overflow-hidden flex flex-col"
        style={{
          border: hovered ? `1px solid ${skill.glow.replace("0.35", "0.6")}` : "1px solid rgba(226,232,240,1)",
          background: hovered ? "rgba(15,23,42,0.97)" : "rgba(255,255,255,1)",
          boxShadow: hovered ? `0 16px 48px ${skill.glow.replace("0.35", "0.18")}` : "0 1px 3px rgba(0,0,0,0.04)",
          transition: "border 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        {/* Top accent stripe */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${skill.accentFrom} ${skill.accentTo} origin-left`}
        />

        {/* Inner gradient wash */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 130% 90% at 0% 0%, ${skill.glow.replace("0.35", "0.07")}, transparent 65%)` }}
        />

        <div className="relative z-10 p-4 flex flex-col gap-3">
          {/* Top row */}
          <div className="flex items-center justify-between gap-2">
            <motion.div
              animate={{
                background: hovered
                  ? `linear-gradient(135deg, ${skill.glow.replace("0.35", "0.4")}, ${skill.glow.replace("0.35", "0.15")})`
                  : "rgba(241,245,249,1)",
                boxShadow: hovered ? `0 0 18px ${skill.glow}` : "none",
                scale: hovered ? 1.08 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
              style={{ border: hovered ? `1px solid ${skill.glow.replace("0.35", "0.55")}` : "1px solid rgba(226,232,240,1)" }}
            >
              <Icon className={`w-4 h-4 transition-colors duration-300 ${hovered ? "text-white" : "text-slate-400"}`} />
            </motion.div>

            <motion.span
              animate={{
                background: hovered ? skill.glow.replace("0.35", "0.2") : "rgba(241,245,249,1)",
                color: hovered ? "#fff" : "#64748b",
                borderColor: hovered ? skill.glow.replace("0.35", "0.6") : "transparent",
              }}
              transition={{ duration: 0.28 }}
              className="font-mono text-[9px] font-extrabold px-2 py-0.5 rounded-full border tracking-wide shrink-0"
            >
              {skill.proficiency}
            </motion.span>
          </div>

          {/* Name + category */}
          <div className="flex flex-col gap-0.5">
            <motion.span
              animate={{ color: hovered ? "#f8fafc" : "#0f172a" }}
              transition={{ duration: 0.28 }}
              className="font-sans font-bold text-sm leading-snug"
            >
              {skill.name}
            </motion.span>
            <motion.span
              animate={{ color: hovered ? "rgba(148,163,184,0.8)" : "rgba(100,116,139,0.7)" }}
              transition={{ duration: 0.28 }}
              className="font-mono text-[10px] font-semibold"
            >
              {skill.label}
            </motion.span>
          </div>

          {/* Progress bar */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <motion.span
                animate={{ color: hovered ? "rgba(148,163,184,0.6)" : "rgba(100,116,139,0.5)" }}
                transition={{ duration: 0.28 }}
                className="font-mono text-[9px] font-bold"
              >
                Proficiency
              </motion.span>
              <motion.span
                animate={{ color: hovered ? "#f8fafc" : "#475569" }}
                transition={{ duration: 0.28 }}
                className="font-mono text-[10px] font-black"
              >
                {skill.level}%
              </motion.span>
            </div>
            <div
              className="h-1 w-full rounded-full overflow-hidden"
              style={{ background: hovered ? "rgba(255,255,255,0.1)" : "rgba(226,232,240,1)", transition: "background 0.3s ease" }}
            >
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${skill.accentFrom} ${skill.accentTo}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: idx * 0.04 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ boxShadow: hovered ? `0 0 8px ${skill.glow}` : "none", transition: "box-shadow 0.3s ease" }}
              />
            </div>
          </div>

          {/* Note — always visible, subtle */}
          <motion.p
            animate={{ color: hovered ? "rgba(148,163,184,0.7)" : "rgba(100,116,139,0.55)" }}
            transition={{ duration: 0.28 }}
            className="font-mono text-[9px] leading-relaxed"
          >
            {skill.note}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Skills Section ──────────────────────────────────────── */
export function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      aria-label="Skills & Technology Stack"
      className="relative py-10 md:py-14 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Top gradient border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      {/* Ambient orbs */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/8 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-500/5 dark:bg-blue-500/8 blur-[90px] rounded-full pointer-events-none -z-10" />

      {/* ── Header ──────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col space-y-2 mb-10 max-w-2xl"
      >
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          TECHNOLOGY STACK
        </span>
        <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight leading-tight">
          Tools I Build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
            With.
          </span>
        </h2>
        <p className="font-sans text-sm text-slate-500 dark:text-slate-400">
          Hover any orbit node or tech card to inspect architecture depth.
        </p>
      </motion.div>

      {/* ── 3D Technology Orbit Solar System Showcase ──────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14 p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden text-center"
      >
        <div className="absolute top-4 left-6 flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-mono text-xs font-bold text-slate-300 tracking-wider uppercase">3D TECH ORBIT ECOSYSTEM</span>
        </div>

        <SolarSystem centerLogo="/nagaraj-portrait.jpg" centerLogoAlt="Nagaraj K" />
      </motion.div>

      {/* ── Filter Tabs ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center gap-2 mb-8"
      >
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-3.5 py-1.5 rounded-full font-mono text-xs font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer overflow-hidden ${
                isActive
                  ? "text-white shadow-lg shadow-blue-500/20"
                  : "bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-blue-400/50 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
              style={isActive ? { background: "linear-gradient(135deg, #2563eb, #7c3aed)", border: "1px solid rgba(99,102,241,0.4)" } : {}}
            >
              {isActive && (
                <motion.span
                  layoutId="filterPill"
                  className="absolute inset-0 rounded-full"
                  style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
              <span className={`relative z-10 text-[9px] font-extrabold px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500"}`}>
                {cat.count}
              </span>
            </button>
          );
        })}
      </motion.div>

      {/* ── Skills Grid ─────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
        >
          {filtered.map((skill, idx) => (
            <SkillCard key={skill.id} skill={skill} idx={idx} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* ── Skills used in Projects ──────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mt-14"
      >
        {/* Divider */}
        <div className="flex items-center gap-4 mb-7">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
          <span className="font-mono text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest whitespace-nowrap">
            Skills Used In Projects
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECT_SKILLS.map((proj, i) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-4 hover:border-slate-400/50 dark:hover:border-slate-600/60 transition-all duration-300 hover:shadow-lg"
            >
              {/* Gradient top strip */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${proj.color} opacity-60 group-hover:opacity-100 transition-opacity`} />

              {/* Radial glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 120% 80% at 0% 0%, ${proj.glow}, transparent 65%)` }}
              />

              <div className="relative z-10">
                {/* Project name */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-sans font-bold text-sm text-slate-900 dark:text-white leading-tight">
                    {proj.name}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors shrink-0" />
                </div>

                {/* Stack pills */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 group-hover:border-slate-300 dark:group-hover:border-slate-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
