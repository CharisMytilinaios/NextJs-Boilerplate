import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { ScrollDownButton } from '@radix-ui/react-select';
import { cn } from '@/utils/lib';
import { ChevronDown } from 'lucide-react';

const SelectScrollDownButton = forwardRef<
    ElementRef<typeof ScrollDownButton>,
    ComponentPropsWithoutRef<typeof ScrollDownButton>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <ScrollDownButton
      ref={ ref }
      className={ cn(
        'flex cursor-default items-center justify-center py-1',
        className,
      ) }
      { ...props }
    >
      <ChevronDown className='h-4 w-4' />
    </ScrollDownButton>
  );
});

SelectScrollDownButton.displayName = 'SelectScrollDownButton';

export default SelectScrollDownButton;
