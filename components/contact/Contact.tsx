"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Copy,
  Check,
  MessageSquare,
  Award,
  Sparkles,
  Send,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LinkedInIcon, GithubIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/data/siteConfig";

const INQUIRY_TYPES = [
  "Full-Time Role",
  "Angular / SPA Architecture",
  "UI/UX Engineering",
  "General Inquiry",
];

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedType, setSelectedType] = useState(INQUIRY_TYPES[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 5000);
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Nagaraj K"
      className="py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto border-t border-neutral-200/80 dark:border-white/10 relative"
    >
      {/* ── Ambient Radial Glow ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF6600]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* ── Section Header ── */}
      <div className="flex flex-col space-y-2 mb-8 sm:mb-10 max-w-2xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/25 w-fit">
          <MessageSquare className="w-3.5 h-3.5 text-[#FF6600]" />
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#FF6600]">
            INITIATE COLLABORATION
          </span>
        </div>
        <h2 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl text-neutral-900 dark:text-white tracking-tight leading-[1.1]">
          Let&apos;s Build the{" "}
          <span className="relative inline-block text-[#FF6600]">
            Next Standard.
            <svg
              className="absolute -bottom-1 inset-x-0 w-full h-2 text-[#FF6600]/40"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              <path
                d="M0 15 Q 50 2 100 15"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>
        <p className="font-sans text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
          Open for enterprise Front-End Developer opportunities, scalable Angular/Next.js architectures, and high-impact engineering collaborations.
        </p>
      </div>

      {/* ── Cohesive Bento Command Console (Symmetrical Dual-Pane) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        
        {/* ── Left Column: Unified Communication & Telemetry Hub (5 Cols) ── */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#0B0F17]/95 text-neutral-900 dark:text-white border border-neutral-200/90 dark:border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl relative overflow-hidden flex flex-col justify-between space-y-6">
          
          {/* Subtle Ambient Light Mesh */}
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF6600]/5 rounded-full blur-[90px] pointer-events-none" />

          {/* Hub Status Bar (Mirrors Console Dispatch on Right) */}
          <div className="flex items-center justify-between border-b border-neutral-200/80 dark:border-white/10 pb-3 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF6600] animate-pulse shadow-[0_0_8px_#FF6600]" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">
                Direct Channels
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-white/5 px-2.5 py-0.5 rounded-full border border-neutral-200/80 dark:border-white/10">
              <Clock className="w-3 h-3 text-[#FF6600]" />
              <span>&lt; 24h SLA</span>
            </div>
          </div>

          {/* Core Channels Stack */}
          <div className="flex flex-col space-y-3.5 relative z-10">
            {/* Primary Email Dispatch Tile */}
            <div className="p-4 rounded-2xl bg-neutral-50/90 dark:bg-white/5 border border-neutral-200/80 dark:border-white/10 shadow-xs flex items-center justify-between group hover:border-[#FF6600]/40 transition-all">
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#FF6600]/10 border border-[#FF6600]/25 text-[#FF6600] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0 text-left">
                  <span className="text-neutral-400 dark:text-neutral-500 font-mono text-[10px] font-bold uppercase tracking-wider">
                    Primary Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-mono text-xs sm:text-sm font-bold text-neutral-900 dark:text-neutral-100 hover:text-[#FF6600] dark:hover:text-[#FF6600] transition-colors truncate"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                className="p-2 rounded-lg bg-white dark:bg-white/10 hover:bg-[#FF6600]/10 hover:text-[#FF6600] dark:hover:text-[#FF6600] text-neutral-500 transition-colors cursor-pointer shrink-0 border border-neutral-200/60 dark:border-white/10 active:scale-95 ml-2"
              >
                {copiedEmail ? (
                  <span className="flex items-center gap-1 font-mono text-[10px] text-emerald-500 font-bold">
                    <Check className="w-3.5 h-3.5" /> Copied
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Base Location & Availability Tile */}
            <div className="p-4 rounded-2xl bg-neutral-50/90 dark:bg-white/5 border border-neutral-200/80 dark:border-white/10 shadow-xs flex items-center space-x-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-500 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-neutral-400 dark:text-neutral-500 font-mono text-[10px] font-bold uppercase tracking-wider">
                  Location &amp; Availability
                </span>
                <span className="font-sans font-bold text-xs sm:text-sm text-neutral-900 dark:text-white truncate">
                  {siteConfig.location}
                </span>
                <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold mt-0.5 flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Open for On-Site &amp; Remote Roles</span>
                </div>
              </div>
            </div>

            {/* Social Channels 2-Col Grid */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-neutral-50/90 dark:bg-white/5 border border-neutral-200/80 dark:border-white/10 hover:border-[#FF6600]/40 shadow-xs flex items-center justify-center gap-2 group transition-all"
              >
                <LinkedInIcon className="w-4 h-4 text-[#FF6600] group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs font-bold text-neutral-800 dark:text-neutral-200">
                  LinkedIn
                </span>
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-neutral-50/90 dark:bg-white/5 border border-neutral-200/80 dark:border-white/10 hover:border-[#FF6600]/40 shadow-xs flex items-center justify-center gap-2 group transition-all"
              >
                <GithubIcon className="w-4 h-4 text-[#FF6600] group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs font-bold text-neutral-800 dark:text-neutral-200">
                  GitHub
                </span>
              </a>
            </div>
          </div>

          {/* Security & SLA Trust Seal */}
          <div className="p-3 rounded-2xl bg-neutral-100/80 dark:bg-black/30 border border-neutral-200/80 dark:border-white/10 font-mono text-[10px] text-neutral-500 dark:text-neutral-400 flex items-center justify-between relative z-10">
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Verified Direct Channel</span>
            </span>
            <span className="text-[#FF6600] font-bold">Priority Response</span>
          </div>

        </div>

        {/* ── Right Column: Apple-Grade Obsidian Message Dispatch Console (7 Cols) ── */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#070A12] text-white border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col justify-between">
          
          {/* Subtle Ambient Light Mesh */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#FF6600]/10 rounded-full blur-[100px] pointer-events-none" />

          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 sm:py-24 flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-3xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 animate-pulse" />
              </div>
              <h3 className="font-sans font-black text-2xl text-white">
                Message Dispatched!
              </h3>
              <p className="font-sans text-sm text-neutral-300 max-w-sm leading-relaxed">
                Thank you for reaching out. Nagaraj will review your project requirements and respond shortly.
              </p>
              <span className="font-mono text-[11px] text-[#FF6600] font-semibold bg-[#FF6600]/10 px-3 py-1 rounded-full border border-[#FF6600]/20">
                Direct to Naga97raj@gmail.com
              </span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-5 relative z-10">
              
              {/* Terminal Status Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-300">
                    Console Dispatch
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-neutral-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                  <ShieldCheck className="w-3 h-3 text-[#FF6600]" />
                  <span>256-bit Encrypted</span>
                </div>
              </div>

              {/* Inquiry Type Selector Pills */}
              <div className="flex flex-col space-y-2">
                <label className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  Select Scope / Interest
                </label>
                <div className="flex flex-wrap gap-2">
                  {INQUIRY_TYPES.map((type) => {
                    const isSelected = selectedType === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedType(type)}
                        className={`font-mono text-[11px] font-semibold px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#FF6600] text-white border-[#FF6600] shadow-md shadow-[#FF6600]/30"
                            : "bg-white/5 text-neutral-400 border-white/10 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1.5 text-left">
                  <label
                    htmlFor="name"
                    className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400"
                  >
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-sans text-xs sm:text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600] transition-all"
                  />
                </div>

                <div className="flex flex-col space-y-1.5 text-left">
                  <label
                    htmlFor="email"
                    className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400"
                  >
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-sans text-xs sm:text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600] transition-all"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="flex flex-col space-y-1.5 text-left">
                <label
                  htmlFor="message"
                  className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400"
                >
                  Project Details / Role Specification *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Outline your application requirements, technology stack, timeline, or position details..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-sans text-xs sm:text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600] transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative inline-flex items-center justify-center space-x-2 font-mono text-xs sm:text-sm font-bold py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#FF5500] to-[#FF7711] hover:from-[#E64C00] hover:to-[#FF6600] text-white shadow-lg shadow-[#FF6600]/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer overflow-hidden border border-white/20 select-none disabled:opacity-50"
                >
                  <span>{isSubmitting ? "Encrypting & Sending..." : "Dispatch Message"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </form>
          )}

        </div>

      </div>

    </section>
  );
}
