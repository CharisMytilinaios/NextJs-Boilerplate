import React, { ComponentProps, FC } from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

const Drawer: FC<ComponentProps<typeof DrawerPrimitive.Root>> = ({
  shouldScaleBackground = true,
  ...props
}: ComponentProps<typeof DrawerPrimitive.Root>) => {
  return (
    <DrawerPrimitive.Root
      shouldScaleBackground={ shouldScaleBackground }
      { ...props }
    />
  );
};

Drawer.displayName = 'Drawer';

export default Drawer;
