import Link from 'next/link';
import { MountainIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4" prefetch={false}>
              <MountainIcon className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">SaaS Modernizer</span>
            </Link>
            <p className="text-sm">
              Modernizing your SaaS application with cutting-edge design and robust performance.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="#solutions" className="hover:text-primary transition-colors">Solutions</Link></li>
              <li><Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border/60 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} SaaS Modernizer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
