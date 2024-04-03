import React, { FC, ReactElement } from 'react';
import Carousel from '@/components/ui/carousel';
import CarouselContent from '@/components/ui/carousel/carousel-content';
import CarouselItem from '@/components/ui/carousel/carousel-item';
import Card from '@/components/ui/card';
import CardContent from '@/components/ui/card/card-content';
import CarouselPrevious from '@/components/ui/carousel/carousel-previous';
import CarouselNext from '@/components/ui/carousel/carousel-next';

const CarouselExamples: FC = (): ReactElement => {
  return (
    <>
      <Carousel className='w-full max-w-xs'>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => {
            return (
            // eslint-disable-next-line react/no-array-index-key
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
      <Carousel
        className='w-full max-w-sm'
        opts={ {
          align: 'start',
        } }
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => {
            return (
            // eslint-disable-next-line react/no-array-index-key
              <CarouselItem key={ index } className='md:basis-1/2 lg:basis-1/3'>
                <div className='p-1'>
                  <Card>
                    <CardContent className='flex aspect-square items-center justify-center p-6'>
                      <span className='text-3xl font-semibold'>{index + 1}</span>
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
      <Carousel className='w-full max-w-sm'>
        <CarouselContent className='-ml-1'>
          {Array.from({ length: 5 }).map((_, index) => {
            return (
            // eslint-disable-next-line react/no-array-index-key
              <CarouselItem key={ index } className='pl-1 md:basis-1/2 lg:basis-1/3'>
                <div className='p-1'>
                  <Card>
                    <CardContent className='flex aspect-square items-center justify-center p-6'>
                      <span className='text-2xl font-semibold'>{index + 1}</span>
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
      <Carousel
        className='w-full max-w-xs'
        opts={ {
          align: 'start',
        } }
        orientation='vertical'
      >
        <CarouselContent className='-mt-1 h-[200px]'>
          {Array.from({ length: 5 }).map((_, index) => {
            return (
            // eslint-disable-next-line react/no-array-index-key
              <CarouselItem key={ index } className='pt-1 md:basis-1/2'>
                <div className='p-1'>
                  <Card>
                    <CardContent className='flex items-center justify-center p-6'>
                      <span className='text-3xl font-semibold'>{index + 1}</span>
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
    </>
  );
};

CarouselExamples.displayName = 'CarouselExamples';

export default CarouselExamples;
