import type { FC, ReactElement } from 'react';
import Button from '@/components/ui/button';
import { ChevronRight, Loader2, Mail } from 'lucide-react';
import Link from 'next/link';

const ButtonsExamples: FC = (): ReactElement => {
  return (
    <>
      <Button>Button</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='destructive'>Destructive</Button>
      <Button variant='success'>Success</Button>
      <Button variant='warning'>Warning</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='link'>Link Styled</Button>
      <Button size='icon' variant='outline'>
        <ChevronRight className='h-4 w-4' />
      </Button>
      <Button>
        <Mail className='mr-2 h-4 w-4' />
        {' '}
        Login with Email
      </Button>
      <Button disabled>
        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
        Please wait
      </Button>
      <Button asChild>
        <Link href='/login'>Login as child link component</Link>
      </Button>
    </>
  );
};

ButtonsExamples.displayName = 'ButtonsExamples';

export default ButtonsExamples;
