"use client";

import { motion } from "framer-motion";
import { Laptop, Smartphone, Globe, BarChart } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Building high-performance, responsive websites using modern frameworks like Next.js and React.",
      icon: <Globe className="text-accent" size={32} />,
      tags: ["Next.js", "React", "Node.js"]
    },
    {
      title: "App Development",
      description: "Creating seamless mobile experiences with focus on performance and intuitive UI/UX.",
      icon: <Smartphone className="text-accent" size={32} />,
      tags: ["React Native", "Expo", "App Store"]
    },
    {
      title: "UI/UX Design",
      description: "Designing beautiful, user-centric interfaces that bridge the gap between design and code.",
      icon: <Laptop className="text-accent" size={32} />,
      tags: ["Figma", "Interaction", "Prototyping"]
    },
    {
      title: "Technical SEO",
      description: "Optimizing web performance and visibility to ensure your products reach the right audience.",
      icon: <BarChart className="text-accent" size={32} />,
      tags: ["Core Web Vitals", "Analytics", "Metadata"]
    }
  ];

  return (
    <section id="services" className="relative z-20 bg-[#121212] py-32 px-6 md:px-12 text-white border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-24">
          <div className="max-w-xl">
            <h3 className="text-4xl md:text-5xl font-bold font-mono tracking-tighter uppercase mb-6">
              Solutions <span className="text-accent">/</span> Services
            </h3>
            <p className="text-white/50 text-lg leading-relaxed">
              I specialize in turning complex problems into elegant digital solutions. Each project is handled with extreme attention to detail and performance.
            </p>
          </div>
          <p className="text-accent font-mono text-sm tracking-widest uppercase">
            // capability_index_v1.0
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 md:p-12 glass-panel rounded-[2.5rem] border-white/5 hover:border-accent/30 transition-all duration-700 overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-[80px] group-hover:bg-accent/10 transition-all duration-700" />

              <div className="relative z-10 flex flex-col gap-8">
                <div className="flex justify-between items-center">
                  <div className="p-5 bg-white/5 rounded-3xl border border-white/10 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,255,65,0.2)] transition-all duration-500">
                    {service.icon}
                  </div>
                  <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">
                    Service_ID // 0{idx + 1}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-3xl font-bold font-mono tracking-tight group-hover:text-glow-accent transition-all duration-500">
                    {service.title}
                  </h4>
                  <p className="text-white/40 leading-relaxed text-lg group-hover:text-white/60 transition-colors">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  {service.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[9px] font-mono text-white/30 uppercase tracking-widest px-4 py-2 bg-white/5 rounded-xl border border-white/5 group-hover:border-accent/20 group-hover:text-accent transition-all duration-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Holographic Border Effect */}
              <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/10 rounded-[2.5rem] transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
