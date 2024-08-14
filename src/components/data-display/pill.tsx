import { Size, SizeClassMap } from '@/models';
import { cn } from '@/utils';

type Color = 'primary';
export type ColorClassMap = Record<Color, string>;

interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
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
  primary: 'text-white bg-slate-500/85 dark:bg-white/10',
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
