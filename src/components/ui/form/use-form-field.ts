'use client';

import { useFormContext } from 'react-hook-form';
import { useContext } from 'react';
import { FormFieldContext, FormItemContext } from './constants';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${ id }-form-item`,
    formDescriptionId: `${ id }-form-item-description`,
    formMessageId: `${ id }-form-item-message`,
    ...fieldState,
  };
};

export default useFormField;
