import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Skills } from "@/components/skills/Skills";
import { Footer } from "@/components/footer/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: "Tools & Technology Stack — Nagaraj K Portfolio",
  description:
    "Refined technology list covering Angular 14+, TypeScript, RxJS, CSS3, ASP.NET Core, C#, SQL Server, and Azure DevOps tooling.",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-bg text-text-primary relative selection:bg-blue-600 selection:text-white pt-20 md:pt-24 transition-colors duration-400">
      <Navbar />
      <main className="relative">
        <Skills />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
