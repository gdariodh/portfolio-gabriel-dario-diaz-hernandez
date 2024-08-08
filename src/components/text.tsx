import React from 'react';
import { cn } from '@/utilities/style-classes-merge.utility';

enum ETextType {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

interface ITextProps {
  text: string;
  type?: keyof typeof ETextType;
}

export function Text({ text, type = 'medium' }: ITextProps) {
  if (type === 'large') {
    return <p className={cn('text-lg')}>{text}</p>;
  }

  if (type === 'small') {
    return <p className={cn('text-sm')}>{text}</p>;
  }

  return <p>{text}</p>;
}
