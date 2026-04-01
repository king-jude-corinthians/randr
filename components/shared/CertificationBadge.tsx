import { ShieldCheck, Award, BadgeCheck, Heart, Building2, Stethoscope } from "lucide-react";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck, Award, BadgeCheck, Heart, Building2, Stethoscope,
};

interface CertificationBadgeProps {
  name: string;
  body: string;
  year: string;
  icon: string;
}

export function CertificationBadge({ name, body, year, icon }: CertificationBadgeProps) {
  const Icon = ICONS[icon] ?? ShieldCheck;

  return (
    <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-navy-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-11 h-11 rounded-xl bg-emergency-light flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-[#DC2626]" />
      </div>
      <div>
        <p className="font-bold text-[#000033] text-sm">{name}</p>
        <p className="text-[#6B7280] text-xs mt-0.5">{body}</p>
        <p className="text-[#DC2626] text-xs font-semibold mt-1">Since {year}</p>
      </div>
    </div>
  );
}
