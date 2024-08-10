'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@/components';
import { cn } from '@/utils';
import { SunIcon, MoonIcon } from 'lucide-react';

export function SwitchTheme() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme('dark');
  }, []);

  if (!mounted) return null;

  const handleThemeChange = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <div
        className={cn(
          theme === 'light' ? ' text-slate-700' : 'text-neutral-200'
        )}
      >
        {theme === 'light' ? <SunIcon /> : <MoonIcon />}
      </div>
      <Switch id="theme-mode" onClick={handleThemeChange} />
    </div>
  );
}
