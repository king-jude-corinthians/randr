import type { Metadata } from "next";
import { Phone, CheckCircle2 } from "lucide-react";
import { BookingForm } from "@/components/sections/book/BookingForm";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book an Ambulance",
  description:
    "Request an ambulance in Abuja FCT. Fill in your details and we'll dispatch within 2 minutes.",
};

export default function BookPage() {
  return (
    <section className="min-h-screen bg-bg-secondary py-12 md:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Top emergency CTA */}
        <div className="text-center mb-8">
          <p className="text-[#6B7280] text-sm mb-2">
            Life-threatening emergency? Don&apos;t fill a form —
          </p>
          <a
            href={COMPANY.phoneTel}
            aria-label="Call R&R Ambulance emergency line"
            className="relative inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 py-3 rounded-xl font-bold text-base transition-colors pulse-ring"
          >
            <Phone className="w-4 h-4" />
            Call Now — {COMPANY.phone}
          </a>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl shadow-lg border border-navy-100 p-6 md:p-10">
          <div className="mb-7">
            <h1 className="text-2xl md:text-3xl font-bold text-[#000033] mb-2">
              Request an Ambulance
            </h1>
            <p className="text-[#6B7280] text-sm">
              Fill in the details below — we&apos;ll be dispatched immediately.
            </p>
            <div className="h-1 w-16 bg-[#DC2626] rounded-full mt-4" />
          </div>

          <BookingForm />
        </div>

        {/* Reassurance */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {[
            "Dispatched within 2 minutes",
            "24/7 availability",
            "Certified paramedics",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-[#6B7280]">
              <CheckCircle2 className="w-4 h-4 text-[#DC2626]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
