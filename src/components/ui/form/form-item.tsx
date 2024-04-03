'use client';

import { cn } from '@/utils/lib';
import { forwardRef, HTMLAttributes, useId, useMemo } from 'react';
import { FormItemContext } from './constants';

const FormItem = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = useId();

  const value = useMemo(() => {
    return {
      id,
    };
  }, [ id ]);

  return (
    <FormItemContext.Provider value={ value }>
      <div ref={ ref } className={ cn('space-y-2', className) } { ...props } />
    </FormItemContext.Provider>
  );
});

FormItem.displayName = 'FormItem';

export default FormItem;
