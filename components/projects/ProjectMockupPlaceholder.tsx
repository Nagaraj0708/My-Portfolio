import React from "react";
import Image from "next/image";
import {
  Camera,
  Stethoscope,
  Users,
  Package,
  Lock,
  Search,
  Film,
  MessageSquare,
  Activity,
  CalendarClock,
  GitMerge,
  CreditCard,
  BellRing,
  Boxes,
  Dumbbell,
  Flame,
  Zap,
  Sparkles,
  Clock,
  BadgeCheck,
} from "lucide-react";

interface ProjectMockupProps {
  type: "clinical" | "hr" | "inventory" | "photography" | "portfolio" | "gym" | "tea" | "popcorn";
  title: string;
  image?: string;
}

export function ProjectMockupPlaceholder({ type, title, image }: ProjectMockupProps) {
  return (
    <div className="relative w-full h-full min-h-[190px] bg-slate-950 rounded-2xl border border-slate-800/80 overflow-hidden shadow-xl group/mockup flex flex-col select-none">
      {/* Sleek Chrome Window Header */}
      <div className="h-8 bg-slate-900 border-b border-slate-800/80 flex items-center justify-between px-3 shrink-0 z-20">
        <div className="flex items-center space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="font-mono text-[10px] font-bold text-slate-400 truncate max-w-[220px] bg-slate-950 px-2.5 py-0.5 rounded-full border border-slate-800 shadow-2xs flex items-center space-x-1.5">
          <Lock className="w-2.5 h-2.5 text-emerald-400" />
          <span>
            {type === "photography"
              ? "shiyarahweddings.vercel.app"
              : type === "gym"
              ? "gym-indol-delta-68.vercel.app"
              : type === "tea"
              ? "tea-website-eta.vercel.app"
              : type === "popcorn"
              ? "popcorn-mocha.vercel.app"
              : type === "clinical"
              ? "clinical-emr.nagaraj.dev"
              : type === "hr"
              ? "enterprise-hr.nagaraj.dev"
              : type === "inventory"
              ? "inventory-logistics.nagaraj.dev"
              : "nagaraj.dev"}
          </span>
        </div>
        <div className="w-8 font-mono text-[8px] text-emerald-400 font-bold text-right flex items-center justify-end space-x-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>LIVE</span>
        </div>
      </div>

      {/* Screen Layout with High-Fidelity Edge-to-Edge UI Image */}
      {image ? (
        <div className="relative flex-1 w-full h-full min-h-[260px] overflow-hidden bg-slate-950">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            className="object-cover object-[50%_0%] scale-[1.04] -translate-y-1.5 group-hover/mockup:scale-[1.06] transition-transform duration-500 ease-out"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/40 pointer-events-none z-10" />
        </div>
      ) : (
        /* Fallback Interactive Mockup UI Preview */
        <div className="flex-1 p-3.5 bg-slate-950/90 flex flex-col justify-between overflow-hidden">
          {type === "photography" && (
            <div className="flex flex-col space-y-2.5 h-full justify-between">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-mono text-xs font-bold text-amber-400">
                    <Camera className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-sans font-bold text-xs text-white">Shiyarah Weddings</span>
                </div>
                <div className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[9px] font-mono font-bold flex items-center space-x-1">
                  <MessageSquare className="w-2.5 h-2.5" />
                  <span>Book Session</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5 flex-1 my-1">
                <div className="rounded-lg bg-slate-900 border border-amber-500/20 p-2 flex flex-col justify-between">
                  <span className="font-mono text-[8px] text-amber-400 font-bold flex items-center space-x-1">
                    <Camera className="w-2.5 h-2.5" />
                    <span>Weddings</span>
                  </span>
                  <span className="font-sans font-extrabold text-[10px] text-white">Meera &amp; Vikram</span>
                </div>
                <div className="rounded-lg bg-slate-900 border border-purple-500/20 p-2 flex flex-col justify-between">
                  <span className="font-mono text-[8px] text-purple-400 font-bold flex items-center space-x-1">
                    <Film className="w-2.5 h-2.5" />
                    <span>Cinema</span>
                  </span>
                  <span className="font-sans font-extrabold text-[10px] text-white">4K Short Film</span>
                </div>
                <div className="rounded-lg bg-slate-900 border border-emerald-500/20 p-2 flex flex-col justify-between">
                  <span className="font-mono text-[8px] text-emerald-400 font-bold flex items-center space-x-1">
                    <MessageSquare className="w-2.5 h-2.5" />
                    <span>WhatsApp</span>
                  </span>
                  <span className="font-sans font-extrabold text-[10px] text-white">Instant Booking</span>
                </div>
              </div>
            </div>
          )}

          {type === "gym" && (
            <div className="flex flex-col space-y-2 h-full justify-between bg-[#08090a] -m-3.5 p-3.5 border border-lime-500/20">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 rounded-md bg-lime-400/20 border border-lime-400/50 flex items-center justify-center text-lime-400">
                    <Dumbbell className="w-3 h-3" />
                  </div>
                  <span className="font-sans font-black text-xs text-white tracking-wide uppercase">FIFUSION</span>
                </div>
                <div className="px-2 py-0.5 rounded-full bg-lime-400 text-black text-[8px] font-sans font-extrabold uppercase tracking-wider">
                  Get Started
                </div>
              </div>

              <div className="text-center my-1 flex flex-col justify-center items-center">
                <h4 className="font-sans font-black italic text-[11px] text-white tracking-tight uppercase leading-none">
                  SCULPT <span className="text-slate-500 font-normal">YOUR</span> BODY
                </h4>
                <h4 className="font-sans font-black italic text-[11px] text-white tracking-tight uppercase leading-none mt-0.5">
                  ELEVATE <span className="text-slate-500 font-normal">YOUR</span> SPIRIT
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-1.5 shrink-0">
                <div className="rounded-xl bg-[#0d0f10] border border-lime-400/30 p-1.5 flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-lime-400/20 flex items-center justify-center text-lime-400 shrink-0">
                    <Activity className="w-2.5 h-2.5" />
                  </div>
                  <div>
                    <div className="font-mono text-[7px] text-slate-400 uppercase">Hours</div>
                    <div className="font-sans font-black text-[10px] text-white">1.5</div>
                  </div>
                </div>

                <div className="rounded-xl bg-[#0d0f10] border border-lime-400/30 p-1.5 flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-lime-400/20 flex items-center justify-center text-lime-400 shrink-0">
                    <Flame className="w-2.5 h-2.5" />
                  </div>
                  <div>
                    <div className="font-mono text-[7px] text-slate-400 uppercase">Poses</div>
                    <div className="font-sans font-black text-[10px] text-white">20</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {type === "tea" && (
            <div className="flex flex-col space-y-2 h-full justify-between bg-[#faf8f5] -m-3.5 p-3.5">
              <div className="flex items-center justify-between bg-[#193324] -mx-3.5 -mt-3.5 p-2.5 border-b border-amber-600/30 shrink-0">
                <div className="flex items-center space-x-1.5">
                  <div className="w-4 h-4 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-400 text-[8px]">
                    🫖
                  </div>
                  <span className="font-serif font-bold text-[10px] text-amber-300 tracking-wider uppercase">CHAIWALA &amp; CO.</span>
                </div>
                <div className="px-2 py-0.5 rounded-full bg-amber-600 text-white text-[8px] font-sans font-bold uppercase tracking-wider">
                  ORDER TEA
                </div>
              </div>

              <div className="text-center my-0.5">
                <span className="font-serif font-bold text-[11px] text-[#193324] block">Our Premium Tea</span>
                <div className="w-4 h-0.5 bg-amber-600 mx-auto mt-0.5 rounded-full" />
              </div>

              <div className="grid grid-cols-4 gap-1 shrink-0">
                <div className="rounded-lg bg-white border border-slate-200 p-1 text-center shadow-xs flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full border border-amber-200 bg-emerald-50 mb-0.5 flex items-center justify-center text-[8px]">🌿</div>
                  <span className="font-serif text-[7px] font-bold text-[#193324]">Green</span>
                  <span className="font-sans text-[7px] font-bold text-amber-700">$38</span>
                </div>
                <div className="rounded-lg bg-white border border-slate-200 p-1 text-center shadow-xs flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full border border-amber-200 bg-amber-50 mb-0.5 flex items-center justify-center text-[8px]">🌸</div>
                  <span className="font-serif text-[7px] font-bold text-[#193324]">Bela</span>
                  <span className="font-sans text-[7px] font-bold text-amber-700">$42</span>
                </div>
                <div className="rounded-lg bg-white border border-slate-200 p-1 text-center shadow-xs flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full border border-amber-200 bg-orange-50 mb-0.5 flex items-center justify-center text-[8px]">🍂</div>
                  <span className="font-serif text-[7px] font-bold text-[#193324]">Assam</span>
                  <span className="font-sans text-[7px] font-bold text-amber-700">$34</span>
                </div>
                <div className="rounded-lg bg-white border border-slate-200 p-1 text-center shadow-xs flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full border border-amber-200 bg-stone-100 mb-0.5 flex items-center justify-center text-[8px]">☕</div>
                  <span className="font-serif text-[7px] font-bold text-[#193324]">Black</span>
                  <span className="font-sans text-[7px] font-bold text-amber-700">$48</span>
                </div>
              </div>
            </div>
          )}

          {type === "clinical" && (
            <div className="flex flex-col space-y-2.5 h-full justify-between">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                    <Stethoscope className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-sans font-bold text-xs text-white">Clinical EMR Platform</span>
                </div>
                <div className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[9px] font-mono font-bold flex items-center space-x-1">
                  <Activity className="w-2.5 h-2.5" />
                  <span>Patient Queue</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5 flex-1 my-1">
                <div className="rounded-lg bg-slate-900 border border-rose-500/20 p-2 flex flex-col justify-between">
                  <span className="font-mono text-[8px] text-rose-400 font-bold">Registration</span>
                  <span className="font-sans font-extrabold text-[10px] text-white">Patient Intake</span>
                </div>
                <div className="rounded-lg bg-slate-900 border border-indigo-500/20 p-2 flex flex-col justify-between">
                  <span className="font-mono text-[8px] text-indigo-400 font-bold flex items-center space-x-1">
                    <CalendarClock className="w-2.5 h-2.5" />
                    <span>Schedules</span>
                  </span>
                  <span className="font-sans font-extrabold text-[10px] text-white">Doctor Queue</span>
                </div>
                <div className="rounded-lg bg-slate-900 border border-emerald-500/20 p-2 flex flex-col justify-between">
                  <span className="font-mono text-[8px] text-emerald-400 font-bold">EMR Vault</span>
                  <span className="font-sans font-extrabold text-[10px] text-white">Encrypted Records</span>
                </div>
              </div>
            </div>
          )}

          {type === "hr" && (
            <div className="flex flex-col space-y-2.5 h-full justify-between">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-lg bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-sans font-bold text-xs text-white">Enterprise HR Suite</span>
                </div>
                <div className="px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/40 text-[9px] font-mono font-bold flex items-center space-x-1">
                  <CreditCard className="w-2.5 h-2.5" />
                  <span>Payroll Ready</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5 flex-1 my-1">
                <div className="rounded-lg bg-slate-900 border border-violet-500/20 p-2 flex flex-col justify-between">
                  <span className="font-mono text-[8px] text-violet-400 font-bold">Directory</span>
                  <span className="font-sans font-extrabold text-[10px] text-white">Workforce Hub</span>
                </div>
                <div className="rounded-lg bg-slate-900 border border-amber-500/20 p-2 flex flex-col justify-between">
                  <span className="font-mono text-[8px] text-amber-400 font-bold flex items-center space-x-1">
                    <GitMerge className="w-2.5 h-2.5" />
                    <span>Recruitment</span>
                  </span>
                  <span className="font-sans font-extrabold text-[10px] text-white">Talent Pipeline</span>
                </div>
                <div className="rounded-lg bg-slate-900 border border-blue-500/20 p-2 flex flex-col justify-between">
                  <span className="font-mono text-[8px] text-blue-400 font-bold">Leaves</span>
                  <span className="font-sans font-extrabold text-[10px] text-white">Auto Approvals</span>
                </div>
              </div>
            </div>
          )}

          {type === "inventory" && (
            <div className="flex flex-col space-y-2.5 h-full justify-between">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Package className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-sans font-bold text-xs text-white">Inventory &amp; Stock Hub</span>
                </div>
                <div className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/40 text-[9px] font-mono font-bold flex items-center space-x-1">
                  <BellRing className="w-2.5 h-2.5 text-rose-400 animate-pulse" />
                  <span>Stock Alerts</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5 flex-1 my-1">
                <div className="rounded-lg bg-slate-900 border border-cyan-500/20 p-2 flex flex-col justify-between">
                  <span className="font-mono text-[8px] text-cyan-400 font-bold flex items-center space-x-1">
                    <Search className="w-2.5 h-2.5" />
                    <span>SKU Search</span>
                  </span>
                  <span className="font-sans font-extrabold text-[10px] text-white">Debounced RxJS</span>
                </div>
                <div className="rounded-lg bg-slate-900 border border-orange-500/20 p-2 flex flex-col justify-between">
                  <span className="font-mono text-[8px] text-orange-400 font-bold">Orders</span>
                  <span className="font-sans font-extrabold text-[10px] text-white">Live Workflow</span>
                </div>
                <div className="rounded-lg bg-slate-900 border border-blue-500/20 p-2 flex flex-col justify-between">
                  <span className="font-mono text-[8px] text-blue-400 font-bold flex items-center space-x-1">
                    <Boxes className="w-2.5 h-2.5" />
                    <span>Warehouse</span>
                  </span>
                  <span className="font-sans font-extrabold text-[10px] text-white">Real-Time Sync</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
