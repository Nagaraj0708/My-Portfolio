"use client";

import React, { useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillsData } from "@/data/skills";
import { TechNode } from "./TechNode";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const nodePositions: Record<string, { x: number; y: number }> = {
  // Primary
  angular: { x: 220, y: 140 },
  typescript: { x: 380, y: 100 },
  javascript: { x: 180, y: 260 },
  html: { x: 340, y: 240 },
  css: { x: 260, y: 320 },

  // Secondary
  "aspnet-core": { x: 580, y: 140 },
  "dotnet-api": { x: 500, y: 240 },
  csharp: { x: 680, y: 100 },
  "sql-server": { x: 620, y: 320 },
  "entity-framework": { x: 740, y: 220 },

  // Tooling
  "azure-devops": { x: 320, y: 420 },
  github: { x: 460, y: 380 },
  aws: { x: 160, y: 420 },
  "visual-studio": { x: 760, y: 360 },
  vscode: { x: 620, y: 420 },
};

export function TechMap() {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const hoveredNode = skillsData.find((s) => s.id === hoveredNodeId);

  const isConnected = (id1: string, id2: string) => {
    const node1 = skillsData.find((s) => s.id === id1);
    const node2 = skillsData.find((s) => s.id === id2);
    if (!node1 || !node2) return false;
    return (
      node1.connections.includes(id2) || node2.connections.includes(id1)
    );
  };

  return (
    <section
      id="skills"
      aria-label="Technical Skills Map"
      className="py-24 md:py-36 px-4 md:px-8 max-w-7xl mx-auto border-t border-slate-200/80"
    >
      <div className="flex flex-col space-y-4 mb-12">
        <Eyebrow>TECHNICAL STACK MAP</Eyebrow>
        <SectionHeading>Connected Ecosystem</SectionHeading>
        <p className="font-sans text-base md:text-lg text-slate-600 max-w-2xl">
          Hover or focus any technology node to explore its logical connections across the front-end, integration backend, and tooling pipeline.
        </p>
      </div>

      {/* SVG Interactive Map Bento Card */}
      <SpotlightCard className="p-4 md:p-8">
        <div className="w-full aspect-9/5 relative">
          <svg
            viewBox="0 0 900 480"
            className="w-full h-full overflow-visible"
            aria-label="Interactive Skill Network Map"
          >
            {/* Draw Connection Lines */}
            {skillsData.map((node) => {
              const posA = nodePositions[node.id];
              if (!posA) return null;

              return node.connections.map((targetId) => {
                const posB = nodePositions[targetId];
                if (!posB) return null;

                const isLineActive =
                  hoveredNodeId &&
                  (hoveredNodeId === node.id || hoveredNodeId === targetId) &&
                  isConnected(hoveredNodeId, node.id) &&
                  isConnected(hoveredNodeId, targetId);

                const isLineDimmed =
                  hoveredNodeId !== null && !isLineActive;

                return (
                  <line
                    key={`${node.id}-${targetId}`}
                    x1={posA.x}
                    y1={posA.y}
                    x2={posB.x}
                    y2={posB.y}
                    stroke={isLineActive ? "#2563EB" : "#E2E8F0"}
                    strokeWidth={isLineActive ? "3" : "1.5"}
                    strokeOpacity={isLineDimmed ? 0.2 : 1}
                    className="transition-all duration-300"
                  />
                );
              });
            })}

            {/* Draw Nodes */}
            {skillsData.map((node) => {
              const pos = nodePositions[node.id];
              if (!pos) return null;

              const isNodeHovered = hoveredNodeId === node.id;
              const isNodeConnected =
                hoveredNodeId !== null &&
                isConnected(hoveredNodeId, node.id);
              const isNodeDimmed =
                hoveredNodeId !== null &&
                !isNodeHovered &&
                !isNodeConnected;

              return (
                <TechNode
                  key={node.id}
                  node={node}
                  x={pos.x}
                  y={pos.y}
                  isHovered={isNodeHovered}
                  isConnected={isNodeConnected}
                  isDimmed={isNodeDimmed}
                  onHover={() => setHoveredNodeId(node.id)}
                  onLeave={() => setHoveredNodeId(null)}
                />
              );
            })}
          </svg>
        </div>

        {/* Live Active Tooltip Bar */}
        <div className="mt-4 pt-4 border-t border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between min-h-12 gap-2 font-mono text-xs">
          {hoveredNode ? (
            <>
              <div className="flex items-center space-x-3">
                <span className="font-bold text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  [{hoveredNode.category}] {hoveredNode.name}
                </span>
                <span className="font-sans text-xs md:text-sm text-slate-800 font-medium">
                  {hoveredNode.description}
                </span>
              </div>
              <span className="text-slate-500">
                Connected to: {hoveredNode.connections.join(", ")}
              </span>
            </>
          ) : (
            <span className="text-slate-400 italic">
              Hover over any node to view description and active dependency links.
            </span>
          )}
        </div>
      </SpotlightCard>
    </section>
  );
}
