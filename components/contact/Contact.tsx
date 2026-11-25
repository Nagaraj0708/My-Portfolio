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
  Clock,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { LinkedInIcon, GithubIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/data/siteConfig";
import { useMagnetic } from "@/lib/motion";
import { TextScramble } from "@/components/ui/TextScramble";

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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    _honey: "",
  });

  const dispatchBtnRef = useMagnetic<HTMLButtonElement>(0.25, 75);
  const copyBtnRef = useMagnetic<HTMLButtonElement>(0.35, 50);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Single fast server dispatch via /api/contact
      const apiRes = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          scope: selectedType,
          message: formData.message,
          _honey: formData._honey,
        }),
      });

      const apiData = await apiRes.json();

      if (!apiRes.ok || !apiData.ok) {
        throw new Error(apiData.error || "Failed to send message.");
      }

      setFormSubmitted(true);
      setFormData({ name: "", email: "", message: "", _honey: "" });
      setTimeout(() => {
        setFormSubmitted(false);
      }, 6000);
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong while sending your message."
      );
    } finally {
      setIsSubmitting(false);
    }
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
      className="w-full bg-[#070A12] text-white py-16 sm:py-24 px-4 md:px-8 relative overflow-hidden transition-colors duration-500"
    >
      {/* ── Ambient Radial Atmosphere ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FF6600]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1f2430_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

      {/* ── Section Header (Apple Keynote Dark Editorial Typography) ── */}
      <div className="max-w-6xl mx-auto flex flex-col space-y-3 mb-12 sm:mb-14 text-left relative z-10">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 w-fit backdrop-blur-md">
          <MessageSquare className="w-3.5 h-3.5 text-[#FF6600]" />
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-slate-300">
            <TextScramble text="INITIATE COLLABORATION" />
          </span>
        </div>

        <h2 className="font-sans font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.12]">
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

        <p className="font-sans text-xs sm:text-sm md:text-base text-slate-400 font-normal leading-relaxed max-w-2xl">
          Open for enterprise Front-End Developer opportunities, scalable Angular/Next.js architectures, and high-impact engineering collaborations.
        </p>
      </div>

      {/* ── Apple-Grade Space Black Dual-Pane Architecture ── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch relative z-10">

        {/* ── Left Pane: Direct Communication Hub (5 Cols) ── */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.08)] backdrop-blur-3xl relative overflow-hidden flex flex-col justify-between space-y-6">

          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#FF6600]/10 rounded-full blur-[80px] pointer-events-none" />

          {/* Hub Status Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3.5 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-slate-200">
                Direct Channels
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400 bg-white/[0.05] px-2.5 py-0.5 rounded-full border border-white/10">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>&lt; 24h SLA</span>
            </div>
          </div>

          {/* Channel Cards Stack */}
          <div className="flex flex-col space-y-3 relative z-10">

            {/* Primary Email Card */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 shadow-xs flex items-center justify-between group transition-all">
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 text-slate-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4 text-[#FF6600]" />
                </div>
                <div className="flex flex-col min-w-0 text-left">
                  <span className="text-slate-500 font-mono text-[10px] font-bold uppercase tracking-wider">
                    Primary Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-mono text-xs sm:text-sm font-bold text-white hover:text-[#FF6600] transition-colors truncate"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <button
                ref={copyBtnRef}
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 transition-colors cursor-pointer shrink-0 border border-white/10 active:scale-95 ml-2"
              >
                {copiedEmail ? (
                  <span className="flex items-center gap-1 font-mono text-[10px] text-emerald-400 font-bold">
                    <Check className="w-3.5 h-3.5" /> Copied
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Base Location & Availability Card */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 shadow-xs flex items-center space-x-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-slate-500 font-mono text-[10px] font-bold uppercase tracking-wider">
                  Location &amp; Availability
                </span>
                <span className="font-sans font-bold text-xs sm:text-sm text-white truncate">
                  {siteConfig.location}
                </span>
                <div className="text-[11px] font-mono text-emerald-400 font-bold mt-0.5 flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
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
                className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 shadow-xs flex items-center justify-center gap-2 group transition-all"
              >
                <LinkedInIcon className="w-4 h-4 text-slate-300 group-hover:text-[#FF6600] group-hover:scale-105 transition-all" />
                <span className="font-mono text-xs font-bold text-slate-200">
                  LinkedIn
                </span>
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 shadow-xs flex items-center justify-center gap-2 group transition-all"
              >
                <GithubIcon className="w-4 h-4 text-slate-300 group-hover:text-[#FF6600] group-hover:scale-105 transition-all" />
                <span className="font-mono text-xs font-bold text-slate-200">
                  GitHub
                </span>
              </a>
            </div>

          </div>

          {/* Security & SLA Seal */}
          <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 font-mono text-[10px] text-slate-400 flex items-center justify-between relative z-10">
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Direct Channel</span>
            </span>
            <span className="text-slate-300 font-semibold">Priority Response</span>
          </div>

        </div>

        {/* ── Right Pane: Apple-Grade Message Dispatch Console (7 Cols) ── */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.08)] backdrop-blur-3xl relative overflow-hidden flex flex-col justify-between">

          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-[#FF6600]/8 rounded-full blur-[90px] pointer-events-none" />

          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 sm:py-24 flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shadow-md">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 animate-pulse" />
              </div>
              <h3 className="font-sans font-black text-2xl text-white">
                Message Dispatched
              </h3>
              <p className="font-sans text-sm text-slate-300 max-w-sm leading-relaxed">
                Thank you for reaching out. Nagaraj will review your project requirements and respond promptly.
              </p>
              <span className="font-mono text-[11px] text-slate-300 font-semibold bg-white/5 px-3 py-1 rounded-full border border-white/10">
                Direct to Naga97raj@gmail.com
              </span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-5 relative z-10">
              {/* Spam Honeypot */}
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                value={formData._honey}
                onChange={(e) => setFormData({ ...formData, _honey: e.target.value })}
                className="hidden"
                aria-hidden="true"
              />

              {/* Console Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3.5 mb-0.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-slate-200">
                    Console Dispatch
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400 bg-white/[0.05] px-2.5 py-0.5 rounded-full border border-white/10">
                  <ShieldCheck className="w-3 h-3 text-slate-400" />
                  <span>256-bit Encrypted</span>
                </div>
              </div>

              {/* Inquiry Type Segmented Control (Apple Pro Pill Style) */}
              <div className="flex flex-col space-y-2 text-left">
                <label className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
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
                        className={`font-mono text-[11px] font-semibold px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${isSelected
                            ? "bg-white text-slate-950 border-white shadow-md shadow-white/10"
                            : "bg-white/[0.04] text-slate-400 border-white/10 hover:bg-white/[0.08] hover:text-white"
                          }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Email Grid (Apple Pro Inset Fields) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1.5 text-left">
                  <label
                    htmlFor="name"
                    className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400"
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
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white font-sans text-xs sm:text-sm placeholder:text-slate-500 focus:bg-white/[0.07] focus:border-white/40 focus:ring-2 focus:ring-white/10 transition-all outline-none"
                  />
                </div>

                <div className="flex flex-col space-y-1.5 text-left">
                  <label
                    htmlFor="email"
                    className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400"
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
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white font-sans text-xs sm:text-sm placeholder:text-slate-500 focus:bg-white/[0.07] focus:border-white/40 focus:ring-2 focus:ring-white/10 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col space-y-1.5 text-left">
                <label
                  htmlFor="message"
                  className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400"
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
                  className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white font-sans text-xs sm:text-sm placeholder:text-slate-500 focus:bg-white/[0.07] focus:border-white/40 focus:ring-2 focus:ring-white/10 transition-all outline-none resize-none"
                />
              </div>

              {/* Error Feedback Banner */}
              {errorMessage && (
                <div className="p-3.5 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 font-sans text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span>{errorMessage}</span>
                  <a
                    href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`[Portfolio • ${selectedType}] Inquiry from ${formData.name}`)}&body=${encodeURIComponent(formData.message)}`}
                    className="font-mono text-[11px] font-bold text-white underline shrink-0 hover:text-[#FF6600]"
                  >
                    Open Mail App →
                  </a>
                </div>
              )}

              {/* Apple Pro Flagship Action CTA */}
              <div className="pt-2">
                <button
                  ref={dispatchBtnRef}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative inline-flex items-center justify-center space-x-2 font-mono text-xs sm:text-sm font-bold py-3.5 px-6 rounded-2xl bg-white hover:bg-slate-100 text-slate-950 shadow-[0_8px_24px_rgba(255,255,255,0.14)] hover:shadow-[0_12px_32px_rgba(255,255,255,0.22)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer select-none disabled:opacity-50"
                >
                  <span>{isSubmitting ? "Sending..." : "Dispatch Message"}</span>
                  <ArrowRight className="w-4 h-4 text-[#FF6600] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </form>
          )}

        </div>

      </div>

    </section>
  );
}
