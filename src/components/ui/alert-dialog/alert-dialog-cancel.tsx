'use client';

import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { cn } from '@/utils/lib';
import { Cancel } from '@radix-ui/react-alert-dialog';
import buttonVariants from '@/components/ui/button/button-variants';

const AlertDialogCancel = forwardRef<
    ElementRef<typeof Cancel>,
    ComponentPropsWithoutRef<typeof Cancel>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <Cancel
      ref={ ref }
      className={ cn(
        buttonVariants({ variant: 'outline' }),
        'mt-2 sm:mt-0',
        className,
      ) }
      { ...props }
    />
  );
});

AlertDialogCancel.displayName = 'AlertDialogCancel';

export default AlertDialogCancel;
