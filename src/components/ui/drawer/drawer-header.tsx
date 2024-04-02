import React, { FC, HTMLAttributes } from 'react';
import { cn } from '@/utils/lib';

const DrawerHeader: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={ cn('grid gap-1.5 p-4 text-center sm:text-left', className) }
      { ...props }
    />
  );
};

DrawerHeader.displayName = 'DrawerHeader';
export default DrawerHeader;
