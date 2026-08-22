import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { About } from "@/components/about/About";
import { Experience } from "@/components/experience/Experience";
import { Achievements } from "@/components/achievements/Achievements";
import { VerifiedImpact } from "@/components/metrics/VerifiedImpact";
import { Footer } from "@/components/footer/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: "About & Experience — Nagaraj K Portfolio",
  description:
    "Learn about Nagaraj K's career history, Electronics Engineering background, Foxconn manufacturing quality leadership, dual promotions, and 2nd Division TNCA cricket achievements.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg text-text-primary relative selection:bg-blue-600 selection:text-white pt-20 md:pt-24 transition-colors duration-400">
      <Navbar />
      <main className="relative">
        <About />
        <Experience />
        <Achievements />
        <VerifiedImpact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
