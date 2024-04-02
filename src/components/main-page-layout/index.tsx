import type { FC, PropsWithChildren, ReactElement } from 'react';
import type { ClassValue } from 'clsx';
import { cn } from '@/utils/lib';
import ScrollArea from '@/components/ui/scroll-area';
import './main-page-layout.scss';

interface MainPageLayoutProps extends PropsWithChildren {
  className?: ClassValue[] | ClassValue;
}

const MainPageLayout: FC<MainPageLayoutProps> = ({ className = [], children }: MainPageLayoutProps): ReactElement => {
  return (
    <ScrollArea className='h-full'>
      <main className={ cn(className) }>
        {children}
      </main>
    </ScrollArea>
  );
};

MainPageLayout.displayName = 'MainPageLayout';

export default MainPageLayout;
