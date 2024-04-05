import React, { FC, ReactElement } from 'react';
import Command from '@/components/ui/command';
import CommandInput from '@/components/ui/command/command-input';
import CommandList from '@/components/ui/command/command-list';
import CommandEmpty from '@/components/ui/command/command-empty';
import CommandGroup from '@/components/ui/command/command-group';
import CommandItem from '@/components/ui/command/command-item';
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react';
import CommandSeparator from '@/components/ui/command/command-separator';
import CommandShortcut from '@/components/ui/command/command-shortcut';

const CommandExamples: FC = (): ReactElement => {
  return (
    <Command className='rounded-lg border shadow-md'>
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
            <CommandShortcut>
              ⌘S
            </CommandShortcut>
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
    </Command>
  );
};

CommandExamples.displayName = 'CommandExamples';

export default CommandExamples;
