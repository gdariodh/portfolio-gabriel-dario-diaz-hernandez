import React, { ReactNode } from 'react';
import { cn } from '@/utils';
import { Size, SizeClassMap } from '@/models';

type TitleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleProps {
  children: ReactNode;
  className?: string;
  size?: Size;
  type?: TitleType;
}

const sizeClass: SizeClassMap = {
  small: 'text-sm',
  large: 'text-lg',
  medium: 'text-md',
};

const baseClass =
  'inline-block text-slate-900 tracking-tight dark:text-slate-200 font-[500]';

export function Title({
  children,
  className,
  size = 'medium',
  type = 'h2',
}: TitleProps) {
  const hRender = React.createElement(
    type as string,
    { className: cn(baseClass, sizeClass[size], className) },
    children
  );

  return hRender;
}
