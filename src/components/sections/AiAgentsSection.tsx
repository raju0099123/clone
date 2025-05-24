
import SectionWrapper from '@/components/shared/SectionWrapper';
import { BrainCog, ClipboardSignature, Network } from 'lucide-react';

const agents = [
  {
    icon: BrainCog,
    title: 'Underwriter Agent',
    description: 'Our underwriter agent analyzes the application and supporting documents based on the appetite and policy documents.',
    iconHint: 'brain gear',
  },
  {
    icon: ClipboardSignature,
    title: 'Appetite Management',
    description: 'Our Appetite agents investigate appetite and policy documentation and assess whether the applicant meets the underwriting criteria.',
    iconHint: 'clipboard signature',
  },
  {
    icon: Network,
    title: 'Integration Agents',
    description: 'Nativeorange offers numerous integration agents designed to interact, integrate, and retrieve data from a variety of third-party insurance solutions.',
    iconHint: 'network nodes',
  },
];

export default function AiAgentsSection({ id }: { id?: string }) {
  return (
    <SectionWrapper id={id}>
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
          Our AI Agents
        </h2>
        <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
          We offer a range of expert AI Agents that integrate into your workflows to deliver rapid results
        </p>
      </div>

      <div className="bg-primary p-8 rounded-2xl shadow-2xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <div
              key={agent.title}
              className="bg-card text-card-foreground p-6 rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] flex flex-col items-center text-center"
            >
              <agent.icon className="w-14 h-14 text-primary mb-6" aria-hidden="true" data-ai-hint={agent.iconHint} />
              <h3 className="text-2xl font-semibold text-primary mb-3">
                {agent.title}
              </h3>
              <p className="text-base text-foreground/75 leading-relaxed">
                {agent.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
