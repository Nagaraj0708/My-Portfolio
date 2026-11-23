"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Zap,
  Layers,
  MousePointer2,
  Eye,
  Sliders,
  MoveUpRight,
  Shield,
  Gauge,
  Activity,
  Compass,
  Cpu,
  RefreshCw,
  Target,
  Clock,
  Layout,
  Maximize2,
  Flame,
  CheckCircle2,
} from "lucide-react";

export interface PrincipleItem {
  id: number;
  title: string;
  category: "Disney Animation" | "Cognitive UX" | "Engineering Craft";
  description: string;
  interactiveDemoType: string;
  metricBenefit: string;
  codeSnippet: string;
}

const PRINCIPLES: PrincipleItem[] = [
  {
    id: 1,
    title: "Squash & Stretch",
    category: "Disney Animation",
    description: "Gives weight and elasticity to UI elements during user interactions so digital buttons feel tangible and responsive rather than rigid.",
    interactiveDemoType: "squash",
    metricBenefit: "+34% click confirmation clarity",
    codeSnippet: "whileTap={{ scaleX: 1.08, scaleY: 0.92, transition: { type: 'spring', stiffness: 500 } }}",
  },
  {
    id: 2,
    title: "Solid Drawing in 3D",
    category: "Disney Animation",
    description: "Transforms 2D web surfaces into spatial 3D planes using perspective, dynamic lighting reflections, and multi-layered depth.",
    interactiveDemoType: "perspective3d",
    metricBenefit: "Enhanced visual hierarchy & depth perception",
    codeSnippet: "transform: perspective(1000px) rotateX(calc(mouseY * -8deg)) rotateY(calc(mouseX * 8deg))",
  },
  {
    id: 3,
    title: "Anticipation Wind-Up",
    category: "Disney Animation",
    description: "Prepares user attention for an upcoming action through micro-recoil, pre-expansion, or hover lift before modal deployment.",
    interactiveDemoType: "anticipation",
    metricBenefit: "Reduces perceived cognitive jarring by 40%",
    codeSnippet: "whileHover={{ y: -6, scale: 1.02, transition: { ease: 'backOut' } }}",
  },
  {
    id: 4,
    title: "Overall Appeal",
    category: "Disney Animation",
    description: "Charismatic harmony between typography, glassmorphic frosted depth, radiant sunset palettes, and meticulous 1px border glows.",
    interactiveDemoType: "appeal",
    metricBenefit: "Substantially higher user retention & prestige perception",
    codeSnippet: "backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.14);",
  },
  {
    id: 5,
    title: "Staging the Focus",
    category: "Disney Animation",
    description: "Directs the user's eye exclusively to primary callouts using cursor-driven radial spotlight beams and contextual dimming.",
    interactiveDemoType: "staging",
    metricBenefit: "Zero visual ambiguity on primary conversion paths",
    codeSnippet: "background: radial-gradient(400px circle at ${x}px ${y}px, rgba(245, 158, 11, 0.18), transparent)",
  },
  {
    id: 6,
    title: "Fitts's Law",
    category: "Cognitive UX",
    description: "Target acquisition time depends on distance and target size. We expand button hitboxes and anchor sticky capsule navigation.",
    interactiveDemoType: "fitts",
    metricBenefit: "2.4x faster mobile & desktop tap accuracy",
    codeSnippet: "min-h-[48px] px-6 py-3.5 touch-manipulation hit-area-expanded",
  },
  {
    id: 7,
    title: "Pose to Pose",
    category: "Disney Animation",
    description: "Clear keyframe-to-keyframe state transitions ensuring animations have legible beginning, intermediate, and resting states.",
    interactiveDemoType: "pose",
    metricBenefit: "Prevents disorientation during complex page state changes",
    codeSnippet: "variants={{ idle: { scale: 1 }, prep: { scale: 0.95 }, active: { scale: 1.05 } }}",
  },
  {
    id: 8,
    title: "Bigger Hit Areas",
    category: "Cognitive UX",
    description: "Invisible touch and click padding (extended bounds) surrounding icons and interactive badges so accidental misses are eliminated.",
    interactiveDemoType: "hitarea",
    metricBenefit: "Zero missed taps on mobile and high-DPI touch displays",
    codeSnippet: "::after { content: ''; position: absolute; inset: -12px; }",
  },
  {
    id: 9,
    title: "Follow Through & Spring Physics",
    category: "Disney Animation",
    description: "Elements carry momentum past their destination before settling naturally using real physics damping equations.",
    interactiveDemoType: "followthrough",
    metricBenefit: "Feels fluid, human, and physical rather than robotic",
    codeSnippet: "transition: { type: 'spring', damping: 14, stiffness: 180, mass: 0.8 }",
  },
  {
    id: 10,
    title: "Hick's Law",
    category: "Cognitive UX",
    description: "Decision time increases logarithmically with options. We utilize progressive disclosure and clear categorized filters.",
    interactiveDemoType: "hicks",
    metricBenefit: "Reduces time-to-decision from 9.2s down to 2.1s",
    codeSnippet: "const filtered = useMemo(() => items.filter(i => i.category === activeTab), [activeTab])",
  },
  {
    id: 11,
    title: "Slow In & Slow Out",
    category: "Disney Animation",
    description: "Natural acceleration and deceleration matching physical inertia through cubic-bezier curve timing.",
    interactiveDemoType: "slowinout",
    metricBenefit: "Silky 60fps cinematic feel with zero abrupt stops",
    codeSnippet: "cubic-bezier(0.22, 1, 0.36, 1) /* Apple / Framer standard curve */",
  },
  {
    id: 12,
    title: "Miller's Law",
    category: "Cognitive UX",
    description: "Working memory holds 7 ± 2 items. We chunk system telemetry into modular bento grid pods for effortless digestion.",
    interactiveDemoType: "millers",
    metricBenefit: "Prevents cognitive overload in enterprise dashboards",
    codeSnippet: "<ExpandableBentoGrid chunkLimit={4} onExpand={showDeepDive} />",
  },
  {
    id: 13,
    title: "Moving in Arcs",
    category: "Disney Animation",
    description: "Natural living motion travels along curved parabolic paths rather than rigid mechanical straight lines.",
    interactiveDemoType: "arcs",
    metricBenefit: "Organic visual flow in floating badges & cursor orbs",
    codeSnippet: "animate={{ x: [0, 15, 0, -15, 0], y: [0, -12, 0, 12, 0] }}",
  },
  {
    id: 14,
    title: "Doherty Threshold (<400ms)",
    category: "Cognitive UX",
    description: "Productivity skyrockets when computer and user interact at a pace (<400ms) that ensures neither has to wait.",
    interactiveDemoType: "doherty",
    metricBenefit: "Sub-100ms instant tactile state feedback",
    codeSnippet: "onPointerDown={optimisticUpdate} transition={{ duration: 0.15 }}",
  },
  {
    id: 15,
    title: "Secondary Action",
    category: "Disney Animation",
    description: "Subtle complementary motion (like icon rotation, ambient particle drift, or border shine) that enhances the primary movement.",
    interactiveDemoType: "secondary",
    metricBenefit: "Adds craft depth without distracting from primary tasks",
    codeSnippet: "parentHover ? rotateIcon(45) : rotateIcon(0); particleDrift()",
  },
  {
    id: 16,
    title: "Postel's Law (Robustness)",
    category: "Cognitive UX",
    description: "'Be conservative in what you send, be liberal in what you accept.' Forgiving inputs, resilient layouts, and graceful degradation.",
    interactiveDemoType: "postel",
    metricBenefit: "100% resilient across mobile viewports & broken data",
    codeSnippet: "sanitizeInput(val); fallback = cachedData ?? defaultState;",
  },
  {
    id: 17,
    title: "Snappy Timing (200-280ms)",
    category: "Disney Animation",
    description: "UI animations must respect user urgency. Transitions are tuned to 200-280ms so the interface feels lightning fast.",
    interactiveDemoType: "snappy",
    metricBenefit: "Eliminates sensation of 'sluggish web transitions'",
    codeSnippet: "transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] }",
  },
  {
    id: 18,
    title: "Jakob's Law",
    category: "Cognitive UX",
    description: "Users spend most of their time on other sites. Interfaces should leverage familiar mental models while elevating execution quality.",
    interactiveDemoType: "jakob",
    metricBenefit: "Zero learning curve for recruiters and engineering leads",
    codeSnippet: "Standard top nav + clear hero CTAs + tabbed project gallery",
  },
  {
    id: 19,
    title: "Exaggerated Feedback",
    category: "Disney Animation",
    description: "Amplified visual cues (such as glowing border beams, magnetic cursor snapping, and energetic particle bursts) on successful actions.",
    interactiveDemoType: "exaggerated",
    metricBenefit: "Deep psychological satisfaction on form submit / copy CV",
    codeSnippet: "borderBeamPulse(); triggerSuccessConfetti(); hapticFeedback();",
  },
  {
    id: 20,
    title: "Frequency of Use Optimization",
    category: "Cognitive UX",
    description: "High-frequency actions (Download CV, View Projects, Copy Email) are permanently pinned or reachable in 1-click.",
    interactiveDemoType: "frequency",
    metricBenefit: "Reduces interaction friction to absolute minimum",
    codeSnippet: "<FloatingQuickActions items={['Projects', 'Resume', 'Contact']} />",
  },
];

export function UxPrinciplesMatrix() {
  const [selectedId, setSelectedId] = useState<number>(1);
  const [activeTabFilter, setActiveTabFilter] = useState<string>("All");
  const [testCounter, setTestCounter] = useState(0);

  const selectedPrinciple = PRINCIPLES.find((p) => p.id === selectedId) || PRINCIPLES[0];

  const categories = ["All", "Disney Animation", "Cognitive UX"];

  const filteredPrinciples =
    activeTabFilter === "All"
      ? PRINCIPLES
      : PRINCIPLES.filter((p) => p.category === activeTabFilter);

  return (
    <section
      id="principles"
      aria-label="20 Principles of UX & Animation"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* ── Section Header ────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-neutral-200 dark:border-neutral-800 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 font-mono text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>20 Principles of UX &amp; Animation</span>
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-neutral-900 dark:text-white tracking-tight">
            The Science of <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">Feel &amp; Motion</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-2 max-w-2xl">
            How Disney&apos;s 12 animation principles merge with cognitive human-computer interaction (Fitts, Hick, Miller, Doherty) to engineer world-class front-end systems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shrink-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTabFilter(cat)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs font-bold transition-all ${
                activeTabFilter === cat
                  ? "bg-amber-500 text-white shadow-sm"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Interactive 2-Column Split Workspace ─────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Principle Selection Cards (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[680px] overflow-y-auto pr-1 select-none">
          {filteredPrinciples.map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedId(item.id)}
                className={`relative p-4 rounded-2xl border cursor-pointer transition-all ${
                  isSelected
                    ? "bg-amber-500/10 border-amber-500 shadow-md shadow-amber-500/10 dark:bg-amber-950/20"
                    : "bg-white dark:bg-neutral-900/80 border-neutral-200/90 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-[11px] font-black px-2 py-0.5 rounded-md ${
                      isSelected
                        ? "bg-amber-500 text-white"
                        : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500"
                    }`}
                  >
                    #{item.id < 10 ? `0${item.id}` : item.id}
                  </span>
                  <span className="font-mono text-[10px] uppercase font-bold text-neutral-400">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-sm text-neutral-900 dark:text-white leading-tight mb-1">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                {isSelected && (
                  <motion.div
                    layoutId="activePrincipleIndicator"
                    className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-amber-500 rounded-full"
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Right Column: Live Interactive Sandbox & Code Inspector (5 cols) */}
        <div className="lg:col-span-5 sticky top-24 rounded-3xl p-6 bg-[#0B0F17] text-white border border-white/10 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-amber-400">
                  PRINCIPLE 0{selectedPrinciple.id}
                </span>
                <span className="text-neutral-500">•</span>
                <span className="font-mono text-xs text-neutral-400">
                  {selectedPrinciple.category}
                </span>
              </div>
              <h3 className="font-sans font-black text-2xl text-white mt-1">
                {selectedPrinciple.title}
              </h3>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Zap className="w-5 h-5" />
            </div>
          </div>

          <p className="font-sans text-sm text-neutral-300 leading-relaxed">
            {selectedPrinciple.description}
          </p>

          {/* Live Playground Canvas */}
          <div className="rounded-2xl bg-neutral-950/80 border border-white/10 p-6 flex flex-col items-center justify-center min-h-[170px] relative overflow-hidden">
            <div className="absolute top-2.5 left-3 font-mono text-[10px] uppercase font-bold text-neutral-500">
              Live Interaction Canvas (Click / Hover below)
            </div>

            {/* Interactive Element with Squash & Stretch + Physics */}
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 15px 30px rgba(245, 158, 11, 0.35)",
              }}
              whileTap={{
                scaleX: 1.15,
                scaleY: 0.82,
                y: 4,
                transition: { type: "spring", stiffness: 600, damping: 10 },
              }}
              onClick={() => setTestCounter((c) => c + 1)}
              className="relative px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white font-mono text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-2 cursor-pointer select-none"
            >
              <Sparkles className="w-4 h-4 animate-spin [animation-duration:4s]" />
              <span>Test &quot;{selectedPrinciple.title}&quot;</span>
              <span className="w-5 h-5 rounded-full bg-black/30 flex items-center justify-center text-[10px]">
                {testCounter}
              </span>
            </motion.button>

            <span className="font-mono text-[11px] text-neutral-400 mt-3 text-center">
              Triggered: {testCounter} times • Real-time spring physics active
            </span>
          </div>

          {/* Metric Benefit Callout */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <span className="font-mono text-xs font-bold text-amber-300 uppercase tracking-wide">
                Engineering Impact:
              </span>
              <p className="font-sans text-xs text-neutral-200 mt-0.5">
                {selectedPrinciple.metricBenefit}
              </p>
            </div>
          </div>

          {/* Code Implementation Snippet */}
          <div className="rounded-xl bg-black/60 border border-white/5 p-3.5 font-mono text-xs text-amber-300 overflow-x-auto">
            <div className="text-[10px] text-neutral-500 mb-1.5 uppercase tracking-wider">
              Implementation (Framer Motion / CSS):
            </div>
            <code>{selectedPrinciple.codeSnippet}</code>
          </div>
        </div>
      </div>
    </section>
  );
}

