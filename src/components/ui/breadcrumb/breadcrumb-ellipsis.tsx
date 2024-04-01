import React, { ComponentProps, FC, ReactElement } from 'react';
import { cn } from '@/utils/lib';
import { MoreHorizontal } from 'lucide-react';

const BreadcrumbEllipsis: FC<ComponentProps<'span'>> = ({
  className,
  ...props
}: ComponentProps<'span'>): ReactElement => {
  return (
    <span
      aria-hidden='true'
      className={ cn('flex h-9 w-9 items-center justify-center', className) }
      role='presentation'
      { ...props }
    >
      <MoreHorizontal className='h-4 w-4' />
      <span className='sr-only'>More</span>
    </span>
  );
};

BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis';

export default BreadcrumbEllipsis;
