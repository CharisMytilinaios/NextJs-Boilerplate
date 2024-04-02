'use client';

import { cn } from '@/utils/lib';
import { ArrowRight } from 'lucide-react';
import { ComponentProps, forwardRef, ReactElement } from 'react';
import Button from '@/components/ui/button';
import useCarousel from './use-carousel';

const CarouselNext = forwardRef<
    HTMLButtonElement,
    ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref): ReactElement => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ ref }
      className={ cn(
        'absolute h-8 w-8 rounded-full',
        'horizontal' === orientation
          ? '-right-12 top-1/2 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      ) }
      disabled={ !canScrollNext }
      onClick={ scrollNext }
      size={ size }
      variant={ variant }
      { ...props }
    >
      <ArrowRight className='h-4 w-4' />
      <span className='sr-only'>Next slide</span>
    </Button>
  );
});

CarouselNext.displayName = 'CarouselNext';

export default CarouselNext;
