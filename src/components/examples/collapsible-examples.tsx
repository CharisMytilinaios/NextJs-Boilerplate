'use client';

import React, { FC, ReactElement, useState } from 'react';
import Collapsible from '@/components/ui/collapsible';
import CollapsibleTrigger from '@/components/ui/collapsible/collapsible-trigger';
import Button from '@/components/ui/button';
import { ChevronsUpDown } from 'lucide-react';
import CollapsibleContent from '@/components/ui/collapsible/collapsible-content';

const CollapsibleExamples: FC = (): ReactElement => {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <>
      <Collapsible
        className='w-[350px] space-y-2'
        onOpenChange={ setIsOpen }
        open={ isOpen }
      >
        <div className='flex items-center justify-between space-x-4 px-4'>
          <h4 className='text-sm font-semibold'>
            @peduarte starred 3 repositories
          </h4>
          <CollapsibleTrigger asChild>
            <Button className='w-9 p-0' size='sm' variant='ghost'>
              <ChevronsUpDown className='h-4 w-4' />
              <span className='sr-only'>Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className='rounded-md border px-4 py-3 font-mono text-sm'>
          @radix-ui/primitives
        </div>
        <CollapsibleContent className='space-y-2'>
          <div className='rounded-md border px-4 py-3 font-mono text-sm'>
            @radix-ui/colors
          </div>
          <div className='rounded-md border px-4 py-3 font-mono text-sm'>
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible>
        <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
        <CollapsibleContent>
          Yes. Free to use for personal and commercial projects. No attribution
          required.
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};

CollapsibleExamples.displayName = 'CollapsibleExamples';

export default CollapsibleExamples;
