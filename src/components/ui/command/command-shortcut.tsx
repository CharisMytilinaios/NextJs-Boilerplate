import { cn } from '@/utils/lib';
import { FC, HTMLAttributes } from 'react';

const CommandShortcut: FC<HTMLAttributes<HTMLSpanElement>> = ({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={ cn(
        'ml-auto text-xs tracking-widest text-muted-foreground',
        className,
      ) }
      { ...props }
    />
  );
};

CommandShortcut.displayName = 'CommandShortcut';

export default CommandShortcut;
