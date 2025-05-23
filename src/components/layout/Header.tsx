import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Bot, CalendarDays } from 'lucide-react'; // Changed MountainIcon to Bot, Added CalendarDays

export default function Header() {
  const navItems = [
    { label: 'About Us', href: '#about' }, // Updated: Placeholder, assuming an about section or page
    { label: 'Our Products', href: '#products' }, // Updated: Placeholder, assuming a products section or page
    // Removed Testimonials and Pricing to match the user's image
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Bot className="h-7 w-7 text-primary" /> {/* Updated Icon */}
          <span className="text-xl font-bold text-foreground">
            <span className="text-primary">native</span> orange
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              prefetch={false}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-4">
            <Link href="#contact-demo"> {/* Updated href */}
              <CalendarDays className="mr-2 h-4 w-4" /> {/* Added Icon */}
              Book A Demo
            </Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-6">
                <Link href="/" className="flex items-center gap-2 mb-4" prefetch={false}>
                  <Bot className="h-7 w-7 text-primary" /> {/* Updated Icon */}
                  <span className="text-xl font-bold text-foreground">
                     <span className="text-primary">native</span> orange
                  </span>
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild size="lg" className="mt-4">
                  <Link href="#contact-demo"> {/* Updated href */}
                    <CalendarDays className="mr-2 h-4 w-4" /> {/* Added Icon */}
                    Book A Demo
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
