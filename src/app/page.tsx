
import HeroSection from '@/components/sections/HeroSection';
import PlugAndPlayBanner from '@/components/sections/PlugAndPlayBanner';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CompleteSolutionSection from '@/components/sections/CompleteSolutionSection';
import OurUnderwritingBotSection from '@/components/sections/OurUnderwritingBotSection'; // Added import
import ValuePropositionSection from '@/components/sections/ValuePropositionSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CallToActionSection from '@/components/sections/CallToActionSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PlugAndPlayBanner id="announcement" />
      <FeaturesSection id="overview" /> {/* This is the "Overview" section */}
      <CompleteSolutionSection id="complete-solution" />
      <OurUnderwritingBotSection id="underwriting-bot" /> {/* Added new section */}
      <ValuePropositionSection id="solutions" />
      <TestimonialsSection id="testimonials" />
      <CallToActionSection id="cta" />
      {/* Placeholder for Pricing Section if added later */}
      {/* <PricingSection id="pricing" /> */}
    </>
  );
}
