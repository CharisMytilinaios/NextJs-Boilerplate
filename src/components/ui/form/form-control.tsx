import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { useFormField } from '@/components/ui/form';

const FormControl = forwardRef<
    ElementRef<typeof Slot>,
    ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref): ReactElement => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      ref={ ref }
      aria-describedby={
        !error
          ? `${ formDescriptionId }`
          : `${ formDescriptionId } ${ formMessageId }`
      }
      aria-invalid={ !!error }
      id={ formItemId }
      { ...props }
    />
  );
});

FormControl.displayName = 'FormControl';

export default FormControl;
