import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import type { FC, PropsWithChildren, ReactElement } from 'react';
import ThemeProvider from '@/providers/ThemeProvider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Theme } from '@/types';
import '@/styles/main.scss';

const lato = Lato({
  weight: [ '100', '300', '400', '700', '900' ],
  style: [ 'normal', 'italic' ],
  subsets: [ 'latin' ],
  display: 'swap',
});

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
};

const RootLayout: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): ReactElement => {
  return (
    <html className={ lato.className } lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme={ Theme.DARK }
          enableSystem
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

RootLayout.displayName = 'RootLayout';

export default RootLayout;
