'use client';

import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { cn } from '@/utils/lib';
import { Overlay } from '@radix-ui/react-alert-dialog';

const AlertDialogOverlay = forwardRef<
    ElementRef<typeof Overlay>,
    ComponentPropsWithoutRef<typeof Overlay>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <Overlay
      className={ cn(
        'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className,
      ) }
      { ...props }
      ref={ ref }
    />
  );
});

AlertDialogOverlay.displayName = 'AlertDialogOverlay';

export default AlertDialogOverlay;
