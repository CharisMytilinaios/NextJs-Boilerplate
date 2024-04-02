import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '@/utils/lib';

const DrawerDescription = forwardRef<
    ElementRef<typeof DrawerPrimitive.Description>,
    ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => {
  return (
    <DrawerPrimitive.Description
      ref={ ref }
      className={ cn('text-sm text-muted-foreground', className) }
      { ...props }
    />
  );
});

DrawerDescription.displayName = 'DrawerDescription';

export default DrawerDescription;
