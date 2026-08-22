import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Download, ArrowUpRight } from "lucide-react";

export function ResumeCTA() {
  return (
    <section
      id="resume"
      aria-label="Curriculum Vitae"
      className="py-20 md:py-28 px-4 md:px-8 max-w-5xl mx-auto border-t border-slate-200/80 dark:border-slate-800"
    >
      <div className="p-8 md:p-14 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-xl">
        <div className="flex flex-col space-y-3 max-w-md">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            CURRICULUM VITAE
          </span>
          <h2 className="font-sans font-extrabold text-2xl md:text-4xl text-slate-900 dark:text-white tracking-tight">
            Want the full story?
          </h2>
          <p className="font-sans text-base text-slate-600 dark:text-slate-300">
            Take a closer look at my experience, projects, and technical background.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={siteConfig.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 font-sans text-sm font-bold px-7 py-3.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 active:scale-98"
          >
            <span>View Resume</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={siteConfig.resumePdf}
            download="resume-nagaraj-k.pdf"
            className="inline-flex items-center space-x-2 font-sans text-sm font-semibold px-6 py-3.5 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-2xs active:scale-98"
          >
            <span>Download Resume</span>
            <Download className="w-4 h-4 text-slate-500 dark:text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
