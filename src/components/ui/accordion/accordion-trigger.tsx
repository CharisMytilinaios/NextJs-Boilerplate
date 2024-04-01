'use client';

import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { Trigger, Header } from '@radix-ui/react-accordion';
import { cn } from '@/utils/lib';
import { ChevronDown } from 'lucide-react';

const AccordionTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  ComponentPropsWithoutRef<typeof Trigger>
>(({ className, children, ...props }, ref): ReactElement => {
  return (
    <Header className='flex'>
      <Trigger
        ref={ ref }
        className={ cn(
          'flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180',
          className,
        ) }
        { ...props }
      >
        {children}
        <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />
      </Trigger>
    </Header>
  );
});

AccordionTrigger.displayName = 'AccordionTrigger';

export default AccordionTrigger;
