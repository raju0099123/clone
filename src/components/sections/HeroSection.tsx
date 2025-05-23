import Image from 'next/image';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Users, Briefcase, FileOutput, Zap } from 'lucide-react'; // Icons for stats

const stats = [
  { icon: <Users className="w-8 h-8 text-primary" />, value: "5+", label: "Pilot Customers" },
  { icon: <Briefcase className="w-8 h-8 text-primary" />, value: "100+", label: "Agents At Work" },
  { icon: <FileOutput className="w-8 h-8 text-primary" />, value: "2000/min", label: "Docs Ingested" },
  { icon: <Zap className="w-8 h-8 text-primary" />, value: "10X", label: "Increased Efficiency" },
];

export default function HeroSection() {
  return (
    <SectionWrapper className="pt-20 md:pt-28 lg:pt-32 bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Underwriting Products <br className="hidden sm:inline"/>Powered by Generative AI
            </h1>
            {/* Removed paragraph based on the new design's focus, could be added back if needed */}
            {/* 
            <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto lg:mx-0">
              Transform your application with a stunning, responsive, and user-centric design. Boost engagement and drive growth with our expert modernization services.
            </p>
            */}
            {/* Buttons removed as "Book a Demo" is in the header */}
          </div>
          <div className="relative aspect-square max-w-md mx-auto lg:max-w-none lg:mx-0 rounded-lg transform transition-all duration-500 hover:scale-105 flex items-center justify-center">
            <Image
              src="https://nativeorange.ai/images/robot-image.png"
              alt="Generative AI Robot for Underwriting"
              width={500} 
              height={500}
              className="rounded-lg object-contain" // Changed to object-contain
              data-ai-hint="orange robot ai"
              priority
            />
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="mt-16 lg:mt-24">
          <div className="bg-background/80 backdrop-blur-sm shadow-xl rounded-lg p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <div className="mb-2 p-3 bg-primary/10 rounded-full">
                    {stat.icon}
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
