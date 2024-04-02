import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '@/utils/lib';

const DrawerTitle = forwardRef<
    ElementRef<typeof DrawerPrimitive.Title>,
    ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <DrawerPrimitive.Title
      ref={ ref }
      className={ cn(
        'text-lg font-semibold leading-none tracking-tight',
        className,
      ) }
      { ...props }
    />
  );
});

DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

export default DrawerTitle;
