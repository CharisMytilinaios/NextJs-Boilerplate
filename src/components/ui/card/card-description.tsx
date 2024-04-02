import React, { forwardRef, HTMLAttributes, ReactElement } from 'react';
import { cn } from '@/utils/lib';

const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref): ReactElement => {
  return (
    <p
      ref={ ref }
      className={ cn('text-sm text-muted-foreground', className) }
      { ...props }
    >
      {children}
    </p>
  );
});

CardDescription.displayName = 'CardDescription';

export default CardDescription;
