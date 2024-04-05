'use client';

import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
import { Command as CommandPrimitive } from 'cmdk';

const CommandEmpty = forwardRef<
    ElementRef<typeof CommandPrimitive.Empty>,
    ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref): ReactElement => {
  return (
    <CommandPrimitive.Empty
      ref={ ref }
      className='py-6 text-center text-sm'
      { ...props }
    />
  );
});

CommandEmpty.displayName = 'CommandEmpty';

export default CommandEmpty;
