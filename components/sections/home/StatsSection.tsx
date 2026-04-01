"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { StatCounter } from "@/components/shared/StatCounter";
import { COMPANY } from "@/lib/constants";
import { Shield, Clock, Star, Activity } from "lucide-react";

const stats = [
  { icon: Activity, value: COMPANY.livesSaved, suffix: "+", label: "Lives Saved", sub: "Since 2014" },
  { icon: Shield,   value: COMPANY.paramedics,  suffix: "+", label: "Certified Paramedics", sub: "ALS & BLS trained" },
  { icon: Clock,    value: COMPANY.vehicles,     suffix: " Units", label: "Active Fleet", sub: "GPS-tracked 24/7" },
  { icon: Star,     value: Number(new Date().getFullYear()) - COMPANY.foundedYear, suffix: " Yrs", label: "Years of Service", sub: "Trusted since 2014" },
];

export function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #000033 0%, #00004D 60%, #1A1A6E 100%)" }}>
      <div className="absolute inset-0 dot-grid opacity-15" />
      <div className="absolute inset-0 stripe-bg" />

      {/* Glow accents */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-[#DC2626]/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#1A1A6E]/40 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
          {stats.map(({ icon: Icon, value, suffix, label, sub }, i) => (
            <motion.div
              key={label}
              initial={reduced ? {} : { opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              className="flex flex-col items-center text-center px-6 py-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#DC2626]/15 border border-[#DC2626]/30 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-[#DC2626]" />
              </div>
              <div className="stat-number text-4xl lg:text-5xl text-white mb-2">
                <StatCounter value={value} suffix={suffix} label="" />
              </div>
              <p className="text-white/80 font-semibold text-sm mb-1">{label}</p>
              <p className="text-white/35 text-xs font-mono">{sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6 text-center"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
            </span>
            <span className="text-white/60 text-sm font-mono">Dispatching across Abuja FCT right now</span>
          </div>
          <span className="text-white/20 hidden sm:block">·</span>
          <p className="text-white/40 text-sm">
            Average response{" "}
            <span className="text-[#DC2626] font-bold font-mono">{COMPANY.avgResponseTime}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
