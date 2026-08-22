import React from "react";

export function NoiseOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-99 overflow-hidden">
      {/* Soft top-center subtle ambient light blue glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-125 opacity-40 rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(250, 250, 250, 0) 70%)",
        }}
      />

      {/* SVG Grain Noise Filter Overlay (~2.5% opacity) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] mix-blend-multiply">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Subtle Structural Grid Overlay for Light Mode */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
