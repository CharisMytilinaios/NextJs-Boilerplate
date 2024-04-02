import React, { FC, ReactElement } from 'react';
import Checkbox from '@/components/ui/checkbox';
import Label from '@/components/ui/label';

const CheckboxesExample: FC = (): ReactElement => {
  return (
    <>
      <div className='flex items-center space-x-2'>
        <Checkbox id='terms' />
        <Label
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          htmlFor='terms'
        >
          Accept terms and conditions
        </Label>
      </div>
      <div className='items-top flex space-x-2'>
        <Checkbox id='terms1' />
        <div className='grid gap-1.5 leading-none'>
          <Label
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            htmlFor='terms1'
          >
            Accept terms and conditions
          </Label>
          <p className='text-sm text-muted-foreground'>
            You agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
      <div className='flex items-center space-x-2'>
        <Checkbox disabled id='terms2' />
        <Label
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          htmlFor='terms2'
        >
          Accept terms and conditions
        </Label>
      </div>
    </>
  );
};

CheckboxesExample.displayName = 'CheckboxesExample';

export default CheckboxesExample;
