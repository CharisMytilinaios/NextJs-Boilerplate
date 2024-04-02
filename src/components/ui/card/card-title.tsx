import React, { forwardRef, HTMLAttributes, ReactElement } from 'react';
import { cn } from '@/utils/lib';

const CardTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref): ReactElement => {
  return (
    <h3
      ref={ ref }
      className={ cn(
        'text-2xl font-semibold leading-none tracking-tight',
        className,
      ) }
      { ...props }
    >
      {children}
    </h3>
  );
});

CardTitle.displayName = 'CardTitle';

export default CardTitle;
