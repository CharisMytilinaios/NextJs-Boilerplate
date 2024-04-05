'use client';

import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { cn } from '@/utils/lib';

const Command = forwardRef<
    ElementRef<typeof CommandPrimitive>,
    ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <CommandPrimitive
      ref={ ref }
      className={ cn(
        'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
        className,
      ) }
      { ...props }
    />
  );
});

Command.displayName = 'Command';

export default Command;
