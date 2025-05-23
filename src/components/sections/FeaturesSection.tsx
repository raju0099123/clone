import SectionWrapper from '@/components/shared/SectionWrapper';
import IconCard from '@/components/shared/IconCard';
import { Zap, ShieldCheck, MessageCircle, Puzzle, Smartphone, LayoutGrid } from 'lucide-react';

const features = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Responsive Layout',
    description: 'Flawless experience on any device with adaptive grid and flexbox designs.',
  },
  {
    icon: <LayoutGrid className="w-6 h-6" />,
    title: 'Whitespace Standardization',
    description: 'Consistent padding and margins for improved readability and visual appeal.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Typography Enhancement',
    description: 'Clear visual hierarchy with modern fonts for an intuitive user journey.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Visual Balancing',
    description: 'Harmoniously aligned cards, icons, and images for a polished look.',
  },
  {
    icon: <Puzzle className="w-6 h-6" />,
    title: 'Section Delineation',
    description: 'Subtle shadows and tints to clearly separate content sections.',
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Enhanced User Experience',
    description: 'Intuitive navigation and subtle animations for engaging interactions.',
  },
];

export default function FeaturesSection({ id }: { id?: string }) {
  return (
    <SectionWrapper id={id} hasBackground>
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
          Modernization That Matters
        </h2>
        <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
          Discover how our design enhancements can revitalize your SaaS platform.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <IconCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
