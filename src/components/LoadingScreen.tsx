"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 800);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center font-mono"
        >
          <div className="relative space-y-8 flex flex-col items-center">
            {/* Logo area */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-4xl font-bold tracking-tighter text-white"
            >
              <span className="text-accent">~</span>/mubashir<span className="animate-pulse text-accent">_</span>
            </motion.div>

            {/* Progress bar area */}
            <div className="w-64 space-y-2">
              <div className="flex justify-between text-[10px] text-white/30 uppercase tracking-[0.3em]">
                <span>Initializing System</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-accent"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Simulated logs */}
            <div className="text-[9px] text-white/20 uppercase tracking-widest text-center">
              {progress < 30 && <p>Syncing core assets...</p>}
              {progress >= 30 && progress < 60 && <p>Allocating creative memory...</p>}
              {progress >= 60 && progress < 90 && <p>Optimizing UX protocols...</p>}
              {progress >= 90 && <p>Ready for deployment.</p>}
            </div>
          </div>

          {/* Background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
