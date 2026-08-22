"use client";

import React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Code2, Server, CheckCircle2 } from "lucide-react";

interface SkillItem {
  name: string;
  level: number; // 0 - 100
  note: string;
}

const frontendSkills: SkillItem[] = [
  { name: "Angular 14+ Architecture", level: 95, note: "Modules, Standalone, Directives & Pipes" },
  { name: "TypeScript & ES6+", level: 92, note: "Strict Type Safety & Interfaces" },
  { name: "RxJS & Dynamic Form State", level: 90, note: "Observables, BehaviorSubjects, FormGroups" },
  { name: "HTML5, CSS3 & Modern Styling", level: 95, note: "Responsive Grids, Flexbox, Animations" },
];

const backendSkills: SkillItem[] = [
  { name: "ASP.NET Core Web API", level: 88, note: "RESTful Endpoints & Controller Logic" },
  { name: "C# & .NET Integration", level: 85, note: "Object-Oriented Architecture & Business Rules" },
  { name: "SQL Server & Database Design", level: 85, note: "Relational Schemas, Indexing & Queries" },
  { name: "Entity Framework Core (EF)", level: 82, note: "DbContext, LINQ Queries & Migration Flow" },
];

export function DualSkillGauge() {
  return (
    <section
      id="skills-gauge"
      aria-label="Skill Breakdown"
      className="py-24 md:py-36 px-4 md:px-8 max-w-7xl mx-auto border-t border-slate-200/80"
    >
      <div className="flex flex-col space-y-4 mb-16 text-center max-w-3xl mx-auto">
        <Eyebrow>CORE COMPETENCY BREAKDOWN</Eyebrow>
        <SectionHeading>Front-End &amp; Systems Expertise</SectionHeading>
        <p className="font-sans text-base md:text-lg text-slate-600">
          A side-by-side engineering breakdown comparing front-end interface skills with backend .NET integration capabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Card: Front-End UI Skill Set */}
        <div className="p-8 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col justify-between space-y-8 hover:border-blue-300 transition-all">
          <div className="flex items-center justify-between border-b border-slate-100 pb-5">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
                <Code2 className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-sans font-bold text-xl text-slate-900">
                  Front-End UI Engineering
                </h3>
                <span className="font-mono text-xs text-blue-600 font-semibold">
                  PRIMARY FOCUS &amp; EXPERTISE
                </span>
              </div>
            </div>
            <span className="font-mono text-2xl font-extrabold text-blue-600">
              95%
            </span>
          </div>

          <div className="flex flex-col space-y-6">
            {frontendSkills.map((sk) => (
              <div key={sk.name} className="space-y-2">
                <div className="flex items-center justify-between font-sans text-sm">
                  <span className="font-bold text-slate-900 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>{sk.name}</span>
                  </span>
                  <span className="font-mono text-xs font-semibold text-slate-500">
                    {sk.level}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                    style={{ width: `${sk.level}%` }}
                  />
                </div>
                <span className="font-mono text-[11px] text-slate-400 block">
                  {sk.note}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card: Systems & .NET Backend Skill Set */}
        <div className="p-8 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col justify-between space-y-8 hover:border-emerald-300 transition-all">
          <div className="flex items-center justify-between border-b border-slate-100 pb-5">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-500/20">
                <Server className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-sans font-bold text-xl text-slate-900">
                  Systems &amp; .NET Integration
                </h3>
                <span className="font-mono text-xs text-emerald-600 font-semibold">
                  SECONDARY INTEGRATION LAYER
                </span>
              </div>
            </div>
            <span className="font-mono text-2xl font-extrabold text-emerald-600">
              85%
            </span>
          </div>

          <div className="flex flex-col space-y-6">
            {backendSkills.map((sk) => (
              <div key={sk.name} className="space-y-2">
                <div className="flex items-center justify-between font-sans text-sm">
                  <span className="font-bold text-slate-900 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{sk.name}</span>
                  </span>
                  <span className="font-mono text-xs font-semibold text-slate-500">
                    {sk.level}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-emerald-600 rounded-full transition-all duration-1000"
                    style={{ width: `${sk.level}%` }}
                  />
                </div>
                <span className="font-mono text-[11px] text-slate-400 block">
                  {sk.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
