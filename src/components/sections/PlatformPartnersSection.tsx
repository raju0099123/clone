
import Image from 'next/image';
import SectionWrapper from '@/components/shared/SectionWrapper';

const partners = [
  { name: 'AWS', src: 'https://nativeorange.ai/images/aws-logo.png', hint: 'aws logo' },
  { name: 'Google Cloud', src: 'https://nativeorange.ai/images/google-cloud.png', hint: 'google cloud logo' },
  { name: 'Azure', src: 'https://nativeorange.ai/images/azure-loog.png', hint: 'azure logo' }, // Assuming loog is intentional
  { name: 'NVIDIA', src: 'https://nativeorange.ai/images/nvidia-logo.png', hint: 'nvidia logo' },
  { name: 'Databricks', src: 'https://nativeorange.ai/images/databricks-logo.png', hint: 'databricks logo' },
  { name: 'Snowflake', src: 'https://nativeorange.ai/images/snowflake-logo.png', hint: 'snowflake logo' },
];

export default function PlatformPartnersSection({ id }: { id?: string }) {
  return (
    <SectionWrapper id={id} hasBackground>
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
          Our Platform <span className="text-primary">Ecosystem</span>
        </h2>
        <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
          Leveraging the best technologies to build robust and scalable solutions.
        </p>
      </div>

      <div className="relative w-full overflow-hidden group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-6 sm:mx-8 md:mx-10 flex items-center justify-center h-20" // Increased height for logos
            >
              <Image
                src={partner.src}
                alt={`${partner.name} logo`}
                width={150} // Increased base width
                height={60}  // Increased base height
                className="object-contain h-10 sm:h-12 md:h-14" // Responsive height, max height of container
                data-ai-hint={partner.hint}
              />
            </div>
          ))}
        </div>
        {/* Gradient Fades for edges */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-muted to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-muted to-transparent pointer-events-none"></div>
      </div>
    </SectionWrapper>
  );
}
