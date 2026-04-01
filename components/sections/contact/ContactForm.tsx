"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Send } from "lucide-react";
import { buildContactMessage, getWhatsAppUrl } from "@/lib/whatsapp";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.subject) e.subject = "Please select a subject";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    const msg = buildContactMessage(form);
    const url = getWhatsAppUrl(msg);
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-bold text-[#000033] text-xl">Message Sent!</h3>
        <p className="text-[#6B7280]">We&apos;ll respond within 2 hours during office hours.</p>
        <button
          onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
          className="text-[#DC2626] text-sm font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-[#000033] mb-1 block" htmlFor="cf-name">
            Full Name <span className="text-[#DC2626]">*</span>
          </label>
          <Input
            id="cf-name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            aria-invalid={!!errors.name}
            className={errors.name ? "border-[#DC2626]" : ""}
            placeholder="Your full name"
          />
          {errors.name && <p className="text-[#DC2626] text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="text-sm font-medium text-[#000033] mb-1 block" htmlFor="cf-phone">
            Phone <span className="text-[#DC2626]">*</span>
          </label>
          <Input
            id="cf-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            aria-invalid={!!errors.phone}
            className={errors.phone ? "border-[#DC2626]" : ""}
            placeholder="+234 XXX XXX XXXX"
          />
          {errors.phone && <p className="text-[#DC2626] text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-[#000033] mb-1 block" htmlFor="cf-email">
          Email <span className="text-[#DC2626]">*</span>
        </label>
        <Input
          id="cf-email"
          type="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          aria-invalid={!!errors.email}
          className={errors.email ? "border-[#DC2626]" : ""}
          placeholder="you@example.com"
        />
        {errors.email && <p className="text-[#DC2626] text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="text-sm font-medium text-[#000033] mb-1 block">
          Subject <span className="text-[#DC2626]">*</span>
        </label>
        <Select onValueChange={(v) => { const subject: string = typeof v === "string" ? v : ""; setForm((f) => ({ ...f, subject })); }}>
          <SelectTrigger className={errors.subject ? "border-[#DC2626]" : ""} aria-label="Select subject">
            <SelectValue placeholder="Select a subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="General Inquiry">General Inquiry</SelectItem>
            <SelectItem value="Partnership">Partnership</SelectItem>
            <SelectItem value="Press / Media">Press / Media</SelectItem>
            <SelectItem value="Complaint">Complaint</SelectItem>
            <SelectItem value="Feedback">Feedback</SelectItem>
          </SelectContent>
        </Select>
        {errors.subject && <p className="text-[#DC2626] text-xs mt-1">{errors.subject}</p>}
      </div>

      <div>
        <label className="text-sm font-medium text-[#000033] mb-1 block" htmlFor="cf-message">
          Message <span className="text-[#DC2626]">*</span>
        </label>
        <Textarea
          id="cf-message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          aria-invalid={!!errors.message}
          className={errors.message ? "border-[#DC2626]" : ""}
          placeholder="How can we help you?"
        />
        {errors.message && <p className="text-[#DC2626] text-xs mt-1">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-xl py-3 font-semibold flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        Send via WhatsApp
      </Button>
    </form>
  );
}
