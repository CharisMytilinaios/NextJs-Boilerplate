'use client';

import React, { ComponentProps, FC, ReactElement, useState } from 'react';
import Dialog from '@/components/ui/dialog';
import DialogTrigger from '@/components/ui/dialog/dialog-trigger';
import Button from '@/components/ui/button';
import DialogContent from '@/components/ui/dialog/dialog-content';
import DialogHeader from '@/components/ui/dialog/dialog-header';
import DialogTitle from '@/components/ui/dialog/dialog-title';
import DialogDescription from '@/components/ui/dialog/dialog-description';
import { cn } from '@/utils/lib';
import Label from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Drawer from '@/components/ui/drawer';
import DrawerTrigger from '@/components/ui/drawer/drawer-trigger';
import DrawerContent from '@/components/ui/drawer/drawer-content';
import DrawerHeader from '@/components/ui/drawer/drawer-header';
import DrawerTitle from '@/components/ui/drawer/drawer-title';
import DrawerDescription from '@/components/ui/drawer/drawer-description';
import DrawerFooter from '@/components/ui/drawer/drawer-footer';
import DrawerClose from '@/components/ui/drawer/drawer-close';
import { useSmScreens } from '@/hooks/use-media-query';

const ProfileForm: FC<ComponentProps<'form'>> = ({ className }: ComponentProps<'form'>): ReactElement => {
  return (
    <form className={ cn('grid items-start gap-4', className) } noValidate>
      <div className='grid gap-2'>
        <Label htmlFor='email'>Email</Label>
        <Input defaultValue='shadcn@example.com' id='email' type='email' />
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='username'>Username</Label>
        <Input defaultValue='@shadcn' id='username' />
      </div>
      <Button type='submit'>Save changes</Button>
    </form>
  );
};

const ResponsiveDialogDrawer: FC = (): ReactElement => {
  const [ open, setOpen ] = useState(false);
  const mobile = useSmScreens();

  return mobile ? (
    <Drawer onOpenChange={ setOpen } open={ open }>
      <DrawerTrigger asChild>
        <Button variant='outline'>Edit Profile Responsive Dialog/Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='text-left'>
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className='px-4' />
        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ) : (
    <Dialog onOpenChange={ setOpen } open={ open }>
      <DialogTrigger asChild>
        <Button variant='outline'>Edit Profile Responsive Dialog/Drawer</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <ProfileForm />
      </DialogContent>
    </Dialog>
  );
};

ResponsiveDialogDrawer.displayName = 'ResponsiveDialogDrawer';

export default ResponsiveDialogDrawer;
