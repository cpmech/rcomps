import { Story, Meta } from '@storybook/react/types-6-0';
import { SpinCircle, ISpinCircleProps } from '../SpinCircle';

export default {
  title: 'Components/SpinCircle',
  component: SpinCircle,
  argTypes: {
    size: { control: { type: 'range', min: 0, max: 300, step: 1 } },
    thickness: { control: { type: 'range', min: 0, max: 300, step: 1 } },
  },
} as Meta;

const Template: Story<ISpinCircleProps> = (args) => <SpinCircle {...args} />;

export const Default = Template.bind({});

export const Large = Template.bind({});
Large.args = {
  ...Template.args,
  size: 128,
  thickness: 20,
  time: '2s',
};
