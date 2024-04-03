'use client';

import React, { forwardRef, HTMLAttributes, ReactElement } from 'react';
import { cn } from '@/utils/lib';
import useFormField from './use-form-field';

const FormMessage = forwardRef<
    HTMLParagraphElement,
    HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref): ReactElement | null => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ ref }
      className={ cn('text-sm font-medium text-destructive', className) }
      id={ formMessageId }
      { ...props }
    >
      {body}
    </p>
  );
});

FormMessage.displayName = 'FormMessage';

export default FormMessage;
