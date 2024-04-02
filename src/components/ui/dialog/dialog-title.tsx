'use client';

import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { Title } from '@radix-ui/react-dialog';
import { cn } from '@/utils/lib';

const DialogTitle = forwardRef<
    ElementRef<typeof Title>,
    ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <Title
      ref={ ref }
      className={ cn(
        'text-lg font-semibold leading-none tracking-tight',
        className,
      ) }
      { ...props }
    />
  );
});

DialogTitle.displayName = 'DialogTitle';

export default DialogTitle;
