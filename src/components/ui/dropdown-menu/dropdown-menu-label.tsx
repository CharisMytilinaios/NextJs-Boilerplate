'use client';

import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { Label } from '@radix-ui/react-dropdown-menu';
import { cn } from '@/utils/lib';

const DropdownMenuLabel = forwardRef<
  ElementRef<typeof Label>,
  ComponentPropsWithoutRef<typeof Label> & {
  inset?: boolean
}
>(({ className, inset, ...props }, ref): ReactElement => {
  return (
    <Label
      ref={ ref }
      className={ cn(
        'px-2 py-1.5 text-sm font-semibold',
        inset && 'pl-8',
        className,
      ) }
      { ...props }
    />
  );
});

DropdownMenuLabel.displayName = 'DropdownMenuLabel';

export default DropdownMenuLabel;
