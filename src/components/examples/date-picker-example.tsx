'use client';

import { FC, ReactElement, useState } from 'react';
import Calendar from '@/components/ui/calendar';

const DatePickerExample: FC = (): ReactElement => {
  const [ date, setDate ] = useState<Date | undefined>(new Date());
  return (
    <Calendar
      className='rounded-md border'
      mode='single'
      onSelect={ setDate }
      selected={ date }
    />
  );
};

DatePickerExample.displayName = 'DatePickerExample';

export default DatePickerExample;
