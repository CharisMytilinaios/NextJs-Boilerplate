'use client';

import { FC, ReactElement, useCallback, useEffect, useState } from 'react';
import CommandDialog from '@/components/ui/command/command-dialog';
import CommandInput from '@/components/ui/command/command-input';
import CommandList from '@/components/ui/command/command-list';
import CommandEmpty from '@/components/ui/command/command-empty';
import CommandGroup from '@/components/ui/command/command-group';
import CommandItem from '@/components/ui/command/command-item';
import { Calculator, CreditCard, Settings, Smile, User, Calendar } from 'lucide-react';
import CommandSeparator from '@/components/ui/command/command-separator';
import CommandShortcut from '@/components/ui/command/command-shortcut';

const CommandExampleKeyExample: FC = (): ReactElement => {
  const [ open, setOpen ] = useState(false);

  const down = useCallback((e: KeyboardEvent) => {
    if ('j' === e.key && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setOpen((prevOpen) => {
        return !prevOpen;
      });
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', down);
    return () => { return document.removeEventListener('keydown', down); };
  }, [ down ]);

  return (
    <>
      <p className='text-sm text-muted-foreground'>
        Press
        {' '}
        <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
          <span className='text-xs'>⌘</span>
          J
        </kbd>
      </p>
      <CommandDialog onOpenChange={ setOpen } open={ open }>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Suggestions'>
            <CommandItem>
              <Calendar className='mr-2 h-4 w-4' />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile className='mr-2 h-4 w-4' />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator className='mr-2 h-4 w-4' />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Settings'>
            <CommandItem>
              <User className='mr-2 h-4 w-4' />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className='mr-2 h-4 w-4' />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className='mr-2 h-4 w-4' />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

CommandExampleKeyExample.displayName = 'CommandExampleKeyExample';

export default CommandExampleKeyExample;
