import React, { FC, HTMLAttributes, ReactElement } from 'react';
import { cn } from '@/utils/lib';

const DialogFooter: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): ReactElement => {
  return (
    <div
      className={ cn(
        'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
        className,
      ) }
      { ...props }
    />
  );
};

DialogFooter.displayName = 'DialogFooter';

export default DialogFooter;
