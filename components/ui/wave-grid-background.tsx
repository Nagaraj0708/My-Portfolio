"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function WaveGridBackground({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={cn("relative w-full overflow-hidden bg-slate-950 text-white", className)}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes gridWave {
              0% { transform: translateY(0px) rotateX(45deg); }
              50% { transform: translateY(20px) rotateX(50deg); }
              100% { transform: translateY(0px) rotateX(45deg); }
            }
            .animate-grid-wave {
              animation: gridWave 8s ease-in-out infinite;
            }
          `,
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 animate-grid-wave pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
