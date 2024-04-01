import React, { FC, ReactElement } from 'react';
import Accordion from '@/components/ui/accordion';
import AccordionItem from '@/components/ui/accordion/accordion-item';
import AccordionTrigger from '@/components/ui/accordion/accordion-trigger';
import AccordionContent from '@/components/ui/accordion/accordion-content';

const AccordionExample: FC = (): ReactElement => {
  return (
    <Accordion className='w-[20rem]' collapsible type='single'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

AccordionExample.displayName = 'AccordionExample';

export default AccordionExample;
