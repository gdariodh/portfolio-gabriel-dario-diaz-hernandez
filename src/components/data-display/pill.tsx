import { Size, SizeClassMap } from '@/models';
import { cn } from '@/utils';

type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type ColorClassMap = Record<Color, string>;

interface PillProps {
  children: React.ReactNode;
  size?: Size;
  color?: Color;
  className?: string;
}

const sizeClassMap: SizeClassMap = {
  small: 'text-xs',
  medium: 'text-sm',
  large: 'text-base',
};

const colorClassMap: ColorClassMap = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
  success: 'bg-success text-white',
  warning: 'bg-warning text-white',
  danger: 'bg-danger text-white',
};

export function Pill({
  children,
  size = 'medium',
  color = 'primary',
  className,
}: PillProps) {
  return (
    <div
      className={cn(
        'inline-flex rounded-full px-2 py-1',
        sizeClassMap[size],
        colorClassMap[color],
        className
      )}
    >
      {children}
    </div>
  );
}
