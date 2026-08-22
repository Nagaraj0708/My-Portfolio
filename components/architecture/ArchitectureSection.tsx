"use client";

import React, { useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { architectureLayers } from "@/data/projects";
import { ArchitectureLayer } from "./ArchitectureLayer";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function ArchitectureSection() {
  const [activeLayerId, setActiveLayerId] = useState<string>(
    architectureLayers[0].id
  );

  return (
    <section
      id="architecture"
      aria-label="Engineering Architecture"
      className="py-24 md:py-36 px-4 md:px-8 max-w-7xl mx-auto border-t border-slate-200/80"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Heading & Bento Spec Card */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <Eyebrow>SYSTEM DESIGN</Eyebrow>
          <SectionHeading>
            How I structure front-end applications.
          </SectionHeading>
          <p className="font-sans text-base md:text-lg text-slate-600 leading-relaxed">
            Every application is architected across isolated responsibility layers—from presentational Angular UI components through reactive RxJS state and secure .NET REST API integrations.
          </p>

          <SpotlightCard className="p-6 space-y-3 font-mono text-xs text-slate-600">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <span className="font-bold text-slate-900 uppercase">
                Architecture Standard
              </span>
              <span className="text-blue-600 font-bold">Unidirectional Flow</span>
            </div>
            <p className="font-sans text-xs text-slate-500 leading-normal">
              Clear separation between presentation, state orchestration, HTTP client communication, and database persistence.
            </p>
          </SpotlightCard>
        </div>

        {/* Right Column: Stacked Layer Cards */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          {architectureLayers.map((layer, index) => (
            <ArchitectureLayer
              key={layer.id}
              layer={layer}
              index={index}
              isActive={activeLayerId === layer.id}
              onSelect={() => setActiveLayerId(layer.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
