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
  small: 'text-md',
  large: 'text-3xl lg:text-4xl',
  medium: 'text-lg',
};

export function Title({
  children,
  className,
  size = 'medium',
  type = 'h2',
}: TitleProps) {
  const hRender = React.createElement(
    type as string,
    { className: cn(sizeClass[size], className) },
    children
  );

  return hRender;
}
