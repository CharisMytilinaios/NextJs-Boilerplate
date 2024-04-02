'use client';

import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { Overlay } from '@radix-ui/react-dialog';
import { cn } from '@/utils/lib';

const DialogOverlay = forwardRef<
    ElementRef<typeof Overlay>,
    ComponentPropsWithoutRef<typeof Overlay>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <Overlay
      ref={ ref }
      className={ cn(
        'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className,
      ) }
      { ...props }
    />
  );
});

DialogOverlay.displayName = 'DialogOverlay';

export default DialogOverlay;
