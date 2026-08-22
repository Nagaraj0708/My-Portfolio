import React from "react";
import { Check } from "lucide-react";
import { ExperienceItem } from "@/data/experience";

interface TimelineItemProps {
  item: ExperienceItem;
  isLast: boolean;
}

export function TimelineItem({ item, isLast }: TimelineItemProps) {
  return (
    <div className="relative pl-8 md:pl-10 pb-12 last:pb-0">
      {/* Timeline Vertical Line */}
      {!isLast && (
        <div className="absolute left-2.75 top-6 bottom-0 w-0.5 bg-slate-200" />
      )}

      {/* Accent Dot Indicator */}
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shadow-xs">
        <div className="w-2 h-2 rounded-full bg-blue-600" />
      </div>

      <div className="flex flex-col space-y-3 bg-white border border-slate-200 p-6 md:p-8 rounded-xl shadow-xs hover:border-slate-300 hover:shadow-md transition-all">
        {/* Header line: Role + Period */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="font-sans font-bold text-xl text-slate-900">
              {item.role}
            </h3>
            <span className="font-mono text-sm font-semibold text-blue-600">
              {item.company}
            </span>
          </div>

          <span className="font-mono text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 w-fit">
            {item.period}
          </span>
        </div>

        {/* Compact single line for Eminence */}
        {item.isCompact ? (
          <p className="font-sans text-sm text-slate-500 italic pt-1">
            {item.summary}
          </p>
        ) : (
          /* Detailed Bullets for Freelancer & Foxconn */
          <div className="pt-2 space-y-2">
            {item.bullets && item.bullets.length > 0 && (
              <ul className="space-y-2">
                {item.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-2.5 font-sans text-sm text-slate-600"
                  >
                    <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Highlight Metric Pill for Foxconn */}
            {item.highlightMetric && (
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center space-x-2">
                <span className="font-mono text-xs text-blue-700 font-bold bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  Key Result: {item.highlightMetric}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
