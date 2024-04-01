import React, { FC, ReactElement } from 'react';
import Badge from '@/components/ui/badge';

const BadgeExample: FC = (): ReactElement => {
  return (
    <>
      <Badge>Badge</Badge>
      <Badge variant='secondary'>Secondary</Badge>
      <Badge variant='outline'>Outline</Badge>
      <Badge variant='destructive'>Destructive</Badge>
    </>
  );
};

export default BadgeExample;
