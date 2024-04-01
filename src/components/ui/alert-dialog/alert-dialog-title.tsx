'use client';

import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { Title } from '@radix-ui/react-alert-dialog';
import { cn } from '@/utils/lib';

const AlertDialogTitle = forwardRef<
    ElementRef<typeof Title>,
    ComponentPropsWithoutRef<typeof Title>
>(({ className, children, ...props }, ref): ReactElement => {
  return (
    <Title
      ref={ ref }
      className={ cn('text-lg font-semibold', className) }
      { ...props }
    >
      {children}
    </Title>
  );
});

AlertDialogTitle.displayName = 'AlertDialogTitle';

export default AlertDialogTitle;
