import React, { ReactElement } from 'react';
import { cn } from '@/utils/lib';

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>): ReactElement => {
  return (
    <span
      className={ cn('ml-auto text-xs tracking-widest opacity-60', className) }
      { ...props }
    />
  );
};

DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';
export default DropdownMenuShortcut;
