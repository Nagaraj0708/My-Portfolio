"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  FileCode,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Bookmark,
  Layers,
  ArrowRight,
  ArrowLeft,
  Terminal,
} from "lucide-react";

export interface PlaybookChapter {
  id: number;
  chapterNumber: string;
  category: string;
  title: string;
  subtitle: string;
  body: string;
  architecturePillars: string[];
  impactMetric: string;
  fileName: string;
  fileLanguage: string;
  fileDesc: string;
  code: string;
  tabLabel: string;
}

export const PLAYBOOK_CHAPTERS: PlaybookChapter[] = [
  {
    id: 1,
    chapterNumber: "01",
    tabLabel: "01 ARCH",
    category: "ENTERPRISE SPA ARCHITECTURE",
    title: "Multi-Tenant State & Auth Pipelines",
    subtitle: "I-Net Secure Labs Production Strategy",
    body: "Architecting enterprise Angular portals requires strict isolation of tenant context, dynamic theme injection, and proactive silent token refresh without interrupting user workflows.",
    architecturePillars: [
      "RxJS BehaviorSubject state streams",
      "HttpInterceptor silent JWT refresh",
      "Dynamic lazy-loaded feature modules",
      "Zero UI thread blocking",
    ],
    impactMetric: "Zero state leaks across 10,000+ daily sessions",
    fileName: "auth.interceptor.ts",
    fileLanguage: "typescript",
    fileDesc: "Angular 14+ RxJS Token Interceptor & Refresh Pipeline",
    code: `import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('auth_token');
    const authReq = token
      ? req.clone({ setHeaders: { Authorization: \`Bearer \${token}\` } })
      : req;

    return next.handle(authReq).pipe(
      catchError(err => {
        if (err.status === 401) {
          // Trigger silent OAuth token refresh & replay request
          return this.authService.refreshToken().pipe(
            switchMap(newToken => next.handle(req.clone({
              setHeaders: { Authorization: \`Bearer \${newToken}\` }
            })))
          );
        }
        return throwError(() => err);
      })
    );
  }
}`,
  },
  {
    id: 2,
    chapterNumber: "02",
    tabLabel: "02 QA RIGOR",
    category: "HARDWARE QA IN SOFTWARE",
    title: "Foxconn Quality Rigor & Defect Prevention",
    subtitle: "Manufacturing Precision to Web Engineering",
    body: "Applying Foxconn hardware testing methodologies to frontend engineering: defensive input validation, automated state verification, and strict memory lifecycle controls that eliminate bugs at the source.",
    architecturePillars: [
      "Automated edge-case input sanitization",
      "Reactive stream unsubscription lifecycle",
      "Root-cause defect analysis (Kaizen)",
      "Continuous optimization benchmarking",
    ],
    impactMetric: "$20,000+ operational savings & -42.5% defect rate",
    fileName: "qa-audit-pipeline.ts",
    fileLanguage: "typescript",
    fileDesc: "Defensive State Verification & Stream Teardown Engine",
    code: `import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Observable, takeUntil, map, filter } from 'rxjs';

@Injectable()
export class QualityAuditService implements OnDestroy {
  private readonly destroy$ = new Subject<void>();

  // Automated stream subscription tracking with zero memory leaks
  public monitorTelemetry<T>(source$: Observable<T>): Observable<T> {
    return source$.pipe(
      takeUntil(this.destroy$),
      filter((packet): packet is T => packet !== null && packet !== undefined),
      map(packet => {
        this.verifyCompliance(packet);
        return packet;
      })
    );
  }

  ngOnDestroy(): void {
    // Guaranteed teardown of all active hardware & UI observables
    this.destroy$.next();
    this.destroy$.complete();
  }
}`,
  },
  {
    id: 3,
    chapterNumber: "03",
    tabLabel: "03 BACKEND",
    category: "FULL-STACK INTEGRATION",
    title: "ASP.NET Core REST APIs & EF Core",
    subtitle: "High-Throughput Microservice Data Layer",
    body: "Architecting resilient RESTful Web APIs with decoupled controllers, strongly-typed DTOs, compiled EF Core LINQ queries, and optimized T-SQL stored procedures for clinical systems.",
    architecturePillars: [
      "Decoupled controller architecture",
      "Compiled LINQ queries for sub-10ms read",
      "Role-Based Access Control (RBAC)",
      "Immutable DTO serialization contracts",
    ],
    impactMetric: "Sub-15ms database response times under heavy load",
    fileName: "PatientController.cs",
    fileLanguage: "csharp",
    fileDesc: "ASP.NET Core REST Controller with Role-Based Auth",
    code: `[ApiController]
[Route("api/v1/[controller]")]
[Authorize(Roles = "ClinicalAdmin,Physician")]
public class PatientController : ControllerBase
{
    private readonly IPatientService _patientService;
    private readonly ILogger<PatientController> _logger;

    public PatientController(IPatientService patientService, ILogger<PatientController> logger)
    {
        _patientService = patientService;
        _logger = logger;
    }

    [HttpGet("{id:guid}")]
    [ProducesResponseType(typeof(PatientRecordDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> GetById(Guid id, CancellationToken ct)
    {
        var record = await _patientService.GetPatientRecordAsync(id, ct);
        if (record == null) return NotFound(new { message = "Record not found" });
        return Ok(record);
    }
}`,
  },
];

// 3D Book Page Flip variants
const leftPageVariants = {
  enter: (direction: number) => ({
    rotateY: direction > 0 ? -30 : 25,
    opacity: 0,
    x: direction > 0 ? -50 : 50,
    scale: 0.96,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 240,
      damping: 26,
      mass: 0.8,
    },
  },
  exit: (direction: number) => ({
    rotateY: direction > 0 ? 25 : -30,
    opacity: 0,
    x: direction > 0 ? 50 : -50,
    scale: 0.96,
    transition: {
      duration: 0.22,
      ease: "easeInOut" as const,
    },
  }),
};

const rightPageVariants = {
  enter: (direction: number) => ({
    rotateY: direction > 0 ? 35 : -30,
    opacity: 0,
    x: direction > 0 ? 60 : -60,
    scale: 0.96,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 240,
      damping: 26,
      mass: 0.8,
      delay: 0.04,
    },
  },
  exit: (direction: number) => ({
    rotateY: direction > 0 ? -30 : 35,
    opacity: 0,
    x: direction > 0 ? -60 : 60,
    scale: 0.96,
    transition: {
      duration: 0.22,
      ease: "easeInOut" as const,
    },
  }),
};

export function ArchitecturePlaybook() {
  const [[pageIndex, direction], setPage] = useState<[number, number]>([0, 0]);
  const [copied, setCopied] = useState(false);

  const chapter = PLAYBOOK_CHAPTERS[pageIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(chapter.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const paginate = (newDirection: number) => {
    const nextIndex = pageIndex + newDirection;
    if (nextIndex >= 0 && nextIndex < PLAYBOOK_CHAPTERS.length) {
      setPage([nextIndex, newDirection]);
    }
  };

  const goToChapter = (targetIndex: number) => {
    if (targetIndex === pageIndex) return;
    const newDir = targetIndex > pageIndex ? 1 : -1;
    setPage([targetIndex, newDir]);
  };

  return (
    <section
      id="playbook"
      aria-label="Executive Architecture Playbook & Live Code"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* ── Section Header ────────────────────────────────────── */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/25 text-[#FF6600] font-mono text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
          <BookOpen className="w-3.5 h-3.5" />
          <span>PRODUCTION ARCHITECTURE MANUAL</span>
        </div>

        <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-neutral-900 dark:text-white tracking-tight leading-tight">
          Executive Architecture <span className="text-[#FF6600]">Playbook</span>
        </h2>

        <p className="font-sans text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-400 mt-3 max-w-2xl font-normal leading-relaxed">
          Interactive two-page architectural folio: flip through system designs on the left and inspect verified production source code on the right.
        </p>

        {/* Chapter Quick Jump Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-neutral-200/60 dark:bg-[#0B0F17] border border-neutral-300 dark:border-white/10 mt-6 shadow-inner">
          {PLAYBOOK_CHAPTERS.map((ch, idx) => (
            <button
              key={ch.id}
              onClick={() => goToChapter(idx)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                pageIndex === idx
                  ? "bg-[#FF6600] text-white shadow-md shadow-[#FF6600]/30 scale-105"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              <span>{ch.chapterNumber}</span>
              <span className="hidden sm:inline">• {ch.fileName}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── THE 3D PHYSICAL BOOK CONTAINER ────────────────────── */}
      <div className="relative mx-auto max-w-6xl [perspective:2000px] select-none">
        
        {/* Book Outer Leather Hardcover Frame */}
        <div className="relative rounded-[28px] p-2.5 sm:p-3.5 md:p-4 bg-gradient-to-b from-[#181D29] via-[#0F141E] to-[#0A0D14] border border-white/15 shadow-[0_35px_100px_rgba(0,0,0,0.85)]">
          
          {/* Silk Bookmark Ribbon Draping from Top Spine */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-40 hidden md:flex flex-col items-center pointer-events-none">
            <div className="w-5 h-9 bg-gradient-to-b from-[#FF6600] to-[#E05500] shadow-md shadow-[#FF6600]/40 relative">
              {/* V-cut swallowtail notch at ribbon bottom */}
              <div className="absolute -bottom-2 left-0 right-0 h-2 bg-transparent border-l-[10px] border-l-[#FF6600] border-r-[10px] border-r-[#FF6600] border-b-[8px] border-b-transparent" />
            </div>
          </div>

          {/* Right Edge Indexed Chapter Thumb Tabs (Physical book tabs) */}
          <div className="absolute -right-3 top-20 bottom-20 hidden lg:flex flex-col justify-center gap-3 z-30">
            {PLAYBOOK_CHAPTERS.map((ch, idx) => (
              <button
                key={ch.id}
                onClick={() => goToChapter(idx)}
                className={`py-2 px-2.5 rounded-r-lg font-mono text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer border border-l-0 shadow-md ${
                  pageIndex === idx
                    ? "bg-[#FF6600] text-white border-[#FF6600] translate-x-1 shadow-[#FF6600]/40"
                    : "bg-[#101522] text-neutral-400 border-white/10 hover:text-white hover:bg-[#161D2D]"
                }`}
                style={{ writingMode: "vertical-rl" }}
              >
                {ch.tabLabel}
              </button>
            ))}
          </div>

          {/* Book Inner Page Stack (Simulating thick layered pages) */}
          <div className="relative rounded-[22px] bg-[#070A12] border border-white/10 overflow-hidden shadow-[inset_0_2px_12px_rgba(0,0,0,0.8)]">
            
            {/* Top Folio Status Bar */}
            <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center space-x-3">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6600] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6600]"></span>
                </span>
                <span className="font-mono text-[11px] font-bold text-neutral-300 uppercase tracking-widest">
                  FOLIO VOL. I • SPREAD {chapter.chapterNumber} OF 03
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-semibold border border-white/10 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-400" />
                      <span className="text-neutral-300">Copy Source</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* ── 2-PAGE BOOK SPREAD ────────────────────────────── */}
            <div className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[500px] items-stretch [transform-style:preserve-3d]">
              
              {/* Center Book Spine Crease & Metallic Binder Rings (Desktop) */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-12 -translate-x-1/2 z-20 pointer-events-none">
                {/* Center Spine Shadow Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-white/5 to-black/50" />
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2" />
                
                {/* 4 Metallic Binder Rings */}
                <div className="h-full flex flex-col justify-around py-8 items-center">
                  {[1, 2, 3, 4].map((ring) => (
                    <div key={ring} className="relative flex items-center justify-center">
                      <div className="w-4 h-7 rounded-full border-2 border-neutral-300 bg-gradient-to-b from-neutral-200 via-neutral-500 to-neutral-700 shadow-lg shadow-black/80" />
                      <div className="absolute w-1.5 h-1.5 rounded-full bg-black/90" />
                    </div>
                  ))}
                </div>
              </div>

              {/* ── LEFT SPREAD PAGE: System Specification ───────── */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-[#0B0F19] relative overflow-hidden">
                {/* Subtle Paper Grain / Texture */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-50" />

                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={`spec-${pageIndex}`}
                    custom={direction}
                    variants={leftPageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="relative space-y-6"
                  >
                    {/* Page Header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2 text-[#FF6600] font-mono text-xs font-bold uppercase tracking-wider">
                        <Bookmark className="w-3.5 h-3.5" />
                        <span>{chapter.category}</span>
                      </div>
                      <span className="font-mono text-[10px] text-neutral-400 font-bold">
                        PG. {parseInt(chapter.chapterNumber) * 2 - 1}
                      </span>
                    </div>

                    {/* Chapter Title & Subtitle */}
                    <div>
                      <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-1">
                        {chapter.subtitle}
                      </span>
                      <h3 className="font-sans font-black text-2xl sm:text-3xl text-white leading-tight">
                        {chapter.title}
                      </h3>
                    </div>

                    {/* Architectural Rationale Body */}
                    <p className="font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                      {chapter.body}
                    </p>

                    {/* Architectural Pillars Matrix */}
                    <div className="space-y-2.5 pt-2">
                      <span className="font-mono text-[10px] uppercase font-bold text-neutral-400 tracking-wider block">
                        Core Architectural Invariants:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {chapter.architecturePillars.map((pillar, pIdx) => (
                          <div
                            key={pIdx}
                            className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-neutral-200"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="truncate">{pillar}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Impact Metric Ribbon */}
                    <div className="p-3.5 rounded-xl bg-[#FF6600]/10 border border-[#FF6600]/30 flex items-center gap-3">
                      <Zap className="w-4 h-4 text-[#FF6600] shrink-0" />
                      <span className="font-mono text-xs font-bold text-[#FF6600]">
                        {chapter.impactMetric}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Left Page Turn Button (Previous Page) */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono relative z-10">
                  <button
                    onClick={() => paginate(-1)}
                    disabled={pageIndex === 0}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 disabled:opacity-20 disabled:cursor-not-allowed transition-all cursor-pointer group"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                    <span>Flip Previous</span>
                  </button>

                  <span className="text-neutral-500 font-bold">
                    Chapter {pageIndex + 1} of {PLAYBOOK_CHAPTERS.length}
                  </span>
                </div>
              </div>

              {/* ── RIGHT SPREAD PAGE: Live Code Implementation ─── */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-[#070A12] relative overflow-hidden">
                {/* Subtle Crease Reflection */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />

                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={`code-${pageIndex}`}
                    custom={direction}
                    variants={rightPageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="relative flex flex-col h-full justify-between space-y-4"
                  >
                    {/* Code Window Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="flex space-x-1.5 mr-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                        </div>
                        <FileCode className="w-4 h-4 text-[#FF6600]" />
                        <span className="font-mono text-xs font-bold text-white">
                          {chapter.fileName}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                          {chapter.fileLanguage}
                        </span>
                        <span className="font-mono text-[10px] text-neutral-400 font-bold">
                          PG. {parseInt(chapter.chapterNumber) * 2}
                        </span>
                      </div>
                    </div>

                    {/* Source File Description Pill */}
                    <div className="font-mono text-[11px] text-neutral-400 bg-white/[0.02] p-2.5 rounded-xl border border-white/5 flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-[#FF6600]" />
                      <span className="truncate">&gt;_ {chapter.fileDesc}</span>
                    </div>

                    {/* Preformatted Code Box */}
                    <div className="rounded-2xl bg-black/70 border border-white/10 p-4 font-mono text-xs text-neutral-200 overflow-x-auto max-h-[320px] leading-relaxed relative shadow-inner">
                      <pre className="text-neutral-300">
                        <code>{chapter.code}</code>
                      </pre>
                    </div>

                    {/* Production Grade Certification Footnote */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-2 border-t border-white/5">
                      <div className="flex items-center gap-1.5 text-emerald-400">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Foxconn QA Verified • Zero Memory Leaks</span>
                      </div>
                      <span className="text-neutral-500">
                        {chapter.code.split("\n").length} LOC
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Right Page Turn Button (Next Page) & Dog-Ear Corner */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono relative z-10">
                  <div className="text-neutral-500 hidden sm:block">
                    Click corner or button to slide
                  </div>

                  <button
                    onClick={() => paginate(1)}
                    disabled={pageIndex === PLAYBOOK_CHAPTERS.length - 1}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#FF6600] text-white font-bold hover:bg-[#FF7711] disabled:opacity-20 disabled:cursor-not-allowed transition-all cursor-pointer shadow-md shadow-[#FF6600]/30 group"
                  >
                    <span>Flip Next Chapter</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                {/* Interactive Dog-Ear Folded Corner at Bottom-Right */}
                {pageIndex < PLAYBOOK_CHAPTERS.length - 1 && (
                  <button
                    onClick={() => paginate(1)}
                    title="Turn Page"
                    className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-[#FF6600] via-[#FF6600]/70 to-transparent [clip-path:polygon(100%_0,0_100%,100%_100%)] opacity-70 hover:opacity-100 hover:scale-110 transition-all cursor-pointer flex items-end justify-end p-1.5 text-white z-20 group"
                  >
                    <ChevronRight className="w-4 h-4 translate-x-0.5 translate-y-0.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
