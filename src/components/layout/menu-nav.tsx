'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/utils';
import { ROUTES as routes } from '@/constants/routes';
import { Container, SwitchTheme, ActiveLink } from '@/components';

export function MenuNav() {
  const pathname = usePathname();

  const isKeyInPathname = (key: string) => {
    return pathname.includes(key);
  };

  const dynamicRouteStatus = {
    experience: isKeyInPathname('experience'),
  };

  const isAnyDynamicRouteActive = Object.values(dynamicRouteStatus).some(
    (isActive) => isActive,
  );

  return (
    <nav
      className={cn(
        'w-full sticky top-0 z-40 duration-500 text-nowrap transition-colors',
        'border-b border-slate-900/20 dark:border-slate-50/[0.2] dark:bg-slate-900/80 bg-white/80',
        'rounded-tl-md rounded-tr-md',
      )}
      translate="no"
    >
      <Container
        className={cn(
          'flex items-center justify-between py-4 px-4 lg:px-8',
          'backdrop-blur supports-backdrop-blur:bg-white/60',
        )}
      >
        <ul className="flex items-center gap-4">
          {Object.entries(routes).map(([key, value]) => {
            const { path, label } = value;

            const isActive = path === pathname;

            return (
              <li key={key}>
                <ActiveLink link={{ label, path, isActive }} />
              </li>
            );
          })}

          {isAnyDynamicRouteActive &&
            Object.entries(dynamicRouteStatus).map(([key, isActive]) => {
              if (!isActive) {
                return null;
              }

              return (
                <li key={key}>
                  <ActiveLink link={{ label: key, path: pathname, isActive }} />
                </li>
              );
            })}
        </ul>

        <SwitchTheme />
      </Container>
    </nav>
  );
}
