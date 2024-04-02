'use client';

import React, { forwardRef, HTMLAttributes, ReactElement } from 'react';
import { cn } from '@/utils/lib';
import useCarousel from './use-carousel';

const CarouselContent = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref): ReactElement => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={ carouselRef } className='overflow-hidden'>
      <div
        ref={ ref }
        className={ cn(
          'flex',
          'horizontal' === orientation ? '-ml-4' : '-mt-4 flex-col',
          className,
        ) }
        { ...props }
      />
    </div>
  );
});

CarouselContent.displayName = 'CarouselContent';

export default CarouselContent;
