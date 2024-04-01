import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { SubTrigger } from '@radix-ui/react-dropdown-menu';
import { cn } from '@/utils/lib';
import { ChevronRight } from 'lucide-react';

const DropdownMenuSubTrigger = forwardRef<
  ElementRef<typeof SubTrigger>,
  ComponentPropsWithoutRef<typeof SubTrigger> & {
  inset?: boolean
}
>(({ className, inset, children, ...props }, ref): ReactElement => {
  return (
    <SubTrigger
      ref={ ref }
      className={ cn(
        'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
        inset && 'pl-8',
        className,
      ) }
      { ...props }
    >
      {children}
      <ChevronRight className='ml-auto h-4 w-4' />
    </SubTrigger>
  );
});

DropdownMenuSubTrigger.displayName = 'DropdownMenuSubTrigger';

export default DropdownMenuSubTrigger;
