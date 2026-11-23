"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Cpu,
  Zap,
  ShieldCheck,
  Award,
  Terminal,
  CheckCircle2,
  Server,
  Database,
  Lock,
  Play,
  RotateCcw,
} from "lucide-react";

export function DashboardScrollShowcase() {
  const [activeTab, setActiveTab] = useState<"telemetry" | "rxjs" | "security">("telemetry");
  const [liveEventLogs, setLiveEventLogs] = useState([
    {
      id: "#FOX-1092",
      name: "Foxconn iPhone Production Line QA Audit",
      status: "PASSED (99.4% Yield)",
      type: "Kaizen 6S Verified",
      color: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
    },
    {
      id: "#MED-4091",
      name: "Clinical Patient EMR Encrypted Sync",
      status: "VERIFIED (12ms)",
      type: "ASP.NET Core REST",
      color: "text-[#FF6600] border-[#FF6600]/40 bg-[#FF6600]/10",
    },
    {
      id: "#AST-7720",
      name: "Corporate Asset Allocation State Verification",
      status: "LOCKED (0 Leaks)",
      type: "RxJS BehaviorSubject",
      color: "text-amber-400 border-amber-500/40 bg-amber-500/10",
    },
  ]);
  const [dispatchedCount, setDispatchedCount] = useState(3);

  const handleDispatchEvent = () => {
    const newEvents = [
      {
        id: `#EVT-${Math.floor(1000 + Math.random() * 9000)}`,
        name: "HttpInterceptor JWT Token Silent Refresh",
        status: "RESOLVED (8ms)",
        type: "OAuth Interceptor",
        color: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
      },
      {
        id: `#API-${Math.floor(1000 + Math.random() * 9000)}`,
        name: "EF Core DbContext Query Pipeline Executed",
        status: "OPTIMIZED (4ms)",
        type: "T-SQL Stored Proc",
        color: "text-[#FF6600] border-[#FF6600]/40 bg-[#FF6600]/10",
      },
      {
        id: `#RX-${Math.floor(1000 + Math.random() * 9000)}`,
        name: "Angular Standalone Component OnPush Render",
        status: "SYNCHRONIZED (60fps)",
        type: "RxJS ShareReplay",
        color: "text-amber-400 border-amber-500/40 bg-amber-500/10",
      },
    ];

    const pick = newEvents[dispatchedCount % newEvents.length];
    setLiveEventLogs((prev) => [pick, ...prev.slice(0, 3)]);
    setDispatchedCount((c) => c + 1);
  };

  return (
    <section
      id="telemetry"
      aria-label="Enterprise Telemetry & Operations Cockpit"
      className="relative bg-[#070A12] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/10"
    >
      {/* ── Soft Ambient Radial Glow ───────────────────────────── */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF6600]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#FF6600] font-mono text-xs font-bold uppercase tracking-wider mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>SYSTEM ARCHITECTURE &amp; TELEMETRY</span>
          </div>

          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            Enterprise Operations Cockpit &amp; <br className="hidden sm:inline" />
            <span className="text-[#FF6600]">Live System Telemetry</span>
          </h2>

          <p className="font-sans text-xs sm:text-sm md:text-base text-neutral-400 mt-3 max-w-2xl font-normal leading-relaxed">
            Real-time health monitoring of enterprise Angular SPAs, high-throughput RxJS reactive pipelines, and ASP.NET Core backend APIs.
          </p>
        </div>

        {/* ── High-Craft Mac Studio Console Frame ──────────────── */}
        <div className="relative rounded-3xl bg-[#0B0F17] border border-white/15 shadow-2xl overflow-hidden backdrop-blur-2xl">
          {/* Top macOS Console Window Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center space-x-3">
              {/* Traffic Light Window Buttons */}
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_6px_rgba(244,63,94,0.4)]" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_6px_rgba(245,158,11,0.4)]" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_6px_rgba(16,185,129,0.4)]" />
              </div>
              <span className="font-mono text-xs text-neutral-400 font-bold hidden sm:inline-block border-l border-white/10 pl-3">
                nagaraj-enterprise-v3.console
              </span>
            </div>

            {/* Interactive View Tabs */}
            <div className="flex items-center p-1 rounded-xl bg-black/40 border border-white/10">
              <button
                onClick={() => setActiveTab("telemetry")}
                className={`px-3 py-1 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "telemetry"
                    ? "bg-[#FF6600] text-white shadow-md shadow-[#FF6600]/30"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Telemetry
              </button>
              <button
                onClick={() => setActiveTab("rxjs")}
                className={`px-3 py-1 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "rxjs"
                    ? "bg-[#FF6600] text-white shadow-md shadow-[#FF6600]/30"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                RxJS Streams
              </button>
              <button
                onClick={() => setActiveTab("security")}
                className={`px-3 py-1 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "security"
                    ? "bg-[#FF6600] text-white shadow-md shadow-[#FF6600]/30"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Security Mesh
              </button>
            </div>

            {/* Status Pill */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>99.98% HEALTHY</span>
            </div>
          </div>

          {/* 4 Crisp KPI Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 sm:p-6 border-b border-white/10 bg-black/20">
            {/* KPI 1 */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                  Line Quality
                </span>
                <Award className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="font-mono text-xl sm:text-2xl font-black text-emerald-400">
                -42.5% Defects
              </span>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden mt-2">
                <div className="bg-emerald-400 h-full w-[85%]" />
              </div>
              <span className="font-sans text-[11px] text-neutral-400 mt-1.5 block">
                Foxconn 6S &amp; Kaizen Rigor
              </span>
            </div>

            {/* KPI 2 */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FF6600]/50 transition-colors">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                  Annual Savings
                </span>
                <Zap className="w-4 h-4 text-[#FF6600]" />
              </div>
              <span className="font-mono text-xl sm:text-2xl font-black text-[#FF6600]">
                +$20,000 / Yr
              </span>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden mt-2">
                <div className="bg-[#FF6600] h-full w-[92%]" />
              </div>
              <span className="font-sans text-[11px] text-neutral-400 mt-1.5 block">
                Operational Defect Reduction
              </span>
            </div>

            {/* KPI 3 */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/50 transition-colors">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                  RxJS Latency
                </span>
                <Activity className="w-4 h-4 text-amber-400" />
              </div>
              <span className="font-mono text-xl sm:text-2xl font-black text-amber-400">
                &lt; 95ms Sync
              </span>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden mt-2">
                <div className="bg-amber-400 h-full w-[96%]" />
              </div>
              <span className="font-sans text-[11px] text-neutral-400 mt-1.5 block">
                Zero-Lock Subject Pipeline
              </span>
            </div>

            {/* KPI 4 */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                  Security Mesh
                </span>
                <ShieldCheck className="w-4 h-4 text-[#FF6600]" />
              </div>
              <span className="font-mono text-xl sm:text-2xl font-black text-white">
                100% HIPAA
              </span>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden mt-2">
                <div className="bg-gradient-to-r from-orange-500 to-amber-400 h-full w-[100%]" />
              </div>
              <span className="font-sans text-[11px] text-neutral-400 mt-1.5 block">
                JWT AuthInterceptor Encrypted
              </span>
            </div>
          </div>

          {/* Dynamic Interactive Stage Body */}
          <div className="p-4 sm:p-6 bg-black/40">
            <AnimatePresence mode="wait">
              {activeTab === "telemetry" && (
                <motion.div
                  key="telemetry"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center space-x-2">
                      <Terminal className="w-4 h-4 text-[#FF6600]" />
                      <span className="font-mono text-xs font-bold text-white">
                        Live Event Audit Stream (TELEMETRY DISPATCHER)
                      </span>
                    </div>

                    {/* Interactive Dispatch Button */}
                    <button
                      onClick={handleDispatchEvent}
                      className="px-3.5 py-1.5 rounded-lg bg-[#FF6600] hover:bg-[#E65C00] text-white font-mono text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-[#FF6600]/25 cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-white" />
                      <span>Dispatch Event</span>
                    </button>
                  </div>

                  {/* Event Log Stream */}
                  <div className="space-y-2">
                    {liveEventLogs.map((evt) => (
                      <div
                        key={evt.id}
                        className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[#FF6600] font-black">{evt.id}</span>
                          <span className="text-neutral-200">{evt.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-0.5 rounded-md font-bold text-[11px] border ${evt.color}`}
                          >
                            {evt.status}
                          </span>
                          <span className="text-neutral-400 text-[11px] hidden md:inline">
                            {evt.type}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "rxjs" && (
                <motion.div
                  key="rxjs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center space-x-2">
                      <Activity className="w-4 h-4 text-emerald-400" />
                      <span className="font-mono text-xs font-bold text-white">
                        RxJS Zero-Leak Event Stream Engine
                      </span>
                    </div>
                    <span className="font-mono text-xs text-neutral-400">
                      Buffer Status: Multi-tenant Active
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col space-y-1">
                      <span className="font-mono text-[10px] text-neutral-400 uppercase">
                        01. Source Event
                      </span>
                      <span className="font-mono text-sm text-white font-bold">
                        Subject.next()
                      </span>
                      <span className="font-mono text-xs text-emerald-400">
                        User Action Packet
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col space-y-1">
                      <span className="font-mono text-[10px] text-neutral-400 uppercase">
                        02. SwitchMap
                      </span>
                      <span className="font-mono text-sm text-white font-bold">
                        Async Cancel
                      </span>
                      <span className="font-mono text-xs text-[#FF6600]">
                        Debounce 200ms
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col space-y-1">
                      <span className="font-mono text-[10px] text-neutral-400 uppercase">
                        03. CatchError
                      </span>
                      <span className="font-mono text-sm text-white font-bold">
                        HttpInterceptor
                      </span>
                      <span className="font-mono text-xs text-amber-400">
                        Silent Token Refresh
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col space-y-1">
                      <span className="font-mono text-[10px] text-neutral-400 uppercase">
                        04. ShareReplay
                      </span>
                      <span className="font-mono text-sm text-white font-bold">
                        State Multicast
                      </span>
                      <span className="font-mono text-xs text-emerald-400">
                        UI Auto-Sync
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "security" && (
                <motion.div
                  key="security"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center space-x-2">
                      <Lock className="w-4 h-4 text-[#FF6600]" />
                      <span className="font-mono text-xs font-bold text-white">
                        ASP.NET Core REST API &amp; Security Layer
                      </span>
                    </div>
                    <span className="font-mono text-xs text-emerald-400">
                      C# .NET 8 / EF Core Active
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                      <span className="font-mono text-[10px] text-[#FF6600] font-bold uppercase">
                        01. RBAC &amp; Claims
                      </span>
                      <h4 className="font-sans font-bold text-sm text-white">
                        JWT Bearer Validation
                      </h4>
                      <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                        Role-based access controllers with custom authorization policies and token refresh lifecycle.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                      <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase">
                        02. Data Layer
                      </span>
                      <h4 className="font-sans font-bold text-sm text-white">
                        EF Core &amp; SQL Server
                      </h4>
                      <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                        Optimized LINQ expressions, compiled queries, and indexed stored procedures for sub-10ms reads.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                      <span className="font-mono text-[10px] text-amber-400 font-bold uppercase">
                        03. Cloud Infrastructure
                      </span>
                      <h4 className="font-sans font-bold text-sm text-white">
                        Azure CI/CD &amp; Docker
                      </h4>
                      <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                        Automated multi-stage build pipelines, environment configuration injection, and automated unit tests.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
