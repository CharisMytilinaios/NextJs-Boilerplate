import { cn } from '@/utils/lib';
import { forwardRef, ReactElement, TextareaHTMLAttributes } from 'react';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref): ReactElement => {
    return (
      <textarea
        ref={ ref }
        className={ cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        ) }
        { ...props }
      />
    );
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
