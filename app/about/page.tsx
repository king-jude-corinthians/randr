import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { EmergencyCTABanner } from "@/components/sections/shared/EmergencyCTABanner";
import { TeamMemberCard } from "@/components/shared/TeamMemberCard";
import { CertificationBadge } from "@/components/shared/CertificationBadge";
import { FadeInView } from "@/components/shared/FadeInView";
import { COMPANY, TEAM, CERTIFICATIONS, MILESTONES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about R&R Ambulance Service — founded in 2014, serving Abuja FCT with certified paramedics and a fleet of 15 units.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About R&R Ambulance"
        subtitle="Saving lives through rapid emergency response since 2014."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Story */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInView direction="left">
              <div className="rounded-2xl bg-[#000033] aspect-[4/3] flex items-center justify-center shadow-xl">
                <div className="text-center px-8">
                  <p className="text-white/40 text-sm uppercase tracking-widest mb-3">Founded</p>
                  <p className="text-white font-mono font-bold text-6xl">{COMPANY.foundedYear}</p>
                  <p className="text-white/60 mt-2">Garki, Abuja FCT</p>
                </div>
              </div>
            </FadeInView>

            <FadeInView direction="right">
              <div>
                <p className="text-[#DC2626] font-semibold text-sm uppercase tracking-wider mb-3">
                  Our Story
                </p>
                <h2 className="text-3xl font-bold text-[#000033] mb-5">
                  Built to Save Lives in Abuja
                </h2>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  R&R Ambulance Service was founded in {COMPANY.foundedYear} in Garki, Abuja, to
                  address a critical gap in pre-hospital emergency care across the Federal Capital
                  Territory. We saw that response times were far too long and that residents lacked
                  access to reliable, professionally staffed emergency medical transport.
                </p>
                <p className="text-[#6B7280] leading-relaxed mb-6">
                  Over the past {new Date().getFullYear() - COMPANY.foundedYear} years, we have
                  grown from a single unit to a fleet of {COMPANY.vehicles} vehicles, serving all
                  major areas of Abuja FCT. We have saved over {COMPANY.livesSaved.toLocaleString()} lives
                  and remain committed to our founding mission: rapid response, reliable care.
                </p>
                <blockquote className="border-l-4 border-[#DC2626] pl-5 italic text-[#1A1A6E]">
                  &ldquo;Every second counts. We make sure they count for you.&rdquo;
                </blockquote>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-bg-secondary py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#000033]">Our Journey</h2>
            </div>
          </FadeInView>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-navy-100 hidden md:block" />
            <div className="space-y-8 md:space-y-0">
              {MILESTONES.map((m, i) => (
                <FadeInView key={m.year} delay={i * 0.1}>
                  <div
                    className={`relative md:flex items-center gap-8 md:mb-10 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                    >
                      <div
                        className={`inline-block bg-white rounded-xl border border-navy-100 shadow-sm px-5 py-4 ${
                          i % 2 === 0 ? "" : ""
                        }`}
                      >
                        <p className="font-mono font-bold text-[#DC2626] text-lg">{m.year}</p>
                        <p className="text-[#000033] font-semibold text-sm mt-0.5">{m.event}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-4 h-4 rounded-full bg-[#DC2626] border-4 border-white shadow-md shrink-0 z-10" />
                    <div className="flex-1" />
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-bg-tertiary py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#000033]">Mission & Vision</h2>
            </div>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <FadeInView direction="left">
              <div className="bg-white rounded-2xl p-7 border border-navy-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#DC2626] flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <h3 className="font-bold text-[#000033] text-lg mb-3">Our Mission</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  To save lives through the fastest possible emergency medical response in the FCT,
                  delivered with compassion and clinical excellence.
                </p>
              </div>
            </FadeInView>
            <FadeInView direction="right">
              <div className="bg-white rounded-2xl p-7 border border-navy-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#000033] flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <h3 className="font-bold text-[#000033] text-lg mb-3">Our Vision</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  To be Abuja&apos;s most trusted and technologically advanced emergency medical
                  service provider.
                </p>
              </div>
            </FadeInView>
          </div>
          <FadeInView>
            <div className="flex flex-wrap justify-center gap-3">
              {["Urgency", "Compassion", "Reliability", "Professionalism"].map((v) => (
                <span
                  key={v}
                  className="bg-white border border-[#DC2626]/30 text-[#DC2626] px-5 py-2 rounded-full text-sm font-semibold"
                >
                  {v}
                </span>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-12">
              <p className="text-[#DC2626] font-semibold text-sm uppercase tracking-wider mb-3">
                The People Behind the Service
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#000033]">Meet Our Team</h2>
            </div>
          </FadeInView>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <FadeInView key={member.name} delay={i * 0.1}>
                <TeamMemberCard {...member} />
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-bg-secondary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#000033] mb-3">
                Certifications & Compliance
              </h2>
              <p className="text-[#6B7280]">
                Fully registered, certified, and compliant with Nigerian and international standards.
              </p>
            </div>
          </FadeInView>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert, i) => (
              <FadeInView key={cert.name} delay={i * 0.08}>
                <CertificationBadge {...cert} />
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <EmergencyCTABanner />
    </>
  );
}
