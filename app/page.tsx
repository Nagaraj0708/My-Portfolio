"use client";

import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Services } from "@/components/services/Services";
import { DashboardScrollShowcase } from "@/components/showcase/DashboardScrollShowcase";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { ExploreCraft } from "@/components/interactive/ExploreCraft";
import { Projects } from "@/components/projects/Projects";
import { Experience } from "@/components/experience/Experience";
import { VerifiedImpact } from "@/components/metrics/VerifiedImpact";
import { Achievements } from "@/components/achievements/Achievements";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { SmoothScroll } from "@/components/scroll/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { TextScramble } from "@/components/ui/TextScramble";

// ── Vengence & Aceternity UI Imports ─────────────────────────
import { ScrollDissolveReveal } from "@/components/ui/scroll-dissolve-reveal";
import { ExpandableBentoGrid, BentoTile } from "@/components/ui/expandable-bento-grid";
import { PerspectiveCarousel, CarouselSlide } from "@/components/ui/perspective-carousel";
import { ArchitecturePlaybook } from "@/components/ui/architecture-playbook";
import { VerseCards, VerseCardItem } from "@/components/ui/verse-cards";
import { Cpu, Database, Layers, GitBranch } from "lucide-react";

// ── Bento Matrix Datasets ────────────────────────────────────
const BENTO_ITEMS: BentoTile[] = [
  {
    id: "bento-1",
    subtitle: "Enterprise SPA Architecture",
    title: "Modular Angular 14+ State Pipelines",
    content: "Engineered high-throughput RxJS store subscriptions handling real-time data streaming across enterprise modules without UI thread blocking.",
    colSpan: "md:col-span-2",
    icon: <Layers className="w-6 h-6 text-[#FF6600]" />,
  },
  {
    id: "bento-2",
    subtitle: "Manufacturing Discipline",
    title: "Hardware Precision in Software",
    content: "Leveraging 1+ year of company experience and hardware QA manufacturing rigor at Foxconn to deliver clean frontend code structures.",
    colSpan: "md:col-span-1",
    icon: <Cpu className="w-6 h-6 text-[#FF6600]" />,
  },
  {
    id: "bento-3",
    subtitle: "Backend Synergy",
    title: "ASP.NET Core & SQL Data Layer",
    content: "Architected RESTful Web APIs, DTO mappers, EF Core migrations, and optimized T-SQL stored procedures.",
    colSpan: "md:col-span-1",
    icon: <Database className="w-6 h-6 text-[#FF6600]" />,
  },
  {
    id: "bento-4",
    subtitle: "Cloud & DevOps",
    title: "Automated Azure CI/CD Pipelines",
    content: "Streamlined multi-tenant deployment workflows with automated build triggers, Docker containers, and environment secrets.",
    colSpan: "md:col-span-2",
    icon: <GitBranch className="w-6 h-6 text-[#FF6600]" />,
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

const VERSE_ITEMS: VerseCardItem[] = [
  {
    id: "v1",
    tag: "TECHNICAL EXCELLENCE",
    title: "Front-End Engineering Discipline",
    content: "Nagaraj's ability to seamlessly bridge complex Angular frontend architectures with robust ASP.NET backend services set a high technical bar across our engineering team.",
    author: "Engineering Lead",
    role: "Enterprise Software Division",
    color: "#FF6600",
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
    color: "#FF6600",
  },
];

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <div className="min-h-screen bg-[#FDFBF7] dark:bg-[#070A12] text-neutral-900 dark:text-neutral-100 relative selection:bg-[#FF6600] selection:text-white transition-colors duration-500 overflow-x-hidden max-w-full w-full">
        {/* Centered Floating Capsule Pill Navigation (from Reference 1) */}
        <Navbar />

        <main className="relative overflow-x-hidden max-w-full w-full">
          {/* 1. Flagship Hero with Seated Cutout & Warm Geometric Arc */}
          <Hero />

          {/* 2. Services & Architecture (Direct dark obsidian curved continuation) */}
          <Services />

          {/* 3. Aceternity Container Scroll 3D Perspective Showcase */}
          <DashboardScrollShowcase />

          {/* 4. Selected Projects Showcase — 3D magnetic tilt cards with categories */}
          <Projects />

          {/* 5. Tech Stack / Skills with 3D Solar System & Gauges */}
          <Skills />

          {/* 6. Aceternity / Vengence UI Expandable Bento Grid */}
          <section className="py-16 px-4 max-w-7xl mx-auto">
            <ScrollDissolveReveal>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF6600]">
                  <TextScramble text="SYSTEM ARCHITECTURE MATRIX" />
                </span>
                <h2 className="font-sans font-black text-3xl md:text-4xl text-neutral-900 dark:text-white mt-2">
                  Architectural Principles &amp; Engineering Pillars
                </h2>
                <p className="font-sans text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                  Click any bento tile to expand full architectural breakdowns.
                </p>
              </div>

              <ExpandableBentoGrid items={BENTO_ITEMS} />
            </ScrollDissolveReveal>
          </section>

          {/* 7. Signature Elastic Pull/Drag Craft Canvas */}
          <ExploreCraft />

          {/* 8. Aceternity 3D Perspective Carousel */}
          <section className="py-10 px-4 md:px-8 max-w-6xl mx-auto bg-[#0B0F17] rounded-3xl border border-white/10 my-8 text-white">
            <ScrollDissolveReveal>
              <div className="text-center max-w-3xl mx-auto mb-5">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF6600]">
                  <TextScramble text="3D CYLINDER PERSPECTIVE CAROUSEL" />
                </span>
                <h2 className="font-sans font-black text-2xl md:text-3xl text-white mt-1.5">
                  Featured System Deep Dives
                </h2>
              </div>

              <PerspectiveCarousel slides={CAROUSEL_SLIDES} />
            </ScrollDissolveReveal>
          </section>

          {/* 9. Unified Executive Architecture Playbook & Live Code Binder Spread */}
          <ScrollDissolveReveal>
            <ArchitecturePlaybook />
          </ScrollDissolveReveal>

          {/* 11. About Nagaraj & Foxconn Precision with Polaroid */}
          <About />

          {/* 12. Peer & Client Testimonials */}
          <section className="py-16 px-4 max-w-4xl mx-auto text-center">
            <ScrollDissolveReveal>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF6600]">
                VERSED TESTIMONIALS
              </span>
              <h2 className="font-sans font-black text-3xl md:text-4xl text-neutral-900 dark:text-white mt-2 mb-8">
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
