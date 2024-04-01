import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/utils/lib';

const AlertTitle = forwardRef<
    HTMLParagraphElement,
    HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h5
      ref={ ref }
      className={ cn('mb-1 font-medium leading-none tracking-tight', className) }
      { ...props }
    >
      {children}
    </h5>
  );
});

AlertTitle.displayName = 'AlertTitle';

export default AlertTitle;
