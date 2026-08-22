"use client";

import React, { useState } from "react";
import { Mail, MapPin, ArrowRight, CheckCircle2, Copy, Check, MessageSquare } from "lucide-react";
import { LinkedInIcon, GithubIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/data/siteConfig";
import { SocialFlipButton } from "@/components/ui/vengence-buttons";

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
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
      className="py-16 px-4 md:px-8 max-w-6xl mx-auto border-t border-slate-200/80 dark:border-slate-800 relative"
    >
      {/* Section Header */}
      <div className="flex flex-col space-y-2 mb-10 max-w-2xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 w-fit">
          <MessageSquare className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
            DIRECT INQUIRIES &amp; COLLABORATION
          </span>
        </div>
        <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight leading-[1.05]">
          Let&apos;s Build <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">Together</span>
        </h2>
        <p className="font-sans text-sm md:text-base text-slate-600 dark:text-slate-300">
          I&apos;m open to Front-End development roles, web application projects, and enterprise collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Premium Direct Channels & Social Matrix */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="space-y-3.5">
            {/* Email Card with Copy Trigger */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex items-center justify-between group hover:border-slate-400 dark:hover:border-slate-600 transition-all">
              <div className="flex items-center space-x-3.5 min-w-0">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-slate-700 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-slate-400 dark:text-slate-500 font-mono text-[10px] font-bold uppercase tracking-wider">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-mono text-xs sm:text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 hover:underline transition-colors truncate"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                title="Copy Email"
                className="p-2 rounded-lg text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location & Status Card */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex items-center space-x-3.5">
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-slate-400 dark:text-slate-500 font-mono text-[10px] font-bold uppercase tracking-wider">
                  Location &amp; Availability
                </span>
                <span className="font-sans font-bold text-xs sm:text-sm text-slate-900 dark:text-white truncate">
                  {siteConfig.location}
                </span>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold mt-0.5 flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Open for On-site &amp; Remote roles</span>
                </span>
              </div>
            </div>

            {/* Vengence UI 3D Flip Buttons Matrix */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <SocialFlipButton
                frontLabel="LinkedIn Network"
                backLabel="Connect &amp; Message"
                icon={LinkedInIcon}
                href={siteConfig.linkedin}
                className="w-full"
              />
              <SocialFlipButton
                frontLabel="GitHub Repos"
                backLabel="View Source Code"
                icon={GithubIcon}
                href={siteConfig.github}
                className="w-full"
              />
            </div>
          </div>

          {/* Guarantee Footer Badge */}
          <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 font-mono text-[11px] text-slate-600 dark:text-slate-400 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-slate-900 dark:bg-white" />
            <span>Fast response time &bull; Typically within 24 hours</span>
          </div>
        </div>

        {/* Right Column: Monochromatic Studio Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          {formSubmitted ? (
            <div className="py-16 flex flex-col items-center justify-center text-center space-y-4">
              <CheckCircle2 className="w-14 h-14 text-white animate-bounce" />
              <h3 className="font-sans font-black text-2xl text-white">
                Message Received!
              </h3>
              <p className="font-sans text-sm text-slate-300 max-w-sm leading-relaxed">
                Thank you for reaching out, Nagaraj will review your message and get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 relative z-10">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400">
                  Send Direct Message
                </span>
                <span className="font-mono text-[10px] text-slate-300 bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-700">
                  SSL Encrypted
                </span>
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label
                    htmlFor="name"
                    className="font-mono text-[11px] font-bold uppercase tracking-widest text-slate-400"
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
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white font-sans text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label
                    htmlFor="email"
                    className="font-mono text-[11px] font-bold uppercase tracking-widest text-slate-400"
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
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white font-sans text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-1.5">
                <label
                  htmlFor="message"
                  className="font-mono text-[11px] font-bold uppercase tracking-widest text-slate-400"
                >
                  Project Details / Inquiry *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell me about your application requirements, timeline, or opportunity..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white font-sans text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full group relative inline-flex items-center justify-center space-x-2 font-mono text-xs sm:text-sm font-extrabold py-3.5 px-6 rounded-xl bg-white hover:bg-slate-100 text-slate-900 shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer overflow-hidden"
                >
                  <span>Dispatch Message</span>
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
