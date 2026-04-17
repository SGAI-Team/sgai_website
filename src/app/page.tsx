import { HeroSection } from "@/components/sections/HeroSection";
import { PillarSection } from "@/components/sections/PillarSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PlatformPreviewSection } from "@/components/sections/PlatformPreviewSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { LatamVisionSection } from "@/components/sections/LatamVisionSection";
import { CTABanner } from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PillarSection />
      <HowItWorksSection />
      <PlatformPreviewSection />
      <IndustriesSection />
      <ComparisonSection />
      <TeamSection />
      <LatamVisionSection />
      <CTABanner
        title="¿Listo para gestionar tu abastecimiento de otra manera?"
        subtitle="Conversemos sobre cómo SGAI puede ayudarte. Sin compromiso, sin letra chica."
        buttonText="Agenda una conversación"
        href="/contacto"
      />
    </>
  );
}
