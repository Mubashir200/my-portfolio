"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import BackgroundElements from "./BackgroundElements";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Section 1: Mohammed Mubashir (Elite HUD Layout)
  const opacity1 = useTransform(scrollYProgress, [0.05, 0.15, 0.25, 0.35], [0, 1, 1, 0]);

  // Section 2: Storytelling 1
  const opacity2 = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.65], [30, -30]);

  // Section 3: Storytelling 2
  const opacity3 = useTransform(scrollYProgress, [0.65, 0.75, 0.85, 0.95], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.65, 0.95], [30, -30]);

  // Opening Scroll Indicator (Frame 0 - 10)
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const scrollIndicatorY = useTransform(scrollYProgress, [0, 0.08], [0, 20]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 font-mono">
      <BackgroundElements />

      {/* Section 1: Hero Framing */}
      <motion.div
        style={{ opacity: opacity1 }}
        className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 lg:p-20"
      >
        {/* HERO TEXT CONTAINER */}
        <div className="flex-1 grid grid-cols-2 items-start md:items-center w-full max-w-[1800px] mx-auto px-4 md:px-16 pt-32 md:pt-0">

          {/* LEFT SIDE */}
          <div className="flex justify-start">
            <motion.h1
              style={{
                x: useTransform(scrollYProgress, [0.05, 0.25], [-250, 0]),
              }}
              className="
                text-[clamp(1.2rem,6vw,7rem)]
                font-black
                text-white/95
                tracking-[-0.08em]
                uppercase
                leading-none
                whitespace-nowrap
                select-none
                pointer-events-none
              "
            >
              MOHAMMED
            </motion.h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-end">
            <motion.h1
              style={{
                x: useTransform(scrollYProgress, [0.05, 0.25], [250, 0]),
              }}
              className="
                text-[clamp(1.2rem,6vw,7rem)]
                font-black
                text-white/95
                tracking-[-0.08em]
                uppercase
                leading-none
                whitespace-nowrap
                text-right
                select-none
                pointer-events-none
              "
            >
              MUBASHIR
            </motion.h1>
          </div>
        </div>

        {/* Subtitle - Maximum Visibility */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0.05, 0.25], [40, 0]) }}
          className="w-full flex justify-center pb-16"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-[2px] h-20 bg-gradient-to-b from-transparent via-accent to-transparent shadow-[0_0_20px_#00ff41]" />
            <p className="text-[12px] md:text-sm text-white/90 font-bold uppercase tracking-[0.8em]">
              Creative Developer <span className="text-accent ml-2 font-mono italic text-[10px] opacity-70">v2.0.4</span>
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Section 2: Narrative Deep Dive */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-center md:items-start justify-center p-12 md:p-32"
      >
        <div className="space-y-6 max-w-2xl relative">
          <div className="absolute -left-12 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-accent/30 to-transparent hidden md:block" />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            className="h-[1px] bg-accent/50 mb-8"
          />
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-extralight text-white/90 leading-[1.1] uppercase tracking-tighter">
            I Build <br />
            <span className="text-accent/80 italic">Digital</span> Experiences.
          </h2>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed font-sans font-light">
            Crafting high-performance digital solutions with technical precision and creative obsession.
          </p>
          <div className="flex gap-4 pt-6">
            <span className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] text-white/60 uppercase tracking-widest rounded-md">Precision</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] text-white/60 uppercase tracking-widest rounded-md">Logic</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] text-white/60 uppercase tracking-widest rounded-md">Impact</span>
          </div>
        </div>
      </motion.div>

      {/* Section 3: Technical Mastery */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-center md:items-end justify-center text-center md:text-right p-12 md:p-32"
      >
        <div className="space-y-6 max-w-2xl relative">
          <div className="absolute -right-12 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-accent-secondary/30 to-transparent hidden md:block" />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            className="h-[1px] bg-accent-secondary ml-auto mb-8"
          />
          <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-bold text-white leading-[0.9] uppercase tracking-tighter">
            Beyond the <br />
            <span className="text-accent-secondary italic">Interface</span>.
          </h2>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed font-sans font-light">
            Specializing in complex systems, AI-driven automation, and immersive digital environments.
          </p>
          <div className="flex gap-4 pt-6 justify-center md:justify-end">
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] mb-1">Status</span>
              <span className="text-[10px] text-accent font-bold uppercase tracking-[0.2em]">Live_Environment</span>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Opening Scroll Indicator */}
      <motion.div
        style={{ opacity: scrollIndicatorOpacity, y: scrollIndicatorY }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">Scroll to Explore</span>
        <div className="w-[20px] h-[32px] border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-1 bg-accent rounded-full shadow-[0_0_10px_#00ff41]" 
          />
        </div>
      </motion.div>
    </div>
  );
}
