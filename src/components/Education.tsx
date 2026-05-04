"use client";

import { GraduationCap, Award, Calendar } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Current Enrollment",
      period: "2025 - Present",
      status: "In Progress"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "P.E.S College, Aurangabad",
      period: "2022 - 2025",
      score: "76.69%"
    },
    {
      degree: "SSC (10th Standard)",
      institution: "Little Flower High School, Aurangabad",
      period: "Completed 2022",
      score: "Maharashtra State Board"
    }
  ];

  const certifications = [
    "MSCIT (80/100)",
    "C & C++ Programming (Certified)",
    "Java (Certified)",
    "Cyber security Workshop",
    "Web Designing Workshop"
  ];

  return (
    <section id="education" className="relative z-20 bg-[#121212] py-24 px-6 md:px-12 text-white border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <GraduationCap className="text-accent" size={32} />
          <h3 className="text-3xl md:text-4xl font-bold font-mono tracking-tighter">
            ./read_history.log
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <div className="space-y-12">
            {education.map((item, idx) => (
              <div key={idx} className="relative pl-8 border-l border-accent/30 group">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-accent group-hover:shadow-[0_0_10px_rgba(0,255,65,0.8)] transition-all duration-300" />
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-accent/60 mb-2">
                    <Calendar size={12} />
                    <span>{item.period}</span>
                  </div>
                  <h4 className="text-xl font-bold font-mono">{item.degree}</h4>
                  <p className="text-white/60 font-mono text-sm">{item.institution}</p>
                  {item.score && (
                    <p className="text-accent/80 text-xs font-mono mt-2 bg-accent/5 inline-block px-2 py-0.5 rounded border border-accent/10">
                      Result: {item.score}
                    </p>
                  )}
                  {item.status && (
                    <p className="text-blue-400 text-xs font-mono mt-2 bg-blue-400/5 inline-block px-2 py-0.5 rounded border border-blue-400/10">
                      Status: {item.status}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-black/30 border border-white/5 rounded-2xl p-8 h-fit">
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-accent" size={24} />
              <h4 className="text-xl font-mono font-bold uppercase tracking-widest text-white/80">
                Certifications
              </h4>
            </div>

            <ul className="space-y-4">
              {certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-3 font-mono text-sm text-white/60 group">
                  <span className="text-accent mt-1 group-hover:scale-125 transition-transform">▸</span>
                  <span className="group-hover:text-white transition-colors">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
