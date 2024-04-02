'use client';

import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { Description } from '@radix-ui/react-dialog';
import { cn } from '@/utils/lib';

const DialogDescription = forwardRef<
    ElementRef<typeof Description>,
    ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <Description
      ref={ ref }
      className={ cn('text-sm text-muted-foreground', className) }
      { ...props }
    />
  );
});

DialogDescription.displayName = 'DialogDescription';

export default DialogDescription;
