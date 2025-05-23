import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-sans', // Using --font-sans to align with Tailwind's default sans key
});

export const metadata: Metadata = {
  title: 'SaaS Modernizer',
  description: 'Modernizing SaaS applications with style and efficiency.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(openSans.variable, "h-full")}>
      <body className="font-sans antialiased bg-background text-foreground flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
