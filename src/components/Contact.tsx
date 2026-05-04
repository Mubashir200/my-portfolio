"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative z-20 bg-[#0a0a0a] py-32 px-6 md:px-12 text-white overflow-hidden">
      {/* Background depth elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-accent font-mono text-sm tracking-[0.3em] uppercase">
                <Mail size={18} />
                Communication Portal
              </div>
              <h3 className="text-5xl md:text-6xl font-bold font-mono tracking-tighter uppercase leading-tight">
                Let's Build the <br />
                <span className="text-accent italic">Future</span>.
              </h3>
              <p className="text-white/40 text-lg leading-relaxed max-w-md font-sans font-light">
                Available for project-based collaborations and impactful tech initiatives. Reach out via the encrypted channel below.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { label: "Email", value: "mubashir.sys@gmail.com", href: "mailto:mubashir.sys@gmail.com", icon: <Mail size={20} /> },
                { label: "Phone", value: "+91 9823786144", href: "tel:+919823786144", icon: <Phone size={20} /> },
                { label: "Base", value: "Maharashtra, India", href: "#", icon: <MapPin size={20} /> }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 group cursor-pointer w-fit"
                >
                  <div className="p-4 rounded-2xl glass-card group-hover:border-accent/40 group-hover:bg-accent/5 transition-all duration-500">
                    <div className="text-white/40 group-hover:text-accent transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{item.label}</p>
                    <p className="text-lg font-mono text-white/70 group-hover:text-white transition-colors tracking-tight">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side: Apple-Style Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-10 md:p-12 glass-card rounded-[40px] relative group"
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[40px]" />
            
            <form className="relative z-10 space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] ml-2">Identifiction</label>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-white/[0.02] border border-white/5 rounded-2xl p-5 font-mono text-sm focus:border-accent/30 focus:bg-white/[0.05] outline-none transition-all placeholder:text-white/10"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] ml-2">Message Payload</label>
                <textarea 
                  rows={4}
                  placeholder="Briefly describe the vision..."
                  className="w-full bg-white/[0.02] border border-white/5 rounded-2xl p-5 font-mono text-sm focus:border-accent/30 focus:bg-white/[0.05] outline-none transition-all placeholder:text-white/10 resize-none"
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-black font-mono font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500 group/btn"
              >
                <span>INITIATE_CONTACT</span>
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>
              <p className="text-center text-[10px] font-mono text-white/20 tracking-widest uppercase italic">
                // end_to_end_encrypted
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
