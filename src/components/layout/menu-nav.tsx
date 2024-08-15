'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/utils';
import { ROUTES as routes } from '@/constants/routes';
import { Container, SwitchTheme } from '@/components';

export function MenuNav() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 rounded-tl-md rounded-tr-md z-40 w-full backdrop-blur text-nowrap flex-none transition-colors duration-500 border-b border-slate-900/20 dark:border-slate-50/[0.2] bg-white/80 supports-backdrop-blur:bg-white/60 dark:bg-slate-900/80"
      translate="no"
    >
      <Container className="flex items-center justify-between py-4 px-4 lg:px-8">
        <ul className="flex items-center gap-4">
          {Object.entries(routes).map(([key, value]) => {
            const { path, label } = value;

            const isActive = path === pathname;

            return (
              <li key={key}>
                <Link
                  href={path}
                  className={cn(
                    'text-base text-slate-700 dark:text-slate-400 cursor-pointer hover:opacity-85',
                    isActive && 'text-primary-default dark:text-primary-dark'
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
    </nav>
  );
}
