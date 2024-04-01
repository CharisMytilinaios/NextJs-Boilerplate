import React, { ButtonHTMLAttributes, forwardRef, ReactElement } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/utils/lib';
import type { VariantProps } from 'class-variance-authority';
import buttonVariants from './buttonVariants';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref): ReactElement => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ ref }
        className={ cn(buttonVariants({ variant, size, className })) }
        { ...props }
      />
    );
  },
);

Button.displayName = 'Button';

export default Button;
