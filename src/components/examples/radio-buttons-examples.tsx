import React, { FC, ReactElement } from 'react';
import RadioGroup from '@/components/ui/radio-group';
import RadioGroupItem from '@/components/ui/radio-group/radio-group-item';
import Label from '@/components/ui/label';

const RadioButtonsExamples: FC = (): ReactElement => {
  return (
    <RadioGroup defaultValue='comfortable'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem id='r1' value='default' />
        <Label htmlFor='r1'>Default</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem id='r2' value='comfortable' />
        <Label htmlFor='r2'>Comfortable</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem id='r3' value='compact' />
        <Label htmlFor='r3'>Compact</Label>
      </div>
    </RadioGroup>
  );
};

RadioButtonsExamples.displayName = 'RadioButtonsExamples';

export default RadioButtonsExamples;
