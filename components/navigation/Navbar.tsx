"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Wrench,
  Mail,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const navItems = [
  { label: "Home", sectionId: "hero", href: "/#hero", icon: Home },
  { label: "Services", sectionId: "services", href: "/#services", icon: Wrench },
  { label: "Projects", sectionId: "projects", href: "/#projects", icon: Briefcase },
  { label: "About", sectionId: "about", href: "/#about", icon: User },
  { label: "Contact", sectionId: "contact", href: "/#contact", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // 3D Spatial Tilt Physics
  const navContainerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 280, damping: 24, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Gentle 3D perspective rotation (max +/- 5 degrees for realistic spatial feel)
  const rotateX = useTransform(smoothMouseY, [0, 1], [4, -4]);
  const rotateY = useTransform(smoothMouseX, [0, 1], [-6, 6]);

  // Specular sheen highlight coordinate
  const sheenX = useTransform(smoothMouseX, [0, 1], ["0%", "100%"]);
  const sheenY = useTransform(smoothMouseY, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!navContainerRef.current) return;
    const rect = navContainerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    setHoveredSection(null);
  };

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 25);

      if (scrollY < 120) {
        setActiveSection("hero");
        return;
      }

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 240) {
            setActiveSection(navItems[i].sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof navItems)[0]
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(item.sectionId);

    const lenis = typeof window !== "undefined" ? (window as any).__lenis : null;

    if (item.sectionId === "hero") {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.0 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const elem = document.getElementById(item.sectionId);
    if (elem) {
      if (lenis) {
        lenis.scrollTo(elem, { offset: -70, duration: 1.0 });
      } else {
        const top = elem.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.0 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* 
        PREMIUM 3D TRANSPARENT GLASS NAVBAR
        Inspired by tactile Apple VisionOS & frosted glass neumorphism (Reference Design).
        Features:
        - Floating translucent frosted glass panel with 3D specular rim reflections
        - Tactile 3D extruded pill architecture with physical depth and soft cast shadows
        - Fluid gliding active indicator and silky hover sheen
      */}
      <header
        className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none transition-all duration-300 animate-in fade-in slide-in-from-top-4 duration-700"
      >
        {/* Outer Translucent Glass Panel (The Curved Glass Shield) */}
        <div
          className={`pointer-events-auto relative p-1.5 sm:p-2 rounded-full transition-all duration-500 max-w-4xl w-full sm:w-auto flex items-center justify-between gap-2 sm:gap-4 md:gap-6 ${
            scrolled
              ? "bg-white/75 dark:bg-black/60 backdrop-blur-3xl border-t border-l border-white/95 border-r border-b border-white/40 shadow-[0_20px_50px_rgba(15,23,42,0.14),0_6px_16px_rgba(15,23,42,0.08),inset_0_1.5px_2px_rgba(255,255,255,0.95),inset_0_-1.5px_2px_rgba(0,0,0,0.04)]"
              : "bg-white/65 dark:bg-white/20 backdrop-blur-2xl border-t border-l border-white/90 border-r border-b border-white/40 shadow-[0_16px_40px_rgba(15,23,42,0.08),0_4px_12px_rgba(15,23,42,0.04),inset_0_1.5px_2px_rgba(255,255,255,0.95),inset_0_-1px_1.5px_rgba(0,0,0,0.03)]"
          }`}
          style={{
            WebkitBackdropFilter: "blur(28px) saturate(180%)",
            backdropFilter: "blur(28px) saturate(180%)",
          }}
          aria-label="Main Navigation"
        >
          {/* Subtle Top Specular Rim Reflection Highlight */}
          <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none rounded-full" />

          {/* Brand Monogram & Identity (Tactile Glass Badge) */}
          <Link
            href="/#hero"
            onClick={(e) =>
              handleNavClick(e, {
                label: "Home",
                sectionId: "hero",
                href: "/#hero",
                icon: Home,
              })
            }
            className="flex items-center gap-2.5 px-2 sm:px-3 py-1 group cursor-pointer select-none"
          >
            {/* 3D Tactile Monogram Circle */}
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6600] to-[#E65500] text-white font-mono font-black text-xs flex items-center justify-center shadow-[0_4px_12px_rgba(255,102,0,0.38),inset_0_1.5px_1px_rgba(255,255,255,0.65),inset_0_-1.5px_2px_rgba(0,0,0,0.2)] group-hover:scale-105 group-hover:shadow-[0_6px_18px_rgba(255,102,0,0.55)] transition-all">
              <span>NK</span>
              {/* Micro specular sheen */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-white/30 pointer-events-none" />
            </div>

            <div className="flex flex-col text-left">
              <span className="font-mono text-xs font-black tracking-wider text-slate-900 group-hover:text-[#FF6600] transition-colors">
                NAGARAJ
              </span>
              <span className="font-mono text-[9px] text-[#FF6600] font-semibold tracking-widest leading-none">
                FRONT-END DEV
              </span>
            </div>
          </Link>

          {/* 
            Desktop 3D Elevated Pill Bar (Inspired by the Reference Image)
            Notice the tactile extruded depth, inner specular light, and ambient cast drop shadow
          */}
          <nav
            onMouseLeave={() => setHoveredSection(null)}
            className="hidden md:flex items-center p-1 rounded-full relative bg-white/50 backdrop-blur-xl border border-white/75 shadow-[0_8px_20px_-4px_rgba(15,23,42,0.12),0_2px_6px_-1px_rgba(15,23,42,0.06),inset_0_2px_2px_rgba(255,255,255,0.95),inset_0_-2px_3px_rgba(15,23,42,0.05)]"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.sectionId;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHoveredSection(item.sectionId)}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 select-none ${
                    isActive
                      ? "text-white font-bold"
                      : "text-slate-700 hover:text-slate-950"
                  }`}
                >
                  {/* Fluid Gliding Hover Glass Sheen */}
                  {hoveredSection === item.sectionId && !isActive && (
                    <motion.span
                      layoutId="navHoverPill"
                      className="absolute inset-0 bg-white/75 rounded-full -z-10 shadow-[0_2px_8px_rgba(15,23,42,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] border border-white/80"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* 3D Tactile Active Capsule with Specular Sheen & Depth */}
                  {isActive && (
                    <motion.span
                      layoutId="navActivePill"
                      className="absolute inset-0 bg-gradient-to-r from-[#FF5500] via-[#FF6600] to-[#FF7711] rounded-full -z-10 shadow-[0_6px_16px_rgba(255,102,0,0.45),0_2px_4px_rgba(255,102,0,0.25),inset_0_1.5px_1px_rgba(255,255,255,0.65),inset_0_-1.5px_2px_rgba(0,0,0,0.18)] border border-white/30"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Quick CTA or Mobile Menu Trigger */}
          <div className="flex items-center gap-2">
            {/* Desktop Direct Contact Button */}
            <Link
              href="/#contact"
              onClick={(e) =>
                handleNavClick(e, {
                  label: "Contact",
                  sectionId: "contact",
                  href: "/#contact",
                  icon: Mail,
                })
              }
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-[11px] font-bold text-slate-800 bg-white/60 hover:bg-white/90 border border-white/80 shadow-[0_2px_6px_rgba(15,23,42,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] transition-all hover:scale-[1.02]"
            >
              <Sparkles className="w-3 h-3 text-[#FF6600]" />
              <span>Hire Me</span>
            </Link>

            {/* Mobile Menu Button (Tactile 3D Glass Trigger) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/60 hover:bg-white/90 text-slate-800 border border-white/80 shadow-[0_2px_6px_rgba(15,23,42,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] transition-all"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 text-[#FF6600]" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Dropdown with Translucent Glass Styling */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Soft Ambient Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/30 backdrop-blur-md z-40 md:hidden"
            />

            {/* Frosted Glass Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -24, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="fixed inset-x-4 top-20 z-50 p-5 rounded-3xl bg-white/80 backdrop-blur-3xl border-t border-l border-white/95 border-r border-b border-white/50 shadow-[0_25px_60px_rgba(15,23,42,0.18),0_10px_20px_rgba(15,23,42,0.08),inset_0_2px_2px_rgba(255,255,255,0.9)] flex flex-col space-y-2 md:hidden"
            >
              {/* Specular Rim Accent */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

              {/* Header inside mobile drawer */}
              <div className="flex items-center justify-between pb-3 mb-1 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#FF6600] text-white font-mono font-bold text-[10px] flex items-center justify-center">
                    NK
                  </div>
                  <span className="font-mono text-xs font-black tracking-wider text-white">
                    PORTFOLIO NAVIGATION
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AVAILABLE
                </div>
              </div>

              {navItems.map((item, idx) => {
                const IconComp = item.icon;
                const isActive = activeSection === item.sectionId;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`flex items-center justify-between p-3.5 rounded-2xl font-mono text-sm font-bold transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-[#FF5500] to-[#FF7711] text-white shadow-[0_6px_16px_rgba(255,102,0,0.35),inset_0_1.5px_1px_rgba(255,255,255,0.6)]"
                          : "text-slate-800 hover:bg-white/60 hover:text-slate-950"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComp
                          className={`w-4 h-4 ${
                            isActive ? "text-white" : "text-[#FF6600]"
                          }`}
                        />
                        <span>{item.label}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 opacity-50" />
                    </Link>
                  </motion.div>
                );
              })}

              <div className="pt-3 border-t border-slate-200/60 flex gap-2">
                <a
                  href={siteConfig.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Nagaraj Resume.pdf"
                  className="flex-1 py-3 rounded-2xl bg-white/70 hover:bg-white/90 text-slate-800 font-mono text-xs font-bold text-center border border-white/80 shadow-sm transition-all"
                >
                  Download CV
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-[#FF5500] to-[#FF7711] hover:brightness-105 text-white font-mono text-xs font-bold text-center shadow-[0_6px_18px_rgba(255,102,0,0.35),inset_0_1.5px_1px_rgba(255,255,255,0.5)] transition-all"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
