'use client';

import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { Root } from '@radix-ui/react-avatar';
import { cn } from '@/utils/lib';

const Avatar = forwardRef<
    ElementRef<typeof Root>,
    ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <Root
      ref={ ref }
      className={ cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
        className,
      ) }
      { ...props }
    />
  );
});

Avatar.displayName = 'Avatar';
export default Avatar;
