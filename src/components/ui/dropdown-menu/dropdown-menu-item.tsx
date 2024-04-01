import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { Item } from '@radix-ui/react-dropdown-menu';
import { cn } from '@/utils/lib';

const DropdownMenuItem = forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item> & {
  inset?: boolean
}
>(({ className, inset, ...props }, ref): ReactElement => {
  return (
    <Item
      ref={ ref }
      className={ cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        inset && 'pl-8',
        className,
      ) }
      { ...props }
    />
  );
});

DropdownMenuItem.displayName = 'DropdownMenuItem';

export default DropdownMenuItem;
