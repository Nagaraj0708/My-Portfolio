"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  FileText,
  ChevronDown,
} from "lucide-react";
import gsap from "gsap";
import { siteConfig } from "@/data/siteConfig";
import { HeroOrbitArc } from "@/components/HeroOrbitArc";
import { useMagnetic } from "@/lib/motion";
import { KineticRollingText } from "@/components/ui/KineticRollingText";
import { AmbientParticleField } from "@/components/ui/AmbientParticleField";

/* ── Interactive 3D Perspective Tilt ──────────────────────── */
function TiltFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 220, damping: 22 });
  const mouseY = useSpring(y, { stiffness: 220, damping: 22 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xVal = (e.clientX - rect.left) / rect.width - 0.5;
    const yVal = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xVal);
    y.set(yVal);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const portraitStageRef = useRef<HTMLDivElement>(null);
  const ambientLightRef = useRef<HTMLDivElement>(null);

  const exploreBtnRef = useMagnetic<HTMLButtonElement>(0.3, 80);
  const resumeBtnRef = useMagnetic<HTMLAnchorElement>(0.3, 80);

  // GSAP Cinematic Entrance Timeline
  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Fast, cinematic staggered entrance
      tl.fromTo(
        ".hero-word",
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.04 }
      )
        .fromTo(
          subtitleRef.current,
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4 },
          "-=0.25"
        )
        .fromTo(
          ctaContainerRef.current,
          { y: 12, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: 0.4 },
          "-=0.25"
        )
        .fromTo(
          portraitStageRef.current,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.3"
        );
    }, heroRef);

    // Pointer-responsive ambient light
    const handleMouseMove = (e: MouseEvent) => {
      if (!ambientLightRef.current) return;
      const xPercent = (e.clientX / window.innerWidth - 0.5) * 80;
      const yPercent = (e.clientY / window.innerHeight - 0.5) * 40;
      gsap.to(ambientLightRef.current, {
        x: xPercent,
        y: yPercent,
        duration: 1.2,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollTo = (id: string) => {
    const lenis = typeof window !== "undefined" ? (window as any).__lenis : null;
    const elem = document.getElementById(id);
    if (elem) {
      if (lenis) {
        lenis.scrollTo(elem, { offset: -70, duration: 1.0 });
      } else {
        const top = elem.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <div
      ref={heroRef}
      id="hero"
      className="relative w-full min-h-[100svh] lg:h-screen lg:max-h-[100svh] flex flex-col justify-between bg-[#FDFBF7] dark:bg-[#070A12] text-neutral-900 dark:text-white transition-colors duration-500 overflow-hidden pt-[clamp(5.25rem,9.5vh,6.75rem)] pb-0"
    >
      {/* ── Technical Grid Mesh ──────────────────────────────── */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2430_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      {/* ── World-Class 3D Ambient Particle Mesh (Three.js) ───── */}
      <AmbientParticleField />

      {/* ── Soft Warm Radial Ambient Light (Pointer Responsive) ── */}
      <div
        ref={ambientLightRef}
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[340px] sm:w-[650px] h-[250px] sm:h-[350px] bg-[#FF6600]/10 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none will-change-transform"
      />

      {/* ── Main Landing Stage ───────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col items-center text-center justify-between">

        {/* Top Header Group: Headline, Subtitle, and CTAs */}
        <div className="flex flex-col items-center text-center w-full">
          {/* Clean, High-Impact Typographic Headline with 3D Kinetic Rolling Words */}
          <h1
            ref={headlineRef}
            className="font-sans font-black tracking-tight text-neutral-900 dark:text-white leading-[1.08] max-w-4xl text-2xl sm:text-3xl md:text-4xl lg:text-[clamp(1.9rem,3.6vh+0.6rem,3.35rem)] overflow-hidden"
          >
            <span className="hero-word inline-block mr-2">I&apos;m</span>
            <span className="hero-word inline-block relative text-[#FF6600] mr-2">
              Nagaraj
              {/* Elegant curved underline */}
              <svg className="absolute -bottom-1 inset-x-0 w-full h-2 text-[#FF6600]/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q 50 2 100 15" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            <span className="hero-word inline-block mr-2">,</span>{" "}
            <br className="hidden sm:inline" />
            <span className="inline-block text-neutral-900 dark:text-neutral-100">
              <KineticRollingText
                words={[
                  "Front-End Developer",
                  "Angular & SPA Architect",
                  "High-Throughput Engineer",
                  "UI/UX Motion Master",
                ]}
                interval={3500}
              />
            </span>
          </h1>

          {/* Concise Subtitle */}
          <p
            ref={subtitleRef}
            className="font-sans text-xs sm:text-sm lg:text-[clamp(0.8rem,1.2vh+0.2rem,1rem)] text-neutral-600 dark:text-neutral-400 mt-1.5 sm:mt-2 max-w-xl font-normal leading-relaxed"
          >
            Bringing Foxconn manufacturing precision to enterprise Angular SPAs, high-throughput RxJS pipelines, and ASP.NET Core web systems.
          </p>

          {/* ── Clean Hero Action CTAs with Magnetic Spring Pull ── */}
          <div
            ref={ctaContainerRef}
            className="flex items-center justify-center gap-3 sm:gap-3.5 mt-2.5 sm:mt-3.5 mb-2 sm:mb-3 z-20"
          >
            <button
              ref={exploreBtnRef}
              onClick={() => scrollTo("projects")}
              className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#FF6600] hover:bg-[#E65C00] text-white font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#FF6600]/30 flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-all border border-white/20 select-none hover:scale-105 active:scale-95 will-change-transform"
            >
              <span>Explore Work</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <a
              ref={resumeBtnRef}
              href={siteConfig.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              download="Nagaraj Resume.pdf"
              className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-white/90 dark:bg-[#0E131F]/90 text-neutral-800 dark:text-white border border-neutral-300 dark:border-white/15 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-neutral-100 dark:hover:bg-[#151C2C] flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-all select-none backdrop-blur-md hover:scale-105 active:scale-95 will-change-transform"
            >
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6600]" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* ── Centerpiece: Warm Sunset Arc & High-Res Seated Cutout Portrait ── */}
        <div
          ref={portraitStageRef}
          className="relative mt-auto pt-4 w-full max-w-5xl flex justify-center items-end"
        >

          {/* ── Premium Tech-Stack Orbit Arc Decoration ── */}
          <HeroOrbitArc />

          {/* Warm Geometric Arc Backdrop */}
          <div className="absolute bottom-0 w-[230px] sm:w-[clamp(260px,46vh,540px)] h-[115px] sm:h-[clamp(130px,23vh,270px)] bg-gradient-to-t from-[#FF6600] via-[#FF7A1A] to-[#FFA04D] rounded-t-full shadow-[0_20px_50px_rgba(255,102,0,0.3)] z-0" />

          {/* Concentric Subtle Radial Ring */}
          <div className="absolute bottom-0 w-[260px] sm:w-[clamp(295px,52vh,600px)] h-[130px] sm:h-[clamp(148px,26vh,300px)] border border-[#FF6600]/30 rounded-t-full z-0 pointer-events-none" />

          {/* ── Seated Portrait (Completely Unobstructed from Head to Shoes) ── */}
          <TiltFrame className="relative z-10 w-[205px] sm:w-[clamp(215px,41vh,460px)] h-[225px] sm:h-[clamp(240px,46vh,520px)] flex items-end justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/nagaraj-seated.png"
                alt="Nagaraj K — Front-End Developer"
                fill
                priority
                quality={100}
                className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)] select-none pointer-events-none"
                sizes="(max-width: 768px) 320px, 420px"
              />
            </div>
          </TiltFrame>

        </div>

      </div>
    </div>
  );
}
