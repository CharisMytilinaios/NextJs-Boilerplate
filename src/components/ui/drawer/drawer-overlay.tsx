import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '@/utils/lib';

const DrawerOverlay = forwardRef<
    ElementRef<typeof DrawerPrimitive.Overlay>,
    ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <DrawerPrimitive.Overlay
      ref={ ref }
      className={ cn('fixed inset-0 z-50 bg-black/80', className) }
      { ...props }
    />
  );
});

DrawerOverlay.displayName = 'DrawerOverlay';

export default DrawerOverlay;
