import { Story, Meta } from '@storybook/react/types-6-0';
import { RcSideNav, RcSideNavProps } from '../RcSideNav';
import { useState } from 'react';
import {
  IconBell,
  IconChartBar,
  IconGlobe,
  IconShapes,
  IconSync,
  IconTicket,
} from '@cpmech/react-icons';

export default {
  title: 'Layout/RcSideNav',
  component: RcSideNav,
} as Meta;

export const Default: Story<RcSideNavProps> = (args) => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(true)}>Show SideNav</button>
      {show && (
        <RcSideNav
          {...args}
          entries={[
            { item: 'First', onClick: () => window.alert('First clicked') },
            { item: 'Second', onClick: () => window.alert('Second clicked') },
            { item: 'Third', onClick: () => window.alert('Third clicked') },
          ]}
          onClose={() => setShow(false)}
        />
      )}
    </div>
  );
};

export const CustomEntries: Story<RcSideNavProps> = (args) => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(true)}>Show SideNav</button>
      {show && (
        <RcSideNav
          {...args}
          entries={[
            { item: <IconBell /> },
            { item: <IconChartBar /> },
            { item: <IconGlobe /> },
            { item: <IconShapes /> },
            { item: <IconSync /> },
            { item: <IconTicket /> },
          ]}
          onClose={() => setShow(false)}
        />
      )}
    </div>
  );
};
