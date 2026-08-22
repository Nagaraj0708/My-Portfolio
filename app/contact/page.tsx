import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Contact } from "@/components/contact/Contact";
import { ResumeCTA } from "@/components/resume/ResumeCTA";
import { Footer } from "@/components/footer/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: "Contact & Resume — Nagaraj K Portfolio",
  description:
    "Get in touch with Nagaraj K for front-end developer roles, Angular projects, and software opportunities.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg text-text-primary relative selection:bg-blue-600 selection:text-white pt-20 md:pt-24 transition-colors duration-400">
      <Navbar />
      <main className="relative">
        <Contact />
        <ResumeCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
