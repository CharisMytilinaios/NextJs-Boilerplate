import React, { FC, ReactElement } from 'react';
import Alert from '@/components/ui/alert';
import { AlertCircle, Terminal } from 'lucide-react';
import AlertTitle from '@/components/ui/alert/alert-title';
import AlertDescription from '@/components/ui/alert/alert-description';

const AlertsExample: FC = (): ReactElement => {
  return (
    <>
      <Alert>
        <Terminal className='h-4 w-4' />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
      <Alert variant='destructive'>
        <AlertCircle className='h-4 w-4' />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    </>
  );
};

AlertsExample.displayName = 'AlertsExample';

export default AlertsExample;
