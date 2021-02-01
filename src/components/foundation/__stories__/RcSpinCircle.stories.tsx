import { Story, Meta } from '@storybook/react/types-6-0';
import { RcSpinCircle, RcSpinCircleProps } from '../RcSpinCircle';

export default {
  title: 'Foundation/RcSpinCircle',
  component: RcSpinCircle,
  argTypes: {
    size: { control: { type: 'range', min: 0, max: 300, step: 1 } },
    thickness: { control: { type: 'range', min: 0, max: 300, step: 1 } },
  },
} as Meta;

const Template: Story<RcSpinCircleProps> = (args) => <RcSpinCircle {...args} />;

export const Default = Template.bind({});

export const Large = Template.bind({});
Large.args = {
  ...Template.args,
  size: 128,
  thickness: 20,
  time: '2s',
};
