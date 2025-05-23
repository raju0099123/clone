import Link from 'next/link';
import { Bot } from 'lucide-react'; // Changed MountainIcon to Bot

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground border-t border-border/40">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4" prefetch={false}>
              <Bot className="h-6 w-6 text-primary" /> {/* Updated Icon */}
              <span className="text-xl font-bold text-foreground">
                <span className="text-primary">native</span> orange
              </span>
            </Link>
            <p className="text-sm">
              Underwriting Products Powered by Generative AI.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#products" className="hover:text-primary transition-colors">Our Products</Link></li>
              <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="#solutions" className="hover:text-primary transition-colors">Solutions</Link></li>
              {/* Removed Pricing, kept Features/Solutions as they might be separate sections */}
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
            &copy; {new Date().getFullYear()} native orange. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
