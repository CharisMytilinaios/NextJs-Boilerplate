'use client';

import React, {
  createContext,
  forwardRef,
  HTMLAttributes,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@/utils/lib';
import { CarouselApi, CarouselContextProps, CarouselProps } from './types';

export const CarouselContext = createContext<CarouselContextProps | null>(null);

const Carousel = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref,
  ): ReactElement => {
    const [ carouselRef, api ] = useEmblaCarousel(
      {
        ...opts,
        axis: 'horizontal' === orientation ? 'x' : 'y',
      },
      plugins,
    );
    const [ canScrollPrev, setCanScrollPrev ] = useState(false);
    const [ canScrollNext, setCanScrollNext ] = useState(false);

    const onSelect = useCallback((carouselApi: CarouselApi) => {
      if (!carouselApi) {
        return;
      }
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    }, []);

    const scrollPrev = useCallback(() => {
      api?.scrollPrev();
    }, [ api ]);

    const scrollNext = useCallback(() => {
      api?.scrollNext();
    }, [ api ]);

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        event.preventDefault();
        switch (event.key) {
          case 'ArrowLeft':
            scrollPrev();
            break;
          case 'ArrowRight':
            scrollNext();
            break;
          default:
            break;
        }
      },
      [ scrollPrev, scrollNext ],
    );

    useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [ api, setApi ]);

    useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on('reInit', onSelect);
      api.on('select', onSelect);
      // eslint-disable-next-line consistent-return
      return () => {
        api?.off('select', onSelect);
      };
    }, [ api, onSelect ]);

    const carouselValue = useMemo(() => {
      return {
        carouselRef,
        api,
        opts,
        orientation: orientation || ('y' === opts?.axis ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      };
    }, [ api, canScrollNext, canScrollPrev, carouselRef, opts, orientation, scrollNext, scrollPrev ]);

    return (
      <CarouselContext.Provider
        value={ carouselValue }
      >
        <div
          ref={ ref }
          aria-roledescription='carousel'
          className={ cn('relative', className) }
          onKeyDownCapture={ handleKeyDown }
          role='region'
          { ...props }
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);

Carousel.displayName = 'Carousel';

export default Carousel;
