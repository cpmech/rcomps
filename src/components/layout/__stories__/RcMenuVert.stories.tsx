import { Story, Meta } from '@storybook/react/types-6-0';
import { rcDefaultMenuOptions } from '../RcMenuTypes';
import { RcMenuVert, RcMenuVertProps } from '../RcMenuVert';
import { dpEntries, entries } from './menuEntries';

export default {
  title: 'Layout/RcMenuVert',
  component: RcMenuVert,
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

const Template: Story<RcMenuVertProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <RcMenuVert {...args} entries={entries} />
    {renderContent}
  </div>
);

export const Default = Template.bind({});
Default.args = {
  ...Template.args,
  options: rcDefaultMenuOptions({
    colorIcon: '#f57d1b',
    iconSize: '32px',
    subIconSize: '24px',
  }),
};

export const MaxWidth = Template.bind({});
MaxWidth.args = {
  ...Template.args,
  options: rcDefaultMenuOptions({
    colorIcon: '#f57d1b',
    maxWidth: '140px',
    iconSize: '32px',
    subIconSize: '24px',
  }),
};

export const DpMenu: Story<RcMenuVertProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <RcMenuVert
      {...args}
      entries={dpEntries}
      options={rcDefaultMenuOptions({
        minWidth: '250px',
        maxWidth: '250px',
        iconSize: '18px',
        subIconSize: '14px',
      })}
    />
    {renderContent}
  </div>
);
