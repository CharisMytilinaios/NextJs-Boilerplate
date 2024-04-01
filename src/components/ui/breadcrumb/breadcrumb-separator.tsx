import React, { ComponentProps, FC, ReactElement } from 'react';
import { cn } from '@/utils/lib';
import { ChevronRight } from 'lucide-react';

const BreadcrumbSeparator: FC<ComponentProps<'li'>> = ({
  children,
  className,
  ...props
}: ComponentProps<'li'>): ReactElement => {
  return (
    <li
      aria-hidden='true'
      className={ cn('[&>svg]:size-3.5', className) }
      role='presentation'
      { ...props }
    >
      {children ?? <ChevronRight />}
    </li>
  );
};

BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

export default BreadcrumbSeparator;
