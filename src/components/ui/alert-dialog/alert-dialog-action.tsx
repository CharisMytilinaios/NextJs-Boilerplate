'use client';

import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { cn } from '@/utils/lib';
import { Action } from '@radix-ui/react-alert-dialog';
import buttonVariants from '@/components/ui/button/button-variants';

const AlertDialogAction = forwardRef<
    ElementRef<typeof Action>,
    ComponentPropsWithoutRef<typeof Action>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <Action
      ref={ ref }
      className={ cn(buttonVariants(), className) }
      { ...props }
    />
  );
});

AlertDialogAction.displayName = 'AlertDialogAction';

export default AlertDialogAction;
