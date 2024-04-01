import React, { FC, ReactElement } from 'react';
import Avatar from '@/components/ui/avatar';
import Image from 'next/image';
import AvatarFallback from '@/components/ui/avatar/avatar-fallback';

const AvatarsExample: FC = (): ReactElement => {
  return (
    <>
      <Avatar>
        <Image alt='@shadcn' height={ 40 } src='https://github.com/shadcn.png' width={ 40 } />
      </Avatar>
      <Avatar>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </>
  );
};

AvatarsExample.displayName = 'AvatarsExample';

export default AvatarsExample;
