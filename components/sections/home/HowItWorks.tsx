"use client";

import { Phone, Truck, Heart, CheckCircle } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { FadeInView } from "@/components/shared/FadeInView";

const STEPS = [
  {
    number: "01",
    icon: Phone,
    title: "Call or Book Online",
    desc: "Call our emergency line or fill the booking form. Our dispatcher answers within seconds — no hold music, no automated queues.",
    details: ["Phone or WhatsApp booking", "Dispatcher confirms ETA", "Available 24/7/365"],
  },
  {
    number: "02",
    icon: Truck,
    title: "Dispatched in Under 2 Min",
    desc: "The nearest GPS-tracked unit rolls immediately. You receive a live ETA confirmation call and can track the vehicle in real time.",
    details: ["GPS fleet tracking", "Nearest unit dispatched", "ETA call to caller"],
  },
  {
    number: "03",
    icon: Heart,
    title: "Expert Care En Route",
    desc: "Certified paramedics begin clinical assessment and advanced life support from the moment they arrive at your location.",
    details: ["ALS & BLS certified crew", "Full equipment on board", "Hospital pre-notification"],
  },
];

function StepCard({ step, index, inView }: { step: typeof STEPS[0]; index: number; inView: boolean }) {
  const reduced = useReducedMotion();
  const Icon = step.icon;

  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.18, ease: "easeOut" }}
      className="relative flex-1"
    >
      {/* Connector line (between steps) */}
      {index < STEPS.length - 1 && (
        <div className="hidden lg:block absolute top-10 left-[calc(50%+3.5rem)] right-0 h-0.5 bg-navy-100 overflow-hidden z-0">
          <motion.div
            className="h-full bg-gradient-to-r from-[#DC2626] to-[#DC2626]/30"
            initial={{ scaleX: 0, originX: "left" }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.18 + 0.4, ease: "easeOut" }}
          />
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Step number badge */}
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-xl relative"
            style={{ background: "linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)" }}>
            <div className="absolute inset-0 rounded-3xl glow-red opacity-50" />
            <Icon className="w-9 h-9 text-white relative z-10" />
          </div>
          <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#000033] flex items-center justify-center shadow-lg">
            <span className="text-white text-[10px] font-bold font-mono">{step.number}</span>
          </div>
        </div>

        <h3 className="font-bold text-[#000033] text-xl mb-3">{step.title}</h3>
        <p className="text-[#6B7280] text-sm leading-relaxed mb-5 max-w-xs">{step.desc}</p>

        {/* Detail bullets */}
        <ul className="space-y-2">
          {step.details.map((d) => (
            <li key={d} className="flex items-center gap-2 text-xs text-[#6B7280] justify-center">
              <CheckCircle className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden py-24 md:py-32" style={{ background: "linear-gradient(180deg, #F8F9FC 0%, #EFF1F8 100%)" }}>
      {/* Bg decoration */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 bg-white border border-navy-100 text-[#DC2626] text-xs font-bold uppercase tracking-widest rounded-full px-4 py-2 mb-5 shadow-sm">
              Simple · Fast · Reliable
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#000033] tracking-tight mb-4">
              From Call to Care in
              <br />
              <span className="gradient-text">Under 10 Minutes</span>
            </h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">
              Our streamlined dispatch process ensures you get help as fast as humanly possible.
            </p>
          </div>
        </FadeInView>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-start">
          {STEPS.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <FadeInView delay={0.5}>
          <div className="mt-20 rounded-3xl overflow-hidden p-8 md:p-10 text-center relative"
            style={{ background: "linear-gradient(135deg, #000033 0%, #1A1A6E 100%)" }}>
            <div className="absolute inset-0 stripe-bg" />
            <div className="relative z-10">
              <p className="text-white/60 text-sm uppercase tracking-widest mb-2 font-mono">Average response time</p>
              <p className="stat-number text-6xl md:text-8xl text-white mb-2">5–10</p>
              <p className="text-[#DC2626] font-bold text-xl mb-6">minutes across Abuja FCT</p>
              <a
                href="tel:+2349053199812"
                className="relative inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-200 pulse-ring shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now — It&apos;s Free
              </a>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
