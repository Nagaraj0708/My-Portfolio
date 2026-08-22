import React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectsData } from "@/data/projects";
import { ProjectRow } from "./ProjectRow";

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-label="Selected Work"
      className="py-24 md:py-36 px-4 md:px-8 max-w-7xl mx-auto border-t border-slate-200/80"
    >
      <div className="flex flex-col space-y-4 mb-16">
        <Eyebrow>SELECTED WORK</Eyebrow>
        <SectionHeading>Production Systems &amp; Products</SectionHeading>
        <p className="font-sans text-lg text-slate-600 max-w-2xl">
          A selection of enterprise web systems and data-intensive interfaces I&apos;ve designed and engineered.
        </p>
      </div>

      <div className="flex flex-col">
        {projectsData.map((project, idx) => (
          <ProjectRow key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
