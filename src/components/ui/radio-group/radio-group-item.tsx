'use client';

import React, { ComponentPropsWithoutRef, ElementRef } from 'react';
import { Item, Indicator } from '@radix-ui/react-radio-group';
import { cn } from '@/utils/lib';
import { Circle } from 'lucide-react';

const RadioGroupItem = React.forwardRef<
    ElementRef<typeof Item>,
    ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, ref) => {
  return (
    <Item
      ref={ ref }
      className={ cn(
        'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      ) }
      { ...props }
    >
      <Indicator className='flex items-center justify-center'>
        <Circle className='h-2.5 w-2.5 fill-current text-current' />
      </Indicator>
    </Item>
  );
});

RadioGroupItem.displayName = 'RadioGroupItem';

export default RadioGroupItem;
