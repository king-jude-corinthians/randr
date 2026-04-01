import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  credential: string;
  image: string;
}

export function TeamMemberCard({ name, role, bio, credential, image }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-navy-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 bg-bg-tertiary">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-[#000033] text-base">{name}</h3>
        <p className="text-[#DC2626] text-sm font-semibold mb-2">{role}</p>
        <p className="text-[#6B7280] text-sm mb-3">{bio}</p>
        <Badge variant="outline" className="text-xs border-navy-200 text-[#000033]">
          {credential}
        </Badge>
      </div>
    </div>
  );
}
