"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Wrench, Mail, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const navItems = [
  { label: "Home", sectionId: "hero", href: "/#hero", icon: Home },
  { label: "About", sectionId: "about", href: "/#about", icon: User },
  { label: "Projects", sectionId: "projects", href: "/#projects", icon: Briefcase },
  { label: "Services", sectionId: "services", href: "/#services", icon: Wrench },
  { label: "Contact", sectionId: "contact", href: "/#contact", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // ScrollSpy for single-page homepage navigation
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].sectionId);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    if (pathname === "/") {
      e.preventDefault();
      if (item.sectionId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("hero");
        return;
      }
      const elem = document.getElementById(item.sectionId);
      if (elem) {
        const top = elem.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
        setActiveSection(item.sectionId);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection(item.sectionId);
      }
    }
  };

  return (
    <>
      {/* Floating Navigation Header */}
      <header className="fixed top-5 inset-x-0 z-50 flex justify-end md:justify-center px-4 sm:px-6 pointer-events-none">
        <nav
          className="pointer-events-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 rounded-full p-1.5 md:px-3.5 md:py-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center transition-colors duration-300"
          aria-label="Main Navigation"
        >
          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const IconComp = item.icon;
              const isActive =
                pathname === "/"
                  ? activeSection === item.sectionId
                  : item.href.includes(pathname);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  data-cursor="OPEN"
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    isActive
                      ? "text-white dark:text-slate-900 font-bold"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/80"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute inset-0 bg-slate-900 dark:bg-white rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="flex items-center space-x-1.5 z-10">
                    <IconComp
                      className={`w-3.5 h-3.5 ${
                        isActive
                          ? "text-white dark:text-slate-900"
                          : "text-slate-400 dark:text-slate-500"
                      }`}
                    />
                    <span>{item.label}</span>
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Header Compact Trigger */}
          <div className="flex md:hidden items-center justify-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-lg hover:scale-105 transition-all cursor-pointer flex items-center justify-center border border-slate-800 dark:border-slate-200"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Studio Overlay (Clean & Spacious) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-2xl px-6 py-8 sm:px-8 flex flex-col justify-between md:hidden text-white overflow-hidden"
          >
            {/* Top Accent Ambient Line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

            {/* Top Header */}
            <div className="flex items-center justify-between pt-2 pb-6 border-b border-slate-900">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="font-mono text-xs font-black uppercase tracking-widest text-white">
                  NAGARAJ K
                </span>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Central Spacious Navigation Links */}
            <nav className="my-auto py-8 space-y-6">
              {navItems.map((item, idx) => {
                const isActive =
                  pathname === "/"
                    ? activeSection === item.sectionId
                    : item.href.includes(pathname);

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        setMobileMenuOpen(false);
                        handleNavClick(e, item);
                      }}
                      className="group flex items-center justify-between py-2 border-b border-slate-900/80 transition-all"
                    >
                      <div className="flex items-center space-x-3">
                        {isActive && (
                          <motion.span
                            layoutId="activeDot"
                            className="w-2 h-2 rounded-full bg-blue-500 shrink-0"
                          />
                        )}
                        <span className={`font-sans font-black text-3xl sm:text-4xl tracking-tight transition-colors duration-300 ${
                          isActive
                            ? "bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-indigo-300"
                            : "text-slate-300 group-hover:text-white"
                        }`}>
                          {item.label}
                        </span>
                      </div>

                      <span className={`font-mono text-xs font-bold transition-colors ${
                        isActive ? "text-blue-400" : "text-slate-600 group-hover:text-slate-400"
                      }`}>
                        0{idx + 1}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Clean Studio Footer */}
            <div className="pt-6 border-t border-slate-900 flex flex-col space-y-4">
              <div className="flex items-center justify-between font-mono text-xs text-slate-400">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors flex items-center space-x-1.5"
                >
                  <span>{siteConfig.email}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
                <span className="text-slate-600">Chennai, TN</span>
              </div>

              <div className="flex items-center justify-between font-mono text-[11px] text-slate-500">
                <div className="flex items-center space-x-4">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-300 transition-colors"
                  >
                    GitHub
                  </a>
                  <span>•</span>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-300 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
                <span className="text-emerald-400 font-semibold flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  <span>Available</span>
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
