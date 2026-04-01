"use client";

import { MapPin, Phone } from "lucide-react";
import { COMPANY, COVERAGE_ZONES } from "@/lib/constants";
import { FadeInView } from "@/components/shared/FadeInView";

export function CoverageMap() {
  const mapSrc = `https://maps.google.com/maps?q=${COMPANY.addressMapQuery}&z=12&output=embed`;

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="text-center mb-12">
            <p className="text-[#DC2626] font-semibold text-sm uppercase tracking-wider mb-3">
              Service Area
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#000033] mb-4">
              We Cover All of Abuja FCT
            </h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">
              Our GPS-tracked fleet is pre-positioned across the FCT to ensure the fastest possible response.
            </p>
          </div>
        </FadeInView>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Map */}
          <FadeInView direction="left" className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden border border-navy-100 shadow-sm aspect-video">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="R&R Ambulance Service coverage area — Abuja FCT"
              />
            </div>
          </FadeInView>

          {/* Coverage zones */}
          <FadeInView direction="right">
            <div className="bg-bg-secondary rounded-2xl p-6 border border-navy-100">
              <h3 className="font-bold text-[#000033] mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#DC2626]" />
                Coverage Zones
              </h3>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {COVERAGE_ZONES.map((zone) => (
                  <div key={zone} className="flex items-center gap-2 text-sm text-[#1A1A6E]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />
                    {zone}
                  </div>
                ))}
              </div>
              <div className="border-t border-navy-100 pt-4">
                <p className="text-xs text-[#6B7280] mb-3">
                  Not sure if we cover your area?
                </p>
                <a
                  href={COMPANY.phoneTel}
                  className="flex items-center gap-2 text-[#DC2626] font-semibold text-sm hover:text-[#B91C1C] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Us — {COMPANY.phone}
                </a>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
