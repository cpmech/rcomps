import { Story, Meta } from '@storybook/react/types-6-0';
import { RcSideNav, RcSideNavProps } from '../RcSideNav';
import { useState } from 'react';
import {
  IconBell,
  IconChartBar,
  IconGlobe,
  IconHouseThreeD,
  IconShapes,
  IconSync,
  IconTicket,
} from '@cpmech/react-icons';

const entryStyle: React.CSSProperties = {
  paddingLeft: 20,
  paddingRight: 20,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const entries = [
  {
    item: (
      <div style={entryStyle}>
        <IconBell />
        BELL
      </div>
    ),
  },
  {
    item: (
      <div style={entryStyle}>
        <IconChartBar />
        BAR CHART
      </div>
    ),
  },
  {
    item: (
      <div style={entryStyle}>
        <IconGlobe />
        GLOBE
      </div>
    ),
  },
  {
    item: (
      <div style={entryStyle}>
        <IconShapes />
        SHAPES
      </div>
    ),
  },
  {
    item: (
      <div style={entryStyle}>
        <IconSync />
        SYNC
      </div>
    ),
  },
  {
    item: (
      <div style={entryStyle}>
        <IconTicket />
        TICKET
      </div>
    ),
  },
];

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

export const Custom: Story<RcSideNavProps> = (args) => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(true)}>Show SideNav</button>
      {show && (
        <RcSideNav {...args} entries={entries} onClose={() => setShow(false)}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconHouseThreeD size="64px" />
          </div>
        </RcSideNav>
      )}
    </div>
  );
};
