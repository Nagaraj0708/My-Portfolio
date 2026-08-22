"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export interface TooltipItem {
  id: number;
  name: string;
  designation: string;
  image?: string;
  iconText?: string;
  badgeBg?: string;
}

export const AnimatedTooltip = ({
  items,
}: {
  items: TooltipItem[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 8 };
  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-30, 30]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-40, 40]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="flex items-center space-x-2">
      {items.map((item) => (
        <div
          className="relative group -mr-2 cursor-pointer"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
          onMouseMove={handleMouseMove}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.7 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 12,
                  },
                }}
                exit={{ opacity: 0, y: 15, scale: 0.7 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 left-1/2 -translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-xl bg-slate-950 text-white z-[80] shadow-2xl px-4 py-2 border border-slate-800 pointer-events-none"
              >
                <div className="absolute inset-x-6 z-30 w-[40%] -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
                <div className="font-mono font-extrabold text-white text-xs">
                  {item.name}
                </div>
                <div className="font-sans text-[11px] text-blue-400 font-medium">
                  {item.designation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {item.image ? (
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-md group-hover:scale-110 group-hover:z-30 transition-transform duration-300">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-800 shadow-md group-hover:scale-110 group-hover:z-30 transition-transform duration-300 font-mono text-xs font-black text-white ${
                item.badgeBg || "bg-blue-600"
              }`}
            >
              {item.iconText || item.name.substring(0, 2).toUpperCase()}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
