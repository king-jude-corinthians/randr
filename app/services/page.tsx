import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { EmergencyCTABanner } from "@/components/sections/shared/EmergencyCTABanner";
import { FadeInView } from "@/components/shared/FadeInView";
import { Badge } from "@/components/ui/badge";
import { SERVICES, EQUIPMENT } from "@/lib/constants";
import {
  Siren, ArrowRightLeft, Users, Plane, Home, Baby,
  Zap, Wind, AlignCenter, Droplets, Activity, HeartPulse, BedDouble,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Emergency ambulance response, hospital transfers, event medical standby, air ambulance coordination and more — all across Abuja FCT.",
};

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Siren, ArrowRightLeft, Users, Plane, Home, Baby,
};

const EQUIP_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, Wind, AlignCenter, Droplets, Pipette: Activity, Activity, HeartPulse, BedDouble,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive emergency and non-emergency medical transport across Abuja FCT."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      {/* Service detail blocks */}
      <div className="bg-white">
        {SERVICES.map((service, i) => {
          const Icon = SERVICE_ICONS[service.icon] ?? Siren;
          const isEven = i % 2 === 0;

          return (
            <section
              key={service.id}
              className={`py-16 md:py-24 ${isEven ? "bg-white" : "bg-bg-secondary"}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Visual */}
                  <FadeInView direction={isEven ? "left" : "right"}>
                    <div className="rounded-2xl bg-[#000033] aspect-video flex items-center justify-center shadow-xl">
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-2xl bg-[#DC2626]/20 border-2 border-[#DC2626]/40 flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-10 h-10 text-[#DC2626]" />
                        </div>
                        <p className="text-white/50 text-sm">{service.title}</p>
                      </div>
                    </div>
                  </FadeInView>

                  {/* Content */}
                  <FadeInView direction={isEven ? "right" : "left"}>
                    <div>
                      <div className="inline-flex items-center gap-2 bg-emergency-light rounded-full px-3 py-1 mb-4">
                        <Icon className="w-3.5 h-3.5 text-[#DC2626]" />
                        <span className="text-[#DC2626] text-xs font-semibold uppercase tracking-wider">
                          {service.title}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-[#000033] mb-4">
                        {service.title}
                      </h2>
                      <p className="text-[#6B7280] leading-relaxed mb-6">{service.description}</p>

                      <ul className="space-y-2.5 mb-6">
                        {service.inclusions.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                            <span className="text-[#1A1A6E] text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.equipment.map((eq) => (
                          <Badge
                            key={eq}
                            variant="outline"
                            className="border-navy-200 text-[#000033] text-xs"
                          >
                            {eq}
                          </Badge>
                        ))}
                      </div>

                      <Link
                        href="/book"
                        className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
                      >
                        Book This Service
                      </Link>
                    </div>
                  </FadeInView>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Equipment grid */}
      <section className="bg-bg-tertiary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#000033] mb-3">
                On-Board Equipment
              </h2>
              <p className="text-[#6B7280]">All units are fully stocked and inspection-ready 24/7.</p>
            </div>
          </FadeInView>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {EQUIPMENT.map((eq, i) => {
              const Icon = EQUIP_ICONS[eq.icon] ?? Activity;
              return (
                <FadeInView key={eq.name} delay={i * 0.07}>
                  <div className="bg-white rounded-2xl p-5 flex flex-col items-center gap-3 border border-navy-100 shadow-sm text-center hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-emergency-light flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#DC2626]" />
                    </div>
                    <p className="text-[#000033] font-semibold text-sm">{eq.name}</p>
                  </div>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </section>

      {/* Response guarantee */}
      <section className="bg-white py-16 md:py-20 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <FadeInView>
            <p className="text-[#6B7280] text-sm uppercase tracking-widest mb-2">Our Promise</p>
            <div className="font-mono text-[#DC2626] text-7xl md:text-9xl font-bold leading-none mb-3">
              5–10
            </div>
            <p className="text-[#000033] font-bold text-2xl mb-4">minutes average arrival</p>
            <p className="text-[#6B7280] max-w-md mx-auto">
              GPS fleet tracking, real-time traffic routing, and pre-positioned units across
              the FCT ensure we get to you as fast as possible.
            </p>
          </FadeInView>
        </div>
      </section>

      <EmergencyCTABanner />
    </>
  );
}
