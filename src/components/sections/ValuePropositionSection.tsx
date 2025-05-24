
import Image from 'next/image';
import SectionWrapper from '@/components/shared/SectionWrapper';

const propositions = [
  {
    title: "Underwriting Products",
    description: "Our GenAI underwriting tool enables MGAs, Carriers, and their network of Agents to reduce manual work, improve turnaround time from days to just hours, improve loss ratio due to data-driven risk evaluation and grow their book rapidly by 6%.",
    imageUrl: "https://nativeorange.ai/images/underwriting-product.png",
    imageAlt: "Underwriting Products Dashboard",
    imageHint: "dashboard underwriting",
    imageLeft: false,
  },
  {
    title: "Analytics View",
    description: "Nativeorange.ai analytics platform provides a complete end-to-end process and provides business insights with data-driven solutions. The data-driven platform empowers business users to make informed decisions using actionable intelligence, to enhance agent and customer satisfaction. The Platform has various dashboards for Admins, your finance team, Operations leaders, sales, service operations to track, monitor progress on daily/weekly/monthly/quarterly basis. The view is also of all process/workflow metrics in the tool, overall snapshot to users with all necessary information in one view.",
    imageUrl: "https://nativeorange.ai/images/analytice-view.png",
    imageAlt: "Analytics View Dashboard",
    imageHint: "analytics dashboard chart",
    imageLeft: true,
  },
  {
    title: "Integration Hub",
    description: "Our integration hub provides a diagram AI based integration with all of your internal systems, and all third-party platforms or services to make your underwriting processes truly AI driven. The integrations hub makes your underwriting platform fully integrated with core system data, and makes it easy to add new integrations with AI capabilities.",
    imageUrl: "https://nativeorange.ai/images/integrationHub.gif",
    imageAlt: "Integration Hub Diagram",
    imageHint: "integration diagram hub",
    imageLeft: false,
  },
];

export default function ValuePropositionSection({ id }: { id?: string }) {
  return (
    <SectionWrapper id={id} className="bg-orange-50 dark:bg-orange-900/30">
      <div className="space-y-16">
        {propositions.map((prop) => (
          <div key={prop.title} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${prop.imageLeft ? 'lg:grid-flow-row-dense' : ''}`}>
            <div className={`space-y-4 md:space-y-6 text-center lg:text-left ${prop.imageLeft ? 'lg:col-start-2' : ''}`}>
              <h3 className="text-3xl font-bold text-primary tracking-tight">
                {prop.title}
              </h3>
              <p className="text-foreground/80 text-lg max-w-xl mx-auto lg:mx-0">{prop.description}</p>
            </div>
            <div className={`relative aspect-[16/10] border-4 border-primary/60 bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 group ${prop.imageLeft ? 'lg:col-start-1' : ''}`}>
              <Image
                src={prop.imageUrl}
                alt={prop.imageAlt}
                layout="fill"
                objectFit="contain" // Changed from "cover" to "contain"
                className="rounded-lg" // slightly less rounding than parent for inset look
                data-ai-hint={prop.imageHint}
              />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
