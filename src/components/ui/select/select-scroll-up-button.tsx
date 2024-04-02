import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { ScrollUpButton } from '@radix-ui/react-select';
import { cn } from '@/utils/lib';
import { ChevronUp } from 'lucide-react';

const SelectScrollUpButton = forwardRef<
    ElementRef<typeof ScrollUpButton>,
    ComponentPropsWithoutRef<typeof ScrollUpButton>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <ScrollUpButton
      ref={ ref }
      className={ cn(
        'flex cursor-default items-center justify-center py-1',
        className,
      ) }
      { ...props }
    >
      <ChevronUp className='h-4 w-4' />
    </ScrollUpButton>
  );
});

SelectScrollUpButton.displayName = 'SelectScrollUpButton';

export default SelectScrollUpButton;
