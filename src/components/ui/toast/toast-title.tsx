import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { Title } from '@radix-ui/react-toast';
import { cn } from '@/utils/lib';

const ToastTitle = forwardRef<
    ElementRef<typeof Title>,
    ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <Title
      ref={ ref }
      className={ cn('text-sm font-semibold', className) }
      { ...props }
    />
  );
});

ToastTitle.displayName = 'ToastTitle';

export default ToastTitle;
