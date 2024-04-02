'use client';

import { useTheme } from 'next-themes';
import type { FC, ReactElement } from 'react';
import { useCallback } from 'react';
import DropdownMenu from '@/components/ui/dropdown-menu';
import DropdownMenuTrigger from '@/components/ui/dropdown-menu/dropdown-menu-trigger';
import Button from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import DropdownMenuContent from '@/components/ui/dropdown-menu/dropdown-menu-content';
import DropdownMenuItem from '@/components/ui/dropdown-menu/dropdown-menu-item';
import { Theme } from '@/types';

const ThemeToggle: FC = (): ReactElement => {
  const { setTheme } = useTheme();

  const toggleTheme = useCallback((theme: Theme) => {
    return () => {
      setTheme(theme);
    };
  }, [ setTheme ]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size='icon' variant='outline'>
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={ toggleTheme(Theme.LIGHT) }>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={ toggleTheme(Theme.DARK) }>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={ toggleTheme(Theme.SYSTEM) }>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
