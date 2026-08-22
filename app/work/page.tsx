import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Projects } from "@/components/projects/Projects";
import { Footer } from "@/components/footer/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies — Nagaraj K Portfolio",
  description:
    "Detailed portfolio of production-grade systems, clinical platforms, HR pipelines, and stock inventory engines engineered with Angular, TypeScript, and .NET Web APIs.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-bg text-text-primary relative selection:bg-blue-600 selection:text-white pt-20 md:pt-24 transition-colors duration-400">
      <Navbar />
      <main className="relative">
        <Projects />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
