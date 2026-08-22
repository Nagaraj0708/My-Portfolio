"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  ExternalLink,
  Compass,
  Workflow,
  Layers,
  Trophy,
  AlertTriangle,
  Lightbulb,
  Terminal,
  BadgeCheck,
  Globe,
  UserCheck,
  ShieldCheck,
  Copy,
  Check,
  Cpu,
  Zap,
  CheckCircle2,
  Play,
  Database,
  Server,
  Layout,
  Lock,
  ChevronRight,
  Sparkles,
  Flame,
} from "lucide-react";
import { Project } from "@/data/projects";
import { ProjectMockupPlaceholder } from "./ProjectMockupPlaceholder";
import {
  getFeatureIcon,
  getArchitectureLayerIcon,
  getEngineeringDecisionIcon,
} from "@/lib/caseStudyIcons";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

type TabType = "overview" | "architecture" | "code" | "features" | "impact";

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [copied, setCopied] = useState(false);
  const [activeFile, setActiveFile] = useState<string>("main");
  const [selectedArchNode, setSelectedArchNode] = useState<number>(0);
  const [simulatingLog, setSimulatingLog] = useState<boolean>(false);
  const [logs, setLogs] = useState<string[]>([
    "[System] Telemetry stream initialized.",
    "[Audit] Security handshake verified — TLS 1.3.",
    "[Ready] Reactive pipeline standing by at 60 FPS.",
  ]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const defaultCodeSnippets: Record<string, Record<string, string>> = {
    gym: {
      main: `// RxJS Biometric Telemetry Stream & Framer Motion Engine
export function createBiometricHUDStream(memberId: string): Observable<TelemetryPacket> {
  return interval(1000).pipe(
    switchMap(() => fetchBiometricSensors(memberId)),
    map((sensor) => ({
      heartRate: sensor.bpm,
      vo2Max: sensor.vo2,
      zone: sensor.bpm > 165 ? 'PEAK_ANAEROBIC' : 'CARDIO_ZONE',
      timestamp: new Date().toISOString()
    })),
    shareReplay(1)
  );
}`,
      schema: `// Database Schema — Athletic Performance & Session Logs
CREATE TABLE MemberTelemetry (
    TelemetryId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    MemberId VARCHAR(64) NOT NULL,
    HeartRateBpm INT CHECK (HeartRateBpm > 30),
    CaloricBurnRate NUMERIC(6, 2),
    ActiveZone VARCHAR(32) NOT NULL,
    RecordedAt TIMESTAMPTZ DEFAULT NOW()
);`,
    },
    tea: {
      main: `// Single-Origin Terroir Steep & Aroma Profile Companion
export class SteepTimerEngine {
  startSteep(variety: 'GREEN' | 'MASALA_CHAI' | 'WHITE'): Observable<SteepState> {
    const idealTempC = STEEP_PROFILES[variety].waterTempC;
    return timer(0, 1000).pipe(
      map(elapsed => ({
        remainingSec: Math.max(0, idealTempC * 1.5 - elapsed),
        aromaPhase: elapsed > 60 ? 'FULL_BLOOM' : 'INFUSING'
      })),
      takeWhile(state => state.remainingSec >= 0)
    );
  }
}`,
      schema: `// Database Schema — Artisanal Tea Profiles & Subscriptions
CREATE TABLE TerroirCatalog (
    TeaId VARCHAR(32) PRIMARY KEY,
    EstateName VARCHAR(128) NOT NULL,
    HarvestSeason VARCHAR(32),
    OptimalWaterTempC INT DEFAULT 92,
    SteepTimeSeconds INT DEFAULT 180
);`,
    },
    photography: {
      main: `// Next.js 16 Server Component & Gallery Storytelling Engine
export async function ShiyarahGalleryStream({ category }: { category: string }) {
  const assets = await db.media.findMany({ where: { tag: category, status: 'PUBLISHED' } });
  return (
    <AnimatePresence mode="popLayout">
      {assets.map((asset) => (
        <motion.div key={asset.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <EditorialFrame src={asset.url} title={asset.title} ratio={asset.aspectRatio} />
        </motion.div>
      ))}
    </AnimatePresence>
  );
}`,
      schema: `// Database Schema — High-Res Media Assets & Booking Requests
CREATE TABLE GalleryAsset (
    AssetId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    Title VARCHAR(256) NOT NULL,
    CdnUrl TEXT NOT NULL,
    AspectRatio NUMERIC(4, 2) DEFAULT 1.5,
    Category VARCHAR(64) NOT NULL
);`,
    },
    clinical: {
      main: `// Angular 14 RxJS Encrypted Medical Record Pipeline
@Injectable({ providedIn: 'root' })
export class MedicalRecordService {
  private readonly http = inject(HttpClient);

  getEncryptedHistory(patientId: string): Observable<MedicalRecord> {
    return this.http.get<EncryptedPayload>(\`/api/v1/patients/\${patientId}/records\`).pipe(
      map(payload => this.crypto.decryptAES256(payload.ciphertext)),
      tap(record => this.auditLogger.logAccess(patientId, record.hash))
    );
  }
}`,
      schema: `// Database Schema — Patient EHR Encrypted Vault
CREATE TABLE PatientMedicalRecord (
    RecordId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    PatientId VARCHAR(64) NOT NULL,
    DoctorLicenseHash VARCHAR(128) NOT NULL,
    EncryptedPayload TEXT NOT NULL,
    CreatedAt TIMESTAMPTZ DEFAULT NOW()
);`,
    },
    hr: {
      main: `// ASP.NET Core Multi-Tenant RBAC Authorization Interceptor
public class MultiTenantAuthorizationFilter : IAsyncActionFilter 
{
    public async Task OnActionExecutionAsync(ActionExecutingContext ctx, ActionExecutionDelegate next)
    {
        var tenantId = ctx.HttpContext.User.FindFirst("TenantId")?.Value;
        if (string.IsNullOrEmpty(tenantId)) throw new UnauthorizedException("Tenant Token Missing");
        
        ctx.HttpContext.Items["TenantDbConnection"] = await _tenantResolver.ResolveAsync(tenantId);
        await next();
    }
}`,
      schema: `// Database Schema — HR Employee Records & Payroll Audit
CREATE TABLE EmployeePayroll (
    EmployeeId VARCHAR(64) PRIMARY KEY,
    TenantId VARCHAR(64) NOT NULL,
    BaseSalary NUMERIC(12, 2) NOT NULL,
    TaxBracket VARCHAR(16) NOT NULL,
    ProcessedAt TIMESTAMPTZ DEFAULT NOW()
);`,
    },
    inventory: {
      main: `// SignalR Real-Time Warehouse Stock Sync & Logistics Engine
export class WarehouseStockHub : Hub 
{
    public async Task BroadcastStockUpdate(string skuId, int deltaQty) 
    {
        var newBalance = await _repo.AdjustStockAsync(skuId, deltaQty);
        await Clients.Group("WarehouseAdmins").SendAsync("OnStockChanged", new {
            SKU = skuId,
            Balance = newBalance,
            Timestamp = DateTime.UtcNow
        });
    }
}`,
      schema: `// Database Schema — Real-Time Inventory & Stock Movement
CREATE TABLE WarehouseInventory (
    SkuId VARCHAR(64) PRIMARY KEY,
    WarehouseLocation VARCHAR(64) NOT NULL,
    AvailableStock INT CHECK (AvailableStock >= 0),
    ReorderThreshold INT DEFAULT 50,
    LastUpdated TIMESTAMPTZ DEFAULT NOW()
);`,
    },
  };

  const projectSnippets = defaultCodeSnippets[project.placeholderMockupType] || defaultCodeSnippets.gym;
  const currentSnippet = activeFile === "main" ? (project.codeSnippet || projectSnippets.main) : projectSnippets.schema;

  const copyCode = () => {
    navigator.clipboard.writeText(currentSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const runSimulation = () => {
    setSimulatingLog(true);
    const newLog = `[Sim ${Math.floor(Math.random() * 900 + 100)}] Executing async packet... OK (${Math.floor(Math.random() * 45 + 12)}ms)`;
    setLogs((prev) => [...prev.slice(-4), newLog]);
    setTimeout(() => setSimulatingLog(false), 600);
  };

  const tabs: { id: TabType; label: string; icon: React.ElementType }[] = [
    { id: "overview", label: "Executive Brief", icon: Compass },
    { id: "architecture", label: "Architecture Node Map", icon: Workflow },
    { id: "code", label: "Code & Terminal", icon: Terminal },
    { id: "features", label: "Feature Suite", icon: Layers },
    { id: "impact", label: "Impact & Outcome", icon: Trophy },
  ];

  const archNodes = [
    {
      title: "1. Presentation Layer (UI)",
      tech: project.stack.slice(0, 2).join(" + "),
      icon: Layout,
      desc: "Component-driven presentation architecture optimized for 60 FPS motion & responsive viewports.",
    },
    {
      title: "2. Reactive State & Events",
      tech: "RxJS / Async Streams",
      icon: Cpu,
      desc: "Decoupled reactive state management handling real-time data events and client route guards.",
    },
    {
      title: "3. Service & API Layer",
      tech: "REST Web API / Controllers",
      icon: Server,
      desc: "Secure API endpoints with token authentication, request validation, and error interceptors.",
    },
    {
      title: "4. Persistence & Edge",
      tech: "SQL / EF Core / Edge CDN",
      icon: Database,
      desc: "Relational persistence schema with query optimization and edge content distribution.",
    },
  ];

  return (
    <AnimatePresence>
      <div
        data-lenis-prevent="true"
        data-lenis-prevent-touch="true"
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-6 font-sans"
      >
        {/* Dark Glass Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 dark:bg-slate-950/90 backdrop-blur-xl"
        />

        {/* Aceternity Glowing Ambient Spotlights */}
        <div className="fixed top-1/4 left-1/4 w-[450px] h-[450px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="fixed bottom-1/4 right-1/4 w-[450px] h-[450px] bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-3xl pointer-events-none z-0" />

        {/* Modal Window Stage */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          data-lenis-prevent="true"
          data-lenis-prevent-touch="true"
          className="relative w-full max-w-5xl max-h-[92vh] bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-[0_40px_120px_rgba(0,0,0,0.3)] overflow-hidden z-10 flex flex-col bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px]"
        >
          {/* Studio Top Header Bar */}
          <div className="shrink-0 px-6 py-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between z-20">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-[11px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/80 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800 flex items-center space-x-1.5 shadow-2xs">
                <BadgeCheck className="w-3.5 h-3.5 text-blue-500" />
                <span>CASE STUDY 0{project.id}</span>
              </span>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400 font-semibold hidden md:inline truncate max-w-[280px]">
                {project.stackDisplay}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30 text-xs font-mono font-bold hover:bg-amber-500/20 transition-all shadow-2xs"
                >
                  <Globe className="w-3.5 h-3.5 text-amber-500" />
                  <span>Production Live</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 hover:rotate-90 transition-all duration-300 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

          {/* Aceternity Animated Segmented Tab Bar */}
          <div className="shrink-0 px-6 py-3 bg-slate-100/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 flex items-center space-x-1.5 overflow-x-auto scrollbar-none z-15">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all flex items-center space-x-2 shrink-0 cursor-pointer ${
                    isSelected
                      ? "text-white dark:text-slate-950 shadow-md"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-slate-900 dark:bg-white rounded-xl z-0"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center space-x-2">
                    <TabIcon className={`w-3.5 h-3.5 ${isSelected ? "text-blue-400 dark:text-blue-600" : "text-slate-400"}`} />
                    <span>{tab.label}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Stage */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 scrollbar-thin-modal">
            <AnimatePresence mode="wait">
              {/* TAB 1: EXECUTIVE BRIEF */}
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-8"
                >
                  {/* Top Split Section: Header Details Left | Image Mockup Right */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    {/* Left Column: Hero Title & Metadata */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center space-x-2 font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                        <UserCheck className="w-4 h-4 text-blue-500" />
                        <span>{project.author}</span>
                      </div>

                      <h1 className="font-sans font-black text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight leading-tight">
                        {project.title}
                      </h1>
                      
                      <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        {project.subtitle}
                      </p>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[11px] font-bold px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: High-Fidelity Browser Mockup Frame */}
                    <div className="lg:col-span-7 relative w-full h-[260px] sm:h-[320px] rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-800 bg-slate-950 shadow-xl group/heroframe">
                      <ProjectMockupPlaceholder
                        type={project.placeholderMockupType}
                        title={project.title}
                        image={project.image}
                      />
                    </div>
                  </div>

                  {/* Full Width Below: High-Impact Bento Metrics HUD */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-2xl">
                    <div className="p-3.5 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-xl flex flex-col justify-between shadow-2xs">
                      <div className="flex items-center space-x-1.5 text-blue-600 dark:text-blue-400">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider">Availability</span>
                      </div>
                      <span className="font-sans font-black text-lg text-slate-900 dark:text-white mt-1">99.9% Uptime</span>
                      <span className="font-mono text-[9px] text-slate-500 dark:text-slate-400">Production Edge</span>
                    </div>

                    <div className="p-3.5 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-xl flex flex-col justify-between shadow-2xs">
                      <div className="flex items-center space-x-1.5 text-emerald-600 dark:text-emerald-400">
                        <Zap className="w-4 h-4" />
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider">FPS Motion</span>
                      </div>
                      <span className="font-sans font-black text-lg text-slate-900 dark:text-white mt-1">60 FPS</span>
                      <span className="font-mono text-[9px] text-slate-500 dark:text-slate-400">Hardware Accelerated</span>
                    </div>

                    <div className="p-3.5 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-xl flex flex-col justify-between shadow-2xs">
                      <div className="flex items-center space-x-1.5 text-purple-600 dark:text-purple-400">
                        <Cpu className="w-4 h-4" />
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider">Latency</span>
                      </div>
                      <span className="font-sans font-black text-lg text-slate-900 dark:text-white mt-1">&lt; 100 ms</span>
                      <span className="font-mono text-[9px] text-slate-500 dark:text-slate-400">RxJS Reactive Stream</span>
                    </div>

                    <div className="p-3.5 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-xl flex flex-col justify-between shadow-2xs">
                      <div className="flex items-center space-x-1.5 text-amber-600 dark:text-amber-400">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider">Audit Rank</span>
                      </div>
                      <span className="font-sans font-black text-lg text-slate-900 dark:text-white mt-1">Grade A+</span>
                      <span className="font-mono text-[9px] text-slate-500 dark:text-slate-400">Verified System</span>
                    </div>
                  </div>

                  {/* Full Width Below: Executive Summary Brief */}
                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                    <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                      EXECUTIVE SUMMARY
                    </h3>
                    <p className="font-sans text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      {project.overview}
                    </p>
                  </div>

                  {/* Problem vs Solution Split Bento */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="p-6 rounded-2xl bg-amber-500/5 dark:bg-amber-950/20 border border-amber-500/20 space-y-3 relative overflow-hidden shadow-2xs">
                      <div className="flex items-center space-x-2">
                        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                        <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-amber-700 dark:text-amber-300">
                          THE CHALLENGE &amp; PAIN POINTS
                        </span>
                      </div>
                      <p className="font-sans text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-blue-500/5 dark:bg-blue-950/20 border border-blue-500/20 space-y-3 relative overflow-hidden shadow-2xs">
                      <div className="flex items-center space-x-2">
                        <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-blue-700 dark:text-blue-300">
                          PROPOSED ARCHITECTURAL SOLUTION
                        </span>
                      </div>
                      <p className="font-sans text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: ARCHITECTURE NODE MAP */}
              {activeTab === "architecture" && (
                <motion.div
                  key="architecture"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-8"
                >
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 font-mono text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
                      <Workflow className="w-4 h-4 text-purple-500" />
                      <span>FULL-STACK SYSTEM PIPELINE</span>
                    </div>
                    <h2 className="font-sans font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
                      Interactive 4-Stage Architecture Node Map
                    </h2>
                    <p className="font-sans text-sm text-slate-600 dark:text-slate-400">
                      Click any architecture stage to inspect its underlying protocols, reactive state engines, and database persistence parameters.
                    </p>
                  </div>

                  {/* 4 Connected Nodes Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {archNodes.map((node, idx) => {
                      const NodeIcon = node.icon;
                      const isSelected = selectedArchNode === idx;
                      return (
                        <button
                          key={node.title}
                          onClick={() => setSelectedArchNode(idx)}
                          className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between space-y-4 cursor-pointer relative ${
                            isSelected
                              ? "bg-purple-900/10 border-purple-500 shadow-md ring-2 ring-purple-500/20"
                              : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-800"
                          }`}
                        >
                          <div className="flex items-center justify-between w-full">
                            <div className={`p-3 rounded-xl ${isSelected ? "bg-purple-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`}>
                              <NodeIcon className="w-5 h-5" />
                            </div>
                            <span className="font-mono text-xs font-black text-slate-400">
                              STAGE 0{idx + 1}
                            </span>
                          </div>

                          <div>
                            <h3 className="font-sans font-bold text-sm text-slate-900 dark:text-white">
                              {node.title}
                            </h3>
                            <span className="font-mono text-[11px] font-semibold text-purple-600 dark:text-purple-400 mt-1 block">
                              {node.tech}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Detailed Selected Node Inspection Drawer */}
                  <div className="p-6 rounded-2xl bg-purple-500/5 dark:bg-purple-950/20 border border-purple-500/20 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Sparkles className="w-5 h-5 text-purple-500" />
                        <h3 className="font-mono text-xs font-extrabold uppercase tracking-widest text-purple-700 dark:text-purple-300">
                          {archNodes[selectedArchNode].title} SPECIFICATION
                        </h3>
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-500">
                        {archNodes[selectedArchNode].tech}
                      </span>
                    </div>

                    <p className="font-sans text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {archNodes[selectedArchNode].desc}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: CODE BLUEPRINT & TERMINAL */}
              {activeTab === "code" && (
                <motion.div
                  key="code"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Terminal className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                        PRODUCTION CODE BLUEPRINT &amp; EXECUTABLE TERMINAL
                      </h2>
                    </div>

                    <button
                      onClick={copyCode}
                      className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 text-white dark:bg-slate-800 dark:text-slate-200 hover:bg-slate-800 text-xs font-mono font-bold transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy Snippet</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Code File Selector Tabs */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setActiveFile("main")}
                      className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold cursor-pointer ${
                        activeFile === "main"
                          ? "bg-slate-900 text-white dark:bg-slate-800 dark:text-white"
                          : "bg-slate-100 text-slate-600 dark:bg-slate-950 dark:text-slate-400"
                      }`}
                    >
                      {project.slug}.service.ts
                    </button>
                    <button
                      onClick={() => setActiveFile("schema")}
                      className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold cursor-pointer ${
                        activeFile === "schema"
                          ? "bg-slate-900 text-white dark:bg-slate-800 dark:text-white"
                          : "bg-slate-100 text-slate-600 dark:bg-slate-950 dark:text-slate-400"
                      }`}
                    >
                      schema.sql
                    </button>
                  </div>

                  {/* IDE Terminal Box */}
                  <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl font-mono text-xs">
                    <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-slate-400">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1.5">
                          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-slate-300 font-bold ml-2 text-[11px]">
                          {activeFile === "main" ? `${project.slug}.service.ts` : "schema.sql"}
                        </span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-bold">Production Code</span>
                    </div>

                    <pre className="p-5 text-slate-200 text-[12px] leading-relaxed overflow-x-auto bg-[#06080b]">
                      <code>{currentSnippet}</code>
                    </pre>
                  </div>

                  {/* Interactive Execution Log Simulator */}
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                      <span className="font-bold text-slate-300 text-[11px] flex items-center space-x-2">
                        <Play className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Reactive Event Log Simulator</span>
                      </span>
                      <button
                        onClick={runSimulation}
                        disabled={simulatingLog}
                        className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-[10px] cursor-pointer"
                      >
                        {simulatingLog ? "Simulating..." : "Trigger Event Test"}
                      </button>
                    </div>

                    <div className="space-y-1 text-[11px] text-slate-400">
                      {logs.map((log, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <span className="text-emerald-400">&gt;</span>
                          <span>{log}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 4: FEATURE SUITE */}
              {activeTab === "features" && (
                <motion.div
                  key="features"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h2 className="font-mono text-sm font-extrabold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                      04. PRODUCTION SYSTEM FEATURES ({project.features.length})
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {project.features.map((feat) => {
                      const featIconConfig = getFeatureIcon(feat);
                      const IconComp = featIconConfig.icon;

                      return (
                        <div
                          key={feat}
                          className="p-5 bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 rounded-2xl flex items-center space-x-4 hover:border-cyan-500/40 transition-all duration-300 group/feat shadow-2xs"
                        >
                          <div className={`p-3 rounded-xl ${featIconConfig.bgClass} ${featIconConfig.colorClass} border ${featIconConfig.borderClass} shrink-0 group-hover/feat:scale-110 transition-transform`}>
                            <IconComp className="w-5 h-5" />
                          </div>
                          <span className="font-sans text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug">
                            {feat}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* TAB 5: IMPACT & VERIFIED OUTCOME */}
              {activeTab === "impact" && (
                <motion.div
                  key="impact"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <h2 className="font-mono text-sm font-extrabold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                      KEY ENGINEERING DECISIONS &amp; VERIFIED SYSTEM OUTCOME
                    </h2>
                  </div>

                  {/* Decisions List */}
                  <div className="space-y-3 font-sans text-xs">
                    {project.engineeringDecisions.map((dec, i) => {
                      const decisionConfig = getEngineeringDecisionIcon(dec, i);
                      const DecIcon = decisionConfig.icon;

                      return (
                        <div
                          key={i}
                          className="p-4 bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 rounded-2xl flex items-start space-x-4 shadow-2xs hover:border-blue-500/40 transition-all"
                        >
                          <div className={`p-2 rounded-xl ${decisionConfig.bgClass} ${decisionConfig.colorClass} shrink-0 mt-0.5`}>
                            <DecIcon className="w-4 h-4" />
                          </div>
                          <div className="flex flex-col space-y-1">
                            <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                              DECISION 0{i + 1}
                            </span>
                            <span className="font-sans text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                              {dec}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Challenges List */}
                  <div className="space-y-3 font-sans text-xs pt-2">
                    <div className="flex items-center space-x-2">
                      <Flame className="w-4 h-4 text-amber-500" />
                      <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
                        TECHNICAL CHALLENGES OVERCOME
                      </h3>
                    </div>
                    {project.challenges.map((chal, i) => (
                      <div
                        key={i}
                        className="p-4 bg-amber-500/5 dark:bg-amber-950/20 border border-amber-500/20 rounded-xl flex items-start space-x-3 text-slate-700 dark:text-slate-300"
                      >
                        <span className="font-mono font-bold text-amber-500">0{i + 1}.</span>
                        <span className="text-xs font-medium leading-relaxed">{chal}</span>
                      </div>
                    ))}
                  </div>

                  {/* Final Verified Outcome Callout */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent dark:from-emerald-950/60 dark:via-emerald-900/20 dark:to-slate-950 border border-emerald-500/40 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start space-x-3.5">
                      <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/40 shrink-0">
                        <Trophy className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="font-mono text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                          VERIFIED SYSTEM OUTCOME
                        </span>
                        <p className="font-sans font-bold text-base text-slate-900 dark:text-white leading-snug">
                          {project.outcome}
                        </p>
                      </div>
                    </div>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-black transition-all inline-flex items-center space-x-2 shrink-0 shadow-lg hover:scale-[1.03]"
                      >
                        <span>Launch Live Web App</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Action Footer */}
          <div className="shrink-0 px-6 py-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 font-mono text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
              >
                <Globe className="w-4 h-4 text-amber-500" />
                <span className="hidden sm:inline">Visit Production Deployment</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center space-x-2 font-mono text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                <span>Discuss custom architecture</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-mono text-xs font-black hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors cursor-pointer shadow-md"
            >
              Close Showcase
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
