'use client';

import { FC, ReactElement, useState } from 'react';
import Popover from '@/components/ui/popover';
import PopoverTrigger from '@/components/ui/popover/popover-trigger';
import Button from '@/components/ui/button';
import { Check, ChevronsUpDown } from 'lucide-react';
import PopoverContent from '@/components/ui/popover/popover-content';
import Command from '@/components/ui/command';
import CommandInput from '@/components/ui/command/command-input';
import CommandEmpty from '@/components/ui/command/command-empty';
import CommandGroup from '@/components/ui/command/command-group';
import CommandItem from '@/components/ui/command/command-item';
import { cn } from '@/utils/lib';
import CommandList from '@/components/ui/command/command-list';

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];

const ComboboxExampleSimple: FC = (): ReactElement => {
  const [ open, setOpen ] = useState(false);
  const [ value, setValue ] = useState('');

  return (
    <Popover onOpenChange={ setOpen } open={ open }>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={ open }
          className='w-[200px] justify-between'
          role='combobox'
          variant='outline'
        >
          {value
            ? frameworks.find((framework) => { return framework.value === value; })?.label
            : 'Select framework...'}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput placeholder='Search framework...' />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => {
                return (
                  <CommandItem
                    key={ framework.value }
                    onSelect={ (currentValue) => {
                      setValue(currentValue === value ? '' : currentValue);
                      setOpen(false);
                    } }
                    value={ framework.value }
                  >
                    <Check
                      className={ cn(
                        'mr-2 h-4 w-4',
                        value === framework.value ? 'opacity-100' : 'opacity-0',
                      ) }
                    />
                    {framework.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

ComboboxExampleSimple.displayName = 'ComboboxExampleSimple';

export default ComboboxExampleSimple;
