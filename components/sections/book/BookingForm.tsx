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
import { CheckCircle2, RotateCcw, Phone } from "lucide-react";
import { buildBookingMessage, getWhatsAppUrl } from "@/lib/whatsapp";
import { COMPANY } from "@/lib/constants";

const EMERGENCY_LEVELS = [
  { value: "🔴 Critical — Life Threatening", label: "🔴 Critical — Life Threatening" },
  { value: "🟠 Urgent — Needs Immediate Attention", label: "🟠 Urgent — Needs Immediate Attention" },
  { value: "🟡 Moderate — Stable but Needs Transport", label: "🟡 Moderate — Stable but Needs Transport" },
  { value: "🟢 Non-Emergency — Scheduled Transfer", label: "🟢 Non-Emergency — Scheduled Transfer" },
];

const EMPTY = { name: "", phone: "", pickup: "", destination: "", emergencyLevel: "", notes: "" };

export function BookingForm() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.pickup.trim()) e.pickup = "Pickup address is required";
    if (!form.destination.trim()) e.destination = "Destination is required";
    if (!form.emergencyLevel) e.emergencyLevel = "Please select an emergency level";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      const msg = buildBookingMessage(form);
      const url = getWhatsAppUrl(msg);
      window.open(url, "_blank", "noopener,noreferrer");
      setLoading(false);
      setSent(true);
    }, 800);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-5">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <div>
          <h3 className="font-bold text-[#000033] text-2xl mb-2">Request Sent!</h3>
          <p className="text-[#6B7280] max-w-sm">
            Our dispatcher will call you within <strong>60 seconds</strong>. Keep your phone
            available.
          </p>
        </div>
        <p className="text-sm text-[#6B7280]">
          If you don&apos;t hear from us in 2 minutes, call directly:
        </p>
        <a
          href={COMPANY.phoneTel}
          className="flex items-center gap-2 bg-[#DC2626] text-white px-6 py-3 rounded-xl font-bold text-lg"
        >
          <Phone className="w-5 h-5" />
          {COMPANY.phone}
        </a>
        <button
          onClick={() => { setSent(false); setForm(EMPTY); }}
          className="flex items-center gap-2 text-[#6B7280] text-sm hover:text-[#000033] transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-sm font-semibold text-[#000033] mb-1.5 block" htmlFor="b-name">
            Full Name <span className="text-[#DC2626]">*</span>
          </label>
          <Input
            id="b-name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            aria-required
            aria-invalid={!!errors.name}
            placeholder="Patient or caller name"
            className={errors.name ? "border-[#DC2626]" : ""}
          />
          {errors.name && <p className="text-[#DC2626] text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="text-sm font-semibold text-[#000033] mb-1.5 block" htmlFor="b-phone">
            Phone Number <span className="text-[#DC2626]">*</span>
          </label>
          <Input
            id="b-phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            aria-required
            aria-invalid={!!errors.phone}
            placeholder="+234 XXX XXX XXXX"
            className={errors.phone ? "border-[#DC2626]" : ""}
          />
          {errors.phone && <p className="text-[#DC2626] text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-[#000033] mb-1.5 block" htmlFor="b-pickup">
          Pickup Address <span className="text-[#DC2626]">*</span>
        </label>
        <Textarea
          id="b-pickup"
          rows={2}
          value={form.pickup}
          onChange={(e) => setForm((f) => ({ ...f, pickup: e.target.value }))}
          aria-required
          aria-invalid={!!errors.pickup}
          placeholder="Street address, area, nearest landmark"
          className={errors.pickup ? "border-[#DC2626]" : ""}
        />
        {errors.pickup && <p className="text-[#DC2626] text-xs mt-1">{errors.pickup}</p>}
      </div>

      <div>
        <label className="text-sm font-semibold text-[#000033] mb-1.5 block" htmlFor="b-destination">
          Destination <span className="text-[#DC2626]">*</span>
        </label>
        <Input
          id="b-destination"
          value={form.destination}
          onChange={(e) => setForm((f) => ({ ...f, destination: e.target.value }))}
          aria-required
          aria-invalid={!!errors.destination}
          placeholder="Hospital name or address"
          className={errors.destination ? "border-[#DC2626]" : ""}
        />
        {errors.destination && <p className="text-[#DC2626] text-xs mt-1">{errors.destination}</p>}
      </div>

      <div>
        <label className="text-sm font-semibold text-[#000033] mb-1.5 block">
          Emergency Level <span className="text-[#DC2626]">*</span>
        </label>
        <Select onValueChange={(v) => { const level: string = typeof v === "string" ? v : ""; setForm((f) => ({ ...f, emergencyLevel: level })); }}>
          <SelectTrigger
            aria-label="Select emergency level"
            aria-invalid={!!errors.emergencyLevel}
            className={errors.emergencyLevel ? "border-[#DC2626]" : ""}
          >
            <SelectValue placeholder="Select emergency level" />
          </SelectTrigger>
          <SelectContent>
            {EMERGENCY_LEVELS.map((l) => (
              <SelectItem key={l.value} value={l.value}>
                {l.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.emergencyLevel && <p className="text-[#DC2626] text-xs mt-1">{errors.emergencyLevel}</p>}
      </div>

      <div>
        <label className="text-sm font-semibold text-[#000033] mb-1.5 block" htmlFor="b-notes">
          Additional Notes <span className="text-[#9CA3AF] font-normal">(optional)</span>
        </label>
        <Textarea
          id="b-notes"
          rows={3}
          value={form.notes}
          onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
          placeholder="Patient age, medical condition, special requirements"
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full relative bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-xl py-5 font-bold text-lg transition-colors pulse-ring focus-visible:ring-2 focus-visible:ring-[#DC2626] focus-visible:ring-offset-2 disabled:opacity-70"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Connecting…
          </span>
        ) : (
          "Request Ambulance Now"
        )}
      </Button>
    </form>
  );
}
