"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Home, User, Briefcase, Wrench, Mail } from "lucide-react";
import { useTheme } from "@/components/ui/ThemeProvider";

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
  const { theme, toggleTheme } = useTheme();

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
      {/* Floating Centered Pill Navigation Header */}
      <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className="pointer-events-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 rounded-full px-3.5 py-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center space-x-1.5 transition-colors duration-300"
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

          {/* Vertical Separator */}
          <div className="hidden md:block w-px h-4 bg-slate-200 dark:bg-slate-800 mx-1" />

          {/* Desktop Theme Switcher Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            data-cursor="OPEN"
            className="p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center cursor-pointer"
            title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
            aria-label="Toggle dark/light theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-4 h-4 text-amber-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-4 h-4 text-slate-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Header Compact Trigger */}
          <div className="flex md:hidden items-center justify-between space-x-3 px-2 py-1">
            <Link
              href="/"
              className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white"
            >
              NAGARAJ K
            </Link>

            <div className="flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-full text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-1.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 transition-colors cursor-pointer"
                aria-label="Open navigation menu"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-100 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl p-6 flex flex-col justify-between md:hidden text-slate-900 dark:text-white"
          >
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
                NAGARAJ K
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-4 my-auto">
              {navItems.map((item, idx) => {
                const isActive =
                  pathname === "/"
                    ? activeSection === item.sectionId
                    : item.href.includes(pathname);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleNavClick(e, item);
                    }}
                    className={`text-left text-2xl font-bold py-2 transition-colors flex items-center justify-between border-b border-slate-100 dark:border-slate-900 ${
                      isActive
                        ? "text-slate-900 dark:text-white font-black"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs font-normal text-slate-400">
                      0{idx + 1}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between font-mono text-xs text-slate-500 dark:text-slate-400">
              <span>Chennai, India</span>
              <span className="text-slate-900 dark:text-white font-semibold">
                ● Available for work
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
