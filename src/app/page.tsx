import type { FC, ReactElement } from 'react';
import MainPageLayout from '@/components/main-page-layout';
import AccordionExample from '@/components/examples/accordion-example';
import DropdownMenuExample from '@/components/examples/dropdown-menu-example';
import ThemeToggle from '@/components/theme-toggle';
import DropdownMenuCheckboxesExample from '@/components/examples/dropdown-menu-checkboxes-example';
import DropdownMenuRadioExample from '@/components/examples/dropdown-menu-radio-example';
import ButtonsExamples from '@/components/examples/buttons-examples';
import AlertsExample from '@/components/examples/alert-example';
import AlertDialogExample from '@/components/examples/alert-dialog-example';
import AspectRatioExample from '@/components/examples/aspect-ratio-example';
import AvatarsExample from '@/components/examples/avatar-example';
import BadgeExample from '@/components/examples/badge-example';
import DatePickerExample from '@/components/examples/date-picker-example';
import SelectExamples from '@/components/examples/select-examples';
import CardExample from '@/components/examples/card-example';
import CarouselExamples from '@/components/examples/carousel-examples';
import CheckboxesExample from '@/components/examples/checkboxes-example';
import CollapsibleExamples from '@/components/examples/collapsible-examples';
import CarouselAutoplayExample from '@/components/examples/carousel-autoplay-example';
import CarouselEventsExample from '@/components/examples/carousel-events-example';
import PopoverExample from '@/components/examples/popover-example';
import DialogExample from '@/components/examples/dialog-example';
import './root-page.scss';
import DatepickerWithRangeExample from '@/components/examples/datepicker-with-range-example';
import DatepickerWithPresetsExample from '@/components/examples/datepicker-with-presets-example';
import DrawerExample from '@/components/examples/drawer-example';
import ResponsiveDialogDrawer from '@/components/examples/responsive-dialog-drawer';
import ToastsExamples from '@/components/examples/toasts-examples';
import FormsExample from '@/components/examples/forms-example';
import RadioButtonsExamples from '@/components/examples/radio-buttons-examples';
import SwitchesExample from '@/components/examples/switches-example';
import TextareaExamples from '@/components/examples/textarea-examples';
import CommandExamples from '@/components/examples/command-examples';
import CommandExampleKeyExample from '@/components/examples/command-example-key-example';
import ComboboxExampleSimple from '@/components/examples/combobox-example-simple';

const RootPage: FC = (): ReactElement => {
  return (
    <MainPageLayout>
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
      <section className='section' id='aspect-ration'>
        <h2>Aspect Ratio</h2>
        <div className='section__container w-[450px]'>
          <AspectRatioExample />
        </div>
      </section>
      <section className='section' id='avatars'>
        <h2>Avatars</h2>
        <div className='section__container'>
          <AvatarsExample />
        </div>
      </section>
      <section className='section' id='badges'>
        <h2>Badges</h2>
        <div className='section__container'>
          <BadgeExample />
        </div>
      </section>
      <section className='section' id='calendar'>
        <h2>Calendar</h2>
        <div className='section__container'>
          <DatePickerExample />
        </div>
      </section>
      <section className='section' id='select'>
        <h2>Select</h2>
        <div className='section__container'>
          <SelectExamples />
        </div>
      </section>
      <section className='section' id='card'>
        <h2>Cards</h2>
        <div className='section__container'>
          <CardExample />
        </div>
      </section>
      <section className='section' id='carousel'>
        <h2>Carousel</h2>
        <div className='section__container !gap-[5rem] flex-col'>
          <CarouselExamples />
          <CarouselEventsExample />
          <CarouselAutoplayExample />
        </div>
      </section>
      <section className='section' id='checkboxes'>
        <h2>Checkboxes</h2>
        <div className='section__container'>
          <CheckboxesExample />
        </div>
      </section>
      <section className='section' id='collapsibles'>
        <h2>Collapsibles</h2>
        <div className='section__container'>
          <CollapsibleExamples />
        </div>
      </section>
      <section className='section' id='popover'>
        <h2>Popover</h2>
        <div className='section__container'>
          <PopoverExample />
        </div>
      </section>
      <section className='section' id='dialogs'>
        <h2>Dialogs</h2>
        <div className='section__container'>
          <DialogExample />
        </div>
      </section>
      <section className='section' id='datepickers'>
        <h2>DatePickers</h2>
        <div className='section__container'>
          <DatePickerExample />
          <DatepickerWithRangeExample />
          <DatepickerWithPresetsExample />
        </div>
      </section>
      <section className='section' id='drawers'>
        <h2>Drawers</h2>
        <div className='section__container'>
          <DrawerExample />
          <ResponsiveDialogDrawer />
        </div>
      </section>
      <section className='section' id='toasts'>
        <h2>Toasts</h2>
        <div className='section__container'>
          <ToastsExamples />
        </div>
      </section>
      <section className='section' id='radio-groups'>
        <h2>Radio Buttons/ Radio Groups</h2>
        <div className='section__container'>
          <RadioButtonsExamples />
        </div>
      </section>
      <section className='section' id='switches'>
        <h2>Switches</h2>
        <div className='section__container'>
          <SwitchesExample />
        </div>
      </section>
      <section className='section' id='texxtareas'>
        <h2>Textareas</h2>
        <div className='section__container'>
          <TextareaExamples />
        </div>
      </section>
      <section className='section' id='command'>
        <h2>Command Components</h2>
        <div className='section__container'>
          <CommandExamples />
          <CommandExampleKeyExample />
        </div>
      </section>
      <section className='section' id='combobox'>
        <h2>Combobox components</h2>
        <div className='section__container'>
          <ComboboxExampleSimple />
        </div>
      </section>
      <section className='section' id='forms'>
        <h2>Forms with Validations</h2>
        <div className='section__container'>
          <FormsExample />
        </div>
      </section>
    </MainPageLayout>
  );
};

RootPage.displayName = 'RootPage';

export default RootPage;
