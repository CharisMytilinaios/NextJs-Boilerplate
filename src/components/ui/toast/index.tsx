import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { Root } from '@radix-ui/react-toast';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/lib';
import toastVariants from './toast-variants';

const Toast = forwardRef<
    ElementRef<typeof Root>,
    ComponentPropsWithoutRef<typeof Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref): ReactElement => {
  return (
    <Root
      ref={ ref }
      className={ cn(toastVariants({ variant }), className) }
      { ...props }
    />
  );
});

Toast.displayName = 'Toast';

export default Toast;
