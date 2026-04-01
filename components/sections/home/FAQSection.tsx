"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/constants";
import { FadeInView } from "@/components/shared/FadeInView";

export function FAQSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="text-center mb-12">
            <p className="text-[#DC2626] font-semibold text-sm uppercase tracking-wider mb-3">
              Got Questions?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#000033]">
              Frequently Asked Questions
            </h2>
          </div>
        </FadeInView>

        <FadeInView delay={0.1}>
          <Accordion multiple className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-navy-100 rounded-xl px-6 shadow-sm transition-all"
              >
                <AccordionTrigger className="text-[#000033] font-semibold text-left py-5 hover:no-underline hover:text-[#DC2626]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#6B7280] leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeInView>
      </div>
    </section>
  );
}
