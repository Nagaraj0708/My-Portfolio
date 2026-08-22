"use client";

import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.85, 0.96] : [1.02, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.8], [14, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], scaleDimensions());

  return (
    <div
      className="flex flex-col items-center justify-center relative p-2 md:p-4 overflow-hidden"
      ref={containerRef}
    >
      <div
        className="py-1 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  titleComponent,
}: {
  titleComponent: string | React.ReactNode;
}) => {
  return (
    <div className="max-w-5xl mx-auto text-center mb-4 md:mb-6 relative z-20">
      {titleComponent}
    </div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className="max-w-5xl mt-2 mx-auto h-[28rem] sm:h-[31rem] md:h-[33rem] lg:h-[34rem] w-full border-4 border-slate-700/80 dark:border-slate-800 p-2 md:p-3 bg-[#0B0F19] rounded-[30px] shadow-[0_35px_100px_rgba(0,0,0,0.6)] [backface-visibility:hidden] [will-change:transform]"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 md:rounded-2xl relative">
        {children}
      </div>
    </motion.div>
  );
};
