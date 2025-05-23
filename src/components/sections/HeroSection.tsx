import Image from 'next/image';
import SectionWrapper from '@/components/shared/SectionWrapper';

export default function HeroSection() {
  return (
    <SectionWrapper className="py-24 md:py-32 lg:py-40 bg-primary text-primary-foreground">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Underwriting Products<br />Powered by<br />Generative AI
          </h1>
        </div>
        <div className="relative aspect-square max-w-md mx-auto lg:max-w-xl xl:max-w-2xl lg:mx-0 rounded-lg transform transition-all duration-500 hover:scale-105 flex items-center justify-center">
          <Image
            src="https://nativeorange.ai/images/robot-image.png"
            alt="Generative AI Robot for Underwriting"
            width={500} 
            height={500}
            className="rounded-lg object-contain" 
            data-ai-hint="orange robot ai"
            priority
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
