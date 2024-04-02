import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { Separator } from '@radix-ui/react-select';
import { cn } from '@/utils/lib';

const SelectSeparator = forwardRef<
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

SelectSeparator.displayName = 'SelectSeparator';

export default SelectSeparator;
