"use client";

import { motion } from "framer-motion";
import { Cpu, Layout, Database, Wrench, Shield, Zap } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Core Engineering",
      icon: <Cpu className="text-accent" size={24} />,
      skills: ["C", "C++", "C#", "Java", "Python", "SQL"]
    },
    {
      title: "Digital Interfaces",
      icon: <Layout className="text-accent-secondary" size={24} />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "PHP"]
    },
    {
      title: "Industrial Tools",
      icon: <Wrench className="text-orange-400" size={24} />,
      skills: ["Office Suite", "CorelDRAW", "Git", "VS Code", "Postman"]
    }
  ];

  return (
    <section id="skills" className="relative z-20 bg-[#0a0a0a] py-32 px-6 md:px-12 text-white overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-24">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-accent-secondary font-mono text-sm tracking-[0.3em] uppercase">
              <Zap size={18} />
              Technical Ecosystem
            </div>
            <h3 className="text-4xl md:text-5xl font-bold font-mono tracking-tighter uppercase leading-tight">
              Mastering the <span className="text-accent italic">Machine</span>.
            </h3>
          </div>
          <div className="px-6 py-4 glass-card rounded-2xl flex items-center gap-4">
            <div className="p-2 bg-accent/20 rounded-lg">
              <Shield className="text-accent" size={20} />
            </div>
            <div className="space-y-0.5">
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono">System Status</p>
              <p className="text-xs font-mono font-bold text-accent">FULLY_SYNCHRONIZED</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 glass-card rounded-[32px] hover:border-accent/30 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-accent/10 transition-colors duration-500">
                  {category.icon}
                </div>
                <h4 className="text-lg font-bold font-mono tracking-tight group-hover:text-white transition-colors uppercase">
                  {category.title}
                </h4>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 hover:border-accent/40 hover:bg-accent/5 hover:text-accent transition-all duration-300 font-mono text-xs text-white/50"
                  >
                    <span className="text-accent/30 mr-1.5">#</span>
                    {skill}
                  </motion.div>
                ))}
              </div>

              {/* Decorative progress bars (Fake but aesthetic) */}
              <div className="mt-12 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-mono text-white/30 uppercase tracking-widest">
                    <span>Integration Level</span>
                    <span>94%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "94%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-accent/40" 
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
