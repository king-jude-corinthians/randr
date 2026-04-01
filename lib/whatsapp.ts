import { COMPANY } from "./constants";

export interface BookingFormData {
  name: string;
  phone: string;
  pickup: string;
  destination: string;
  emergencyLevel: string;
  notes?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function buildBookingMessage(data: BookingFormData): string {
  return [
    "🚑 *AMBULANCE REQUEST — R&R Emergency*",
    "━━━━━━━━━━━━━━━━━━━",
    `👤 Name: ${data.name}`,
    `📱 Phone: ${data.phone}`,
    `📍 Pickup: ${data.pickup}`,
    `🏥 Destination: ${data.destination}`,
    `⚠️ Emergency Level: ${data.emergencyLevel}`,
    `📝 Notes: ${data.notes?.trim() || "None"}`,
    "━━━━━━━━━━━━━━━━━━━",
    "Sent via rnrambulance.ng",
  ]
    .join("\n");
}

export function buildContactMessage(data: ContactFormData): string {
  return [
    "💬 *CONTACT FORM — R&R Ambulance*",
    `👤 Name: ${data.name}`,
    `📧 Email: ${data.email}`,
    `📱 Phone: ${data.phone}`,
    `📋 Subject: ${data.subject}`,
    `💬 Message: ${data.message}`,
  ].join("\n");
}

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;
}
