"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Code2, Sparkles, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Football Leaders Academy",
      description: "A complete football academy management system featuring responsive profiles, training plans, and an admin panel.",
      tags: ["PHP", "MySQL", "JavaScript"],
      link: "#",
      github: "#",
      color: "from-blue-600/30 via-cyan-500/10 to-transparent"
    },
    {
      title: "College AI Management",
      description: "Digital solution for automating attendance, fees, and administrative tasks with an integrated AI chatbot.",
      tags: ["C#", "SQL Server", "API"],
      link: "#",
      github: "#",
      color: "from-emerald-600/30 via-teal-500/10 to-transparent"
    },
    {
      title: "Neural Portfolio V1",
      description: "Immersive 3D portfolio featuring WebGL graphics and interactive neural nodes for skill visualization.",
      tags: ["Three.js", "Framer", "React"],
      link: "#",
      github: "#",
      color: "from-purple-600/30 via-pink-500/10 to-transparent"
    }
  ];

  return (
    <section id="projects" className="relative z-20 bg-[#0a0a0a] py-32 px-6 md:px-12 text-white overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent-secondary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-24"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-accent font-mono text-sm tracking-[0.3em] uppercase">
              <Sparkles size={18} />
              Featured Productions
            </div>
            <h3 className="text-4xl md:text-5xl font-bold font-mono tracking-tighter uppercase leading-tight">
              Engineering <span className="text-white italic">Excellence</span>.
            </h3>
          </div>
          <p className="text-white/40 font-mono text-xs uppercase tracking-widest hidden md:block">
            // stable_build_v2.4
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group relative flex flex-col justify-between p-1 rounded-3xl bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-700"
            >
              {/* Internal Glass Layer */}
              <div className="relative flex flex-col h-full justify-between p-8 rounded-[22px] bg-black/90 overflow-hidden z-10 transition-transform duration-700 group-hover:scale-[0.98]">
                {/* Dynamic Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-10">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-white/30 group-hover:text-accent group-hover:border-accent/30 transition-all">
                      <Code2 size={22} />
                    </div>
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="p-2 cursor-pointer text-white/20 hover:text-white transition-colors"
                    >
                      <ArrowUpRight size={20} />
                    </motion.div>
                  </div>

                  <h4 className="text-2xl font-bold mb-4 font-mono leading-tight group-hover:text-white transition-colors">{project.title}</h4>
                  <p className="text-white/40 text-sm mb-10 leading-relaxed font-sans group-hover:text-white/70 transition-colors">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-3 py-1 text-[9px] uppercase font-bold tracking-[0.2em] rounded-md bg-white/5 border border-white/5 text-white/30 group-hover:border-accent/20 group-hover:text-accent transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="relative z-10 flex items-center justify-between pt-6 border-t border-white/5">
                  <a 
                    href={project.link}
                    className="text-[10px] font-bold text-white/30 hover:text-accent transition-colors tracking-[0.3em] uppercase"
                  >
                    Open Source
                  </a>
                  <div className="flex gap-4">
                    <GitBranch className="text-white/20 hover:text-accent transition-colors cursor-pointer" size={16} />
                    <ExternalLink className="text-white/20 hover:text-accent transition-colors cursor-pointer" size={16} />
                  </div>
                </div>
              </div>

              {/* Animated Glow Border */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-700 pointer-events-none rounded-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
