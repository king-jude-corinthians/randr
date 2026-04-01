import { HeroSection } from "@/components/sections/home/HeroSection";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { StatsSection } from "@/components/sections/home/StatsSection";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { CoverageMap } from "@/components/sections/home/CoverageMap";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { FAQSection } from "@/components/sections/home/FAQSection";
import { EmergencyCTABanner } from "@/components/sections/shared/EmergencyCTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <StatsSection />
      <ServicesOverview />
      <HowItWorks />
      <CoverageMap />
      <Testimonials />
      <FAQSection />
      <EmergencyCTABanner />
    </>
  );
}
