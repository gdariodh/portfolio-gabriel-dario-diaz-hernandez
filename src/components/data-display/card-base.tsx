import * as React from 'react';
import { cn } from '@/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

const cardVariants = cva(
  'block p-4 border-slate-900/20 dark:border-slate-50/[0.1] bg-white/70 dark:bg-white/5 rounded-lg transition-colors ease-in duration-200',
  {
    variants: {
      variant: {
        primary:
          'border-b-2 dark:hover:bg-slate-900 dark:hover:border-b dark:hover:border-b-primary dark:border-0 border-2 hover:border-slate-600',
        secondary: 'border-slate-600 dark:border-slate-600 border-2',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

interface CardBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  asChild?: boolean;
}

const CardBase = React.forwardRef<HTMLDivElement, CardBaseProps>(
  ({ className, variant, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';

    return (
      <Comp
        className={cn(cardVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
CardBase.displayName = 'CardBase';

export { CardBase, cardVariants };
