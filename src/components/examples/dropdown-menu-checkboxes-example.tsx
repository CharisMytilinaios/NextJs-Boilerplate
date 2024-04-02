'use client';

import { FC, ReactElement, useState } from 'react';
import type { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import DropdownMenu from '@/components/ui/dropdown-menu';
import DropdownMenuTrigger from '@/components/ui/dropdown-menu/dropdown-menu-trigger';
import Button from '@/components/ui/button';
import DropdownMenuContent from '@/components/ui/dropdown-menu/dropdown-menu-content';
import DropdownMenuLabel from '@/components/ui/dropdown-menu/dropdown-menu-label';
import DropdownMenuSeparator from '@/components/ui/dropdown-menu/dropdown-menu-separator';
import DropdownMenuCheckboxItem from '@/components/ui/dropdown-menu/dropdown-menu-checkbox-item';

type Checked = DropdownMenuCheckboxItemProps['checked']

const DropdownMenuCheckboxesExample: FC = (): ReactElement => {
  const [ showStatusBar, setShowStatusBar ] = useState<Checked>(true);
  const [ showActivityBar, setShowActivityBar ] = useState<Checked>(false);
  const [ showPanel, setShowPanel ] = useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Open Checkboxes Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={ showStatusBar }
          onCheckedChange={ setShowStatusBar }
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={ showActivityBar }
          disabled
          onCheckedChange={ setShowActivityBar }
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={ showPanel }
          onCheckedChange={ setShowPanel }
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

DropdownMenuCheckboxesExample.displayName = 'DropdownMenuCheckboxesExample';

export default DropdownMenuCheckboxesExample;
