import React, { FC, ReactElement } from 'react';
import Switch from '@/components/ui/switch';
import Label from '@/components/ui/label';

const SwitchesExample: FC = (): ReactElement => {
  return (
    <div className='flex items-center space-x-2'>
      <Switch id='airplane-mode' />
      <Label htmlFor='airplane-mode'>Airplane Mode</Label>
    </div>
  );
};

SwitchesExample.displayName = 'SwitchesExample';

export default SwitchesExample;
