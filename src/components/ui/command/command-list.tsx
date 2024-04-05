'use client';

import { Command as CommandPrimitive } from 'cmdk';
import { cn } from '@/utils/lib';
import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';

const CommandList = forwardRef<
    ElementRef<typeof CommandPrimitive.List>,
    ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <CommandPrimitive.List
      ref={ ref }
      className={ cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className) }
      { ...props }
    />
  );
});

CommandList.displayName = 'CommandList';

export default CommandList;
