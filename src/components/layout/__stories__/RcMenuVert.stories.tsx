import { Story, Meta } from '@storybook/react/types-6-0';
import { rcDefaultMenuOptions, RcMenuOptions } from '../RcMenuTypes';
import { RcMenuVert } from '../RcMenuVert';
import { dpEntries, entries } from './menuEntries';

export default {
  title: 'Layout/RcMenuVert',
  component: RcMenuVert,
  argTypes: {
    useShowHideSub: { control: { type: 'boolean' } },
    useShowHideSubSub: { control: { type: 'boolean' } },
    initShowAllSub: { control: { type: 'boolean' } },
    initShowAllSubSub: { control: { type: 'boolean' } },
  },
} as Meta;

const renderContent = (
  <div style={{ width: '70%', height: 'calc(100vh - 6px)', border: '2px solid red' }}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <div>CONTENT GOES HERE</div>
    </div>
  </div>
);

// NOTE: args here are not props, but the options
const Template: Story<RcMenuOptions> = (args) => {
  let forceUpdate = 0;
  if (args.initShowAllSub) {
    forceUpdate++;
  }
  if (args.initShowAllSubSub) {
    forceUpdate++;
  }
  return (
    <div key={forceUpdate} style={{ display: 'flex', flexDirection: 'row' }}>
      <RcMenuVert entries={entries} options={rcDefaultMenuOptions(args)} />
      {renderContent}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  colorIcon: '#f57d1b',
  iconSize: '32px',
  subIconSize: '24px',
};

export const MaxWidth = Template.bind({});
MaxWidth.args = {
  colorIcon: '#f57d1b',
  maxWidth: '140px',
  iconSize: '32px',
  subIconSize: '24px',
};

export const DpMenu: Story<RcMenuOptions> = (args) => {
  let forceUpdate = 0;
  if (args.initShowAllSub) {
    forceUpdate++;
  }
  if (args.initShowAllSubSub) {
    forceUpdate++;
  }
  return (
    <div key={forceUpdate} style={{ display: 'flex', flexDirection: 'row' }}>
      <RcMenuVert
        entries={dpEntries}
        options={rcDefaultMenuOptions({
          ...args,
          minWidth: '250px',
          maxWidth: '250px',
          iconSize: '18px',
          subIconSize: '14px',
        })}
      />
      {renderContent}
    </div>
  );
};
