import React, { forwardRef, HTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/lib';
import alertVariants from './alert-variants';

const Alert = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, children, variant, ...props }, ref) => {
  return (
    <div
      ref={ ref }
      className={ cn(alertVariants({ variant }), className) }
      role='alert'
      { ...props }
    >
      {children}
    </div>
  );
});

Alert.displayName = 'Alert';

export default Alert;
