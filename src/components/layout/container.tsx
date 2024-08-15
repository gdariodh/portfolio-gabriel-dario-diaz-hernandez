import React, { ReactNode } from 'react';
import { cn } from '@/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const baseClass = 'px-4 lg:px-8 max-w-7xl mx-auto';

export function Container({ children, className }: ContainerProps) {
  return <div className={cn(baseClass, className)}>{children}</div>;
}
