import React from "react";
import { ProcessStepItem } from "@/data/process";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

interface ProcessStepProps {
  step: ProcessStepItem;
  index: number;
}

export function ProcessStep({ step, index }: ProcessStepProps) {
  return (
    <SpotlightCard className="p-6 flex flex-col justify-between space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <span className="font-mono text-xs font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
          {step.number} —
        </span>
        <span className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          STEP 0{index + 1}
        </span>
      </div>

      <div className="flex flex-col space-y-2">
        <h3 className="font-sans font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
          {step.title}
        </h3>
        <p className="font-sans text-sm text-slate-600 leading-relaxed">
          {step.description}
        </p>
      </div>
    </SpotlightCard>
  );
}
