"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Sparkles, Send, Box, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

/* ── 1. Social Flip Button ───────────────────────────────── */
export interface SocialFlipButtonProps {
  frontLabel: string;
  backLabel: string;
  icon?: any;
  href?: string;
  className?: string;
}

export function SocialFlipButton({
  frontLabel,
  backLabel,
  icon: Icon = GithubIcon,
  href = "#",
  className,
}: SocialFlipButtonProps) {
  const [flipped, setFlipped] = useState(false);

  const renderIcon = () => {
    if (!Icon) return null;
    if (React.isValidElement(Icon)) return Icon;
    const IconComp = Icon as any;
    try {
      return <IconComp className="w-4 h-4 text-blue-400 shrink-0" />;
    } catch {
      return null;
    }
  };

  return (
    <a
      href={href || "#"}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      className={cn(
        "relative inline-block w-[200px] h-[46px] perspective-[1000px] select-none cursor-pointer",
        className
      )}
    >
      <motion.div
        animate={{ rotateX: flipped ? 180 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full relative [transform-style:preserve-3d]"
      >
        {/* Front Face */}
        <div className="absolute inset-0 bg-slate-900 text-white border border-slate-700/80 rounded-2xl flex items-center justify-center space-x-2 px-3 font-mono text-xs font-bold shadow-md [backface-visibility:hidden]">
          {renderIcon()}
          <span className="truncate">{frontLabel}</span>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl flex items-center justify-center space-x-2 px-3 font-mono text-xs font-black shadow-xl [transform:rotateX(180deg)] [backface-visibility:hidden]">
          <span className="truncate">{backLabel}</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </div>
      </motion.div>
    </a>
  );
}

/* ── 2. Pop Button ───────────────────────────────────────── */
export interface PopButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: any;
  onClick?: () => void;
  className?: string;
}

export function PopButton({
  children,
  icon: Icon = Box,
  onClick,
  className,
  ...props
}: PopButtonProps) {
  const [popped, setPopped] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPopped(true);
    setTimeout(() => setPopped(false), 500);
    onClick?.();
  };

  const IconComp = Icon || Box;

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.92 }}
      onClick={handleClick}
      className={cn(
        "relative px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-mono text-xs font-bold shadow-lg cursor-pointer overflow-hidden flex items-center space-x-2 select-none border-none outline-none",
        className
      )}
      {...(props as any)}
    >
      {popped && (
        <span className="absolute inset-0 bg-white/30 rounded-2xl animate-ping pointer-events-none" />
      )}
      <IconComp className="w-4.5 h-4.5 text-cyan-300 shrink-0" />
      <span className="flex items-center space-x-2">{children}</span>
    </motion.button>
  );
}

/* ── 3. Creepy Glitch Neon Button ────────────────────────── */
export interface CreepyButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function CreepyButton({
  label,
  href,
  onClick,
  className,
}: CreepyButtonProps) {
  return (
    <a
      href={href || "#"}
      onClick={onClick}
      className={cn(
        "relative group inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-black text-emerald-400 font-mono text-xs font-bold border border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all cursor-pointer overflow-hidden select-none",
        className
      )}
    >
      <span className="relative z-10 flex items-center space-x-2 group-hover:scale-105 transition-transform">
        <Send className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform shrink-0" />
        <span>{label}</span>
      </span>
      <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </a>
  );
}
