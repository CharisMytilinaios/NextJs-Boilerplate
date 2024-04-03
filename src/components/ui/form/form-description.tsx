import React, { forwardRef, HTMLAttributes, ReactElement } from 'react';
import { cn } from '@/utils/lib';
import { useFormField } from '@/components/ui/form';

const FormDescription = forwardRef<
    HTMLParagraphElement,
    HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref): ReactElement => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ ref }
      className={ cn('text-sm text-muted-foreground', className) }
      id={ formDescriptionId }
      { ...props }
    />
  );
});

FormDescription.displayName = 'FormDescription';

export default FormDescription;
