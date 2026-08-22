"use client";

import React, { useState } from "react";
import { SmoothScrollProvider } from "./SmoothScrollProvider";
import { NoiseOverlay } from "./NoiseOverlay";
import { CustomCursor } from "./CustomCursor";
import { Loader } from "./Loader";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  const [loaderComplete, setLoaderComplete] = useState(false);

  return (
    <SmoothScrollProvider>
      <NoiseOverlay />
      <CustomCursor />
      <Loader onComplete={() => setLoaderComplete(true)} />
      <div className={`transition-opacity duration-700 ${loaderComplete ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
