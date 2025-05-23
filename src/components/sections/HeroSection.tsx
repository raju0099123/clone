import Image from 'next/image';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/shared/SectionWrapper';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <SectionWrapper className="pt-20 md:pt-28 lg:pt-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            Modernize Your SaaS, <span className="text-primary">Elevate Your Success</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto lg:mx-0">
            Transform your application with a stunning, responsive, and user-centric design. Boost engagement and drive growth with our expert modernization services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button asChild size="lg" className="transition-transform hover:scale-105">
              <Link href="#cta">Get Started Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="transition-transform hover:scale-105">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105">
          <Image
            src="https://placehold.co/1200x675.png"
            alt="SaaS Application Showcase"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            data-ai-hint="modern software interface"
            priority
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
