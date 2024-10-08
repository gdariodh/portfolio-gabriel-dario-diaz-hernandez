import React, { ReactNode } from 'react';
import { cn } from '@/utils';
import { Size, SizeClassMap } from '@/models';

interface ParagraphProps {
  children: ReactNode;
  className?: string;
  size?: Size;
}

const sizeClass: SizeClassMap = {
  small: 'text-sm',
  large: 'text-lg',
  medium: 'text-base',
};

const baseClass = 'text-slate-700 dark:text-slate-400';

export function Paragraph({
  children,
  className,
  size = 'medium',
}: ParagraphProps) {
  return (
    <p className={cn(baseClass, sizeClass[size], className)}>{children}</p>
  );
}
