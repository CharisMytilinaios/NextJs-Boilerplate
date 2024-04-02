import React, { forwardRef, HTMLAttributes, ReactElement } from 'react';
import { cn } from '@/utils/lib';

const CardHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <div
      ref={ ref }
      className={ cn('flex flex-col space-y-1.5 p-6', className) }
      { ...props }
    />
  );
});

CardHeader.displayName = 'CardHeader';

export default CardHeader;
