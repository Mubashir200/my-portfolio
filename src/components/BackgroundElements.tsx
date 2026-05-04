"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Code2, Cpu, Activity, ShieldCheck, Globe } from "lucide-react";

export default function BackgroundElements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const terminalWindows = [
    {
      title: "bash — sys_init",
      pos: { top: "10%", left: "5%" },
      delay: 0,
      lines: ["> init creative_env...", "> loading neural_link...", "> status: OPTIMIZED", "> deploy successful"]
    },
    {
      title: "git — branch: main",
      pos: { bottom: "10%", right: "8%" },
      delay: 2,
      lines: ["git push origin prod", "syncing cloud_node...", "✓ assets verified", "✓ build: 2.0.4"]
    },
    {
      title: "npm — dev_server",
      pos: { top: "35%", right: "5%" },
      delay: 4,
      lines: ["npm run dev --elite", "compiled successfully", "ready: localhost:3000", "HMR: active"]
    },
    {
      title: "ai — core_status",
      pos: { bottom: "25%", left: "5%" },
      delay: 6,
      lines: ["AI_MODEL: ACTIVE", "creative_engine v2", "context: immersive_UI", "rendering: true"]
    }
  ];

  const codePanels = [
    {
      pos: { top: "25%", left: "15%" },
      title: "identity.tsx",
      content: `const dev = {
  name: "Mubashir",
  vision: "Elite UX",
  status: "Coding"
};`,
      delay: 1
    },
    {
      pos: { bottom: "20%", right: "20%" },
      title: "engine.config",
      content: `export const config = {
  mode: "Cinematic",
  theme: "Cyberpunk",
  fps: 60
};`,
      delay: 3
    }
  ];

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* LAYER 1: Ambient Particles & Glows */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            animate={{ 
              x: [0, Math.random() * 80 - 40, 0],
              y: [0, Math.random() * 80 - 40, 0],
              opacity: [0.15, 0.45, 0.15]
            }}
            transition={{ duration: 20 + i * 3, repeat: Infinity, ease: "linear" }}
            className="absolute w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]"
            style={{ 
              top: (i * 15) + "%", 
              left: (i * 12) + "%" 
            }}
          />
        ))}
        {/* Tiny floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`p-${i}`}
            animate={{ 
              y: [0, -100, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, delay: i * 0.5 }}
            className="absolute w-[1px] h-[1px] bg-white/60"
            style={{ 
              top: Math.random() * 100 + "%", 
              left: Math.random() * 100 + "%" 
            }}
          />
        ))}
      </div>

      {/* LAYER 2: Floating Terminals */}
      {terminalWindows.map((window, i) => (
        <motion.div
          key={`term-${i}`}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.2, 0.45, 0.2],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15 + i * 2, repeat: Infinity, ease: "easeInOut", delay: window.delay }}
          className="absolute w-56 glass-card rounded-lg border-white/10 overflow-hidden hidden md:block"
          style={window.pos}
        >
          <div className="bg-white/10 p-2 flex items-center justify-between border-b border-white/10">
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-accent/50" />
              <div className="w-1 h-1 rounded-full bg-accent/30" />
            </div>
            <div className="flex items-center gap-1.5 text-[7px] font-mono text-white/40 uppercase tracking-widest">
              {window.title}
            </div>
          </div>
          <div className="p-3 font-mono text-[8px] text-white/45 space-y-1">
            {window.lines.map((line, lIdx) => (
              <p key={lIdx}>{line}</p>
            ))}
          </div>
        </motion.div>
      ))}

      {/* LAYER 3: Code Panels */}
      {codePanels.map((panel, i) => (
        <motion.div
          key={`code-${i}`}
          animate={{ 
            x: [0, 15, 0],
            opacity: [0.2, 0.45, 0.2]
          }}
          transition={{ duration: 18 + i * 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute p-4 glass-card rounded-xl border-white/10 hidden lg:block"
          style={panel.pos}
        >
          <div className="flex items-center gap-2 mb-3 text-accent/40">
            <Code2 size={12} />
            <span className="text-[8px] font-mono uppercase tracking-[0.2em]">{panel.title}</span>
          </div>
          <pre className="font-mono text-[8px] text-white/40 leading-relaxed">
            {panel.content}
          </pre>
        </motion.div>
      ))}

      {/* LAYER 4: Cyberpunk HUD & Neural System */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none hacker-grid" />
      
      {/* Matrix-like Code Rain (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] flex justify-around">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`rain-${i}`}
            animate={{ y: ["-100%", "1000%"] }}
            transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear", delay: i * 2 }}
            className="text-[8px] font-mono text-accent writing-vertical-rl"
          >
            {Array(20).fill(0).map(() => Math.random().toString(36).substring(2, 3)).join("")}
          </motion.div>
        ))}
      </div>

      {/* Circular HUD Markers */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          animate={{ rotate: 360 }}
          transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
          className="absolute border border-accent/20 rounded-full border-dashed opacity-30 hidden xl:block"
          style={{ 
            width: 100 + i * 100, 
            height: 100 + i * 100, 
            top: 20 + i * 20 + "%", 
            left: 5 + i * 5 + "%" 
          }}
        />
      ))}

      {/* Dynamic Scanline */}
      <motion.div
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-b from-transparent via-accent/30 to-transparent opacity-15"
      />
    </div>
  );
}
