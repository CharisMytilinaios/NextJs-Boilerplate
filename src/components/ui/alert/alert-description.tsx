import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/utils/lib';

const AlertDescription = forwardRef<
    HTMLParagraphElement,
    HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ ref }
      className={ cn('text-sm [&_p]:leading-relaxed', className) }
      { ...props }
    >
      {children}
    </div>
  );
});

AlertDescription.displayName = 'AlertDescription';

export default AlertDescription;
