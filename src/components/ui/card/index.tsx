import React, { forwardRef, HTMLAttributes, ReactElement } from 'react';
import { cn } from '@/utils/lib';

const Card = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <div
      ref={ ref }
      className={ cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        className,
      ) }
      { ...props }
    />
  );
});

Card.displayName = 'Card';

export default Card;
