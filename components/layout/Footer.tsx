import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const waUrl = getWhatsAppUrl("Hello, I need emergency assistance from R&R Ambulance.");

  return (
    <footer className="bg-[#000033] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="R and R Ambulance Service"
                className="h-12 w-auto object-contain transition-all duration-300 hover:scale-105"
                style={{ filter: "brightness(0) invert(1) drop-shadow(0 0 12px rgba(255,255,255,0.5))" }}
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {COMPANY.tagline}
            </p>
            <p className="text-white/50 text-xs">
              Serving Abuja FCT since {COMPANY.foundedYear}.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href={COMPANY.phoneTel}
                className="flex items-center gap-1.5 text-[#DC2626] hover:text-red-400 text-sm font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                Emergency
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#25D366] hover:text-green-400 text-sm font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#DC2626] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/book"
                  className="text-white/70 hover:text-[#DC2626] text-sm transition-colors"
                >
                  Book Ambulance
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-[#DC2626] text-sm transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">{COMPANY.address}</span>
              </li>
              <li>
                <a
                  href={COMPANY.phoneTel}
                  className="flex items-center gap-2.5 group"
                >
                  <Phone className="w-4 h-4 text-[#DC2626] shrink-0" />
                  <span className="text-white/70 group-hover:text-[#DC2626] text-sm font-mono transition-colors">
                    {COMPANY.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2.5 group"
                >
                  <Mail className="w-4 h-4 text-[#DC2626] shrink-0" />
                  <span className="text-white/70 group-hover:text-[#DC2626] text-sm transition-colors">
                    {COMPANY.email}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <div className="text-white/70 text-sm">
                  <p>Emergency: 24/7</p>
                  <p>General: 8am–8pm Mon–Sat</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © 2026 R&R Ambulance Service. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/30 text-xs">NEMA Registered</span>
            <span className="text-white/20">·</span>
            <span className="text-white/30 text-xs">FRSC Certified</span>
            <span className="text-white/20">·</span>
            <span className="text-white/30 text-xs">ISO 9001:2015</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
