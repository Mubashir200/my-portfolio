"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Terminal as TerminalIcon, ShieldCheck, Activity, Globe } from "lucide-react";

const logs = [
  { text: "ssh mubashir@portfolio-v2.main", type: "cmd" },
  { text: "Connecting to remote environment...", type: "info" },
  { text: "Identity established via biometrics.", type: "success" },
  { text: "Initializing creative_runtime.exe", type: "info" },
  { text: "Loading design_system.config.js", type: "info" },
  { text: "Found: 15+ Core Competencies", type: "success" },
  { text: "Memory Check: [||||||||||] 100%", type: "info" },
  { text: "Deploying production-ready visions...", type: "cmd" },
  { text: "Build successful in 42ms.", type: "success" },
  { text: "System Status: OPTIMIZED", type: "success" },
  { text: "git commit -m 'Release the future'", type: "cmd" },
  { text: "Syncing with real-world impact...", type: "info" },
  { text: "Listening on port: 3000 (Creative Mode)", type: "info" }
];

export default function LiveTerminal() {
  const [logCount, setLogCount] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setLogCount((prev) => (prev < logs.length ? prev + 1 : prev));
      }, 800);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const visibleLogs = logs.slice(0, logCount);

  return (
    <section ref={containerRef} className="relative z-20 bg-[#0a0a0a] py-32 px-6 md:px-12 text-white border-t border-white/5 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,65,0.03),transparent)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Side: Stats & Info */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono tracking-widest uppercase"
            >
              <Activity size={14} />
              Live Activity System
            </motion.div>
            
            <h3 className="text-4xl md:text-5xl font-bold font-mono tracking-tighter uppercase leading-tight">
              Observing the <span className="text-accent">Process</span>
            </h3>
            
            <p className="text-white/50 text-lg leading-relaxed max-w-lg">
              Behind every pixel is a narrative of logic and creativity. This terminal represents the continuous stream of engineering that powers my digital products.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { label: "Commit Rate", value: "98%", icon: <ShieldCheck className="text-accent" /> },
                { label: "Uptime", value: "99.9%", icon: <Globe className="text-accent-secondary" /> }
              ].map((stat, i) => (
                <div key={i} className="p-6 glass-card rounded-2xl space-y-3">
                  {stat.icon}
                  <div className="text-2xl font-bold font-mono">{stat.value}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Terminal Window */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl border-white/10">
              <div className="bg-white/5 p-4 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/30" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                  <div className="w-3 h-3 rounded-full bg-green-500/30" />
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-white/30 uppercase tracking-widest">
                  <TerminalIcon size={12} />
                  bash — creative_runtime
                </div>
              </div>
              
              <div className="p-8 h-[400px] overflow-y-auto font-mono text-xs md:text-sm space-y-3 scrollbar-hide">
                {visibleLogs.map((log, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-3"
                  >
                    <span className="text-accent/30 select-none">➜</span>
                    <span className={`${
                      log.type === 'cmd' ? 'text-white' : 
                      log.type === 'success' ? 'text-accent' : 
                      'text-white/40 italic'
                    }`}>
                      {log.text}
                    </span>
                  </motion.div>
                ))}
                {isInView && (
                  <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-2 h-4 bg-accent ml-6"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
