'use client';

import React, { FC, ReactElement, useCallback } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Form from '@/components/ui/form';
import FormField from '@/components/ui/form/form-field';
import FormItem from '@/components/ui/form/form-item';
import FormLabel from '@/components/ui/form/form-label';
import FormControl from '@/components/ui/form/form-control';
import { Input } from '@/components/ui/input';
import FormDescription from '@/components/ui/form/form-description';
import FormMessage from '@/components/ui/form/form-message';
import Button from '@/components/ui/button';
import { useToast } from '@/components/ui/toast/use-toast';
import Checkbox from '@/components/ui/checkbox';
import Link from 'next/link';
import Popover from '@/components/ui/popover';
import PopoverTrigger from '@/components/ui/popover/popover-trigger';
import { cn } from '@/utils/lib';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import PopoverContent from '@/components/ui/popover/popover-content';
import Calendar from '@/components/ui/calendar';
import RadioGroup from '@/components/ui/radio-group';
import RadioGroupItem from '@/components/ui/radio-group/radio-group-item';
import Select from '@/components/ui/select';
import SelectTrigger from '@/components/ui/select/select-trigger';
import SelectValue from '@/components/ui/select/select-value';
import SelectContent from '@/components/ui/select/select-content';
import SelectItem from '@/components/ui/select/select-item';
import Switch from '@/components/ui/switch';
import Textarea from '@/components/ui/textarea';
import formSchema from '@/utils/validations/form-schema-validation';

const checkboxesItems = [
  {
    id: 'recents',
    label: 'Recents',
  },
  {
    id: 'home',
    label: 'Home',
  },
  {
    id: 'applications',
    label: 'Applications',
  },
  {
    id: 'desktop',
    label: 'Desktop',
  },
  {
    id: 'downloads',
    label: 'Downloads',
  },
  {
    id: 'documents',
    label: 'Documents',
  },
] as const;

const FormsExample: FC = (): ReactElement => {
  const { toast } = useToast();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      mobile: true,
      checkboxesItems: [ 'recents', 'home' ],
      security_emails: true,
    },
  });

  const onSubmit = useCallback((values: z.infer<typeof formSchema>): void => {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }, [ toast ]);

  return (
    <Form { ...form }>
      <form className='space-y-8' noValidate onSubmit={ form.handleSubmit(onSubmit) }>
        <FormField
          control={ form.control }
          name='username'
          render={ ({ field }) => {
            return (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder='shadcn' { ...field } />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            );
          } }
        />
        <FormField
          control={ form.control }
          name='mobile'
          render={ ({ field }) => {
            return (
              <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                <FormControl>
                  <Checkbox
                    checked={ field.value }
                    onCheckedChange={ field.onChange }
                  />
                </FormControl>
                <div className='space-y-1 leading-none'>
                  <FormLabel>
                    Use different settings for my mobile devices
                  </FormLabel>
                  <FormDescription>
                    You can manage your mobile notifications in the
                    {' '}
                    <Link href='/examples/forms'>mobile settings</Link>
                    {' '}
                    page.
                  </FormDescription>
                </div>
              </FormItem>
            );
          } }
        />
        <FormField
          control={ form.control }
          name='checkboxesItems'
          render={ () => {
            return (
              <FormItem>
                <div className='mb-4'>
                  <FormLabel className='text-base'>Sidebar</FormLabel>
                  <FormDescription>
                    Select the items you want to display in the sidebar.
                  </FormDescription>
                </div>
                {checkboxesItems.map((item) => {
                  return (
                    <FormField
                      key={ item.id }
                      control={ form.control }
                      name='checkboxesItems'
                      render={ ({ field }) => {
                        return (
                          <FormItem
                            key={ item.id }
                            className='flex flex-row items-start space-x-3 space-y-0'
                          >
                            <FormControl>
                              <Checkbox
                                checked={ field.value?.includes(item.id) }
                                onCheckedChange={ (checked) => {
                                  return checked
                                    ? field.onChange([ ...field.value, item.id ])
                                    : field.onChange(
                                      field.value?.filter(
                                        (value) => { return value !== item.id; },
                                      ),
                                    );
                                } }
                              />
                            </FormControl>
                            <FormLabel className='font-normal'>
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      } }
                    />
                  );
                })}
                <FormMessage />
              </FormItem>
            );
          } }
        />
        <FormField
          control={ form.control }
          name='dob'
          render={ ({ field }) => {
            return (
              <FormItem className='flex flex-col'>
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        className={ cn(
                          'w-[240px] pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground',
                        ) }
                        variant='outline'
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent align='start' className='w-auto p-0'>
                    <Calendar
                      disabled={ (date) => { return date > new Date() || date < new Date('1900-01-01'); } }
                      initialFocus
                      mode='single'
                      onSelect={ field.onChange }
                      selected={ field.value }
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
              </FormItem>
            );
          } }
        />
        <FormField
          control={ form.control }
          name='radioItems'
          render={ ({ field }) => {
            return (
              <FormItem className='space-y-3'>
                <FormLabel>Notify me about...</FormLabel>
                <FormControl>
                  <RadioGroup
                    className='flex flex-col space-y-1'
                    defaultValue={ field.value }
                    onValueChange={ field.onChange }
                  >
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='all' />
                      </FormControl>
                      <FormLabel className='font-normal'>
                        All new messages
                      </FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='mentions' />
                      </FormControl>
                      <FormLabel className='font-normal'>
                        Direct messages and mentions
                      </FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='none' />
                      </FormControl>
                      <FormLabel className='font-normal'>Nothing</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          } }
        />
        <FormField
          control={ form.control }
          name='email'
          render={ ({ field }) => {
            return (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Select defaultValue={ field.value } onValueChange={ field.onChange }>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a verified email to display' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='m@example.com'>m@example.com</SelectItem>
                    <SelectItem value='m@google.com'>m@google.com</SelectItem>
                    <SelectItem value='m@support.com'>m@support.com</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  You can manage email addresses in your
                  {' '}
                  <Link href='/examples/forms'>email settings</Link>
                  .
                </FormDescription>
                <FormMessage />
              </FormItem>
            );
          } }
        />
        <FormField
          control={ form.control }
          name='marketing_emails'
          render={ ({ field }) => {
            return (
              <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
                <div className='space-y-0.5'>
                  <FormLabel className='text-base'>
                    Marketing emails
                  </FormLabel>
                  <FormDescription>
                    Receive emails about new products, features, and more.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={ field.value }
                    onCheckedChange={ field.onChange }
                  />
                </FormControl>
              </FormItem>
            );
          } }
        />
        <FormField
          control={ form.control }
          name='security_emails'
          render={ ({ field }) => {
            return (
              <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
                <div className='space-y-0.5'>
                  <FormLabel className='text-base'>Security emails</FormLabel>
                  <FormDescription>
                    Receive emails about your account security.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    aria-readonly
                    checked={ field.value }
                    disabled
                    onCheckedChange={ field.onChange }
                  />
                </FormControl>
              </FormItem>
            );
          } }
        />
        <FormField
          control={ form.control }
          name='bio'
          render={ ({ field }) => {
            return (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    className='resize-none'
                    placeholder='Tell us a little bit about yourself'
                    { ...field }
                  />
                </FormControl>
                <FormDescription>
                  You can
                  {' '}
                  <span>@mention</span>
                  {' '}
                  other users and organizations.
                </FormDescription>
                <FormMessage />
              </FormItem>
            );
          } }
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
};

FormsExample.displayName = 'FormsExample';

export default FormsExample;
