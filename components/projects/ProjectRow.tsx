"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Project } from "@/data/projects";
import { ProjectMockupPlaceholder } from "./ProjectMockupPlaceholder";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { getFeatureIcon } from "@/lib/caseStudyIcons";

interface ProjectRowProps {
  project: Project;
  index: number;
}

export function ProjectRow({ project, index }: ProjectRowProps) {
  const isEven = index % 2 === 0;
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="group py-6">
      <Link
        href={`/work/${project.slug}`}
        data-cursor="VIEW"
        className="block focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-2xl"
      >
        <SpotlightCard className="p-6 md:p-10 transition-all duration-500">
          <div
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
              isEven ? "" : "lg:flex-row-reverse"
            }`}
          >
            {/* Mockup Column */}
            <div
              className={`lg:col-span-7 ${
                isEven ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <motion.div
                whileHover={
                  !shouldReduceMotion
                    ? { y: -6, scale: 1.015 }
                    : undefined
                }
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectMockupPlaceholder
                  type={project.placeholderMockupType}
                  title={project.title}
                  image={project.image}
                />
              </motion.div>
            </div>

            {/* Details Column */}
            <div
              className={`lg:col-span-5 flex flex-col space-y-5 ${
                isEven ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="font-mono text-xs font-extrabold text-blue-600 bg-blue-50 dark:bg-blue-950/80 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                  {project.number}
                </span>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                  {project.subtitle}
                </span>
              </div>

              <h3 className="font-sans font-extrabold text-2xl md:text-3xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center justify-between gap-3">
                <span>{project.title}</span>
                <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
              </h3>

              <p className="font-sans text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>

              {/* Stack Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Core Features List */}
              <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center space-x-1.5 mb-2.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                  <span className="font-mono text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">
                    Core Capabilities
                  </span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-slate-600 dark:text-slate-300">
                  {project.features.map((feat) => {
                    const featIconConfig = getFeatureIcon(feat);
                    const FeatIcon = featIconConfig.icon;

                    return (
                      <li key={feat} className="flex items-center space-x-2">
                        <div className={`p-1 rounded ${featIconConfig.bgClass} ${featIconConfig.colorClass} shrink-0`}>
                          <FeatIcon className="w-3 h-3" />
                        </div>
                        <span className="truncate font-medium">{feat}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </Link>
    </div>
  );
}
