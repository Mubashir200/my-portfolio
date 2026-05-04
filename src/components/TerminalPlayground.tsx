"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, ChevronRight } from "lucide-react";

const commands = {
  help: "Available commands: about, projects, skills, contact, clear, identity",
  about: "Mohammed Mubashir. Creative Full-Stack Engineer based in Aurangabad, India.",
  projects: "Core systems: College Management System, FLA Academy App, Personal HUD Portfolio.",
  skills: "Stack: Next.js, React, Node.js, PHP/Laravel, Python, MySQL, PostgreSQL.",
  contact: "Email: mohmubashir04@gmail.com | LinkedIn: mohammed-mubashir-b4526b21b",
  identity: "ID: Architect | Status: Active | Ambition: Maximum",
  clear: "CLEAR_SYSTEM_LOGS"
};

export default function TerminalPlayground() {
  const [history, setHistory] = useState<{ cmd: string; result: string }[]>([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
    } else {
      const result = commands[cmd as keyof typeof commands] || `Command not found: ${cmd}. Type 'help' for available commands.`;
      setHistory((prev) => [...prev, { cmd: input, result }]);
    }
    setInput("");
  };

  return (
    <section className="py-32 bg-[#0a0a0a] px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-panel rounded-2xl overflow-hidden border-white/10 shadow-2xl"
        >
          {/* Header */}
          <div className="bg-white/5 p-4 flex items-center justify-between border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
              <div className="w-3 h-3 rounded-full bg-accent/20" />
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">
              <TerminalIcon size={12} />
              Interactive_Shell — v1.0.0
            </div>
          </div>

          {/* Terminal Body */}
          <div 
            ref={scrollRef}
            className="p-6 h-[400px] overflow-y-auto font-mono text-sm space-y-4 scrollbar-hide bg-black/60"
          >
            <div className="text-accent/60 italic text-xs mb-6">
              System initialized: ~/mubashir_ | Type 'help' to begin interaction.
            </div>

            {history.map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center gap-3 text-white">
                  <ChevronRight size={14} className="text-accent" />
                  <span className="text-accent-secondary">~/mubashir_ {">"}</span>
                  <span>{item.cmd}</span>
                </div>
                <div className="text-white/50 pl-10 leading-relaxed whitespace-pre-wrap">
                  {item.result}
                </div>
              </div>
            ))}

            <form onSubmit={handleSubmit} className="flex items-center gap-3">
              <ChevronRight size={14} className="text-accent" />
              <span className="text-accent-secondary">~/mubashir_ {">"}</span>
              <input
                autoFocus
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent border-none outline-none text-white flex-1 caret-accent"
                spellCheck={false}
              />
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
