"use client";

import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFAB() {
  const url = getWhatsAppUrl("Hello, I need emergency assistance from R&R Ambulance.");

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with R&R Ambulance on WhatsApp"
      className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] flex items-center justify-center shadow-lg shadow-green-500/30 transition-transform hover:scale-110 active:scale-95"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="sr-only">WhatsApp R&R Ambulance — {COMPANY.phone}</span>
    </a>
  );
}
