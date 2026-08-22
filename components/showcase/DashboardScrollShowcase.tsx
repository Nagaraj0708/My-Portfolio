"use client";

import React, { useState } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import {
  Sparkles,
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
} from "lucide-react";

export function DashboardScrollShowcase() {
  const [activeTab, setActiveTab] = useState<"telemetry" | "rxjs" | "security">("telemetry");

  return (
    <section className="relative bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden pt-6 md:pt-10 pb-16 border-y border-slate-200 dark:border-slate-800 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] transition-colors duration-300">
      {/* ── Ambient Glow Backlight Orbs ──────────────────────── */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/15 dark:bg-blue-600/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/15 dark:bg-purple-600/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center space-y-4 relative z-10 px-4">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center space-x-2 font-mono text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-500/30 dark:border-emerald-500/40 shadow-xs backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 dark:bg-emerald-500" />
              </span>
              <span>LIVE INDUSTRIAL &amp; SOFTWARE SYSTEM SHOWCASE</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-tight max-w-4xl text-center">
              Enterprise Operations Cockpit &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-400 filter drop-shadow-xs">
                Precision System Telemetry.
              </span>
            </h2>

            <p className="font-sans text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl font-medium leading-relaxed text-center">
              Interactive cockpit featuring live RxJS state streams, Foxconn manufacturing quality metrics, and ASP.NET Core API health.
            </p>
          </div>
        }
      >
        {/* Cyber Dark Glass Console Cockpit (Restored High-Tech Studio Contrast) */}
        <div className="relative w-full h-full bg-[#0B0F19] p-3 sm:p-5 flex flex-col justify-between select-none border border-slate-800 rounded-2xl shadow-2xl text-white backdrop-blur-2xl">
          {/* Top macOS Console Window Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 shrink-0">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              </div>
              <span className="font-mono text-xs text-slate-300 font-bold hidden sm:inline-block border-l border-slate-800 pl-3">
                nagaraj-enterprise-telemetry.console
              </span>
            </div>

            {/* Interactive Cockpit Tabs */}
            <div className="flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveTab("telemetry")}
                className={`px-3 py-1 rounded-lg font-mono text-[11px] font-bold transition-all cursor-pointer ${
                  activeTab === "telemetry"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Telemetry
              </button>
              <button
                onClick={() => setActiveTab("rxjs")}
                className={`px-3 py-1 rounded-lg font-mono text-[11px] font-bold transition-all cursor-pointer ${
                  activeTab === "rxjs"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                RxJS Streams
              </button>
              <button
                onClick={() => setActiveTab("security")}
                className={`px-3 py-1 rounded-lg font-mono text-[11px] font-bold transition-all cursor-pointer ${
                  activeTab === "security"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Security Mesh
              </button>
            </div>

            {/* Live Indicator Badge */}
            <div className="hidden md:flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px] font-bold text-emerald-400 tracking-wider uppercase">
                99.98% HEALTHY
              </span>
            </div>
          </div>

          {/* 4 Neon Metric KPI Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3.5 my-2.5 shrink-0">
            {/* KPI 1 */}
            <div className="p-3 md:p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 hover:border-emerald-500/60 transition-colors flex flex-col space-y-1 shadow-lg group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider">Line Quality</span>
                <Award className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-mono text-lg md:text-xl font-black text-emerald-400 tracking-tight">-42.5% Defects</span>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden mt-0.5">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full w-[85%]" />
              </div>
              <span className="font-sans text-[10px] text-slate-400 mt-0.5">Foxconn 6S &amp; Kaizen Standard</span>
            </div>

            {/* KPI 2 */}
            <div className="p-3 md:p-3.5 rounded-xl bg-slate-900/90 border border-purple-500/30 hover:border-purple-500/60 transition-colors flex flex-col space-y-1 shadow-lg group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider">Annual Savings</span>
                <Zap className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-mono text-lg md:text-xl font-black text-purple-400 tracking-tight">+$20,000 / Yr</span>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden mt-0.5">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full w-[92%]" />
              </div>
              <span className="font-sans text-[10px] text-purple-300 mt-0.5">Operational Cost Optimization</span>
            </div>

            {/* KPI 3 */}
            <div className="p-3 md:p-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-500/60 transition-colors flex flex-col space-y-1 shadow-lg group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider">RxJS Sync Latency</span>
                <Activity className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-mono text-lg md:text-xl font-black text-cyan-400 tracking-tight">&lt; 95ms Stream</span>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden mt-0.5">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-[98%]" />
              </div>
              <span className="font-sans text-[10px] text-cyan-300 mt-0.5">Zero-Lock Subject Pipeline</span>
            </div>

            {/* KPI 4 */}
            <div className="p-3 md:p-3.5 rounded-xl bg-slate-900/90 border border-indigo-500/30 hover:border-indigo-500/60 transition-colors flex flex-col space-y-1 shadow-lg group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider">Clinical Auth Mesh</span>
                <ShieldCheck className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-mono text-lg md:text-xl font-black text-indigo-400 tracking-tight">100% HIPAA</span>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden mt-0.5">
                <div className="bg-gradient-to-r from-indigo-500 to-blue-600 h-full w-[100%]" />
              </div>
              <span className="font-sans text-[10px] text-indigo-300 mt-0.5">JWT Interceptor Encrypted</span>
            </div>
          </div>

          {/* Dynamic Cockpit Stage */}
          <div className="flex-1 bg-slate-900/90 rounded-xl border border-slate-800 p-3 md:p-4 flex flex-col justify-between overflow-hidden">
            {activeTab === "telemetry" && (
              <div className="flex flex-col h-full justify-between space-y-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center space-x-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span className="font-mono text-xs font-bold text-slate-200">
                      Live Event Audit Stream (TELEMETRY)
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-mono text-[10px] text-emerald-400 font-bold">
                      ACTIVE LISTENER
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 font-mono text-[11px]">
                  <div className="p-2 rounded bg-slate-950/90 border border-slate-800 flex items-center justify-between">
                    <span className="text-cyan-400 font-bold">#FOX-1092</span>
                    <span className="text-slate-300">iPhone 11 Manufacturing Line QA Audit</span>
                    <span className="text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">PASSED (99.4% Yield)</span>
                    <span className="text-slate-400 hidden sm:inline">Kaizen Verified</span>
                  </div>

                  <div className="p-2 rounded bg-slate-950/90 border border-slate-800 flex items-center justify-between">
                    <span className="text-blue-400 font-bold">#MED-4091</span>
                    <span className="text-slate-300">Clinical Patient EMR Encrypted Sync</span>
                    <span className="text-blue-400 font-bold bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800">VERIFIED (12ms)</span>
                    <span className="text-slate-400 hidden sm:inline">ASP.NET Core REST</span>
                  </div>

                  <div className="p-2 rounded bg-slate-950/90 border border-slate-800 flex items-center justify-between">
                    <span className="text-purple-400 font-bold">#AST-7720</span>
                    <span className="text-slate-300">Corporate Asset Allocation State Verification</span>
                    <span className="text-purple-400 font-bold bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800">LOCKED (0 Defect)</span>
                    <span className="text-slate-400 hidden sm:inline">RxJS BehaviorSubject</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "rxjs" && (
              <div className="flex flex-col h-full justify-between space-y-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span className="font-mono text-xs font-bold text-slate-200">
                      RxJS Zero-Leak Event Stream Engine
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400">Stream Buffer: Active</span>
                </div>

                <div className="grid grid-cols-4 gap-2 font-mono text-[10px]">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex flex-col space-y-1">
                    <span className="text-slate-400">01. Source Event</span>
                    <span className="text-white font-bold">Subject.next()</span>
                    <span className="text-emerald-400">User Input Packet</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex flex-col space-y-1">
                    <span className="text-slate-400">02. SwitchMap</span>
                    <span className="text-white font-bold">Async Cancel</span>
                    <span className="text-cyan-400">Debounce 200ms</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex flex-col space-y-1">
                    <span className="text-slate-400">03. CatchError</span>
                    <span className="text-white font-bold">OAuth Interceptor</span>
                    <span className="text-purple-400">Silent Token Refresh</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex flex-col space-y-1">
                    <span className="text-slate-400">04. ShareReplay</span>
                    <span className="text-white font-bold">State Multicast</span>
                    <span className="text-blue-400">UI Auto-Sync</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="flex flex-col h-full justify-between space-y-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center space-x-2">
                    <Lock className="w-4 h-4 text-purple-400" />
                    <span className="font-mono text-xs font-bold text-slate-200">
                      ASP.NET Core OAuth 2.0 Security &amp; RBAC Mesh
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-purple-400 font-bold">TLS 1.3 Strict</span>
                </div>

                <div className="grid grid-cols-3 gap-2.5 font-mono text-[11px]">
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-slate-400 block text-[9px] uppercase">Encryption</span>
                    <span className="text-purple-400 font-bold block">AES-256 Vault</span>
                    <span className="text-slate-400 text-[10px] block">Patient EHR Enforced</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-slate-400 block text-[9px] uppercase">Authentication</span>
                    <span className="text-emerald-400 font-bold block">JWT Claims RBAC</span>
                    <span className="text-slate-400 text-[10px] block">Role Interceptor</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-slate-400 block text-[9px] uppercase">Audit Compliance</span>
                    <span className="text-cyan-400 font-bold block">HIPAA / ISO27001</span>
                    <span className="text-slate-400 text-[10px] block">Zero-Leak Logging</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Telemetry Status Bar */}
          <div className="flex items-center justify-between pt-2.5 border-t border-slate-800 shrink-0 text-slate-400 font-mono text-[11px]">
            <div className="flex items-center space-x-2">
              <Server className="w-3.5 h-3.5 text-blue-400" />
              <span>I-Net Secure Labs &amp; Enterprise Infrastructure</span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-emerald-400 font-bold flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline">All Systems Operational</span>
              </span>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
