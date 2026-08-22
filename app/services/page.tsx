import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Services } from "@/components/services/Services";
import { HowIWork } from "@/components/process/HowIWork";
import { Footer } from "@/components/footer/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: "Services & Execution Process — Nagaraj K Portfolio",
  description:
    "Explore front-end engineering, UI component design, REST API integration, and business web application development capabilities.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-bg text-text-primary relative selection:bg-blue-600 selection:text-white pt-20 md:pt-24 transition-colors duration-400">
      <Navbar />
      <main className="relative">
        <Services />
        <HowIWork />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
