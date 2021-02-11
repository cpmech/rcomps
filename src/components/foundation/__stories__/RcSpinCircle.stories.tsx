import { Story, Meta } from '@storybook/react/types-6-0';
import { RcSpinCircle, RcSpinCircleProps } from '../RcSpinCircle';

export default {
  title: 'Foundation/RcSpinCircle',
  component: RcSpinCircle,
} as Meta;

const Template: Story<RcSpinCircleProps> = (args) => <RcSpinCircle {...args} />;

export const Default = Template.bind({});

export const Large = Template.bind({});
Large.args = {
  ...Template.args,
  size: '128px',
  thickness: '20px',
  time: '2s',
};

export const Viewport = Template.bind({});
Viewport.args = {
  ...Template.args,
  size: '100vh',
  thickness: '20vh',
};
