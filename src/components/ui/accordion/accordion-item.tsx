'use client';

import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { Item } from '@radix-ui/react-accordion';
import { cn } from '@/utils/lib';

const AccordionItem = forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <Item
      ref={ ref }
      className={ cn('border-b', className) }
      { ...props }
    />
  );
});

AccordionItem.displayName = 'AccordionItem';

export default AccordionItem;
