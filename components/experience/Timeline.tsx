import React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experienceData } from "@/data/experience";
import { TimelineItem } from "./TimelineItem";

export function Timeline() {
  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="py-24 md:py-36 px-4 md:px-8 max-w-5xl mx-auto border-t border-slate-200/80"
    >
      <div className="flex flex-col space-y-4 mb-16">
        <Eyebrow>CAREER TIMELINE</Eyebrow>
        <SectionHeading>Professional Experience</SectionHeading>
        <p className="font-sans text-base md:text-lg text-slate-600 max-w-xl">
          From high-volume electronics operations to engineering scalable Angular &amp; .NET web products.
        </p>
      </div>

      <div className="flex flex-col">
        {experienceData.map((item, idx) => (
          <TimelineItem
            key={item.id}
            item={item}
            isLast={idx === experienceData.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
