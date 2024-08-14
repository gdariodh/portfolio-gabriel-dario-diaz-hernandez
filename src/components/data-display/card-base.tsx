import React, { ReactNode } from 'react';
import { cn } from '@/utils';

interface CardBaseProps extends  {
  children: ReactNode;
  className?: string;
}

const baseClass =
  'block border-b-2 p-4 border-slate-900/10 dark:border-slate-50/[0.1] bg-white/70 dark:bg-white/5 rounded-lg';

export function CardBase({ children, className }: CardBaseProps) {
  return <div className={cn(baseClass, className)}>{children}</div>;
}
