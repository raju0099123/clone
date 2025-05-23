import Image from 'next/image';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Users, Briefcase, FileText, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Users,
    metric: '5+',
    label: 'Pilot Customers',
    hint: 'group people',
  },
  {
    icon: Briefcase,
    metric: '100+',
    label: 'Agents At Work',
    hint: 'office bag',
  },
  {
    icon: FileText,
    metric: '2000/min',
    label: 'Docs Ingested',
    hint: 'document paper',
  },
  {
    icon: TrendingUp,
    metric: '10X',
    label: 'Increased Efficiency',
    hint: 'growth chart',
  },
];

export default function HeroSection() {
  return (
    <SectionWrapper className="py-20 md:py-28 lg:py-32 bg-primary text-primary-foreground">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="space-y-4 md:space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Underwriting Products
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-semibold mt-1 sm:mt-2">Powered by</span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold mt-1 sm:mt-2">Generative AI</span>
          </h1>
        </div>
        <div className="relative aspect-square max-w-[160px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[300px] xl:max-w-[340px] mx-auto lg:mx-0 flex items-center justify-center">
          <Image
            src="https://nativeorange.ai/images/robot-image.png"
            alt="Generative AI Robot for Underwriting"
            width={450}
            height={450}
            className="rounded-lg object-contain transform transition-all duration-500 hover:scale-105 animate-bobbing"
            data-ai-hint="orange robot ai"
            priority
          />
        </div>
      </div>

      {/* Stats Bar */}
      <div className="mt-12 md:mt-16 lg:mt-20">
        <div className="bg-card text-card-foreground p-6 sm:p-8 rounded-xl shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-3 sm:p-4 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md hover:-translate-y-1"
                role="figure"
                aria-labelledby={`stat-label-${index}`}
              >
                <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 mb-2 text-foreground/80" aria-hidden="true" />
                <p className="text-xl sm:text-2xl font-bold text-foreground">{stat.metric}</p>
                <p id={`stat-label-${index}`} className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
