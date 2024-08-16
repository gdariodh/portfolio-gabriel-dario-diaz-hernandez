import React from 'react';
import { cn } from '@/utils';
import Link from 'next/link';

interface ActiveLinkProps {
  link: {
    label: string;
    path: string;
    isActive: boolean;
  };
}

export function ActiveLink({ link }: ActiveLinkProps) {
  const { label, path, isActive } = link;

  return (
    <Link
      href={path}
      className={cn(
        'text-base text-slate-700 dark:text-slate-400 cursor-pointer hover:opacity-85 transition-all ease-in duration-200 relative',
        isActive && 'text-primary-default dark:text-white active-link',
      )}
    >
      {label}
    </Link>
  );
}
