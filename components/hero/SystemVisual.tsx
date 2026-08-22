"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function SystemVisual() {
  const shouldReduceMotion = useReducedMotion();

  const nodes = [
    { label: "ANGULAR UI", x: 90, y: 80, color: "#2563EB" },
    { label: "TYPESCRIPT", x: 260, y: 130, color: "#1D4ED8" },
    { label: "REST API", x: 110, y: 240, color: "#3B82F6" },
    { label: "COMPONENTS", x: 310, y: 260, color: "#2563EB" },
    { label: ".NET BACKEND", x: 200, y: 350, color: "#1E40AF" },
  ];

  const connections = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 4 },
  ];

  return (
    <div className="relative w-full h-95 md:h-112.5 flex items-center justify-center pointer-events-none">
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl" />

      <svg
        viewBox="0 0 420 420"
        className="w-full h-full max-w-105 max-h-105 overflow-visible"
        aria-hidden="true"
      >
        {/* Connecting Lines */}
        {connections.map((conn, idx) => (
          <line
            key={idx}
            x1={nodes[conn.from].x}
            y1={nodes[conn.from].y}
            x2={nodes[conn.to].x}
            y2={nodes[conn.to].y}
            stroke="rgba(37, 99, 235, 0.2)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, idx) => (
          <g key={idx}>
            {!shouldReduceMotion ? (
              <motion.g
                animate={{
                  y: [0, idx % 2 === 0 ? -6 : 6, 0],
                  x: [0, idx % 2 === 0 ? 4 : -4, 0],
                }}
                transition={{
                  duration: 8 + idx * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="8"
                  fill="#FFFFFF"
                  stroke={node.color}
                  strokeWidth="2.5"
                  className="shadow-sm"
                />
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="3"
                  fill={node.color}
                />
                <rect
                  x={node.x + 14}
                  y={node.y - 10}
                  width={node.label.length * 8 + 12}
                  height="20"
                  rx="4"
                  fill="#FFFFFF"
                  stroke="#E2E8F0"
                  strokeWidth="1"
                />
                <text
                  x={node.x + 20}
                  y={node.y + 3}
                  fill="#0F172A"
                  fontSize="9"
                  fontWeight="700"
                  fontFamily="var(--font-jetbrains-mono), monospace"
                  letterSpacing="0.05em"
                >
                  {node.label}
                </text>
              </motion.g>
            ) : (
              <g>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="8"
                  fill="#FFFFFF"
                  stroke={node.color}
                  strokeWidth="2.5"
                />
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="3"
                  fill={node.color}
                />
                <rect
                  x={node.x + 14}
                  y={node.y - 10}
                  width={node.label.length * 8 + 12}
                  height="20"
                  rx="4"
                  fill="#FFFFFF"
                  stroke="#E2E8F0"
                  strokeWidth="1"
                />
                <text
                  x={node.x + 20}
                  y={node.y + 3}
                  fill="#0F172A"
                  fontSize="9"
                  fontWeight="700"
                  fontFamily="var(--font-jetbrains-mono), monospace"
                  letterSpacing="0.05em"
                >
                  {node.label}
                </text>
              </g>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
