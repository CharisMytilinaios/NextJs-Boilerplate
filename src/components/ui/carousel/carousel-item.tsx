'use client';

import React, { forwardRef, HTMLAttributes, ReactElement } from 'react';
import { cn } from '@/utils/lib';
import useCarousel from './use-carousel';

const CarouselItem = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref): ReactElement => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ ref }
      aria-roledescription='slide'
      className={ cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        'horizontal' === orientation ? 'pl-4' : 'pt-4',
        className,
      ) }
      role='group'
      { ...props }
    />
  );
});

CarouselItem.displayName = 'CarouselItem';

export default CarouselItem;
