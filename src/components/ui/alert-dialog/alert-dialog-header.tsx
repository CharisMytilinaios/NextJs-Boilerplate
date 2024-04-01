import React, { HTMLAttributes, ReactElement } from 'react';
import { cn } from '@/utils/lib';

const AlertDialogHeader = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>): ReactElement => {
  return (
    <div
      className={ cn(
        'flex flex-col space-y-2 text-center sm:text-left',
        className,
      ) }
      { ...props }
    >
      {children}
    </div>
  );
};

AlertDialogHeader.displayName = 'AlertDialogHeader';

export default AlertDialogHeader;
