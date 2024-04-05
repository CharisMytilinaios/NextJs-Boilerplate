import type { FC, ReactElement } from 'react';
import Badge from '@/components/ui/badge';

const BadgeExample: FC = (): ReactElement => {
  return (
    <>
      <Badge>Badge</Badge>
      <Badge variant='secondary'>Secondary</Badge>
      <Badge variant='outline'>Outline</Badge>
      <Badge variant='destructive'>Destructive</Badge>
      <Badge variant='success'>Success</Badge>
      <Badge variant='warning'>Warning</Badge>
    </>
  );
};

export default BadgeExample;
