import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CallToActionSection({ id }: { id?: string }) {
  return (
    <SectionWrapper id={id} className="bg-gradient-to-r from-primary to-orange-500 text-primary-foreground">
      <div className="text-center"> {/* Removed py-12 md:py-16 */}
        {/* Heading "Ready to Modernize Your SaaS?" has been removed as per user request */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
          Let's discuss how we can elevate your platform's design, user experience, and performance.
          Schedule a free consultation today!
        </p>
        <Button 
          asChild 
          size="lg" 
          variant="secondary" // Using secondary for contrast on primary background
          className="text-lg px-10 py-6 transition-transform hover:scale-105"
        >
          <Link href="#">Schedule Your Free Consultation</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
