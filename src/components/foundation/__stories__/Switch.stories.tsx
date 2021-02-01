import { Story, Meta } from '@storybook/react/types-6-0';
import { Switch, ISwitchProps } from '../Switch';
import { useState } from 'react';

export default {
  title: 'Foundation/Switch',
  component: Switch,
} as Meta;

const Template: Story<ISwitchProps> = (args) => <Switch {...args} />;

export const Default = Template.bind({});

export const Controlled: Story<ISwitchProps> = (args) => {
  const [on, setOn] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Switch {...args} on={on} onClick={() => setOn(!on)} />
      {on ? <p>on = true</p> : <p>on = false</p>}
    </div>
  );
};
