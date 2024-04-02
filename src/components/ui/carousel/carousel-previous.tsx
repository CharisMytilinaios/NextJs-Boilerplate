'use client';

import React, { ComponentProps, forwardRef, ReactElement } from 'react';
import { cn } from '@/utils/lib';
import { ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/button';
import useCarousel from './use-carousel';

const CarouselPrevious = forwardRef<
    HTMLButtonElement,
    ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref): ReactElement => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ ref }
      className={ cn(
        'absolute  h-8 w-8 rounded-full',
        'horizontal' === orientation
          ? '-left-12 top-1/2 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      ) }
      disabled={ !canScrollPrev }
      onClick={ scrollPrev }
      size={ size }
      variant={ variant }
      { ...props }
    >
      <ArrowLeft className='h-4 w-4' />
      <span className='sr-only'>Previous slide</span>
    </Button>
  );
});

CarouselPrevious.displayName = 'CarouselPrevious';

export default CarouselPrevious;
