"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Wrench,
  Mail,
  ArrowUpRight,
  FileText,
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
          if (rect.top <= 220) {
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
      {/* Floating Capsule Header */}
      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
        <nav
          onMouseLeave={() => setHoveredSection(null)}
          className={`pointer-events-auto backdrop-blur-2xl rounded-full px-3 py-2 sm:px-5 sm:py-2.5 flex items-center justify-between gap-3 sm:gap-6 md:gap-8 max-w-4xl transition-all duration-300 ${
            scrolled
              ? "bg-[#070A12]/95 border border-white/20 shadow-[0_16px_50px_rgba(0,0,0,0.5)] scale-[0.99]"
              : "bg-[#0A0D14]/90 border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.35)] scale-100"
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand Monogram Badge */}
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
            className="flex items-center gap-2.5 group cursor-pointer select-none"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF5500] to-[#FF7711] text-white font-mono font-black text-xs flex items-center justify-center shadow-md shadow-[#FF6600]/30 group-hover:scale-105 group-hover:shadow-[#FF6600]/50 transition-all">
              NK
            </div>
            <div className="flex flex-col text-left">
              <span className="font-mono text-xs font-black tracking-wider text-white group-hover:text-[#FF6600] transition-colors">
                NAGARAJ
              </span>
              <span className="font-mono text-[9px] text-[#FF6600] font-semibold tracking-widest leading-none">
                FRONT-END DEVELOPER
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Magnetic Gliding Hover & Active Pill */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.sectionId;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHoveredSection(item.sectionId)}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors duration-200 select-none ${
                    isActive
                      ? "text-white font-bold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {/* Fluid Gliding Hover Pill */}
                  {hoveredSection === item.sectionId && !isActive && (
                    <motion.span
                      layoutId="navHoverPill"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Clean Signature Orange Active Indicator with Aura */}
                  {isActive && (
                    <motion.span
                      layoutId="navActivePill"
                      className="absolute inset-0 bg-gradient-to-r from-[#FF5500] to-[#FF7711] rounded-full -z-10 shadow-[0_0_20px_rgba(255,102,0,0.55)] border border-white/20"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                    />
                  )}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button with Animated Transformation */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#FF6600]" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Animated Dropdown with Backdrop Blur Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Dimmer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="fixed inset-x-4 top-20 z-50 p-5 rounded-3xl bg-[#0A0D14]/95 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col space-y-2 md:hidden"
            >
              {navItems.map((item, idx) => {
                const IconComp = item.icon;
                const isActive = activeSection === item.sectionId;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`flex items-center justify-between p-3.5 rounded-2xl font-mono text-sm font-bold transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-[#FF5500] to-[#FF7711] text-white shadow-lg shadow-[#FF6600]/30"
                          : "text-neutral-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComp className={`w-4 h-4 ${isActive ? "text-white" : "text-[#FF6600]"}`} />
                        <span>{item.label}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 opacity-50" />
                    </Link>
                  </motion.div>
                );
              })}

              <div className="pt-3 border-t border-white/10 flex gap-2">
                <a
                  href={siteConfig.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Nagaraj Resume.pdf"
                  className="flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-bold text-center border border-white/10 transition-colors"
                >
                  Download CV
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-3 rounded-2xl bg-[#FF6600] hover:bg-[#E65C00] text-white font-mono text-xs font-bold text-center shadow-lg shadow-[#FF6600]/30 transition-colors"
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
