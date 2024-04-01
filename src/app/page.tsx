import { FC, ReactElement } from 'react';
import MainPageLayout from '@/components/main-page-layout';
import AccordionExample from '@/components/examples/accordion-example';
import DropdownMenuExample from '@/components/examples/dropdown-menu-example';

const RootPage: FC = (): ReactElement => {
  return (
    <MainPageLayout>
      <AccordionExample />
      <DropdownMenuExample />
    </MainPageLayout>
  );
};

RootPage.displayName = 'RootPage';

export default RootPage;
