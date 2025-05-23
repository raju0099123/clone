import HeroSection from '@/components/sections/HeroSection';
import PlugAndPlayBanner from '@/components/sections/PlugAndPlayBanner';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ValuePropositionSection from '@/components/sections/ValuePropositionSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CallToActionSection from '@/components/sections/CallToActionSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PlugAndPlayBanner id="announcement" />
      <FeaturesSection id="features" />
      <ValuePropositionSection id="solutions" />
      <TestimonialsSection id="testimonials" />
      <CallToActionSection id="cta" />
      {/* Placeholder for Pricing Section if added later */}
      {/* <PricingSection id="pricing" /> */}
    </>
  );
}
