'use client';

import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { Root } from '@radix-ui/react-label';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/lib';
import labelVariants from './label-variants';

const Label = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof labelVariants>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <Root
      ref={ ref }
      className={ cn(labelVariants(), className) }
      { ...props }
    />
  );
});

Label.displayName = 'Label';

export default Label;
