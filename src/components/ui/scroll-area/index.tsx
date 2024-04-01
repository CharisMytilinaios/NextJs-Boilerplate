'use client';

import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { Root, Viewport, Corner } from '@radix-ui/react-scroll-area';
import { cn } from '@/utils/lib';
import Scrollbar from './scrollbar';

const ScrollArea = forwardRef<
    ElementRef<typeof Root>,
    ComponentPropsWithoutRef<typeof Root>
>(({ className, children, ...props }, ref): ReactElement => {
  return (
    <Root
      ref={ ref }
      className={ cn('relative overflow-hidden', className) }
      { ...props }
    >
      <Viewport className='h-full w-full rounded-[inherit]'>
        {children}
      </Viewport>
      <Scrollbar />
      <Corner />
    </Root>
  );
});
ScrollArea.displayName = 'ScrollArea';

export default ScrollArea;
