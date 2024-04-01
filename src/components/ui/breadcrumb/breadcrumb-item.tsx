import React, { ComponentPropsWithoutRef, forwardRef, ReactElement } from 'react';
import { cn } from '@/utils/lib';

const BreadcrumbItem = forwardRef<
    HTMLLIElement,
    ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <li
      ref={ ref }
      className={ cn('inline-flex items-center gap-1.5', className) }
      { ...props }
    />
  );
});

BreadcrumbItem.displayName = 'BreadcrumbItem';

export default BreadcrumbItem;
