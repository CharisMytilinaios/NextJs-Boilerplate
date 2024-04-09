'use client';

import React, { FC, ReactElement } from 'react';
import { ToastProvider } from '@radix-ui/react-toast';
import { useToast } from './use-toast';
import Toast from '.';
import ToastTitle from './toast-title';
import ToastDescription from './toast-description';
import ToastClose from './toast-close';
import ToastViewport from './toast-viewport';

const Toaster: FC = (): ReactElement => {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, disableClose = false, ...props }) => {
        return (
          <Toast key={ id } { ...props }>
            <div className='grid gap-1'>
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            {!disableClose && (
              <ToastClose />
            )}
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
};

Toaster.displayName = 'Toaster';

export default Toaster;
