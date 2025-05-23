import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  hasBackground?: boolean;
}

export default function SectionWrapper({ children, className, id, hasBackground = false }: SectionWrapperProps) {
  return (
    <section 
      id={id} 
      className={cn(
        'py-16 md:py-24 lg:py-32', 
        hasBackground ? 'bg-muted' : 'bg-background',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
