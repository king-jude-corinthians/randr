import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="bg-bg-secondary border-b border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-4">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-[#9CA3AF]" />}
                {crumb.href ? (
                  <Link href={crumb.href} className="text-[#6B7280] hover:text-[#DC2626] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#000033] font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-[#000033] mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg text-[#6B7280] max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
