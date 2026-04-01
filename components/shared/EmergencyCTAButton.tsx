import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

interface EmergencyCTAButtonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
}

export function EmergencyCTAButton({
  className = "",
  size = "md",
  label = "Call Now",
}: EmergencyCTAButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  return (
    <a
      href={COMPANY.phoneTel}
      aria-label={`Call R&R Ambulance emergency line: ${COMPANY.phone}`}
      className={`relative inline-flex items-center justify-center rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold transition-colors pulse-ring focus-visible:ring-2 focus-visible:ring-[#DC2626] focus-visible:ring-offset-2 ${sizeClasses[size]} ${className}`}
    >
      <Phone className={size === "lg" ? "w-6 h-6" : "w-5 h-5"} />
      <span>{label}</span>
    </a>
  );
}
