import React from 'react';
import { Paragraph } from './paragraph';
import { MapPin } from 'lucide-react';
import { cn } from '@/utils';

interface LocationProps {
  location: string;
  className?: string;
}

export function Location({ location = 'Example', className }: LocationProps) {
  return (
    <Paragraph
      size="small"
      className={cn('grid grid-cols-[16px_1fr] gap-1', className)}
    >
      <MapPin size={16} />
      {location}
    </Paragraph>
  );
}
