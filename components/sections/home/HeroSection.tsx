"use client";

import Link from "next/link";
import { Phone, Clock, Shield, Zap, ChevronRight, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { COMPANY } from "@/lib/constants";

const badges = [
  { icon: Clock,  text: "5–10 Min Avg Response" },
  { icon: Shield, text: "Certified Paramedics" },
  { icon: Zap,    text: "GPS Dispatched Fleet" },
  { icon: MapPin, text: "All 14 Abuja Zones" },
];

export function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden hero-mesh min-h-[92vh] flex items-center">
      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Radar rings */}
      {!reduced && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none hidden xl:block opacity-60">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="radar-ring w-40 h-40" />
            <div className="radar-ring w-40 h-40" />
            <div className="radar-ring w-40 h-40" />
          </div>
        </div>
      )}

      {/* Ambient blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#DC2626]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-[#000033]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Copy */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              initial={reduced ? {} : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 bg-white border border-[#DC2626]/20 rounded-full px-4 py-2 mb-8 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DC2626] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#DC2626]" />
              </span>
              <span className="text-[#DC2626] text-xs font-bold uppercase tracking-widest">
                24/7 Active — Abuja FCT
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#000033] leading-[1.05] tracking-tight mb-6">
              Abuja&apos;s{" "}
              <span className="gradient-text">Fastest</span>
              <br />Ambulance
              <br /><span className="text-[#DC2626]">Service.</span>
            </h1>

            <p className="text-lg text-[#4B5563] leading-relaxed mb-10 max-w-lg font-light">
              Certified paramedics. GPS-dispatched fleet. Average arrival in{" "}
              <strong className="text-[#000033] font-bold">5–10 minutes</strong>{" "}
              across all 14 zones of the Federal Capital Territory.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={COMPANY.phoneTel}
                className="relative flex items-center justify-center gap-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-200 pulse-ring shadow-lg shadow-red-200 hover:shadow-red-300 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                Call {COMPANY.phone}
              </a>
              <Link
                href="/book"
                className="flex items-center justify-center gap-2 border-2 border-[#000033] text-[#000033] hover:bg-[#000033] hover:text-white px-8 py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:-translate-y-0.5 group"
              >
                Book Ambulance
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
              {badges.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 glass-light rounded-xl px-3 py-2.5 border border-navy-100">
                  <div className="w-7 h-7 rounded-lg bg-[#DC2626]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-[#DC2626]" />
                  </div>
                  <span className="text-[#000033] text-xs font-semibold">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: 3D Visual Card */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ background: "linear-gradient(135deg, #000033 0%, #00004D 50%, #1A1A6E 100%)" }}>
              <div className="absolute inset-0 dot-grid opacity-20" />
              <div className="absolute inset-0 stripe-bg" />
              <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-[#DC2626]/15 blur-2xl" />
              <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-[#1A1A6E]/50 blur-2xl" />

              <div className="relative z-10 p-10 lg:p-12 text-center">
                <div className="relative w-28 h-28 mx-auto mb-8">
                  <div className="absolute inset-0 rounded-full bg-[#DC2626]/20 animate-ping" style={{ animationDuration: "2s" }} />
                  <div className="absolute inset-2 rounded-full bg-[#DC2626]/30" />
                  <div className="relative w-full h-full rounded-full bg-[#DC2626]/20 border-2 border-[#DC2626]/50 flex items-center justify-center">
                    <Phone className="w-12 h-12 text-[#DC2626]" />
                  </div>
                </div>

                <p className="text-white/50 text-xs uppercase tracking-[0.2em] mb-3 font-semibold">Emergency Hotline</p>
                <a href={COMPANY.phoneTel} className="text-white font-extrabold text-3xl sm:text-4xl hover:text-[#DC2626] transition-colors font-mono block mb-2">
                  {COMPANY.phone}
                </a>
                <p className="text-white/30 text-xs font-mono tracking-wide">24 hrs · 365 days · No hold time</p>

                <div className="mt-8 flex items-center justify-center gap-2 bg-white/5 rounded-xl px-5 py-3 border border-white/10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                  </span>
                  <span className="text-green-400 text-xs font-bold tracking-wider">UNITS ACTIVE NOW</span>
                </div>
              </div>
            </div>

            {/* Floating stat chips */}
            <motion.div
              animate={reduced ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass-light rounded-2xl shadow-xl px-6 py-4 border border-white/80"
            >
              <p className="stat-number text-3xl text-[#000033]">2,400+</p>
              <p className="text-xs text-[#6B7280] font-medium mt-0.5">Lives Saved</p>
            </motion.div>

            <motion.div
              animate={reduced ? {} : { y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-6 -right-6 rounded-2xl shadow-xl px-6 py-4 text-white glow-red"
              style={{ background: "linear-gradient(135deg, #DC2626, #B91C1C)" }}
            >
              <p className="stat-number text-3xl">5–10</p>
              <p className="text-xs text-white/80 font-medium mt-0.5">Min Response</p>
            </motion.div>

            <motion.div
              animate={reduced ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 -right-8 -translate-y-1/2 glass-light rounded-2xl shadow-xl px-5 py-3 border border-white/80 hidden lg:block"
            >
              <p className="stat-number text-2xl text-[#000033]">15+</p>
              <p className="text-xs text-[#6B7280] font-medium mt-0.5">Fleet Units</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {!reduced && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[#9CA3AF] text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-0.5 h-8 bg-gradient-to-b from-[#DC2626] to-transparent rounded-full"
          />
        </motion.div>
      )}
    </section>
  );
}
