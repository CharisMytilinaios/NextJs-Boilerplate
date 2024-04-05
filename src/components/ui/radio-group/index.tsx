'use client';

import React, { ComponentPropsWithoutRef, ElementRef } from 'react';
import { Root } from '@radix-ui/react-radio-group';
import { cn } from '@/utils/lib';

const RadioGroup = React.forwardRef<
    ElementRef<typeof Root>,
    ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => {
  return (
    <Root
      className={ cn('grid gap-2', className) }
      { ...props }
      ref={ ref }
    />
  );
});

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
