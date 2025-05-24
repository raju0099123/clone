import SectionWrapper from '@/components/shared/SectionWrapper';

export default function FeaturesSection({ id }: { id?: string }) {
  return (
    <SectionWrapper id={id} hasBackground>
      <div className="mb-8 md:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4 md:mb-6">
          Overview
        </h2>
        <p className="text-lg text-foreground/70 max-w-3xl">
          Our platform provides the GenAI native underwriting tool that enables users to rapidly build, test, and deploy models, leveraging cutting-edge AI capabilities. We offer a comprehensive suite of features designed for ease of use, scalability, and seamless integration into existing workflows, empowering insurers to make faster, more accurate decisions.
        </p>
      </div>
    </SectionWrapper>
  );
}
