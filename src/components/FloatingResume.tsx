"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

export default function FloatingResume() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100]"
    >
      <motion.a
        href="/Mohammed_Mubashir_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center gap-4 p-2 pl-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full hover:border-accent/50 transition-all duration-300 shadow-2xl"
      >
        <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.2em] group-hover:text-accent transition-colors">
          Download_CV
        </span>
        <div className="p-3 bg-accent/20 rounded-full border border-accent/30 group-hover:bg-accent group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(0,255,65,0.2)]">
          <FileText size={18} />
        </div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-accent/5 blur-xl group-hover:bg-accent/10 transition-all" />
      </motion.a>
    </motion.div>
  );
}
