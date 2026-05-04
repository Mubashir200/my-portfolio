"use client";

import { motion } from "framer-motion";
import { User, Target, Zap, Shield, Cpu, Activity } from "lucide-react";

export default function DigitalIdentity() {
  const stats = [
    { label: "Status", value: "Active", icon: <Activity className="text-accent" /> },
    { label: "Role", value: "Full-Stack Engineer", icon: <Cpu className="text-accent-secondary" /> },
    { label: "Focus", value: "Immersive Web", icon: <Target className="text-accent" /> },
    { label: "Security", value: "Verified", icon: <Shield className="text-accent-secondary" /> }
  ];

  return (
    <section id="identity" className="relative py-32 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 hacker-grid opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Identity Diagnostics Panel */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-mono tracking-widest uppercase"
            >
              <User size={12} />
              Identity System v1.0
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-bold font-mono tracking-tighter uppercase leading-[0.9]">
              The <span className="text-accent">Architect</span> <br />
              Behind the Code.
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 glass-card rounded-2xl space-y-4"
                >
                  {stat.icon}
                  <div>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest font-mono mb-1">{stat.label}</p>
                    <p className="text-lg font-bold text-white font-mono">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Vision Terminal */}
          <div className="flex-1">
            <div className="glass-panel rounded-3xl p-8 md:p-12 space-y-8 relative overflow-hidden group border-white/10 h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap size={120} className="text-accent" />
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight leading-tight">
                  "I believe that coding is not just about logic—it's about creating emotions through the screen."
                </h3>
                
                <p className="text-white/50 text-lg leading-relaxed max-w-xl">
                  As a Full-Stack Developer currently pursuing B.Tech in Computer Science, I am obsessed with building digital environments that push the boundaries of what is possible on the web. My focus lies in the intersection of high-performance engineering and cinematic UI design.
                </p>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
                    <span className="text-white/30">Location</span>
                    <span className="text-accent">Aurangabad, India</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
                    <span className="text-white/30">Ambition Level</span>
                    <span className="text-accent">Maximum</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-accent shadow-[0_0_10px_#00ff41]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
