'use client';

import { DialogProps } from '@radix-ui/react-dialog';
import { FC, ReactElement } from 'react';
import Dialog from '@/components/ui/dialog';
import DialogContent from '@/components/ui/dialog/dialog-content';
import Command from '.';

interface CommandDialogProps extends DialogProps {}

const CommandDialog: FC<CommandDialogProps> = ({ children, ...props }: CommandDialogProps): ReactElement => {
  return (
    <Dialog { ...props }>
      <DialogContent className='overflow-hidden p-0 shadow-lg'>
        <Command className='[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

CommandDialog.displayName = 'CommandDialog';

export default CommandDialog;
