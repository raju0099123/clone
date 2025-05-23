import type { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface IconCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function IconCard({ icon, title, description, className }: IconCardProps) {
  return (
    <Card className={cn("h-full shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1", className)}>
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        <div className="bg-primary/10 text-primary p-3 rounded-lg">
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground/70">{description}</p>
      </CardContent>
    </Card>
  );
}
