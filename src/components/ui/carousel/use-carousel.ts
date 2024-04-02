'use client';

import { useContext } from 'react';
import { CarouselContextProps } from './types';
import { CarouselContext } from '.';

const useCarousel = (): CarouselContextProps => {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
};

export default useCarousel;
