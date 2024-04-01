import React, { FC, PropsWithChildren, ReactElement } from 'react';
import type { ClassValue } from 'clsx';
import { cn } from '@/utils/lib';

interface MainPageLayoutProps extends PropsWithChildren {
  className?: ClassValue[] | ClassValue;
}

const MainPageLayout: FC<MainPageLayoutProps> = ({ className = [], children }: MainPageLayoutProps): ReactElement => {
  return (
    <main className={ cn(className) }>
      {children}
    </main>
  );
};

MainPageLayout.displayName = 'MainPageLayout';

export default MainPageLayout;
