import React, { FC, ReactElement, useState } from 'react';
import Popover from '@/components/ui/popover';
import PopoverTrigger from '@/components/ui/popover/popover-trigger';
import Button from '@/components/ui/button';
import { cn } from '@/utils/lib';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import PopoverContent from '@/components/ui/popover/popover-content';
import Calendar from '@/components/ui/calendar';

const DatepickerExamples: FC = (): ReactElement => {
  const [ date, setDate ] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={ cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          ) }
          variant='outline'
        >
          <CalendarIcon className='mr-2 h-4 w-4' />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar
          initialFocus
          mode='single'
          onSelect={ setDate }
          selected={ date }
        />
      </PopoverContent>
    </Popover>
  );
};

DatepickerExamples.displayName = 'DatepickerExamples';

export default DatepickerExamples;
