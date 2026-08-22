import React from "react";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 px-4 md:px-8 max-w-7xl mx-auto font-mono text-xs text-slate-600">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
        {/* Left identity */}
        <div className="flex flex-col space-y-1">
          <span className="font-bold text-slate-900 uppercase tracking-widest">
            {siteConfig.name}
          </span>
          <span>{siteConfig.title}</span>
        </div>

        {/* Right links */}
        <div className="flex flex-wrap items-center gap-6">
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-blue-600 transition-colors"
          >
            Email
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            LinkedIn
          </a>
          {siteConfig.github && (
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
          )}
          <a
            href={siteConfig.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            Resume (PDF)
          </a>
        </div>
      </div>

      {/* Bottom copyright line */}
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
        <span>© 2026 Nagaraj K. All rights reserved.</span>
        <span>Designed &amp; engineered with intention.</span>
      </div>
    </footer>
  );
}
