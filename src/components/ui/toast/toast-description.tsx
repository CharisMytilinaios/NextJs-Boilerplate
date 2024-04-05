import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { Description } from '@radix-ui/react-toast';
import { cn } from '@/utils/lib';

const ToastDescription = forwardRef<
    ElementRef<typeof Description>,
    ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => {
  return (
    <Description
      ref={ ref }
      className={ cn('text-sm opacity-90', className) }
      { ...props }
    />
  );
});

ToastDescription.displayName = 'ToastDescription';

export default ToastDescription;
