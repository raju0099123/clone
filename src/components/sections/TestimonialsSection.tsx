import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Star, UserCircle2 } from 'lucide-react';

const testimonials = [
  {
    quote: "The redesign transformed our user engagement overnight. The new UI is intuitive and beautiful!",
    name: "Jane Doe",
    title: "CEO, Tech Solutions Inc.",
    avatarUrl: "https://placehold.co/100x100.png",
    rating: 5,
    avatarHint: "profile photo"
  },
  {
    quote: "Our platform feels brand new. The consistent whitespace and clear typography have made a huge difference.",
    name: "John Smith",
    title: "Product Manager, Innovate SaaS",
    avatarUrl: null, // Example with no avatar
    rating: 5,
    avatarHint: ""
  },
  {
    quote: "Working with SaaS Modernizer was a breeze. They understood our vision and delivered beyond expectations.",
    name: "Alice Brown",
    title: "Founder, Startup Hub",
    avatarUrl: "https://placehold.co/100x100.png",
    rating: 4,
    avatarHint: "person smiling"
  },
];

export default function TestimonialsSection({ id }: { id?: string }) {
  return (
    <SectionWrapper id={id} hasBackground>
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
          Loved by Product Teams
        </h2>
        <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
          Hear what our clients have to say about their modernized applications.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardContent className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent fill-accent' : 'text-muted-foreground/50'}`} />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
              </div>
              <div className="flex items-center mt-auto">
                {testimonial.avatarUrl ? (
                  <Image
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                    data-ai-hint={testimonial.avatarHint}
                  />
                ) : (
                  <UserCircle2 className="w-12 h-12 text-muted-foreground mr-4" />
                )}
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.title}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
