import * as React from 'react';
import { ComponentPropsWithoutRef, forwardRef, ReactElement, ReactNode } from 'react';

const Breadcrumb = forwardRef<
    HTMLElement,
    ComponentPropsWithoutRef<'nav'> & {
    separator?: ReactNode
}
>(({ ...props }, ref): ReactElement => {
  return <nav ref={ ref } aria-label='breadcrumb' { ...props } />;
});

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;
