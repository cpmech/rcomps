import { Story, Meta } from '@storybook/react/types-6-0';
import { RcSideNav, RcSideNavProps } from '../RcSideNav';
import { useState } from 'react';

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
        <div>ICON</div>
        BELL
      </div>
    ),
  },
  {
    item: (
      <div style={entryStyle}>
        <div>ICON</div>
        BAR CHART
      </div>
    ),
  },
  {
    item: (
      <div style={entryStyle}>
        <div>ICON</div>
        GLOBE
      </div>
    ),
  },
  {
    item: (
      <div style={entryStyle}>
        <div>ICON</div>
        SHAPES
      </div>
    ),
  },
  {
    item: (
      <div style={entryStyle}>
        <div>ICON</div>
        SYNC
      </div>
    ),
  },
  {
    item: (
      <div style={entryStyle}>
        <div>ICON</div>
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
            <div>ICON</div>
          </div>
        </RcSideNav>
      )}
    </div>
  );
};
