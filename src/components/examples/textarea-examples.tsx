import React, { FC, ReactElement } from 'react';
import Textarea from '@/components/ui/textarea';
import Label from '@/components/ui/label';
import Button from '@/components/ui/button';

const TextareaExamples: FC = (): ReactElement => {
  return (
    <>
      <Textarea placeholder='Type your message here.' />
      <Textarea disabled placeholder='Type your message here.' />
      <div className='grid w-full gap-1.5'>
        <Label htmlFor='message'>Your message</Label>
        <Textarea id='message' placeholder='Type your message here.' />
      </div>
      <div className='grid w-full gap-1.5'>
        <Label htmlFor='message-2'>Your Message</Label>
        <Textarea id='message-2' placeholder='Type your message here.' />
        <p className='text-sm text-muted-foreground'>
          Your message will be copied to the support team.
        </p>
      </div>
      <div className='grid w-full gap-2'>
        <Textarea placeholder='Type your message here.' />
        <Button>Send message</Button>
      </div>
    </>
  );
};

TextareaExamples.displayName = 'TextareaExamples';

export default TextareaExamples;
