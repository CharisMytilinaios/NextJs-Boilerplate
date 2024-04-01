'use client';

import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { Fallback } from '@radix-ui/react-avatar';
import { cn } from '@/utils/lib';

const AvatarFallback = forwardRef<
    ElementRef<typeof Fallback>,
    ComponentPropsWithoutRef<typeof Fallback>
>(({ className, ...props }, ref) => {
  return (
    <Fallback
      ref={ ref }
      className={ cn(
        'flex h-full w-full items-center justify-center rounded-full bg-muted',
        className,
      ) }
      { ...props }
    />
  );
});

AvatarFallback.displayName = 'AvatarFallback';

export default AvatarFallback;
