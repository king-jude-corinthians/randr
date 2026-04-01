import type { Metadata } from "next";
import { Phone, MapPin, Mail, Clock, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { FadeInView } from "@/components/shared/FadeInView";
import { COMPANY } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact R&R Ambulance Service Abuja. Emergency line available 24/7. General inquiries 8am–8pm Mon–Sat.",
};

export default function ContactPage() {
  const waUrl = getWhatsAppUrl("Hello, I need assistance from R&R Ambulance Service.");

  return (
    <>
      {/* Emergency strip */}
      <section className="bg-[#DC2626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white/80 text-sm uppercase tracking-widest mb-1">Emergency? Call Immediately</p>
            <a
              href={COMPANY.phoneTel}
              aria-label="Call R&R Ambulance emergency line"
              className="font-mono font-bold text-white text-3xl sm:text-4xl hover:text-red-100 transition-colors block pulse-ring relative"
            >
              {COMPANY.phone}
            </a>
          </div>
          <div className="flex gap-3">
            <a
              href={COMPANY.phoneTel}
              className="flex items-center gap-2 bg-white text-[#DC2626] hover:bg-red-50 px-5 py-3 rounded-xl font-bold transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebe5d] px-5 py-3 rounded-xl font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[#DC2626] font-semibold text-sm uppercase tracking-wider mb-2">
              Get In Touch
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#000033]">Contact Us</h1>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <FadeInView direction="left" className="lg:col-span-3">
              <div className="bg-bg-secondary rounded-2xl p-6 md:p-8 border border-navy-100">
                <h2 className="font-bold text-[#000033] text-lg mb-6">Send a Message</h2>
                <ContactForm />
              </div>
            </FadeInView>

            {/* Info */}
            <FadeInView direction="right" className="lg:col-span-2">
              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    label: "Headquarters",
                    value: COMPANY.address,
                  },
                  {
                    icon: Phone,
                    label: "Emergency Line",
                    value: COMPANY.phone,
                    href: COMPANY.phoneTel,
                  },
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    value: "Chat with us",
                    href: waUrl,
                    external: true,
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: COMPANY.email,
                    href: `mailto:${COMPANY.email}`,
                  },
                  {
                    icon: Clock,
                    label: "Hours",
                    value: "Emergency: 24/7\nGeneral Inquiries: 8am–8pm Mon–Sat",
                  },
                ].map(({ icon: Icon, label, value, href, external }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 p-4 bg-bg-secondary rounded-xl border border-navy-100"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emergency-light flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#DC2626]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                          className="text-[#000033] font-semibold text-sm hover:text-[#DC2626] transition-colors font-mono"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-[#000033] text-sm whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-bg-secondary py-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="rounded-2xl overflow-hidden border border-navy-100 shadow-sm" style={{ height: 400 }}>
              <iframe
                src={`https://maps.google.com/maps?q=${COMPANY.addressMapQuery}&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="R&R Ambulance Service headquarters location"
              />
            </div>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
