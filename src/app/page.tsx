
import HeroSection from '@/components/sections/HeroSection';
import PlugAndPlayBanner from '@/components/sections/PlugAndPlayBanner';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CompleteSolutionSection from '@/components/sections/CompleteSolutionSection';
import OurUnderwritingBotSection from '@/components/sections/OurUnderwritingBotSection';
import ValueForCarriersSection from '@/components/sections/ValueForCarriersSection';
import ValuePropositionSection from '@/components/sections/ValuePropositionSection';
import SecuritySystemSection from '@/components/sections/SecuritySystemSection';
import AiAgentsSection from '@/components/sections/AiAgentsSection';
import PlatformPartnersSection from '@/components/sections/PlatformPartnersSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PlugAndPlayBanner id="announcement" />
      <FeaturesSection id="overview" /> {/* This is the "Overview" section */}
      <CompleteSolutionSection id="complete-solution" />
      <OurUnderwritingBotSection id="underwriting-bot" />
      <ValueForCarriersSection id="value-for-carriers" />
      <ValuePropositionSection id="solutions" />
      <SecuritySystemSection id="security-system" />
      <AiAgentsSection id="ai-agents" />
      <PlatformPartnersSection id="platform-partners" />
      <TestimonialsSection id="testimonials" />
      {/* Placeholder for Pricing Section if added later */}
      {/* <PricingSection id="pricing" /> */}
    </>
  );
}
