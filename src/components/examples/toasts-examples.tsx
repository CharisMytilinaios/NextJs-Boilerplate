'use client';

import React, { FC, ReactElement } from 'react';
import { useToast } from '@/components/ui/toast/use-toast';
import Button from '@/components/ui/button';
import ToastAction from '@/components/ui/toast/toast-action';

const ToastsExamples: FC = (): ReactElement => {
  const { toast } = useToast();

  return (
    <>
      <Button
        onClick={ () => {
          toast({
            title: 'Scheduled: Catch up ',
            description: 'Friday, February 10, 2023 at 5:57 PM',
            action: (
              <ToastAction altText='Goto schedule to undo'>Undo</ToastAction>
            ),
          });
        } }
        variant='outline'
      >
        Add to calendar
      </Button>
      <Button
        onClick={ () => {
          toast({
            description: 'Your message has been sent.',
          });
        } }
        variant='outline'
      >
        Show Toast
      </Button>
      <Button
        onClick={ () => {
          toast({
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
          });
        } }
        variant='outline'
      >
        Show Title Toast
      </Button>
      <Button
        onClick={ () => {
          toast({
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
            action: <ToastAction altText='Try again'>Try again</ToastAction>,
          });
        } }
        variant='outline'
      >
        Show Action Toast
      </Button>
      <Button
        onClick={ () => {
          toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
            action: <ToastAction altText='Try again'>Try again</ToastAction>,
          });
        } }
        variant='outline'
      >
        Show Error Toast
      </Button>
      <Button
        onClick={ () => {
          toast({
            variant: 'success',
            title: 'Success',
            description: 'Everything was successful',
            action: <ToastAction altText='successful'>Press This</ToastAction>,
          });
        } }
        variant='outline'
      >
        Show Success Toast
      </Button>
      <Button
        onClick={ () => {
          toast({
            variant: 'warning',
            title: 'Warning',
            description: 'Something needs review',
            action: <ToastAction altText='review this'>Review</ToastAction>,
          });
        } }
        variant='outline'
      >
        Show Warning Toast
      </Button>
    </>
  );
};

export default ToastsExamples;
