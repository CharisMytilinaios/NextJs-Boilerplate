'use client';

import React, { FC, ReactElement, useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Carousel from '@/components/ui/carousel';
import CarouselContent from '@/components/ui/carousel/carousel-content';
import CarouselItem from '@/components/ui/carousel/carousel-item';
import Card from '@/components/ui/card';
import CardContent from '@/components/ui/card/card-content';
import CarouselPrevious from '@/components/ui/carousel/carousel-previous';
import CarouselNext from '@/components/ui/carousel/carousel-next';

const CarouselAutoplayExample: FC = (): ReactElement => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      className='w-full max-w-xs'
      onMouseEnter={ plugin.current.stop }
      onMouseLeave={ plugin.current.reset }
      plugins={ [ plugin.current ] }
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => {
          return (
            <CarouselItem key={ index }>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-4xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

CarouselAutoplayExample.displayName = 'CarouselAutoplayExample';

export default CarouselAutoplayExample;
