import { Story, Meta } from '@storybook/react/types-6-0';
import { RcSwitch, RcSwitchProps } from '../RcSwitch';
import { useState } from 'react';

export default {
  title: 'Foundation/RcSwitch',
  component: RcSwitch,
} as Meta;

const Template: Story<RcSwitchProps> = (args) => {
  const [on, setOn] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <RcSwitch {...args} on={on} onClick={() => setOn(!on)} />
      {on ? <p>on = true</p> : <p>on = false</p>}
    </div>
  );
};

export const Default = Template.bind({});

export const Styled = Template.bind({});
Styled.args = {
  height: '50vh',
  borderWidth: '2px',
  knobBorderWidth: '1px',
  transitionTime: '0s',
  gap: '15px',
};
