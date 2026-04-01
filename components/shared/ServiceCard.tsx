import Link from "next/link";
import { Siren, ArrowRightLeft, Users, Plane, Home, Baby, ArrowRight } from "lucide-react";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Siren, ArrowRightLeft, Users, Plane, Home, Baby,
};

interface ServiceCardProps {
  title: string;
  shortDesc: string;
  icon: string;
  href?: string;
}

export function ServiceCard({ title, shortDesc, icon, href = "/services" }: ServiceCardProps) {
  const Icon = ICONS[icon] ?? Siren;

  return (
    <Link
      href={href}
      className="group flex flex-col p-6 bg-white rounded-2xl border border-navy-200 shadow-sm hover:shadow-lg hover:border-l-4 hover:border-l-[#DC2626] transition-all duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#DC2626]"
    >
      <div className="w-12 h-12 rounded-xl bg-navy-100 flex items-center justify-center mb-4 group-hover:bg-emergency-light transition-colors">
        <Icon className="w-6 h-6 text-[#000033] group-hover:text-[#DC2626] transition-colors" />
      </div>
      <h3 className="font-bold text-[#000033] text-base mb-2">{title}</h3>
      <p className="text-[#6B7280] text-sm leading-relaxed flex-1">{shortDesc}</p>
      <span className="mt-4 flex items-center gap-1 text-[#DC2626] text-sm font-semibold group-hover:gap-2 transition-all">
        Learn More <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </Link>
  );
}
