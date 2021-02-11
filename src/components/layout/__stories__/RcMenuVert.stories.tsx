import { Story, Meta } from '@storybook/react/types-6-0';
import { RcMenuVert, RcMenuVertProps } from '../RcMenuVert';
import { entries } from './menuEntries';

export default {
  title: 'Layout/RcMenuVert',
  component: RcMenuVert,
} as Meta;

const Template: Story<RcMenuVertProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <RcMenuVert {...args} entries={entries} />
    <div style={{ width: '100%', height: 'calc(100vh - 6px)', border: '2px solid red' }}>
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
  </div>
);

export const Default = Template.bind({});

export const MaxWidth = Template.bind({});
MaxWidth.args = {
  ...Template.args,
  maxWidth: '100px',
};
