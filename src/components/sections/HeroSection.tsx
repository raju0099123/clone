
import Image from 'next/image';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Users, Briefcase, FileText, TrendingUp } from 'lucide-react';
import AnimatedStatNumber from '@/components/shared/AnimatedStatNumber';

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
    <SectionWrapper className="pt-3 bg-primary text-primary-foreground">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="space-y-4 md:space-y-6 text-center lg:text-left lg:ml-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Underwriting Products
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-semibold mt-1 sm:mt-2">Powered by</span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold mt-1 sm:mt-2">Generative AI</span>
          </h1>
        </div>
        <div className="relative aspect-square max-w-[120px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[240px] xl:max-w-[280px] mx-auto flex items-center justify-center">
          <Image
            src="https://nativeorange.ai/images/robot-image.png"
            alt="Generative AI Robot for Underwriting"
            width={280}
            height={280}
            className="rounded-lg object-contain transform transition-all duration-500 hover:scale-105 animate-subtle-bob"
            data-ai-hint="orange robot ai"
            priority
          />
        </div>
      </div>

      {/* Stats Bar */}
      <div className="mt-10 md:mt-12 lg:mt-16">
        <div className="bg-white/30 dark:bg-black/30 backdrop-blur-lg p-6 sm:p-8 rounded-xl shadow-2xl border border-white/40 dark:border-white/20 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-3 sm:p-4 rounded-lg transform transition-transform duration-500 ease-out hover:scale-105 hover:shadow-md hover:-translate-y-1"
                role="figure"
                aria-labelledby={`stat-label-${index}`}
              >
                <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 mb-2 text-primary-foreground/80" aria-hidden="true" />
                <AnimatedStatNumber 
                  metric={stat.metric} 
                  className="text-xl sm:text-2xl font-bold text-primary-foreground" 
                />
                <p id={`stat-label-${index}`} className="text-xs sm:text-sm text-primary-foreground/80 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
