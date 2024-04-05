import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { Action } from '@radix-ui/react-toast';
import { cn } from '@/utils/lib';

const ToastAction = forwardRef<
    ElementRef<typeof Action>,
    ComponentPropsWithoutRef<typeof Action>
>(({ className, ...props }, ref): ReactElement => {
  return (
    <Action
      ref={ ref }
      className={ cn(
        'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 '
          + 'group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive'
          + ' group-[.success]:border-muted/40 group-[.success]:hover:border-success/30 group-[.success]:hover:bg-success group-[.success]:hover:text-success-foreground group-[.success]:focus:ring-success group-[.warning]:border-muted/40 group-[.warning]:hover:border-warning/30 group-[.warning]:hover:bg-warning group-[.warning]:hover:text-warning-foreground group-[.warning]:focus:ring-warning',
        className,
      ) }
      { ...props }
    />
  );
});

ToastAction.displayName = 'ToastAction';

export default ToastAction;
