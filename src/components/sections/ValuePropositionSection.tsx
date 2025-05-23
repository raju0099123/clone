import Image from 'next/image';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { CheckCircle } from 'lucide-react';

const propositions = [
  {
    title: "Streamlined User Journeys",
    description: "We analyze and redesign user flows to be more intuitive, reducing friction and improving conversion rates. Your users will navigate your platform with ease and confidence.",
    points: [
      "Intuitive navigation",
      "Reduced cognitive load",
      "Optimized conversion funnels"
    ],
    imageUrl: "https://placehold.co/600x450.png",
    imageAlt: "Streamlined user interface",
    imageHint: "user interface design",
    imageLeft: false,
  },
  {
    title: "Visually Stunning & On-Brand",
    description: "Our designs are not just modern; they are tailored to reflect your brand's identity, creating a memorable and trustworthy impression on your users.",
    points: [
      "Custom brand alignment",
      "Modern aesthetics",
      "Enhanced brand perception"
    ],
    imageUrl: "https://placehold.co/600x450.png",
    imageAlt: "Brand-aligned design",
    imageHint: "brand identity",
    imageLeft: true,
  },
];

export default function ValuePropositionSection({ id }: { id?: string }) {
  return (
    <SectionWrapper id={id}>
      <div className="space-y-16 md:space-y-24">
        {propositions.map((prop, index) => (
          <div key={prop.title} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${prop.imageLeft ? 'lg:grid-flow-row-dense' : ''}`}>
            <div className={`space-y-6 ${prop.imageLeft ? 'lg:col-start-2' : ''}`}>
              <h2 className="text-3xl font-semibold text-foreground tracking-tight">{prop.title}</h2>
              <p className="text-foreground/70 text-lg">{prop.description}</p>
              <ul className="space-y-3">
                {prop.points.map(point => (
                  <li key={point} className="flex items-start group rounded-md p-1 -m-1 transition-colors hover:bg-muted/50">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 shrink-0 transition-colors group-hover:text-accent" />
                    <span className="text-foreground/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 ${prop.imageLeft ? 'lg:col-start-1' : ''}`}>
              <Image
                src={prop.imageUrl}
                alt={prop.imageAlt}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                data-ai-hint={prop.imageHint}
              />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
