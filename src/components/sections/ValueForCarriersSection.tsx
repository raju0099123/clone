
import Image from 'next/image';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const valuePropositions = [
  {
    title: 'Improved Selection',
    description: 'Pick right business, be the first one to submit the quote. Increased Underwriting velocity, by 6X.',
    iconUrl: 'https://nativeorange.ai/images/values-icon.png',
    iconHint: 'diamond value',
    lightBg: false,
  },
  {
    title: 'Increase Agent Loyalty',
    description: 'Eliminate friction with Agents, improve collaboration. Rapid quotes, and automated email responses.',
    iconUrl: 'https://nativeorange.ai/images/values-icon.png',
    iconHint: 'diamond loyalty',
    lightBg: true,
  },
  {
    title: 'Underwriting Productivity',
    description: 'Prioritize apps. Improve underwriter productivity by 40. Focus on high value items and selling!',
    iconUrl: 'https://nativeorange.ai/images/values-icon.png',
    iconHint: 'diamond productivity',
    lightBg: false,
  },
  {
    title: 'Become Competitive',
    description: 'Compete with tech-first insurance companies like Next and Pie. Cross sell effectively.',
    iconUrl: 'https://nativeorange.ai/images/values-icon.png',
    iconHint: 'diamond competitive',
    lightBg: false,
  },
  {
    title: 'Self service Appetite Changes',
    description: 'Change appetite rapidly with no IT involvement. Train the bots to align with your underwriting.',
    iconUrl: 'https://nativeorange.ai/images/values-icon.png',
    iconHint: 'diamond self service',
    lightBg: true,
  },
  {
    title: 'Unlimited Scale, and Integrated',
    description: 'Scale underwriting resources. Integrate to your current systems, leverage your legacy systems.',
    iconUrl: 'https://nativeorange.ai/images/values-icon.png',
    iconHint: 'diamond scale integrated',
    lightBg: false,
  },
];

export default function ValueForCarriersSection({ id }: { id?: string }) {
  return (
    <SectionWrapper id={id} hasBackground>
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
          Value for Carriers
        </h2>
        <p className="mt-3 text-lg text-foreground/80 max-w-2xl mx-auto">
          Increase your top line by 6% ($60Mil per $1B DPW)
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {valuePropositions.map((prop) => (
          <Card
            key={prop.title}
            className={cn(
              'shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1',
              prop.lightBg ? 'bg-orange-50 dark:bg-orange-900/30' : 'bg-card'
            )}
          >
            <CardContent className="p-6 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 relative mt-1">
                <Image
                  src={prop.iconUrl}
                  alt="" // Alt text can be empty if icon is decorative or described by text
                  width={64}
                  height={64}
                  className="object-contain"
                  data-ai-hint={prop.iconHint}
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                  {prop.title}
                </h3>
                <p className="text-sm text-foreground/70">
                  {prop.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
