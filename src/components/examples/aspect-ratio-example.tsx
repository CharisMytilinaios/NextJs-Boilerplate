import type { FC, ReactElement } from 'react';
import AspectRatio from '@/components/ui/aspect-ratio';
import Image from 'next/image';

const AspectRatioExample: FC = (): ReactElement => {
  return (
    <AspectRatio className='bg-muted' ratio={ 16 / 9 }>
      <Image
        alt='Photo by Drew Beamer'
        className='rounded-md object-cover'
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80'
      />
    </AspectRatio>
  );
};

AspectRatioExample.displayName = 'AspectRatioExample';

export default AspectRatioExample;
