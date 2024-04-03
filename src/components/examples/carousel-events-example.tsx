'use client';

import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { CarouselApi } from '@/components/ui/carousel/types';
import Carousel from '@/components/ui/carousel';
import CarouselContent from '@/components/ui/carousel/carousel-content';
import CarouselItem from '@/components/ui/carousel/carousel-item';
import Card from '@/components/ui/card';
import CardContent from '@/components/ui/card/card-content';
import CarouselPrevious from '@/components/ui/carousel/carousel-previous';
import CarouselNext from '@/components/ui/carousel/carousel-next';
import Autoplay from 'embla-carousel-autoplay';

const CarouselEventsExample: FC = (): ReactElement => {
  const [ api, setApi ] = useState<CarouselApi>();
  const [ current, setCurrent ] = useState(0);
  const [ count, setCount ] = useState(0);

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      console.log('current');
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [ api ]);

  return (
    <div>
      <Carousel
        className='w-full max-w-xs'
        onMouseEnter={ plugin.current.stop }
        onMouseLeave={ plugin.current.reset }
        plugins={ [ plugin.current ] }
        setApi={ setApi }
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => {
            return (
            // eslint-disable-next-line react/no-array-index-key
              <CarouselItem key={ index }>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-4xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className='py-2 text-center text-sm text-muted-foreground'>
        Slide
        {' '}
        {current}
        {' '}
        of
        {' '}
        {count}
      </div>
    </div>
  );
};

CarouselEventsExample.displayName = 'CarouselEventsExample';

export default CarouselEventsExample;
