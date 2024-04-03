'use client';

import { ReactElement, useMemo } from 'react';
import { Controller, ControllerProps, FieldPath, FieldValues } from 'react-hook-form';
import { FormFieldContext } from './constants';

const FormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    ...props
  }: ControllerProps<TFieldValues, TName>): ReactElement => {
  const value = useMemo(() => {
    return { name: props.name };
  }, [ props.name ]);

  return (
    <FormFieldContext.Provider value={ value }>
      <Controller { ...props } />
    </FormFieldContext.Provider>
  );
};

FormField.displayName = 'FormField';

export default FormField;
