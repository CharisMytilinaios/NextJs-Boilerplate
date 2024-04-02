import React, { forwardRef, HTMLAttributes, ReactElement } from 'react';
import { cn } from '@/utils/lib';

const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <div ref={ ref } className={ cn('p-6 pt-0', className) } { ...props } />
  );
});

CardContent.displayName = 'CardContent';

export default CardContent;
