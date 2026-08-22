"use client";

import React, { useState } from "react";
import { processSteps } from "@/data/process";

export function HowIWork() {
  const [activeStepId, setActiveStepId] = useState<string>("understand");

  return (
    <section
      id="process"
      aria-label="Engineering Workflow"
      className="py-20 md:py-28 px-4 md:px-8 max-w-6xl mx-auto border-t border-slate-200/80 dark:border-slate-800"
    >
      <div className="flex flex-col space-y-3 mb-12 max-w-2xl">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          WORKFLOW
        </span>
        <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight">
          How I Work
        </h2>
        <p className="font-sans text-base text-slate-600 dark:text-slate-300">
          Hover over each stage to inspect the execution methodology.
        </p>
      </div>

      {/* 4 Process Stage Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {processSteps.map((step) => {
          const isActive = activeStepId === step.id;
          return (
            <div
              key={step.id}
              onMouseEnter={() => setActiveStepId(step.id)}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-4 cursor-pointer ${
                isActive
                  ? "bg-white dark:bg-slate-900 border-blue-600 dark:border-blue-400 shadow-lg shadow-blue-500/5 ring-2 ring-blue-600/10"
                  : "bg-white/60 dark:bg-slate-900/60 border-slate-200/90 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <span
                  className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md border ${
                    isActive
                      ? "bg-blue-600 dark:bg-blue-500 text-white border-blue-600 dark:border-blue-500"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700"
                  }`}
                >
                  {step.number}
                </span>
                <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                  STAGE 0{step.number}
                </span>
              </div>

              <div className="flex flex-col space-y-2">
                <h3
                  className={`font-sans font-bold text-xl transition-colors ${
                    isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-900 dark:text-white"
                  }`}
                >
                  {step.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
