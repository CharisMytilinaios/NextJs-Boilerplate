'use client';

import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { Description } from '@radix-ui/react-alert-dialog';
import { cn } from '@/utils/lib';

const AlertDialogDescription = forwardRef<
    ElementRef<typeof Description>,
    ComponentPropsWithoutRef<typeof Description>
>(({ className, children, ...props }, ref): ReactElement => {
  return (
    <Description
      ref={ ref }
      className={ cn('text-sm text-muted-foreground', className) }
      { ...props }
    >
      {children}
    </Description>
  );
});

AlertDialogDescription.displayName = 'AlertDialogDescription';

export default AlertDialogDescription;
