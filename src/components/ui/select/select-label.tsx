import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { Label } from '@radix-ui/react-select';
import { cn } from '@/utils/lib';

const SelectLabel = forwardRef<
    ElementRef<typeof Label>,
    ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <Label
      ref={ ref }
      className={ cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className) }
      { ...props }
    />
  );
});

SelectLabel.displayName = 'SelectLabel';

export default SelectLabel;
