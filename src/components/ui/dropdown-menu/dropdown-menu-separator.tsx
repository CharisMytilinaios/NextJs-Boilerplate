'use client';

import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { cn } from '@/utils/lib';

const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof Separator>,
  ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <Separator
      ref={ ref }
      className={ cn('-mx-1 my-1 h-px bg-muted', className) }
      { ...props }
    />
  );
});

DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';

export default DropdownMenuSeparator;
