'use client';

import { Command as CommandPrimitive } from 'cmdk';
import { cn } from '@/utils/lib';
import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';

const CommandGroup = forwardRef<
    ElementRef<typeof CommandPrimitive.Group>,
    ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <CommandPrimitive.Group
      ref={ ref }
      className={ cn(
        'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
        className,
      ) }
      { ...props }
    />
  );
});

CommandGroup.displayName = 'CommandGroup';

export default CommandGroup;
