
import Image from 'next/image';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Building, ShieldAlert } from 'lucide-react'; // Using Building for the shield/pillar icon
import { cn } from '@/lib/utils';

const epics = [
  { name: 'IAM' },
  { name: 'Data Management' },
  { name: 'Infra Security' },
  { name: 'Detective Controls' },
  { name: 'Incident Response' },
];

const complianceLogos = [
  { src: 'https://nativeorange.ai/images/iso-logo-one.png', alt: 'ISO Logo', hint: 'iso certification' },
  { component: Building, alt: 'Compliance Standard Icon', hint: 'building standard' }, // Placeholder for shield/building
  { src: 'https://nativeorange.ai/images/soc-logo.png', alt: 'SOC Logo', hint: 'soc compliance' },
  { src: 'https://nativeorange.ai/images/finra.png', alt: 'Finra Logo', hint: 'finra regulation' },
  { src: 'https://nativeorange.ai/images/cyber-grx.png', alt: 'CyberGRX Logo', hint: 'cybergrx assessment' },
  { src: 'https://nativeorange.ai/images/star-logo.png', alt: 'Star Logo', hint: 'star certification' },
  { src: 'https://nativeorange.ai/images/mvsp-logo.png', alt: 'MVSP Logo', hint: 'mvsp framework' },
  { src: 'https://nativeorange.ai/images/whistic.png', alt: 'Whistic Logo', hint: 'whistic assessment' },
];

const NativeOrangeEpicsLogo = () => (
  <div className="flex items-center gap-2">
    <div className="bg-primary text-primary-foreground h-8 w-8 flex items-center justify-center rounded-md font-bold text-lg">
      N
    </div>
    <span className="font-semibold text-foreground">
      native<span className="text-primary">orange</span>
    </span>
  </div>
);

export default function SecuritySystemSection({ id }: { id?: string }) {
  return (
    <SectionWrapper id={id} hasBackground className="bg-background">
      <div className="text-center mb-10 md:mb-12">
        <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
          <Image 
            src="https://nativeorange.ai/images/security-icon.png" 
            alt="Security System Icon" 
            width={40} 
            height={40}
            data-ai-hint="security shield"
          />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-2">
          Security System
        </h2>
        <p className="text-md text-foreground/70 max-w-xl mx-auto">
          Deep expertise in Cloud Shared Responsibility Model
        </p>
      </div>

      {/* Nativeorange Security EPICS Block */}
      <div className="bg-rose-50 dark:bg-rose-900/50 p-6 md:p-8 rounded-xl shadow-lg mb-4 relative">
        <h3 className="text-lg font-semibold text-foreground mb-1 text-center sm:text-left">
          Nativeorange Security EPICS
        </h3>
        <div className="flex flex-col sm:flex-row items-center gap-4 my-4">
          <NativeOrangeEpicsLogo />
          <div className="hidden sm:block border-l border-gray-300 dark:border-gray-600 h-8 mx-2"></div>
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {epics.map((epic) => (
              <div
                key={epic.name}
                className="bg-white dark:bg-card border border-gray-300 dark:border-border text-foreground/80 dark:text-foreground/90 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-shadow cursor-default"
              >
                {epic.name}
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-foreground/60 dark:text-foreground/70 text-center sm:text-left">
          Leverage GCP security posture and best practices.
        </p>
        {/* Triangle Connector */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-19px] w-0 h-0 
          border-l-[20px] border-l-transparent
          border-r-[20px] border-r-transparent
          border-t-[20px] border-t-rose-50 dark:border-t-rose-900/50"
          style={{ zIndex: 1 }} 
        />
      </div>

      {/* Compliance/Partner Logos Block */}
      <div className="bg-sky-100 dark:bg-sky-800/30 p-0.5 rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Google Cloud Section */}
          <div className="w-full md:w-1/3 bg-sky-600 dark:bg-sky-700 p-6 flex flex-col items-center justify-center text-center text-white rounded-t-lg md:rounded-tr-none md:rounded-l-lg">
            <Image
              src="https://nativeorange.ai/images/cloud-logo.png"
              alt="Google Cloud Logo"
              width={80}
              height={80}
              className="mb-3"
              data-ai-hint="google cloud"
            />
            <p className="font-semibold text-lg">Google Cloud</p>
          </div>

          {/* Compliance Logos Grid */}
          <div className="w-full md:w-2/3 bg-sky-50 dark:bg-sky-800/50 p-6 rounded-b-lg md:rounded-bl-none md:rounded-r-lg">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {complianceLogos.map((logo, index) => (
                <div
                  key={logo.alt + index}
                  className="bg-white dark:bg-card p-3 sm:p-4 rounded-lg shadow-md flex items-center justify-center aspect-[3/2] hover:shadow-lg transition-shadow"
                >
                  {logo.src ? (
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={100}
                      height={60}
                      objectFit="contain"
                      data-ai-hint={logo.hint}
                    />
                  ) : (
                    <logo.component className="w-10 h-10 sm:w-12 sm:h-12 text-primary" aria-label={logo.alt} data-ai-hint={logo.hint}/>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
