"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "./about", href: "#about" },
    { name: "./services", href: "#services" },
    { name: "./projects", href: "#projects" },
    { name: "./skills", href: "#skills" },
    { name: "./education", href: "#education" },
    { name: "./contact", href: "#contact" },
  ];

  const pillVariants: Variants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: { 
      y: -5, 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 } 
    }
  };

  return (
    <nav className="fixed top-6 left-0 w-full z-50 px-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Logo Capsule */}
        <motion.a
          href="#"
          variants={pillVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="px-6 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_20px_rgba(0,255,65,0.05)] hover:border-accent/40 hover:shadow-[0_0_25px_rgba(0,255,65,0.15)] transition-all duration-300 font-mono font-bold text-lg tracking-tighter text-white"
        >
          <span className="text-accent">~</span>/mubashir<span className="animate-pulse text-accent">_</span>
        </motion.a>

        {/* Desktop Navigation Capsules */}
        <div className="hidden lg:flex gap-3">
          {navLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              variants={pillVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              transition={{ delay: idx * 0.05 }}
              className="px-5 py-2.5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:border-accent/30 hover:shadow-[0_0_20px_rgba(0,255,65,0.1)] transition-all duration-300 text-xs font-mono text-white/70 hover:text-white tracking-widest uppercase"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle Capsule */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          variants={pillVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="lg:hidden p-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-white/70 hover:text-accent transition-all"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-24 right-6 flex flex-col gap-2 items-end pointer-events-auto"
        >
          {navLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full text-sm font-mono text-white/70 hover:text-accent shadow-xl"
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
