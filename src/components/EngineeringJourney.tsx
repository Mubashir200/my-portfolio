"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code, Rocket, Award, Star } from "lucide-react";

const milestones = [
  {
    year: "2019-2022",
    title: "The Foundation",
    location: "Govt. Polytechnic Karwar",
    desc: "Completed Diploma in Computer Science and Engineering with 84%. Discovered the power of logical thinking.",
    icon: <GraduationCap />,
    color: "accent"
  },
  {
    year: "2022-2026",
    title: "Deep Dive",
    location: "AITD, Goa",
    desc: "Currently pursuing B.Tech in CSE. Mastering full-stack architectures and complex software systems.",
    icon: <Code />,
    color: "accent-secondary"
  },
  {
    year: "2023-Present",
    title: "Digital Architect",
    location: "Global Markets",
    desc: "Launched multiple production-grade systems including College Management and specialized web apps.",
    icon: <Rocket />,
    color: "accent"
  },
  {
    year: "Future",
    title: "AI Integration",
    location: "The Horizon",
    desc: "Focusing on merging immersive frontend experiences with advanced AI-driven automation.",
    icon: <Star />,
    color: "accent-secondary"
  }
];

export default function EngineeringJourney() {
  return (
    <section id="journey" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent text-[10px] font-mono tracking-[0.5em] uppercase"
          >
            Mission Protocol
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold font-mono tracking-tighter uppercase">
            Engineering <span className="text-accent">Journey</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

          <div className="space-y-24">
            {milestones.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="flex-1 w-full text-center md:text-left md:w-auto">
                  <div className={`p-8 glass-card rounded-3xl space-y-4 border-${item.color}/20 hover:border-${item.color}/40 transition-colors group`}>
                    <div className="flex items-center gap-4 text-accent mb-2">
                      <span className="text-[10px] font-mono tracking-widest bg-white/5 px-3 py-1 rounded-full">{item.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight">{item.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    <div className="text-[10px] text-accent/60 font-mono italic">Location: {item.location}</div>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="relative z-20 flex items-center justify-center w-12 h-12 rounded-full bg-black border border-white/10 text-accent shadow-[0_0_20px_rgba(0,255,65,0.1)]">
                  {item.icon}
                  {/* Glowing dot for timeline */}
                  <div className="absolute inset-0 rounded-full animate-ping bg-accent/20 scale-150 pointer-events-none" />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
