import { Story, Meta } from '@storybook/react/types-6-0';
import { Notifier, INotifierProps } from '../Notifier';
import { useState } from 'react';
import { loremIpsum } from './loremIpsum';

export default {
  title: 'Components/Notifier',
  component: Notifier,
} as Meta;

const Template: Story<INotifierProps> = (args) => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(true)}>SHOW</button>
      {show && <Notifier {...args} onClose={() => setShow(false)} />}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  message: 'Hello World!',
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  ...Template.args,
  title: 'Notifications',
  message: 'Hello World!',
  cssTitle: 'font-weight: bold; color: #e62739;',
};

export const WithCaption = Template.bind({});
WithCaption.args = {
  ...Template.args,
  message: 'Hello World!',
  caption: 'Warning. ',
  cssTitle: 'font-weight: bold; color: #e62739;',
};

export const LongMessage = Template.bind({});
LongMessage.args = {
  ...Template.args,
  title: 'Long Message',
  message: loremIpsum,
  cssTitle: 'font-weight: bold; color: #e62739;',
};
