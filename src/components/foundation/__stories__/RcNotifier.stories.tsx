import { Story, Meta } from '@storybook/react/types-6-0';
import { RcNotifier, RcNotifierProps } from '../RcNotifier';
import { useState } from 'react';
import { LoremIpsum } from '../../helpers';

export default {
  title: 'Foundation/RcNotifier',
  component: RcNotifier,
} as Meta;

const Template: Story<RcNotifierProps> = (args) => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(true)}>SHOW</button>
      {show && <RcNotifier {...args} onClose={() => setShow(false)} />}
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
  message: LoremIpsum,
  cssTitle: 'font-weight: bold; color: #e62739;',
};
