import React, { HTMLAttributes, ReactElement } from 'react';
import { cn } from '@/utils/lib';

const AlertDialogFooter = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>): ReactElement => {
  return (
    <div
      className={ cn(
        'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
        className,
      ) }
      { ...props }
    >
      {children}
    </div>
  );
};

AlertDialogFooter.displayName = 'AlertDialogFooter';

export default AlertDialogFooter;
