"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Mail, ArrowUp } from "lucide-react";
import { LinkedInIcon, GithubIcon } from "@/components/ui/Icons";

const footerNav = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-6 md:px-12 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col space-y-8">
        {/* Main Footer Header Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Role */}
          <div className="flex flex-col items-center md:items-start space-y-0.5">
            <h2 className="font-sans font-black text-xl text-white tracking-tight">
              NAGARAJ K
            </h2>
            <span className="font-sans text-xs font-medium text-slate-400">
              Front-End Developer
            </span>
          </div>

          {/* Inline Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 font-sans text-xs font-semibold">
            {footerNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Icon Buttons */}
          <div className="flex items-center space-x-3 text-slate-400">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-2 bg-slate-900 hover:bg-slate-800 rounded-full border border-slate-800"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-2 bg-slate-900 hover:bg-slate-800 rounded-full border border-slate-800"
              title="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-white transition-colors p-2 bg-slate-900 hover:bg-slate-800 rounded-full border border-slate-800"
              title="Email Nagaraj K"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright & Scroll-To-Top Bar */}
        <div className="pt-6 border-t border-slate-900 flex items-center justify-between font-sans text-xs text-slate-500">
          <div>© 2026 Nagaraj K. All rights reserved.</div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-white hover:text-slate-950 transition-colors shadow-md cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
