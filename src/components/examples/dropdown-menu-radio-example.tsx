'use client';

import React, { FC, ReactElement, useState } from 'react';
import DropdownMenu from '@/components/ui/dropdown-menu';
import DropdownMenuTrigger from '@/components/ui/dropdown-menu/dropdown-menu-trigger';
import Button from '@/components/ui/button';
import DropdownMenuContent from '@/components/ui/dropdown-menu/dropdown-menu-content';
import DropdownMenuLabel from '@/components/ui/dropdown-menu/dropdown-menu-label';
import DropdownMenuSeparator from '@/components/ui/dropdown-menu/dropdown-menu-separator';
import DropdownMenuRadioGroup from '@/components/ui/dropdown-menu/dropdown-menu-radio-group';
import DropdownMenuRadioItem from '@/components/ui/dropdown-menu/dropdown-menu-radio-item';

const DropdownMenuRadioExample: FC = (): ReactElement => {
  const [ position, setPosition ] = useState('bottom');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Open Radio Group</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup onValueChange={ setPosition } value={ position }>
          <DropdownMenuRadioItem value='top'>Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='bottom'>Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='right'>Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

DropdownMenuRadioExample.displayName = 'DropdownMenuRadioExample';

export default DropdownMenuRadioExample;
