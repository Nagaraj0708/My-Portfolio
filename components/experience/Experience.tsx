"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Briefcase, Building2, Calendar, Award, ExternalLink, CheckCircle2, Code2, GraduationCap } from "lucide-react";

export function Experience() {
  const timelineData = [
    {
      title: "12/2025 — Present",
      content: (
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl space-y-4 sm:space-y-5">
          {/* Role Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 pb-3.5 sm:pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <Briefcase className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <h3 className="font-sans font-black text-lg sm:text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-indigo-300">
                  Software Developer — Front End
                </h3>
              </div>
              <span className="font-mono text-[11px] sm:text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center space-x-1.5">
                <Building2 className="w-3.5 h-3.5 shrink-0" />
                <span>I-Net Secure Labs Pvt Ltd — Chennai</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] sm:text-xs font-extrabold text-amber-600 dark:text-amber-400 bg-amber-500/10 dark:bg-amber-500/20 px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-full border border-amber-500/30 flex items-center gap-1.5 shadow-2xs">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>Rising Star Award Winner</span>
              </span>
              <span className="font-mono text-[10px] sm:text-xs font-extrabold text-[#FF6600] bg-[#FF6600]/10 px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-full border border-[#FF6600]/30 w-fit shadow-2xs">
                CURRENT ROLE
              </span>
            </div>
          </div>

          {/* Impact Statement */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Building and maintaining enterprise-grade Angular web applications and backend services at I-Net Secure Labs. Responsible for developing secure, scalable multi-tenant corporate portals with a focus on asset management, allocation workflows, and real-time reporting dashboards.
          </p>

          {/* Key Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 pt-1 sm:pt-2 font-sans text-xs md:text-sm text-slate-700 dark:text-slate-200">
            <div className="flex items-start space-x-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <span>Building the iHub Tenant Portal — multi-tenant Angular 14+ SPA with role-based access control.</span>
            </div>
            <div className="flex items-start space-x-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <span>Engineered asset lifecycle, allocation, QR tag, and acknowledgement modules end-to-end.</span>
            </div>
            <div className="flex items-start space-x-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <span>Implemented CI/CD pipelines and coordinated UAT releases with cross-functional teams.</span>
            </div>
            <div className="flex items-start space-x-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <span>Integrated RxJS reactive data streams and PrimeNG components for high-frequency data tables.</span>
            </div>
          </div>

          {/* Side Project callout */}
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-indigo-50/50 dark:bg-slate-800/80 border border-indigo-100 dark:border-indigo-900/50 flex items-start gap-2.5 sm:gap-3">
            <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-indigo-600 text-white shrink-0 mt-0.5 shadow-md">
              <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <span className="font-mono text-[10px] sm:text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide block mb-0.5 sm:mb-1">Side Projects — Production Live</span>
              <span className="font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                Built &amp; deployed <strong className="text-indigo-600 dark:text-indigo-400 font-bold">Shiyarah Weddings</strong> and <strong className="text-amber-600 dark:text-amber-400 font-bold">Popcorn &amp; Company</strong> e-commerce SPA live on Vercel alongside corporate engineering.
              </span>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 pt-2.5 sm:pt-3 border-t border-slate-100 dark:border-slate-800">
            {["Angular 14+", "TypeScript", "RxJS", "PrimeNG", "ASP.NET Core", "SQL Server", "Azure DevOps"].map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-blue-50/60 dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-blue-200/80 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "04/2023 — 11/2025",
      content: (
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl space-y-4 sm:space-y-5">
          {/* Role Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 pb-3.5 sm:pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <Briefcase className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <h3 className="font-sans font-black text-lg sm:text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-800 dark:from-white dark:via-indigo-200 dark:to-purple-300">
                  Freelance Software Developer
                </h3>
              </div>
              <span className="font-mono text-[11px] sm:text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center space-x-1.5">
                <Building2 className="w-3.5 h-3.5 shrink-0" />
                <span>Client Direct / Self-Employed</span>
              </span>
            </div>

            <span className="font-mono text-[10px] sm:text-xs font-extrabold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-full border border-indigo-200 dark:border-indigo-800/80 w-fit shadow-2xs">
              4 PROJECTS DELIVERED
            </span>
          </div>

          {/* Overview */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Architected end-to-end enterprise web applications for direct clients — delivering a gourmet popcorn e-commerce store, clinical EMR system, HR management portal, and inventory logistics engine. Full ownership from requirement gathering through to server deployment.
          </p>

          {/* Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 pt-1 sm:pt-2 font-sans text-xs md:text-sm text-slate-700 dark:text-slate-200">
            <div className="flex items-start space-x-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              <span>Engineered Popcorn &amp; Company — gourmet e-commerce SPA with festive coupons live on Vercel.</span>
            </div>
            <div className="flex items-start space-x-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              <span>Delivered Clinical EMR System — patient registration, scheduling, and EMR with role-based access.</span>
            </div>
            <div className="flex items-start space-x-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              <span>Built HR Management Portal — employee lifecycle, leave, payroll &amp; recruitment pipeline.</span>
            </div>
            <div className="flex items-start space-x-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              <span>Engineered Order &amp; Inventory Logistics system with real-time stock alerts &amp; API integration.</span>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 pt-2.5 sm:pt-3 border-t border-slate-100 dark:border-slate-800">
            {["Angular 14+", "TypeScript", "ASP.NET Core", "Azure DevOps", "AWS", "RxJS", "SQL Server", "C#", "Vercel"].map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-indigo-50/60 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-indigo-200/80 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "08/2021 — 04/2023",
      content: (
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl space-y-4 sm:space-y-5">
          {/* Role Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 pb-3.5 sm:pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <Briefcase className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400 shrink-0" />
                <h3 className="font-sans font-black text-lg sm:text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-800 dark:from-white dark:via-purple-200 dark:to-indigo-300">
                  Technician &amp; Quality Leader
                </h3>
              </div>
              <span className="font-mono text-[11px] sm:text-xs font-bold text-purple-600 dark:text-purple-400 flex items-center space-x-1.5">
                <Building2 className="w-3.5 h-3.5 shrink-0" />
                <span>Foxconn Pvt Ltd</span>
              </span>
            </div>

            <span className="font-mono text-[10px] sm:text-xs font-extrabold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-full border border-purple-200 dark:border-purple-800/80 w-fit shadow-2xs">
              2 PROMOTIONS IN 1ST YEAR
            </span>
          </div>

          {/* Highlight Impact Card */}
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-50/50 dark:bg-slate-800/80 border border-amber-200/80 dark:border-amber-900/50 flex items-center space-x-3 sm:space-x-4">
            <div className="p-2.5 sm:p-3 rounded-xl bg-amber-500 text-white shrink-0 shadow-md">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] sm:text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                ★ VERIFIED FINANCIAL IMPACT
              </span>
              <span className="font-sans text-xs sm:text-base font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 dark:from-amber-400 dark:via-orange-400 dark:to-amber-300">
                +$20,000 Annual Efficiency Gains via 6S &amp; Kaizen
              </span>
            </div>
          </div>

          {/* Bullet Points */}
          <div className="space-y-2 sm:space-y-2.5 font-sans text-xs md:text-sm text-slate-700 dark:text-slate-200">
            <div className="flex items-start space-x-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80">
              <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
              <span>Spearheaded the flagship iPhone 11 assembly line operations and defect prevention controls.</span>
            </div>

            <div className="flex items-start space-x-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80">
              <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
              <span>Implemented 6S and Kaizen process optimizations leading to $20,000 in annualized savings.</span>
            </div>

            <div className="flex items-start space-x-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80">
              <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
              <span>Promoted twice within 12 months for outstanding leadership, accountability, and team results.</span>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 pt-2.5 sm:pt-3 border-t border-slate-100 dark:border-slate-800">
            {["Foxconn Leadership", "iPhone 11 Line", "6S / Kaizen", "Process Optimization", "Quality Assurance"].map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-purple-50/60 dark:bg-slate-800 text-purple-600 dark:text-purple-400 border border-purple-200/80 dark:border-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "04/2021 — 08/2021",
      content: (
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl space-y-3.5 sm:space-y-4">
          <div className="flex items-center space-x-3 pb-3 border-b border-slate-100 dark:border-slate-800">
            <Briefcase className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-teal-600 dark:text-teal-400 shrink-0" />
            <div>
              <h3 className="font-sans font-black text-base sm:text-lg md:text-xl text-slate-900 dark:text-white">
                Site Technician
              </h3>
              <span className="font-mono text-[11px] sm:text-xs font-bold text-teal-600 dark:text-teal-400">
                Eminence
              </span>
            </div>
          </div>

          <p className="font-sans text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            On-site telecom infrastructure validation, hardware testing, and direct client technical operations support.
          </p>
        </div>
      ),
    },
    {
      title: "Education & Certs",
      content: (
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl space-y-5 sm:space-y-6">
          {/* Header */}
          <div className="flex items-center space-x-2.5 sm:space-x-3 pb-3 border-b border-slate-100 dark:border-slate-800">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400 shrink-0" />
            <div>
              <h3 className="font-sans font-black text-lg sm:text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                Education &amp; Professional Certifications
              </h3>
              <span className="font-mono text-[11px] sm:text-xs font-bold text-blue-600 dark:text-blue-400">
                Electronics Engineering Foundation &amp; Angular Credentials
              </span>
            </div>
          </div>

          {/* Education Timeline Items */}
          <div className="space-y-3 sm:space-y-4">
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-blue-50/40 dark:bg-slate-800/50 border border-blue-100 dark:border-slate-700/80 flex flex-col space-y-1 sm:space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] sm:text-xs font-extrabold text-blue-600 dark:text-blue-400 bg-blue-100/80 dark:bg-blue-950/80 px-2 py-0.5 sm:px-2.5 rounded border border-blue-200 dark:border-blue-800">
                  08/2016 — 05/2019
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  BACHELOR DEGREE
                </span>
              </div>
              <h4 className="font-sans font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                Bachelor of Engineering - Electronics &amp; Communication Engineering
              </h4>
              <span className="font-sans font-semibold text-xs text-blue-600 dark:text-blue-400">
                Meenakshi Sundararajan Engineering College
              </span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-indigo-50/40 dark:bg-slate-800/50 border border-indigo-100 dark:border-slate-700/80 flex flex-col space-y-1 sm:space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] sm:text-xs font-extrabold text-indigo-600 dark:text-indigo-400 bg-indigo-100/80 dark:bg-indigo-950/80 px-2 py-0.5 sm:px-2.5 rounded border border-indigo-200 dark:border-indigo-800">
                  08/2013 — 05/2016
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  DIPLOMA DEGREE
                </span>
              </div>
              <h4 className="font-sans font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                Diploma in Electronics &amp; Communication Engineering
              </h4>
              <span className="font-sans font-semibold text-xs text-indigo-600 dark:text-indigo-400">
                Panimalar Polytechnic College
              </span>
            </div>
          </div>

          {/* Certifications Block */}
          <div className="pt-3.5 sm:pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5 sm:space-y-3">
            <span className="font-mono text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400 block">
              CERTIFICATIONS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div className="p-3 sm:p-3.5 rounded-xl bg-blue-50/50 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700 flex items-center space-x-2.5 sm:space-x-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-xs md:text-sm text-slate-900 dark:text-white">
                    Angular for Front End Engineer
                  </span>
                  <span className="font-sans text-[10px] sm:text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
                    Certified Front-End Specialist
                  </span>
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-indigo-50/50 dark:bg-slate-800/60 border border-indigo-100 dark:border-slate-700 flex items-center space-x-2.5 sm:space-x-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-xs md:text-sm text-slate-900 dark:text-white">
                    Angular - The Complete Guide
                  </span>
                  <span className="font-sans text-[10px] sm:text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold">
                    Enterprise RxJS &amp; SPA Architecture
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" aria-label="Career Timeline">
      <Timeline
        data={timelineData}
        headerTitle="Career Journey &amp; Work History"
        headerSubtitle="A chronological walkthrough of software engineering achievements, production leadership at Foxconn, and hardware operations."
      />
    </section>
  );
}
