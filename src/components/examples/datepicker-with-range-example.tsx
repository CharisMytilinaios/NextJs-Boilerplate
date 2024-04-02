'use client';

import { addDays, format } from 'date-fns';
import React, { FC, HTMLAttributes, ReactElement, useState } from 'react';
import { DateRange } from 'react-day-picker';
import { cn } from '@/utils/lib';
import Popover from '@/components/ui/popover';
import PopoverTrigger from '@/components/ui/popover/popover-trigger';
import Button from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';
import PopoverContent from '@/components/ui/popover/popover-content';
import Calendar from '@/components/ui/calendar';

const DatepickerWithRangeExample: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}: HTMLAttributes<HTMLDivElement>): ReactElement => {
  const [ date, setDate ] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className={ cn('grid gap-2', className) }>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className={ cn(
              'w-[300px] justify-start text-left font-normal',
              !date && 'text-muted-foreground',
            ) }
            id='date'
            variant='outline'
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')}
                  {' '}
                  -
                  {' '}
                  {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent align='start' className='w-auto p-0'>
          <Calendar
            defaultMonth={ date?.from }
            initialFocus
            mode='range'
            numberOfMonths={ 2 }
            onSelect={ setDate }
            selected={ date }
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

DatepickerWithRangeExample.displayName = 'DatepickerWithRangeExample';

export default DatepickerWithRangeExample;
