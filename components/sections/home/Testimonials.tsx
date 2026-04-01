"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { FadeInView } from "@/components/shared/FadeInView";

function TestimonialCard3D({ t, index }: { t: typeof TESTIMONIALS[0]; index: number }) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={reduced ? {} : { opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      whileHover={reduced ? {} : { y: -6 }}
      className="group relative bg-white rounded-3xl border border-navy-100 shadow-sm hover:shadow-2xl transition-all duration-300 p-8 flex flex-col min-w-[320px] sm:min-w-[380px]"
    >
      {/* Quote icon */}
      <div className="absolute top-6 right-6 w-10 h-10 rounded-2xl bg-[#DC2626]/8 flex items-center justify-center">
        <Quote className="w-5 h-5 text-[#DC2626]/40" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: t.rating ?? 5 }).map((_, i: number) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      <p className="text-[#374151] leading-relaxed text-sm flex-1 mb-6 italic">&ldquo;{t.quote}&rdquo;</p>

      <div className="flex items-center gap-3 pt-5 border-t border-navy-100">
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#000033] to-[#1A1A6E] flex items-center justify-center text-white font-bold text-base shadow-md">
          {t.name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-[#000033] text-sm">{t.name}</p>
          <p className="text-[#6B7280] text-xs">{t.area}</p>
        </div>
        <div className="ml-auto">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] bg-[#DC2626]/8 rounded-full px-2.5 py-1">
            Verified
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const reduced = useReducedMotion();

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />

      {/* Ambient blur */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#DC2626]/5 blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-64 h-64 rounded-full bg-[#000033]/4 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-widest rounded-full px-4 py-2 mb-5">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
              Real Stories. Real Lives.
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#000033] tracking-tight mb-4">
              Families Trust{" "}
              <span className="gradient-text">R&R</span>
            </h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">
              Every review represents a life touched. Here&apos;s what families across Abuja say about us.
            </p>
          </div>
        </FadeInView>

        {/* Scrollable row */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="snap-start shrink-0">
              <TestimonialCard3D t={t} index={i} />
            </div>
          ))}
        </div>

        {/* Rating summary */}
        <FadeInView delay={0.3}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-[#000033] text-2xl">4.9</span>
            </div>
            <span className="text-[#6B7280] text-sm">Based on 200+ verified reviews across Abuja FCT</span>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
