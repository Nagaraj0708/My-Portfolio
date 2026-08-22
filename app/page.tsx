"use client";

import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { DashboardScrollShowcase } from "@/components/showcase/DashboardScrollShowcase";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { ExploreCraft } from "@/components/interactive/ExploreCraft";
import { Projects } from "@/components/projects/Projects";
import { HeroParallax, ParallaxProduct } from "@/components/ui/hero-parallax";
import { Services } from "@/components/services/Services";
import { Experience } from "@/components/experience/Experience";
import { VerifiedImpact } from "@/components/metrics/VerifiedImpact";
import { Achievements } from "@/components/achievements/Achievements";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { SmoothScroll } from "@/components/scroll/SmoothScroll";
import { CursorGlow } from "@/components/ui/CursorGlow";

// ── Vengence UI Imports ─────────────────────────────────────
import { ScrollDissolveReveal } from "@/components/ui/scroll-dissolve-reveal";
import { ExpandableBentoGrid, BentoTile } from "@/components/ui/expandable-bento-grid";
import { PerspectiveCarousel, CarouselSlide } from "@/components/ui/perspective-carousel";
import { InteractiveBook, BookPage } from "@/components/ui/interactive-book";
import { FolderPreview, FolderFile } from "@/components/ui/folder-preview";
import { VerseCards, VerseCardItem } from "@/components/ui/verse-cards";
import { WaveGridBackground } from "@/components/ui/wave-grid-background";
import { Cpu, ShieldCheck, Database, Layers, GitBranch, Zap, Sparkles } from "lucide-react";

const PARALLAX_PRODUCTS: ParallaxProduct[] = [
  { id: "1",  title: "Shiyarah Weddings",             category: "Photography & Cinema Platform", type: "photography", image: "/images/projects/shiyarah-weddings.png" },
  { id: "2",  title: "FiFusion Studio",                category: "Athletic & Gym Telemetry HUD", type: "gym",         image: "/images/projects/fifusion-hero-theme.png" },
  { id: "3",  title: "Chaiwala Co.",                  category: "Artisanal Single-Origin Tea",  type: "tea",         image: "/images/projects/chaiwala-hero-theme.png" },
  { id: "4",  title: "Popcorn & Co. (Vercel Live)",    category: "Gourmet E-Commerce SPA",       type: "popcorn",     image: "/images/projects/popcorn-hero-theme.png", link: "https://popcorn-mocha.vercel.app/" },
  { id: "5",  title: "Clinical EMR System",            category: "Healthcare EHR",               type: "clinical",    image: "/images/projects/clinical-system.png"    },
  { id: "6",  title: "Corporate HR Management",        category: "Enterprise Portal",            type: "hr",          image: "/images/projects/hr-system.png"          },
  { id: "7",  title: "Real-Time Inventory Control",    category: "Supply Chain",                 type: "inventory",   image: "/images/projects/inventory-system.png"   },
  { id: "8",  title: "FiFusion Studio (Vercel Live)",  category: "3D Arena & Plunge Booking",    type: "gym",         image: "/images/projects/fifusion-hero-theme.png" },
  { id: "9",  title: "Chaiwala Co. (Vercel Live)",     category: "Sommelier Steep Companion",   type: "tea",         image: "/images/projects/chaiwala-hero-theme.png" },
  { id: "10", title: "Shiyarah Weddings (Vercel Live)",category: "Next.js 16 Storytelling",      type: "photography", image: "/images/projects/shiyarah-weddings.png" },
  { id: "11", title: "ASP.NET Core Web API",           category: "Backend Microservices",        type: "clinical",    image: "/images/projects/clinical-system.png"    },
  { id: "12", title: "RxJS Reactive Queue",            category: "State Architecture",           type: "hr",          image: "/images/projects/hr-system.png"          },
];

// ── Vengence UI Sample Datasets ─────────────────────────────
const BENTO_ITEMS: BentoTile[] = [
  {
    id: "bento-1",
    subtitle: "Enterprise SPA Architecture",
    title: "Modular Angular 14+ State Pipelines",
    content: "Engineered high-throughput RxJS store subscriptions handling real-time data streaming across enterprise modules without UI thread blocking.",
    colSpan: "md:col-span-2",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    id: "bento-2",
    subtitle: "Manufacturing Discipline",
    title: "Hardware Precision in Software",
    content: "Leveraging 1+ year of company experience and hardware QA manufacturing rigor at Foxconn to deliver clean frontend code structures.",
    colSpan: "md:col-span-1",
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    id: "bento-3",
    subtitle: "Backend Synergy",
    title: "ASP.NET Core & SQL Data Layer",
    content: "Architected RESTful Web APIs, DTO mappers, EF Core migrations, and optimized T-SQL stored procedures.",
    colSpan: "md:col-span-1",
    icon: <Database className="w-6 h-6" />,
  },
  {
    id: "bento-4",
    subtitle: "Cloud & DevOps",
    title: "Automated Azure CI/CD Pipelines",
    content: "Streamlined multi-tenant deployment workflows with automated build triggers, Docker containers, and environment secrets.",
    colSpan: "md:col-span-2",
    icon: <GitBranch className="w-6 h-6" />,
  },
];

const BOOK_PAGES: BookPage[] = [
  {
    pageNumber: 1,
    chapterTitle: "Chapter 1: Multi-Tenant Architecture",
    subtitle: "I-Net Secure Labs Production Strategy",
    body: "Designing scalable Angular enterprise portals requires isolation of tenant state, dynamic theme token injection, and decoupled route guards.",
    highlights: ["RxJS BehaviorSubjects", "HttpInterceptor JWT Auth", "Dynamic Lazy-Loaded Feature Modules"],
  },
  {
    pageNumber: 2,
    chapterTitle: "Chapter 2: Foxconn Manufacturing Discipline",
    subtitle: "Quality Assurance & Operational Efficiency",
    body: "Applied hardware test methodologies to frontend UI automated verification, saving over $20K+ in operational costs through defect reduction.",
    highlights: ["Zero-Leak State Handlers", "Defensive Input Verification", "Performance Profiling"],
  },
  {
    pageNumber: 3,
    chapterTitle: "Chapter 3: Next.js 16 Cinematic Storytelling",
    subtitle: "Shiyarah Weddings Live Showcase",
    body: "Combined Framer Motion spring physics with Next.js App Router for ultra-smooth 60fps media delivery and instant image transformations.",
    highlights: ["Custom Shader Backgrounds", "Lazy Image Offloading", "SEO Structured Schema"],
  },
];

const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: "c1",
    title: "Shiyarah Weddings Platform",
    category: "Next.js 16 & Framer Motion",
    image: "/images/projects/shiyarah-weddings.png",
    desc: "A luxury cinema and photography platform engineered for high-fidelity interactive storytelling.",
  },
  {
    id: "c2",
    title: "FiFusion Studio Platform",
    category: "Next.js 16 & Biometric HUD",
    image: "/images/projects/fifusion-hero-theme.png",
    desc: "Ultra-premium athletic gym and spin studio platform with VO2 telemetry and cryo plunge booking.",
  },
  {
    id: "c3",
    title: "Chaiwala Co. Tea Atelier",
    category: "Next.js 16 & Artisanal Rituals",
    image: "/images/projects/chaiwala-hero-theme.png",
    desc: "Bespoke single-origin tea house platform with terroir origin mapping and sommelier steep timer.",
  },
  {
    id: "c4",
    title: "Popcorn & Co. Gourmet E-Commerce",
    category: "Angular 14+ SPA & Vercel Live",
    image: "/images/projects/popcorn-hero-theme.png",
    desc: "A luxury gourmet popcorn e-commerce store with coupon code system, festive offers, and live Vercel deployment.",
  },
  {
    id: "c5",
    title: "Clinical EMR Healthcare System",
    category: "Angular 14 & ASP.NET Core",
    image: "/images/projects/clinical-system.png",
    desc: "HIPAA-aligned electronic health record platform with real-time patient charts and lab dispatching.",
  },
  {
    id: "c6",
    title: "Corporate HR Management Suite",
    category: "Enterprise SPA",
    image: "/images/projects/hr-system.png",
    desc: "Complete payroll, leave management, and employee lifecycle tracking system.",
  },
  {
    id: "c7",
    title: "Supply Chain & Inventory Control",
    category: ".NET Web API & SQL",
    image: "/images/projects/inventory-system.png",
    desc: "Real-time stock auditing, barcode scanning, and multi-warehouse analytics.",
  },
];

const CODE_FILES: FolderFile[] = [
  {
    name: "auth.interceptor.ts",
    language: "typescript",
    desc: "RxJS Token Refresh Interceptor for Enterprise Angular SPA",
    code: `import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('auth_token');
    const authReq = token ? req.clone({ setHeaders: { Authorization: \`Bearer \${token}\` } }) : req;
    return next.handle(authReq).pipe(
      catchError(err => {
        if (err.status === 401) { /* Trigger silent OAuth token refresh */ }
        return throwError(() => err);
      })
    );
  }
}`,
  },
  {
    name: "PatientController.cs",
    language: "csharp",
    desc: "ASP.NET Core REST API Endpoint with EF Core Mappings",
    code: `[ApiController]
[Route("api/v1/[controller]")]
[Authorize(Roles = "ClinicalAdmin")]
public class PatientController : ControllerBase
{
    private readonly IPatientService _patientService;
    public PatientController(IPatientService patientService) => _patientService = patientService;

    [HttpGet("{id:guid}")]
    public async Task<IActionResult> GetById(Guid id, CancellationToken ct)
    {
        var record = await _patientService.GetPatientRecordAsync(id, ct);
        return record != null ? Ok(record) : NotFound();
    }
}`,
  },
];

const VERSE_ITEMS: VerseCardItem[] = [
  {
    id: "v1",
    tag: "TECHNICAL EXCELLENCE",
    title: "Front-End Engineering Discipline",
    content: "Nagaraj's ability to seamlessly bridge complex Angular frontend architectures with robust ASP.NET backend services set a high technical bar across our engineering team.",
    author: "Engineering Lead",
    role: "Enterprise Software Division",
    color: "#2563eb",
  },
  {
    id: "v2",
    tag: "QUALITY & PRECISION",
    title: "Hardware Discipline in Code",
    content: "His Foxconn manufacturing background translates into immaculate code hygiene, zero state leaks, and meticulous user experience engineering.",
    author: "Lead Systems Architect",
    role: "Foxconn & I-Net Secure Labs",
    color: "#10b981",
  },
  {
    id: "v3",
    tag: "FULL-STACK MASTERY",
    title: "End-to-End Delivery Speed",
    content: "Consistently delivers production-ready features ahead of timeline schedules with comprehensive unit testing and high-fidelity UI polish.",
    author: "Senior Product Manager",
    role: "Full-Stack Web Engineering",
    color: "#a855f7",
  },
];

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-bg text-text-primary relative selection:bg-blue-600 selection:text-white transition-colors duration-400">
        {/* Ambient cursor glow */}
        <CursorGlow />

        {/* Centered Floating Pill Navigation */}
        <Navbar />

        <main className="relative">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Aceternity Container Scroll 3D Perspective Showcase */}
          <DashboardScrollShowcase />

          {/* 3. About Me */}
          <About />

          {/* 4. Tech Stack / Skills with 3D Solar System */}
          <Skills />

          {/* ── 5. VENGENCE UI EXPANDABLE BENTO GRID SECTION ─────────────────── */}
          <section className="py-16 px-4 max-w-7xl mx-auto">
            <ScrollDissolveReveal>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  VENGENCE UI BENTO MATRIX
                </span>
                <h2 className="font-sans font-black text-3xl md:text-4xl text-slate-900 dark:text-white mt-2">
                  Architectural Principles &amp; Engineering Pillars
                </h2>
                <p className="font-sans text-sm text-slate-500 dark:text-slate-400 mt-2">
                  Click any bento tile to expand full architectural breakdowns.
                </p>
              </div>

              <ExpandableBentoGrid items={BENTO_ITEMS} />
            </ScrollDissolveReveal>
          </section>

          {/* 6. Signature Elastic Pull/Drag Craft Canvas */}
          <ExploreCraft />

          {/* 7. Selected Projects Showcase — 3D magnetic tilt cards */}
          <Projects />

          {/* ── 8. VENGENCE UI 3D PERSPECTIVE CAROUSEL ───────────────────────── */}
          <section className="py-10 px-4 md:px-8 max-w-6xl mx-auto bg-slate-950/90 rounded-3xl border border-slate-800 my-8 text-white">
            <ScrollDissolveReveal>
              <div className="text-center max-w-3xl mx-auto mb-5">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-400">
                  3D CYLINDER PERSPECTIVE CAROUSEL
                </span>
                <h2 className="font-sans font-black text-2xl md:text-3xl text-white mt-1.5">
                  Featured System Deep Dives
                </h2>
              </div>

              <PerspectiveCarousel slides={CAROUSEL_SLIDES} />
            </ScrollDissolveReveal>
          </section>

          {/* 9. 3D Hero Parallax Gallery Wall */}
          <HeroParallax products={PARALLAX_PRODUCTS} />

          {/* ── 10. VENGENCE UI INTERACTIVE BOOK & SOURCE CODE FOLDER ────────── */}
          <section className="py-16 px-4 max-w-7xl mx-auto space-y-16">
            <ScrollDissolveReveal>
              <div className="text-center max-w-3xl mx-auto mb-8">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
                  INTERACTIVE PLAYBOOK &amp; CODEVAULT
                </span>
                <h2 className="font-sans font-black text-3xl md:text-4xl text-slate-900 dark:text-white mt-2">
                  Architecture Book &amp; Live Source Snippets
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6">
                  <InteractiveBook pages={BOOK_PAGES} />
                </div>
                <div className="lg:col-span-6">
                  <FolderPreview folderName="src/app/core" files={CODE_FILES} />
                </div>
              </div>
            </ScrollDissolveReveal>
          </section>

          {/* 11. Services / What I Build */}
          <Services />

          {/* ── 12. VENGENCE UI VERSE CARDS ENDORSEMENTS ──────────────────────── */}
          <section className="py-16 px-4 max-w-4xl mx-auto text-center">
            <ScrollDissolveReveal>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                VERSED TESTIMONIALS
              </span>
              <h2 className="font-sans font-black text-3xl md:text-4xl text-slate-900 dark:text-white mt-2 mb-8">
                Technical Recognition
              </h2>
              <VerseCards items={VERSE_ITEMS} />
            </ScrollDissolveReveal>
          </section>

          {/* 13. Experience Timeline */}
          <Experience />

          {/* 14. Verified Achievements */}
          <VerifiedImpact />
          <Achievements />

          {/* 15. Contact */}
          <Contact />
        </main>

        {/* 16. Dark Studio Footer & Scroll-To-Top Button */}
        <Footer />
        <ScrollToTop />
      </div>
    </SmoothScroll>
  );
}
