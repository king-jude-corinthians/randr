"use client";

import Link from "next/link";
import { Phone, MessageCircle, ChevronRight, Zap } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { COMPANY } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function EmergencyCTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const waUrl = getWhatsAppUrl("Hello, I need ambulance assistance. Please respond urgently.");

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-28" style={{ background: "linear-gradient(135deg, #DC2626 0%, #B91C1C 50%, #991B1B 100%)" }}>
      {/* Overlay patterns */}
      <div className="absolute inset-0 stripe-bg" />
      <div className="absolute inset-0 dot-grid opacity-10" />

      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#000033]/20 blur-3xl pointer-events-none" />

      {/* Radar rings */}
      {!reduced && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none hidden lg:block opacity-30">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24" style={{ position: "absolute", borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.4)", animation: "radar-expand 3.6s ease-out infinite" }} />
            <div className="w-24 h-24" style={{ position: "absolute", borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.4)", animation: "radar-expand 3.6s ease-out 1.2s infinite" }} />
            <div className="w-24 h-24" style={{ position: "absolute", borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.4)", animation: "radar-expand 3.6s ease-out 2.4s infinite" }} />
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Live badge */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
          </span>
          <Zap className="w-3.5 h-3.5 text-white" />
          <span className="text-white text-xs font-bold uppercase tracking-widest">Dispatching Now — Units On Standby</span>
        </motion.div>

        <motion.h2
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-5 leading-tight"
        >
          Medical Emergency?
          <br />
          <span className="text-white/85">Don&apos;t Wait. Call Now.</span>
        </motion.h2>

        <motion.p
          initial={reduced ? {} : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/75 text-lg mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Dispatched in under 2 minutes · Certified paramedics · 24/7 across Abuja FCT
        </motion.p>

        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={COMPANY.phoneTel}
            className="relative flex items-center gap-3 bg-white text-[#DC2626] hover:bg-red-50 px-8 py-5 rounded-2xl font-extrabold text-xl transition-all duration-200 shadow-2xl hover:-translate-y-1 pulse-ring group"
          >
            <Phone className="w-6 h-6" />
            {COMPANY.phone}
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-200 shadow-xl hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
          <Link
            href="/book"
            className="flex items-center gap-2 border-2 border-white/50 text-white hover:bg-white/10 px-8 py-5 rounded-2xl font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 group"
          >
            Book Online
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={reduced ? {} : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {["NEMA Registered", "FRSC Certified", "ISO 9001:2015", "24/7 Availability", "No Hold Time"].map((t) => (
            <span key={t} className="text-white/50 text-xs font-mono tracking-wide flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-white/30" />
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
