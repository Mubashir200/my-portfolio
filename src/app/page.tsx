"use client";

import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import DigitalIdentity from "@/components/DigitalIdentity";
import EngineeringJourney from "@/components/EngineeringJourney";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import FloatingResume from "@/components/FloatingResume";
import LiveTerminal from "@/components/LiveTerminal";
import TerminalPlayground from "@/components/TerminalPlayground";
import Contact from "@/components/Contact";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Force scroll to top on fresh load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#0a0a0a] min-h-screen selection:bg-accent/20 selection:text-white overflow-clip">
      <LoadingScreen />
      <Navbar />
      <ScrollyCanvas />
      
      {/* Immersive System Sections */}
      <DigitalIdentity />
      <EngineeringJourney />
      
      {/* Technical Deep Dives */}
      <Services />
      <Projects />
      <Skills />
      
      {/* Interactive Playground */}
      <TerminalPlayground />
      
      {/* System Status & Contact */}
      <LiveTerminal />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-white/5 py-12 text-center text-white/30 font-mono text-xs uppercase tracking-[0.2em]">
        <p>© {new Date().getFullYear()} Mohammed Mubashir // system_status: online</p>
      </footer>
      <FloatingResume />
    </main>
  );
}
