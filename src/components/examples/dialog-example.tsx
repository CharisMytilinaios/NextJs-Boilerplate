import React, { FC, ReactElement } from 'react';
import Dialog from '@/components/ui/dialog';
import DialogTrigger from '@/components/ui/dialog/dialog-trigger';
import Button from '@/components/ui/button';
import DialogContent from '@/components/ui/dialog/dialog-content';
import DialogHeader from '@/components/ui/dialog/dialog-header';
import DialogTitle from '@/components/ui/dialog/dialog-title';
import DialogDescription from '@/components/ui/dialog/dialog-description';
import Label from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import DialogFooter from '@/components/ui/dialog/dialog-footer';
import DialogClose from '@/components/ui/dialog/dialog-close';
import { Copy } from 'lucide-react';

const DialogExample: FC = (): ReactElement => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline'>Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label className='text-right' htmlFor='name'>
                Name
              </Label>
              <Input
                className='col-span-3'
                defaultValue='Pedro Duarte'
                id='name'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label className='text-right' htmlFor='username'>
                Username
              </Label>
              <Input
                className='col-span-3'
                defaultValue='@peduarte'
                id='username'
              />
            </div>
          </div>
          <DialogFooter>
            <Button type='submit'>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline'>Share</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className='flex items-center space-x-2'>
            <div className='grid flex-1 gap-2'>
              <Label className='sr-only' htmlFor='link'>
                Link
              </Label>
              <Input
                defaultValue='https://ui.shadcn.com/docs/installation'
                id='link'
                readOnly
              />
            </div>
            <Button className='px-3' size='sm' type='submit'>
              <span className='sr-only'>Copy</span>
              <Copy className='h-4 w-4' />
            </Button>
          </div>
          <DialogFooter className='sm:justify-start'>
            <DialogClose asChild>
              <Button type='button' variant='secondary'>
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

DialogExample.displayName = 'DialogExample';

export default DialogExample;
