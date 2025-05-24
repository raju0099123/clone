import Image from 'next/image';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { CheckCircle, Bot } from 'lucide-react';

const underwritingBotFeatures = [
  {
    text: "Automated Data Analysis: Processes and analyzes diverse data sources instantly.",
  },
  {
    text: "Advanced Risk Assessment: Delivers precise risk assessments with transparent scoring.",
  },
  {
    text: "Seamless Workflow Integration: Easily integrates with your existing systems and tools.",
  },
  {
    text: "Continuous Learning & Improvement: Adapts and enhances its accuracy over time.",
  },
];

export default function UnderwritingBotSection({ id }: { id?: string }) {
  return (
    <SectionWrapper id={id} hasBackground>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Bot className="w-5 h-5" />
            <span>State-of-the-Art AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Our Underwriting Bot
          </h2>
          <p className="text-lg text-foreground/70">
            Experience the future of underwriting with our intelligent GenAI-powered bot. 
            It automates complex tasks, analyzes vast amounts of data in real-time, 
            and provides actionable insights, empowering your team to make faster, 
            more accurate, and consistent underwriting decisions.
          </p>
          <ul className="space-y-3">
            {underwritingBotFeatures.map((feature) => (
              <li key={feature.text} className="flex items-start group rounded-md p-1 -m-1 transition-colors hover:bg-muted/50">
                <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 shrink-0 transition-colors group-hover:text-accent" />
                <span className="text-foreground/80">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 group">
          <Image
            src="https://placehold.co/600x450.png"
            alt="AI Underwriting Bot in action"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            data-ai-hint="ai bot process"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
        </div>
      </div>
    </SectionWrapper>
  );
}