import SectionWrapper from '@/components/shared/SectionWrapper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function PlugAndPlayBanner({ id }: { id?: string }) {
  return (
    <div id={id} className="bg-[hsl(var(--banner-background))] text-[hsl(var(--banner-foreground))] py-4">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" className="text-[hsl(var(--banner-foreground))] hover:bg-primary/10 transition-colors">
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous</span>
          </Button>
          
          <div className="flex items-center space-x-3 text-sm md:text-base text-center">
            {/* Assuming PLUGANDPLAY might be a logo - using text for now */}
            {/* <Image src="/path-to-plugandplay-logo.svg" alt="Plug and Play" width={100} height={24} /> */}
            <span className="font-semibold">PLUGANDPLAY</span>
            <span className="hidden sm:inline">|</span>
            <p>
              <span className="font-semibold text-primary">Nativeorange</span> is chosen as top 10 Insurtech startups out of 1000+ startups across US and EU
            </p>
          </div>

          <Button variant="ghost" size="icon" className="text-[hsl(var(--banner-foreground))] hover:bg-primary/10 transition-colors">
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
