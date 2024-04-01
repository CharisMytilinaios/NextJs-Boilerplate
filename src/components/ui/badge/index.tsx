import React, { FC, HTMLAttributes, ReactElement } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/lib';
import badgeVariants from './badge-variants';

export interface BadgeProps
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {}

const Badge: FC<BadgeProps> = ({ className, variant, ...props }: BadgeProps): ReactElement => {
  return (
    <div className={ cn(badgeVariants({ variant }), className) } { ...props } />
  );
};

Badge.displayName = 'Badge';

export default Badge;
