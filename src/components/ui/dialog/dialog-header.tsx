import React, { FC, HTMLAttributes, ReactElement } from 'react';
import { cn } from '@/utils/lib';

const DialogHeader: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): ReactElement => {
  return (
    <div
      className={ cn(
        'flex flex-col space-y-1.5 text-center sm:text-left',
        className,
      ) }
      { ...props }
    />
  );
};

DialogHeader.displayName = 'DialogHeader';

export default DialogHeader;
