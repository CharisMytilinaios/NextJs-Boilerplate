'use client';

import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { cn } from '@/utils/lib';
import { ScrollAreaScrollbar, ScrollAreaThumb } from '@radix-ui/react-scroll-area';

const ScrollBar = forwardRef<
    ElementRef<typeof ScrollAreaScrollbar>,
    ComponentPropsWithoutRef<typeof ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref): ReactElement => {
  return (
    <ScrollAreaScrollbar
      ref={ ref }
      className={ cn(
        'flex touch-none select-none transition-colors',
        'vertical' === orientation
            && 'h-full w-2.5 border-l border-l-transparent p-[1px]',
        'horizontal' === orientation
            && 'h-2.5 flex-col border-t border-t-transparent p-[1px]',
        className,
      ) }
      orientation={ orientation }
      { ...props }
    >
      <ScrollAreaThumb className='relative flex-1 rounded-full bg-border' />
    </ScrollAreaScrollbar>
  );
});

ScrollBar.displayName = 'Scrollbar';

export default ScrollBar;
