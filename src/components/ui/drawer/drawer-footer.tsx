import React, { FC, HTMLAttributes } from 'react';
import { cn } from '@/utils/lib';

const DrawerFooter: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={ cn('mt-auto flex flex-col gap-2 p-4', className) }
      { ...props }
    />
  );
};

DrawerFooter.displayName = 'DrawerFooter';

export default DrawerFooter;
