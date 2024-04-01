import React, { ComponentPropsWithoutRef, forwardRef, ReactElement } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/utils/lib';

const BreadcrumbLink = forwardRef<
    HTMLAnchorElement,
    ComponentPropsWithoutRef<'a'> & {
    asChild?: boolean
}
>(({ asChild, className, ...props }, ref): ReactElement => {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      ref={ ref }
      className={ cn('transition-colors hover:text-foreground', className) }
      { ...props }
    />
  );
});

BreadcrumbLink.displayName = 'BreadcrumbLink';

export default BreadcrumbLink;
