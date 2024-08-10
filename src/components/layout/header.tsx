'use client';
import { Container, SwitchTheme } from '@/components';
import { cn } from '@/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Routes = {
  home: {
    path: '/',
    label: 'Home',
  },
  workExperiences: {
    path: '/work-experiences',
    label: 'Work Experiences',
  },
  projects: {
    path: '/projects',
    label: 'Personal Projects',
  },
  contact: {
    path: '/contact',
    label: 'Contact',
  },
};

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur text-nowrap flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <Container className="flex items-center justify-between  py-4 ">
        <ul className="flex items-center ">
          {Object.entries(Routes).map(([key, value]) => {
            const { path, label } = value;
            const isActive = path === pathname;

            return (
              <li key={key} className="mx-2">
                <Link
                  href={path}
                  className={cn(
                    'text-base cursor-pointer',
                    isActive && 'text-primary'
                  )}
                >
                  {label.toLowerCase()}
                </Link>
              </li>
            );
          })}
        </ul>

        <SwitchTheme />
      </Container>
    </header>
  );
}
