"use client";

import { motion } from "framer-motion";
import { Terminal, MapPin, Target, Sparkles, BookOpen } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Engineering Results", value: "76.69%", desc: "Diploma Grade" },
    { label: "Tech Stack Depth", value: "10+", desc: "Languages Mastery" },
    { label: "Current Mission", value: "B.Tech", desc: "Digital Evolution" }
  ];

  return (
    <section id="about" className="relative z-20 bg-[#0a0a0a] py-32 px-6 md:px-12 text-white overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Storytelling */}
          <div className="space-y-10 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 text-accent font-mono text-sm tracking-[0.3em] uppercase">
                <Terminal size={18} />
                About the Developer
              </div>
              <h3 className="text-5xl md:text-6xl font-bold font-mono tracking-tighter uppercase leading-tight">
                Architecting <br />
                <span className="text-accent italic">Digital</span> Legacies.
              </h3>
              <p className="text-white/60 text-lg leading-relaxed max-w-lg">
                Based in <span className="text-white">Maharashtra, India</span>, I am an aspiring software developer with a relentless curiosity for complex systems. My journey is defined by a blend of academic excellence and a passion for real-world impact.
              </p>
            </motion.div>

            <div className="flex flex-col gap-6">
              {[
                { icon: <Target className="text-accent" />, text: "Passionate about building impactful tech products" },
                { icon: <Sparkles className="text-accent-secondary" />, text: "Continuously learning modern, disruptive technologies" },
                { icon: <BookOpen className="text-blue-400" />, text: "Eager to tackle project-based engineering challenges" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-accent/30 transition-all duration-300">
                    {item.icon}
                  </div>
                  <p className="text-sm font-mono text-white/50 group-hover:text-white transition-colors">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Visual Data Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {/* Background elements */}
            <div className="absolute inset-0 bg-accent/5 rounded-3xl blur-3xl -z-10" />
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="col-span-1 sm:col-span-2 p-8 glass-card rounded-3xl space-y-6 group hover:border-accent/40 transition-all"
            >
              <div className="flex justify-between items-center">
                <MapPin className="text-accent" size={24} />
                <span className="text-[10px] font-mono text-accent tracking-widest animate-pulse">SYSTEM_LOCATED</span>
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl font-bold font-mono">Maharashtra, IN</h4>
                <p className="text-white/40 font-mono text-xs uppercase tracking-widest">Primary Operations Hub</p>
              </div>
            </motion.div>

            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 glass-card rounded-3xl space-y-4 hover:bg-white/[0.05] transition-all cursor-default"
              >
                <div className="text-3xl font-bold font-mono text-accent">{stat.value}</div>
                <div className="space-y-1">
                  <div className="text-[10px] text-white/80 font-bold uppercase tracking-widest">{stat.label}</div>
                  <div className="text-[10px] text-white/30 font-mono">{stat.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
