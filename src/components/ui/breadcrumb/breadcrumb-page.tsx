import React, { ComponentPropsWithoutRef, forwardRef, ReactElement } from 'react';
import { cn } from '@/utils/lib';

const BreadcrumbPage = forwardRef<
    HTMLSpanElement,
    ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <span
      ref={ ref }
      aria-current='page'
      aria-disabled='true'
      className={ cn('font-normal text-foreground', className) }
      role='link'
      { ...props }
    />
  );
});

BreadcrumbPage.displayName = 'BreadcrumbPage';

export default BreadcrumbPage;
