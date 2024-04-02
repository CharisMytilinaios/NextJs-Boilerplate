'use client';

import React, { FC, ReactElement, useState } from 'react';
import Popover from '@/components/ui/popover';
import PopoverTrigger from '@/components/ui/popover/popover-trigger';
import Button from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';
import Select from '@/components/ui/select';
import PopoverContent from '@/components/ui/popover/popover-content'; import { cn } from '@/utils/lib';
import { addDays, format } from 'date-fns';
import SelectContent from '@/components/ui/select/select-content';
import SelectItem from '@/components/ui/select/select-item';
import SelectTrigger from '@/components/ui/select/select-trigger';
import SelectValue from '@/components/ui/select/select-value';
import Calendar from '@/components/ui/calendar';

const DatepickerWithPresetsExample: FC = (): ReactElement => {
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
      <PopoverContent className='flex w-auto flex-col space-y-2 p-2'>
        <Select
          onValueChange={ (value) => { return setDate(addDays(new Date(), parseInt(value, 10))); } }
        >
          <SelectTrigger>
            <SelectValue placeholder='Select' />
          </SelectTrigger>
          <SelectContent position='popper'>
            <SelectItem value='0'>Today</SelectItem>
            <SelectItem value='1'>Tomorrow</SelectItem>
            <SelectItem value='3'>In 3 days</SelectItem>
            <SelectItem value='7'>In a week</SelectItem>
          </SelectContent>
        </Select>
        <div className='rounded-md border'>
          <Calendar mode='single' onSelect={ setDate } selected={ date } />
        </div>
      </PopoverContent>
    </Popover>
  );
};

DatepickerWithPresetsExample.displayName = 'DatepickerWithPresetsExample';

export default DatepickerWithPresetsExample;
