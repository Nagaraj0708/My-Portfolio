"use client";

import React from "react";
import { TechNodeItem } from "@/data/skills";

interface TechNodeProps {
  node: TechNodeItem;
  x: number;
  y: number;
  isHovered: boolean;
  isConnected: boolean;
  isDimmed: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export function TechNode({
  node,
  x,
  y,
  isHovered,
  isConnected,
  isDimmed,
  onHover,
  onLeave,
}: TechNodeProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "primary":
        return "#2563EB"; // Royal Blue
      case "secondary":
        return "#4F46E5"; // Indigo
      case "tooling":
        return "#0D9488"; // Teal
      default:
        return "#2563EB";
    }
  };

  const accentColor = getCategoryColor(node.category);
  const isActive = isHovered || isConnected;

  return (
    <g
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="cursor-pointer transition-all duration-300"
      style={{ opacity: isDimmed ? 0.25 : 1 }}
    >
      {/* Outer Pulse Ring on Hover */}
      {isHovered && (
        <circle
          cx={x}
          cy={y}
          r="24"
          fill="none"
          stroke={accentColor}
          strokeWidth="1.5"
          strokeDasharray="3 3"
          className="animate-spin-slow"
        />
      )}

      {/* Main Node Circle */}
      <circle
        cx={x}
        cy={y}
        r={isActive ? "14" : "10"}
        fill="#FFFFFF"
        stroke={isActive ? accentColor : "#CBD5E1"}
        strokeWidth={isActive ? "3" : "2"}
        className="transition-all duration-300 shadow-sm"
      />

      {/* Center Core Dot */}
      <circle
        cx={x}
        cy={y}
        r={isActive ? "5" : "3"}
        fill={isActive ? accentColor : "#64748B"}
        className="transition-all duration-300"
      />

      {/* Node Text Label Pill */}
      <g transform={`translate(${x}, ${y + 24})`}>
        <rect
          x={-(node.name.length * 4 + 10)}
          y="-10"
          width={node.name.length * 8 + 20}
          height="20"
          rx="10"
          fill={isActive ? accentColor : "#FFFFFF"}
          stroke={isActive ? accentColor : "#E2E8F0"}
          strokeWidth="1"
          className="transition-all duration-300 shadow-xs"
        />
        <text
          x="0"
          y="3"
          textAnchor="middle"
          fill={isActive ? "#FFFFFF" : "#0F172A"}
          fontSize="10"
          fontWeight="700"
          fontFamily="var(--font-jetbrains-mono), monospace"
          className="transition-all duration-300 pointer-events-none"
        >
          {node.name}
        </text>
      </g>
    </g>
  );
}
