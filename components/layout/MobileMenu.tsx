"use client";

import Link from "next/link";
import Image from "next/image";
import { X, Phone, MessageCircle } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const waUrl = getWhatsAppUrl("Hello, I need emergency assistance from R&R Ambulance.");

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent side="right" showCloseButton={false} className="w-80 bg-white p-0 border-l border-navy-100">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-navy-100">
            <Image
              src="/images/logo.png"
              alt="R and R Ambulance Service"
              width={160}
              height={54}
              className="h-10 w-auto object-contain"
              style={{ mixBlendMode: "multiply" }}
            />
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#000033] hover:bg-navy-100"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center px-4 py-3 rounded-xl text-[#000033] font-medium hover:bg-bg-secondary hover:text-[#DC2626] transition-colors text-base"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={onClose}
              className="flex items-center px-4 py-3 rounded-xl text-[#DC2626] font-semibold hover:bg-emergency-light transition-colors text-base mt-2"
            >
              Book Ambulance
            </Link>
          </nav>

          {/* Emergency CTAs */}
          <div className="px-4 pb-8 flex flex-col gap-3 border-t border-navy-100 pt-4">
            <a
              href={COMPANY.phoneTel}
              className="flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-4 py-4 rounded-xl font-bold text-base transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Emergency Now
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-4 py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
            <p className="text-center text-xs text-[#6B7280] font-mono">{COMPANY.phone}</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
