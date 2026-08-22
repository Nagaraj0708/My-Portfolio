"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { ProjectMockupPlaceholder } from "@/components/projects/ProjectMockupPlaceholder";

export interface ParallaxProduct {
  id: string;
  title: string;
  category: string;
  type: "clinical" | "hr" | "inventory" | "photography" | "portfolio" | "gym" | "tea" | "popcorn";
  image?: string;
  link?: string;
}

export const HeroParallax = ({
  products,
}: {
  products: ParallaxProduct[];
}) => {
  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 8);
  const thirdRow = products.slice(8, 12);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, bounce: 0 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [250, -250]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [-250, 250]),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [12, 0, -4]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [6, 0, -2]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.5, 1, 1, 0.8]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="py-10 md:py-14 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] border-t border-slate-200/80 dark:border-slate-800"
    >
      <ParallaxHeader />

      <motion.div
        style={{
          rotateX,
          rotateZ,
          opacity,
        }}
        className="mt-10 transform-gpu"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 mb-8 transform-gpu">
          {firstRow.map((product, idx) => (
            <ParallaxCard
              product={product}
              translate={translateX}
              key={`${product.id}-${idx}`}
            />
          ))}
        </motion.div>

        <motion.div className="flex flex-row space-x-8 mb-8 transform-gpu">
          {secondRow.map((product, idx) => (
            <ParallaxCard
              product={product}
              translate={translateXReverse}
              key={`${product.id}-${idx}`}
            />
          ))}
        </motion.div>

        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 transform-gpu">
          {thirdRow.map((product, idx) => (
            <ParallaxCard
              product={product}
              translate={translateX}
              key={`${product.id}-${idx}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const ParallaxHeader = () => {
  return (
    <div className="max-w-7xl relative mx-auto px-6 md:px-12 w-full text-left">
      <div className="inline-flex items-center space-x-2 font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
        <Sparkles className="w-3.5 h-3.5" />
        <span>ENTERPRISE GALLERY</span>
      </div>
      <h2 className="font-sans font-black text-3xl md:text-6xl text-slate-900 dark:text-white tracking-tight leading-none">
        System Architecture &amp; <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
          Visual Artifacts
        </span>
      </h2>
      <p className="max-w-2xl font-sans text-base md:text-lg text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
        A 3D perspective wall of wedding photography platforms, healthcare EMRs, recruitment portals, and real-time inventory management applications engineered with Next.js, Angular 14+, and ASP.NET Core.
      </p>
    </div>
  );
};

export const ParallaxCard = ({
  product,
  translate,
}: {
  product: ParallaxProduct;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      key={product.title}
      className="group/card h-80 w-[420px] relative shrink-0 rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 bg-slate-950 shadow-2xl transform-gpu [backface-visibility:hidden]"
    >
      <div className="block h-full w-full pointer-events-none">
        <ProjectMockupPlaceholder
          type={product.type}
          title={product.title}
          image={product.image}
        />
      </div>

      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 bg-slate-950/80 backdrop-blur-xs p-6 flex flex-col justify-between z-30">
        <div className="flex justify-end">
          <span className="font-mono text-xs font-bold text-white bg-blue-600 px-3 py-1 rounded-full flex items-center space-x-1 shadow-md">
            <span>EXPLORE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
        <div className="flex flex-col space-y-1">
          <span className="font-mono text-[10px] font-bold text-blue-400 uppercase tracking-widest">
            {product.category}
          </span>
          <h3 className="font-sans font-black text-xl text-white">
            {product.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};
