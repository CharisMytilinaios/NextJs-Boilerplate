'use client';

import { Command as CommandPrimitive } from 'cmdk';
import { cn } from '@/utils/lib';
import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';

const CommandSeparator = forwardRef<
    ElementRef<typeof CommandPrimitive.Separator>,
    ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <CommandPrimitive.Separator
      ref={ ref }
      className={ cn('-mx-1 h-px bg-border', className) }
      { ...props }
    />
  );
});

CommandSeparator.displayName = 'CommandSeparator';

export default CommandSeparator;
