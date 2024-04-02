import React, { forwardRef, HTMLAttributes, ReactElement } from 'react';
import { cn } from '@/utils/lib';

const CardFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <div
      ref={ ref }
      className={ cn('flex items-center p-6 pt-0', className) }
      { ...props }
    />
  );
});

CardFooter.displayName = 'CardFooter';

export default CardFooter;
