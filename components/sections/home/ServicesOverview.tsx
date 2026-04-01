"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ChevronRight, Siren, ArrowRightLeft, Users, Plane, Home, Baby } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { FadeInView } from "@/components/shared/FadeInView";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Siren, ArrowRightLeft, Users, Plane, Home, Baby,
};

const colors = [
  { bg: "from-red-50 to-red-100", border: "border-red-200", icon: "bg-[#DC2626]", glow: "rgba(220,38,38,0.15)" },
  { bg: "from-blue-50 to-blue-100", border: "border-blue-200", icon: "bg-[#1A1A6E]", glow: "rgba(26,26,110,0.12)" },
  { bg: "from-indigo-50 to-indigo-100", border: "border-indigo-200", icon: "bg-[#000033]", glow: "rgba(0,0,51,0.12)" },
  { bg: "from-red-50 to-rose-100", border: "border-rose-200", icon: "bg-[#DC2626]", glow: "rgba(220,38,38,0.15)" },
  { bg: "from-slate-50 to-slate-100", border: "border-slate-200", icon: "bg-[#374151]", glow: "rgba(55,65,81,0.12)" },
  { bg: "from-navy-100 to-navy-200", border: "border-navy-200", icon: "bg-[#1A1A6E]", glow: "rgba(26,26,110,0.12)" },
];

function ServiceCard3D({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const reduced = useReducedMotion();
  const Icon = ICONS[service.icon] ?? Siren;
  const c = colors[index % colors.length];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={reduced ? {} : { opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={reduced ? {} : { y: -8, scale: 1.02 }}
      className="group relative bg-white rounded-3xl border border-navy-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden p-7 flex flex-col"
      style={{ boxShadow: `0 4px 24px ${c.glow}` }}
    >
      {/* Gradient top bar */}
      <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${c.bg.replace("from-", "from-").replace("to-", "via-").replace("-50", "-400").replace("-100", "-600")} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      {/* Icon */}
      <div className={`w-14 h-14 rounded-2xl ${c.icon} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-7 h-7 text-white" />
      </div>

      <h3 className="font-bold text-[#000033] text-lg mb-2 group-hover:text-[#DC2626] transition-colors duration-200">
        {service.title}
      </h3>
      <p className="text-[#6B7280] text-sm leading-relaxed flex-1 mb-5">{service.shortDesc}</p>

      {/* Inclusions preview */}
      <ul className="space-y-1.5 mb-6">
        {service.inclusions.slice(0, 2).map((item) => (
          <li key={item} className="flex items-center gap-2 text-xs text-[#6B7280]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <Link
        href="/services"
        className="inline-flex items-center gap-1.5 text-[#DC2626] text-sm font-bold hover:gap-3 transition-all duration-200 mt-auto"
      >
        Learn More <ChevronRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}

export function ServicesOverview() {
  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      {/* Subtle bg pattern */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-[#DC2626]/8 border border-[#DC2626]/15 text-[#DC2626] text-xs font-bold uppercase tracking-widest rounded-full px-4 py-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#000033] tracking-tight mb-5">
              Comprehensive Medical
              <br />
              <span className="gradient-text">Transport Services</span>
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto text-lg leading-relaxed">
              From life-threatening emergencies to scheduled patient transfers — we provide
              world-class pre-hospital and transport care, 24 hours a day.
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard3D key={service.id} service={service} index={i} />
          ))}
        </div>

        <FadeInView delay={0.3}>
          <div className="mt-14 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#000033] hover:bg-[#1A1A6E] text-white px-8 py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-navy-200 group"
            >
              View All Services
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
