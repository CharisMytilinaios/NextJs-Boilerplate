import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { cn } from '@/utils/lib';
import Label from '@/components/ui/label';
import useFormField from './use-form-field';

const FormLabel = forwardRef<
    ElementRef<typeof Label>,
    ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref): ReactElement => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ ref }
      className={ cn(error && 'text-destructive', className) }
      htmlFor={ formItemId }
      { ...props }
    />
  );
});

FormLabel.displayName = 'FormLabel';

export default FormLabel;
