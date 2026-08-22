import React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";
import { ProcessStep } from "./ProcessStep";

export function HowIBuild() {
  return (
    <section
      id="process"
      aria-label="Development Process"
      className="py-24 md:py-36 px-4 md:px-8 max-w-7xl mx-auto border-t border-slate-200/80"
    >
      <div className="flex flex-col space-y-4 mb-16">
        <Eyebrow>ENGINEERING WORKFLOW</Eyebrow>
        <SectionHeading>From idea to production.</SectionHeading>
        <p className="font-sans text-base md:text-lg text-slate-600 max-w-2xl">
          A disciplined, step-by-step approach to building front-end applications and integrated software solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {processSteps.map((step, idx) => (
          <ProcessStep key={step.number} step={step} index={idx} />
        ))}
      </div>
    </section>
  );
}
