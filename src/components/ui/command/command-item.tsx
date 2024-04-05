'use client';

import { Command as CommandPrimitive } from 'cmdk';
import { cn } from '@/utils/lib';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const CommandItem = forwardRef<
    ElementRef<typeof CommandPrimitive.Item>,
    ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <CommandPrimitive.Item
      ref={ ref }
      className={ cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled="true"]:pointer-events-none data-[disabled="true"]:opacity-50',
        className,
      ) }
      { ...props }
    />
  );
});

CommandItem.displayName = 'CommandItem';

export default CommandItem;
