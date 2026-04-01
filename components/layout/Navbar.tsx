"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Phone, Menu } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md border-b border-navy-100" : "border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/logo.png"
                alt="R and R Ambulance Service"
                width={200}
                height={66}
                className="h-12 md:h-16 w-auto object-contain transition-all duration-300 hover:scale-105 hover:drop-shadow-md"
                style={{ mixBlendMode: "multiply" }}
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#000033] font-medium text-sm hover:text-[#DC2626] transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#DC2626] transition-all group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="flex items-center gap-3">
              <a
                href={COMPANY.phoneTel}
                className="relative hidden sm:flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-4 py-2 rounded-xl font-semibold text-sm transition-colors pulse-ring"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <Link
                href="/book"
                className="hidden md:flex items-center gap-1 border-2 border-[#000033] text-[#000033] hover:bg-[#000033] hover:text-white px-4 py-2 rounded-xl font-semibold text-sm transition-colors"
              >
                Book Ambulance
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden p-2 rounded-lg text-[#000033] hover:bg-navy-100"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
