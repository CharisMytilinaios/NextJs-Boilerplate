import type { FC, ReactElement } from 'react';
import AlertDialogTrigger from '@/components/ui/alert-dialog/alert-dialog-trigger';
import AlertDialog from '@/components/ui/alert-dialog';
import Button from '@/components/ui/button';
import AlertDialogContent from '@/components/ui/alert-dialog/alert-dialog-content';
import AlertDialogHeader from '@/components/ui/alert-dialog/alert-dialog-header';
import AlertDialogTitle from '@/components/ui/alert-dialog/alert-dialog-title';
import AlertDialogDescription from '@/components/ui/alert-dialog/alert-dialog-description';
import AlertDialogFooter from '@/components/ui/alert-dialog/alert-dialog-footer';
import AlertDialogCancel from '@/components/ui/alert-dialog/alert-dialog-cancel';
import AlertDialogAction from '@/components/ui/alert-dialog/alert-dialog-action';

const AlertDialogExample: FC = (): ReactElement => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='outline'>Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

AlertDialogExample.displayName = 'AlertDialogExample';

export default AlertDialogExample;
