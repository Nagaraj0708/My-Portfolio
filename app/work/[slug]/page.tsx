import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Server,
  Database,
  Layout,
  ShieldCheck,
  Globe,
  ExternalLink,
  Workflow,
  Compass,
  AlertTriangle,
  Lightbulb,
  Terminal,
  Trophy,
  BadgeCheck,
  UserCheck,
  Flame,
  Zap,
  Cpu,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { projectsData } from "@/data/projects";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProjectMockupPlaceholder } from "@/components/projects/ProjectMockupPlaceholder";
import {
  getFeatureIcon,
  getArchitectureLayerIcon,
  getEngineeringDecisionIcon,
} from "@/lib/caseStudyIcons";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Architectural Case Study`,
    description: project.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const defaultCodeSnippets: Record<string, string> = {
    gym: `// RxJS Biometric Telemetry Stream & Framer Motion Engine
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
    tea: `// Single-Origin Terroir Steep & Aroma Profile Companion
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
    photography: `// Next.js 16 Server Component & Gallery Storytelling Engine
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
    clinical: `// Angular 14 RxJS Encrypted Medical Record Pipeline
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
    hr: `// ASP.NET Core Multi-Tenant RBAC Authorization Interceptor
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
    inventory: `// SignalR Real-Time Warehouse Stock Sync & Logistics Engine
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
}`
  };

  const snippetToDisplay = project.codeSnippet || defaultCodeSnippets[project.placeholderMockupType] || defaultCodeSnippets.gym;

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative font-sans bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px]">
      <Navbar />

      {/* Floating Ambient Glow Spotlights */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/20 rounded-full blur-3xl pointer-events-none z-0" />

      <article className="pt-32 pb-24 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto relative z-10 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center space-x-2 font-mono text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-white/80 dark:bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio Showcase</span>
          </Link>
        </div>

        {/* Hero Title Header */}
        <header className="flex flex-col space-y-4 border-b border-slate-200 dark:border-slate-800 pb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[11px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/80 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800 flex items-center space-x-1.5 shadow-2xs">
              <BadgeCheck className="w-3.5 h-3.5 text-blue-500" />
              <span>CASE STUDY 0{project.id}</span>
            </span>
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400 font-semibold">
              {project.stackDisplay}
            </span>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30 text-xs font-mono font-bold hover:bg-amber-500/20 transition-colors shadow-2xs"
              >
                <Globe className="w-3.5 h-3.5 text-amber-500" />
                <span>Production Live</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <div className="flex items-center space-x-2 font-mono text-sm md:text-base text-blue-600 dark:text-blue-400 font-bold">
            <UserCheck className="w-4 h-4 text-blue-500" />
            <span>{project.subtitle}</span>
          </div>
        </header>

        {/* Edge-to-Edge Browser Mockup Showcase */}
        <div className="relative w-full min-h-[340px] sm:min-h-[460px] aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-800 bg-slate-950 shadow-2xl">
          <ProjectMockupPlaceholder
            type={project.placeholderMockupType}
            title={project.title}
            image={project.image}
          />
        </div>

        {/* High-Impact Bento Metrics HUD Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/90 rounded-2xl">
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

        {/* 01. Overview */}
        <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center space-x-2">
            <Compass className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              01. OVERVIEW &amp; EXECUTIVE BRIEF
            </h2>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs">
            <p className="font-sans text-base text-slate-700 dark:text-slate-200 leading-relaxed">
              {project.overview}
            </p>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs font-bold px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 02. Problem & Solution */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-6 bg-amber-500/5 dark:bg-amber-950/20 border border-amber-500/20 rounded-2xl space-y-3 shadow-2xs">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300">
                THE CHALLENGE &amp; PAIN POINTS
              </h3>
            </div>
            <p className="font-sans text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-6 bg-blue-500/5 dark:bg-blue-950/20 border border-blue-500/20 rounded-2xl space-y-3 shadow-2xs">
            <div className="flex items-center space-x-2">
              <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">
                PROPOSED ARCHITECTURAL SOLUTION
              </h3>
            </div>
            <p className="font-sans text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </section>

        {/* 03. Architecture */}
        <section className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center space-x-2">
            <Workflow className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
              03. SYSTEM ARCHITECTURE &amp; DATA FLOW
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xs">
            {["presentation", "state", "api", "data"].map((layerKey, idx) => {
              const layerConfig = getArchitectureLayerIcon(layerKey);
              const LayerIcon = layerConfig.icon;
              const layerTitles = [
                "UI & Components",
                "State & RxJS",
                "RESTful APIs",
                "Persistence & Edge",
              ];

              return (
                <div
                  key={layerKey}
                  className="p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col space-y-3 shadow-2xs"
                >
                  <div className={`p-2.5 rounded-xl ${layerConfig.bgClass} ${layerConfig.colorClass} w-fit`}>
                    <LayerIcon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">
                    {layerTitles[idx]}
                  </span>
                  <span className="font-sans text-xs text-slate-500 dark:text-slate-400">
                    {layerConfig.label}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* 04. Code Blueprint */}
        <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center space-x-2">
            <Terminal className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              04. PRODUCTION CODE BLUEPRINT
            </h2>
          </div>
          <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-xl font-mono text-xs">
            <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-slate-400">
              <span className="font-bold text-slate-300 text-[11px]">{project.slug}.service.ts</span>
              <span className="text-[10px] text-emerald-400 font-bold">Production Code</span>
            </div>
            <pre className="p-5 text-slate-200 text-[12px] leading-relaxed overflow-x-auto bg-[#06080b]">
              <code>{snippetToDisplay}</code>
            </pre>
          </div>
        </section>

        {/* 05. Key Features */}
        <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center space-x-2">
            <Layers className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              05. PRODUCTION SYSTEM FEATURES ({project.features.length})
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {project.features.map((feat) => {
              const featIconConfig = getFeatureIcon(feat);
              const FeatIcon = featIconConfig.icon;

              return (
                <div
                  key={feat}
                  className="flex items-center space-x-3.5 p-4 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xs"
                >
                  <div className={`p-2.5 rounded-xl ${featIconConfig.bgClass} ${featIconConfig.colorClass} border ${featIconConfig.borderClass} shrink-0`}>
                    <FeatIcon className="w-4 h-4" />
                  </div>
                  <span className="font-sans text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {feat}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* 06. Outcome & Verification */}
        <section className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent dark:from-emerald-950/60 dark:via-emerald-900/20 dark:to-slate-950 border border-emerald-500/40 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-black transition-all inline-flex items-center space-x-2 shrink-0 shadow-lg"
            >
              <span>Launch Live Web App</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </section>

        {/* Footer Nav */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
          <Link
            href="/#projects"
            className="font-mono text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            ← Return to main portfolio
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}
