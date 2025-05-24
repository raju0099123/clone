
'use client';

import * as React from 'react';
import type { LucideIcon } from 'lucide-react';
import { Building2, FileText } from 'lucide-react';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ProcessStepProps {
  icon: LucideIcon | React.ElementType;
  label: string;
  info?: { title: string; description: string };
  isNativeIcon?: boolean;
  className?: string;
}

const NativeOrangeNIcon = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-base p-1',
    md: 'w-12 h-12 text-xl p-2',
    lg: 'w-16 h-16 text-2xl p-3',
  };
  return (
    <div
      className={cn(
        'bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shadow-md',
        sizeClasses[size]
      )}
    >
      N
    </div>
  );
};

const ProcessStep: React.FC<ProcessStepProps> = ({ icon: IconComponent, label, info, isNativeIcon, className }) => (
  <div className={cn("flex flex-col items-center text-center relative group transform transition-transform hover:scale-105 px-1 sm:px-2", className)}>
    <div className="h-28 flex flex-col justify-end"> {/* Placeholder for card height + margin. Approx h-24 for card + mb-4 (1rem) */}
      {info && (
        <Card className="mb-4 w-full max-w-[14rem] bg-blue-50 border-blue-200 shadow-lg dark:bg-blue-900/30 dark:border-blue-700 transition-all duration-300 group-hover:shadow-xl">
          <CardContent className="p-3">
            <h4 className="font-semibold text-sm text-primary mb-1">{info.title}</h4>
            <p className="text-xs text-foreground/80">{info.description}</p>
          </CardContent>
        </Card>
      )}
    </div>
    {isNativeIcon ? (
      <NativeOrangeNIcon size="md" />
    ) : (
      <div className="bg-muted text-muted-foreground rounded-full p-3 w-12 h-12 flex items-center justify-center shadow-md">
        <IconComponent className="w-6 h-6" />
      </div>
    )}
    <p className="mt-2 text-sm font-medium text-foreground/90">{label}</p>
  </div>
);

interface CircleDiagramProps {
  title: string;
  labels: string[];
}

const CircleDiagram: React.FC<CircleDiagramProps> = ({ labels }) => {
  const labelPositionsOuter = [
    { top: '5%', left: '50%', transform: 'translateX(-50%)' }, // Top-Center
    { top: '50%', left: '2%', transform: 'translateY(-50%)' },  // Middle-Left
    { top: '50%', right: '2%', transform: 'translateY(-50%)' }, // Middle-Right
    { bottom: '5%', left: '50%', transform: 'translateX(-50%)' }, // Bottom-Center
  ];
   const labelPositionsInner = [
    { top: '25%', left: '50%', transform: 'translateX(-50%) translateY(-100%) scale(0.9)' }, // Top-Center (inner)
    { bottom: '25%', left: '50%', transform: 'translateX(-50%) translateY(100%) scale(0.9)' }, // Bottom-Center (inner)
  ];

  return (
    <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto group transform transition-transform hover:scale-105">
      {/* Outer Ring */}
      <div className="absolute inset-0 rounded-full bg-orange-100 dark:bg-orange-500/20 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
      {/* Middle Ring */}
      <div className="absolute inset-[18%] rounded-full bg-orange-200 dark:bg-orange-500/30 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
      {/* Inner Ring / Content Area Background */}
      <div className="absolute inset-[36%] rounded-full bg-orange-300 dark:bg-orange-500/40 opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
      {/* Central Circle */}
      <div className="absolute inset-[40%] rounded-full bg-white dark:bg-card flex flex-col items-center justify-center shadow-xl border border-gray-200 dark:border-gray-700">
        <NativeOrangeNIcon size="sm" />
        <span className="text-xs font-semibold text-primary mt-1">native</span>
        <span className="text-xs font-semibold text-foreground">orange</span>
      </div>
      {/* Labels */}
      {labels.slice(0, 4).map((label, index) => (
        <div
          key={label}
          className="absolute px-2 py-1 bg-background border border-border rounded-md shadow-md text-xs text-foreground/80 group-hover:shadow-lg transition-shadow duration-300 w-auto max-w-24 text-center"
          style={labelPositionsOuter[index % labelPositionsOuter.length]}
        >
          {label}
        </div>
      ))}
       {labels.slice(4, 6).map((label, index) => ( // Handles 5th and potentially 6th label
        <div
          key={label}
          className="absolute px-2 py-1 bg-background border border-border rounded-md shadow-md text-xs text-foreground/80 group-hover:shadow-lg transition-shadow duration-300 w-auto max-w-24 text-center"
          style={{ ...labelPositionsInner[index % labelPositionsInner.length] }}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default function OurUnderwritingBotSection({ id }: { id?: string }) {
  const processSteps = [
    { icon: Building2, label: 'Insurance Application' },
    {
      icon: NativeOrangeNIcon,
      label: 'Intake',
      isNativeIcon: true,
      info: { title: 'Prioritize App Forms', description: 'Get to high value apps first. Zero code app priority setup.' },
    },
    {
      icon: NativeOrangeNIcon,
      label: 'Appetite',
      isNativeIcon: true,
      info: { title: 'Airtight Sourcing', description: 'Cross check against rules of underwriting.' },
    },
    {
      icon: NativeOrangeNIcon,
      label: 'Risk Analyze',
      isNativeIcon: true,
      info: { title: 'Applicant Risk', description: 'Gather risk data across internet, third-party sources.' },
    },
    { icon: FileText, label: 'Policy Quote' },
  ];

  const diagram1Labels = ["Risks", "Do Not Write", "Company Analysis", "Controls", "Exposures"];
  const diagram2Labels = ["Internet", "Agent Scope", "Social Media", "LinkedIn", "Industry Sentiment"];

  return (
    <SectionWrapper id={id} className="py-12 md:py-16 lg:py-20">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Our Underwriting <span className="text-primary">Bot</span>
        </h2>
      </div>

      {/* Process Flow */}
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-around space-y-8 md:space-y-0 md:space-x-4 mb-16 md:mb-24 relative px-4">
        {processSteps.map((step, index) => (
          <React.Fragment key={step.label}>
            <ProcessStep {...step} /> {/* Removed className conditional padding */}
            {index < processSteps.length - 1 && (
              <div className="hidden md:flex flex-col justify-center items-center flex-grow min-w-[50px] relative top-10"> {/* top-10 might need adjustment based on new icon alignment */}
                <div className="w-full h-0.5 border-t-2 border-dashed border-primary/50"></div>
              </div>
            )}
             {index < processSteps.length - 1 && (
              <div className="flex md:hidden justify-center items-center w-full h-12">
                <div className="h-full w-0.5 border-l-2 border-dashed border-primary/50"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      
      {/* Circular Diagrams */}
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 xl:gap-24">
        <CircleDiagram title="Risk Factors" labels={diagram1Labels} />
        <CircleDiagram title="Data Sources" labels={diagram2Labels} />
      </div>
    </SectionWrapper>
  );
}

