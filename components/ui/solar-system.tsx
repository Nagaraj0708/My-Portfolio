'use client';

import React, { useState } from "react";
import { Orbit as OrbitIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SolarSystemItem {
  id: string;
  label: string;
  type?: string;
  badge?: string;
  desc?: string;
  color: string;
  svg: React.ReactNode;
}

export interface OrbitConfig {
  id: string;
  name: string;
  radiusClass: string;
  radiusPx: number;
  speed: number;
  items: SolarSystemItem[];
}

export interface SolarSystemProps extends React.HTMLAttributes<HTMLDivElement> {
  centerLogo?: string | React.ReactNode;
  centerLogoAlt?: string;
  orbits?: OrbitConfig[];
  isPaused?: boolean;
  speedMultiplier?: number;
}

const DefaultIcons = {
  angular: (
    <svg viewBox="0 0 250 250" className="w-5 h-5" fill="none">
      <polygon points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 203.9,186.3 218.1,63.2" fill="#DD0031"/>
      <polygon points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 170.8,153.4 180.1,176.4 203.9,186.3 218.1,63.2" fill="#C3002F"/>
      <polygon points="125,52.1 79.2,153.4 98.6,153.4 107.9,130.3 142.1,130.3 151.4,153.4 170.8,153.4" fill="#FFFFFF"/>
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <rect width="24" height="24" rx="3" fill="#3178C6" />
      <path d="M5.5 12v-1.5h4.5V21h-2V12H5.5zm5.5-1.5h4.5v1.5h-3v2h3v1.5h-3v2h3V21h-4.5v-1.5h3v-2h-3v-1.5h3v-2h-3V10.5z" fill="#fff" />
    </svg>
  ),
  dotnet: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <circle cx="12" cy="12" r="10" fill="#512BD4" />
      <path d="M7 15V9h2.5l2.5 4V9H14v6h-2.5L9 11v4H7zm9 0V9h4v1.5h-2.5v1H20v1.5h-2.5v1.5H20V15h-4z" fill="#fff" />
    </svg>
  ),
  rxjs: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <circle cx="12" cy="12" r="10" fill="#B7178C" />
      <path d="M12 6a6 6 0 100 12 6 6 0 000-12zm-2 4h4v1.5h-4V10zm0 3h4v1.5h-4V13z" fill="#fff" />
    </svg>
  ),
  sql: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.34 6 2s-2.13 2-6 2-6-1.34-6-2 2.13-2 6-2zm6 12c0 .66-2.13 2-6 2s-6-1.34-6-2v-2.13c1.47.74 3.63 1.13 6 1.13s4.53-.39 6-1.13V17zm0-5c0 .66-2.13 2-6 2s-6-1.34-6-2V9.87c1.47.74 3.63 1.13 6 1.13s4.53-.39 6-1.13V12z" fill="#CC292B" />
    </svg>
  ),
  azure: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <path d="M13.05 2.25L4.5 14.25h5.55L7.5 21.75l12-12.75h-5.4l2.95-6.75z" fill="#0078D4" />
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 180 180" className="w-5 h-5" fill="none">
      <circle cx="90" cy="90" r="90" fill="#000" stroke="#fff" strokeWidth="6" />
      <path d="M149.508 157.52L69.142 54H54v72h14.4V69.412l67.24 87.054a89.4 89.4 0 0013.868-1.046zM111.6 54h14.4v72h-14.4z" fill="#fff" />
    </svg>
  ),
  primeng: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <circle cx="12" cy="12" r="10" fill="#C3002F" />
      <path d="M8 8h8v2H8V8zm0 3h8v2H8v-2zm0 3h5v2H8v-2z" fill="#fff" />
    </svg>
  ),
};

const DEFAULT_ORBITS: OrbitConfig[] = [
  {
    id: "inner",
    name: "Core Frontend Stack",
    radiusClass: "var(--radius-inner)",
    radiusPx: 175,
    speed: 20,
    items: [
      { id: "angular", label: "Angular 14+", color: "#DD0031", svg: DefaultIcons.angular },
      { id: "typescript", label: "TypeScript", color: "#3178C6", svg: DefaultIcons.typescript },
      { id: "nextjs", label: "Next.js 15", color: "#ffffff", svg: DefaultIcons.nextjs },
      { id: "rxjs", label: "RxJS Streams", color: "#B7178C", svg: DefaultIcons.rxjs },
    ],
  },
  {
    id: "mid",
    name: "Enterprise Backend & Data",
    radiusClass: "var(--radius-mid)",
    radiusPx: 285,
    speed: 32,
    items: [
      { id: "dotnet", label: "ASP.NET Core", color: "#512BD4", svg: DefaultIcons.dotnet },
      { id: "sql", label: "SQL Server", color: "#CC292B", svg: DefaultIcons.sql },
      { id: "primeng", label: "PrimeNG / Tailwind", color: "#C3002F", svg: DefaultIcons.primeng },
    ],
  },
  {
    id: "outer",
    name: "DevOps & Cloud Ecosystem",
    radiusClass: "var(--radius-outer)",
    radiusPx: 395,
    speed: 48,
    items: [
      { id: "azure", label: "Azure DevOps / CI-CD", color: "#0078D4", svg: DefaultIcons.azure },
    ],
  },
];

export const SolarSystem = React.forwardRef<HTMLDivElement, SolarSystemProps>(
  (
    {
      centerLogo,
      centerLogoAlt = "Core Engine",
      orbits = DEFAULT_ORBITS,
      isPaused = false,
      speedMultiplier = 1,
      className,
      ...props
    },
    ref
  ) => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const dustItems = [
      { delay: "-4s", radius: "165px", color: "#00f5d4" },
      { delay: "-11s", radius: "260px", color: "#a855f7" },
      { delay: "-19s", radius: "340px", color: "#3b82f6" },
      { delay: "-28s", radius: "395px", color: "#00f5d4" },
      { delay: "-7s", radius: "200px", color: "#ec4899" },
      { delay: "-15s", radius: "365px", color: "#eab308" },
      { delay: "-23s", radius: "430px", color: "#a855f7" },
    ];

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex items-center justify-center w-full max-w-[940px] h-[360px] md:h-[500px] perspective-[1200px] select-none overflow-visible mx-auto",
          className
        )}
        {...props}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --radius-inner: 175px;
                --radius-mid: 285px;
                --radius-outer: 395px;
              }
              @media (max-width: 768px) {
                :root {
                  --radius-inner: 100px;
                  --radius-mid: 165px;
                  --radius-outer: 230px;
                }
              }
              @media (max-width: 480px) {
                :root {
                  --radius-inner: 70px;
                  --radius-mid: 115px;
                  --radius-outer: 160px;
                }
              }
              @keyframes custom-orbitMove {
                0% { transform: translate(-50%, -50%) rotateZ(0deg) translateX(var(--orbit-radius)); }
                100% { transform: translate(-50%, -50%) rotateZ(-360deg) translateX(var(--orbit-radius)); }
              }
              @keyframes custom-billboardCancel {
                0% { transform: translate(-50%, -50%) rotateZ(0deg) rotateY(10deg) rotateX(-65deg); }
                100% { transform: translate(-50%, -50%) rotateZ(360deg) rotateY(10deg) rotateX(-65deg); }
              }
              @keyframes custom-sun-pulse {
                0% { transform: scale(0.9); opacity: 0.7; }
                100% { transform: scale(1.1); opacity: 1; }
              }
              @keyframes custom-spin-clockwise {
                0% { transform: rotateX(65deg) rotateY(-10deg) rotateZ(0deg); }
                100% { transform: rotateX(65deg) rotateY(-10deg) rotateZ(360deg); }
              }
              @keyframes custom-spin-counter {
                0% { transform: rotateX(65deg) rotateY(-10deg) rotateZ(0deg); }
                100% { transform: rotateX(65deg) rotateY(-10deg) rotateZ(-360deg); }
              }
              .animate-custom-orbit {
                animation: custom-orbitMove var(--orbit-duration) linear infinite;
                animation-play-state: var(--orbit-play-state);
              }
              .animate-custom-billboard {
                animation: custom-billboardCancel var(--orbit-duration) linear infinite;
                animation-play-state: var(--orbit-play-state);
              }
              .animate-custom-sun-pulse {
                animation: custom-sun-pulse 4s ease-in-out infinite alternate;
              }
              .animate-custom-spin-cw {
                animation: custom-spin-clockwise 20s linear infinite;
              }
              .animate-custom-spin-ccw {
                animation: custom-spin-counter 30s linear infinite;
              }
              .orbit-logo-card {
                position: absolute;
                left: 50%;
                top: 50%;
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 0.45rem 0.95rem;
                background: rgba(15, 23, 42, 0.85);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.15);
                border-radius: 100px;
                font-weight: 600;
                color: #ffffff;
                white-space: nowrap;
                user-select: none;
                cursor: pointer;
                pointer-events: auto;
                transition: border-color 0.3s, color 0.3s, background 0.3s, box-shadow 0.3s, scale 0.3s;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1);
              }
            `,
          }}
        />

        <div
          className="absolute w-[360px] h-[360px] md:w-[940px] md:h-[940px] flex items-center justify-center"
          style={{
            transform: "rotateX(65deg) rotateY(-10deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Central Core Sun */}
          <div
            className="absolute w-[100px] h-[100px] md:w-[130px] md:h-[130px] flex items-center justify-center z-20 pointer-events-none"
            style={{
              transform: "rotateY(10deg) rotateX(-65deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="absolute w-[90px] h-[90px] md:w-[120px] md:h-[120px] rounded-full filter blur-md animate-custom-sun-pulse z-10 bg-blue-500/30" />
            
            {centerLogo ? (
              typeof centerLogo === "string" ? (
                <img
                  className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-blue-500/50 shadow-[0_0_30px_rgba(37,99,235,0.4)] z-20 bg-slate-950 p-2 relative object-cover"
                  src={centerLogo}
                  alt={centerLogoAlt}
                />
              ) : (
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-blue-500/50 shadow-[0_0_30px_rgba(37,99,235,0.4)] z-20 bg-slate-950 flex items-center justify-center p-2 relative">
                  {centerLogo}
                </div>
              )
            ) : (
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-blue-500/50 shadow-[0_0_30px_rgba(37,99,235,0.4)] z-20 bg-slate-950 flex items-center justify-center p-2 relative">
                <OrbitIcon className="w-8 h-8 text-blue-400 animate-spin" style={{ animationDuration: "10s" }} />
              </div>
            )}

            <div className="absolute w-[110px] h-[110px] md:w-[140px] md:h-[140px] rounded-full border border-dashed border-blue-500/30 animate-custom-spin-cw pointer-events-none" />
            <div className="absolute w-[150px] h-[150px] md:w-[185px] md:h-[185px] rounded-full border border-dashed border-indigo-500/20 animate-custom-spin-ccw pointer-events-none" />
          </div>

          {/* Cosmic Dust Particles */}
          {dustItems.map((dust, idx) => (
            <div
              key={idx}
              className="absolute left-1/2 top-1/2 w-1 h-1 rounded-full opacity-50 pointer-events-none animate-custom-orbit"
              style={{
                background: dust.color,
                boxShadow: `0 0 6px ${dust.color}`,
                animationDelay: dust.delay,
                animationPlayState: isPaused ? "paused" : "running",
                animationDuration: `${24 / speedMultiplier}s`,
                ["--orbit-radius" as any]: dust.radius,
                ["--orbit-duration" as any]: `${24 / speedMultiplier}s`,
                ["--orbit-play-state" as any]: isPaused ? "paused" : "running",
              }}
            />
          ))}

          {/* Orbits and Tech Nodes */}
          {orbits.map((orbit) => {
            return (
              <React.Fragment key={orbit.id}>
                <div
                  className="absolute rounded-full border border-dashed border-slate-400/40 dark:border-slate-700/60 pointer-events-none"
                  style={{
                    width: `calc(2 * ${orbit.radiusClass})`,
                    height: `calc(2 * ${orbit.radiusClass})`,
                    boxShadow: "inset 0 0 25px rgba(255, 255, 255, 0.01), 0 0 25px rgba(255, 255, 255, 0.01)",
                    ["--orbit-radius" as any]: orbit.radiusClass,
                  }}
                />

                {orbit.items.map((item, idx, arr) => {
                  const delayValue = -(orbit.speed / arr.length) * idx;
                  const durationValue = orbit.speed / speedMultiplier;
                  const isHovered = hoveredId === item.id;

                  return (
                    <div
                      key={item.id}
                      className="absolute left-1/2 top-1/2 w-0 h-0 pointer-events-none animate-custom-orbit"
                      style={{
                        animationDelay: `${delayValue}s`,
                        animationDuration: `${durationValue}s`,
                        animationPlayState: isPaused ? "paused" : "running",
                        ["--orbit-radius" as any]: orbit.radiusClass,
                        ["--orbit-duration" as any]: `${durationValue}s`,
                        ["--orbit-play-state" as any]: isPaused ? "paused" : "running",
                        ["--hover-color" as any]: item.color,
                        zIndex: isHovered ? 30 : 10,
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <div
                        className="absolute right-0 top-1/2 h-[1.5px] origin-right -translate-y-1/2 pointer-events-none transition-opacity duration-300 z-0"
                        style={{
                          width: orbit.radiusClass,
                          opacity: isHovered ? 1 : 0,
                          background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.15) 20%, ${item.color} 80%, ${item.color} 100%)`,
                          boxShadow: `0 0 8px ${item.color}, 0 0 16px ${item.color}40`,
                        }}
                      />

                      <div
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className="orbit-logo-card animate-custom-billboard"
                        style={{
                          animationDelay: `${delayValue}s`,
                          animationDuration: `${durationValue}s`,
                          animationPlayState: isPaused ? "paused" : "running",
                          borderColor: isHovered ? item.color : undefined,
                          boxShadow: isHovered
                            ? `0 0 20px rgba(0, 0, 0, 0.6), 0 0 15px ${item.color}45`
                            : undefined,
                          scale: isHovered ? 1.08 : 1,
                          ["--orbit-duration" as any]: `${durationValue}s`,
                          ["--orbit-play-state" as any]: isPaused ? "paused" : "running",
                        }}
                      >
                        <div
                          className="transition-transform duration-300"
                          style={{
                            transform: isHovered ? "scale(1.15)" : "scale(1)",
                            color: item.color,
                          }}
                        >
                          {item.svg}
                        </div>
                        <span className="text-[11px] md:text-[13px] tracking-tight">{item.label}</span>
                      </div>
                    </div>
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
);
SolarSystem.displayName = "SolarSystem";
