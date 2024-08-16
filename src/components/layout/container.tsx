import React, { ReactNode } from 'react';
import { cn } from '@/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const baseClass = 'max-w-6xl mx-auto';

export function Container({ children, className }: ContainerProps) {
  return <div className={cn(baseClass, className)}>{children}</div>;
}
