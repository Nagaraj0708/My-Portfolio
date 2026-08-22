"use client";

import React, { useEffect, useRef, useState } from "react";
import { useMotionValue } from "framer-motion";

interface Particle3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

export function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const prevMouseX = useRef(0);
  const prevMouseY = useRef(0);
  const particlesRef = useRef<Particle3D[]>([]);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Vibrant Cyber Particle Color Palette
    const colors = ["#3b82f6", "#6366f1", "#8b5cf6", "#06b6d4", "#ec4899", "#10b981"];

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      const dx = x - prevMouseX.current;
      const dy = y - prevMouseY.current;

      mouseX.set(x);
      mouseY.set(y);

      prevMouseX.current = x;
      prevMouseY.current = y;

      // Spawn 3D Kinetic Particles on Mouse Movement
      if (Math.hypot(dx, dy) > 1.5) {
        for (let i = 0; i < 3; i++) {
          particlesRef.current.push({
            x,
            y,
            z: (Math.random() - 0.5) * 120, // 3D z-depth
            vx: (Math.random() - 0.5) * 2.5 + dx * 0.12,
            vy: (Math.random() - 0.5) * 2.5 + dy * 0.12,
            vz: (Math.random() - 0.5) * 4,
            life: 1,
            maxLife: 45 + Math.random() * 25,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: 2.5 + Math.random() * 3.5,
          });
        }
      }
    };

    // 3D Shockwave Burst on Click
    const handleClick = (e: MouseEvent) => {
      for (let i = 0; i < 28; i++) {
        const angle = (Math.PI * 2 * i) / 28;
        const speed = 3.5 + Math.random() * 4.5;
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          z: (Math.random() - 0.5) * 160,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          vz: (Math.random() - 0.5) * 7,
          life: 1,
          maxLife: 55 + Math.random() * 30,
          color: colors[i % colors.length],
          size: 3 + Math.random() * 4,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    // 3D Canvas Perspective Render Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const fov = 300; // 3D field of view perspective matrix

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;
        p.life -= 1 / p.maxLife;

        if (p.life <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        // 3D Perspective Projection
        const scale = fov / (fov + p.z + 150);
        const projX = p.x;
        const projY = p.y;
        const projSize = Math.max(0.5, p.size * scale);

        ctx.save();
        ctx.globalAlpha = p.life * scale;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 14 * scale;
        ctx.shadowColor = p.color;

        ctx.beginPath();
        ctx.arc(projX, projY, projSize, 0, Math.PI * 2);
        ctx.fill();

        // Connect 3D Mesh Tethers between adjacent particles
        for (let j = i - 1; j >= Math.max(0, i - 4); j--) {
          const p2 = particlesRef.current[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y, p.z - p2.z);
          if (dist < 75) {
            ctx.strokeStyle = p.color;
            ctx.lineWidth = (1 - dist / 75) * scale * 0.9;
            ctx.beginPath();
            ctx.moveTo(projX, projY);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9995] w-full h-full"
    />
  );
}
