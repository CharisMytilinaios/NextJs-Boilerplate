import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

const ThemeProvider: FC<ThemeProviderProps & PropsWithChildren> = ({
  children,
  ...props
}: ThemeProviderProps & PropsWithChildren): ReactElement => {
  return <NextThemesProvider { ...props }>{children}</NextThemesProvider>;
};

ThemeProvider.displayName = 'ThemeProvider';

export default ThemeProvider;
