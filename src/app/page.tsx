import { FC, ReactElement } from 'react';
import MainPageLayout from '@/components/main-page-layout';
import AccordionExample from '@/components/examples/accordion-example';
import DropdownMenuExample from '@/components/examples/dropdown-menu-example';
import ThemeToggle from '@/components/theme-toggle';
import DropdownMenuCheckboxesExample from '@/components/examples/dropdown-menu-checkboxes-example';
import DropdownMenuRadioExample from '@/components/examples/dropdown-menu-radio-example';
import ButtonsExamples from '@/components/examples/buttons-examples';
import AlertsExample from '@/components/examples/alert-example';
import AlertDialogExample from '@/components/examples/alert-dialog-example';

import './root-page.scss';

const RootPage: FC = (): ReactElement => {
  return (
    <MainPageLayout className='flex flex-col gap-5'>
      <section className='section' id='accordions'>
        <h2>Accordions</h2>
        <AccordionExample />
      </section>
      <section className='section' id='buttons'>
        <h2>Buttons</h2>
        <div className='section__container'>
          <ButtonsExamples />
        </div>
      </section>
      <section className='section' id='dropdown-menus'>
        <h2>Dropdown Menus</h2>
        <div className='section__container'>
          <DropdownMenuExample />
          <DropdownMenuCheckboxesExample />
          <DropdownMenuRadioExample />
          <ThemeToggle />
        </div>
      </section>
      <section className='section' id='alerts'>
        <h2>Alerts</h2>
        <div className='section__container'>
          <AlertsExample />
        </div>
      </section>
      <section className='section' id='alert-dialogs'>
        <h2>Alert Dialogs</h2>
        <div className='section__container'>
          <AlertDialogExample />
        </div>
      </section>
    </MainPageLayout>
  );
};

RootPage.displayName = 'RootPage';

export default RootPage;
