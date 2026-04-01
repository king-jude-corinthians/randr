import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  area: string;
  rating: number;
}

export function TestimonialCard({ quote, name, area, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-navy-100 flex flex-col gap-4 min-w-[300px] max-w-sm shrink-0">
      <div className="flex gap-0.5">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#DC2626] text-[#DC2626]" />
        ))}
      </div>
      <p className="text-[#1A1A6E] text-sm leading-relaxed italic flex-1">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-semibold text-[#000033] text-sm">{name}</p>
        <p className="text-[#6B7280] text-xs">{area}, Abuja</p>
      </div>
    </div>
  );
}
