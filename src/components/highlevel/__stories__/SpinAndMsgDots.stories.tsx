import { Story, Meta } from '@storybook/react/types-6-0';
import { SpinAndMsgDots, ISpinAndMsgDotsProps } from '../SpinAndMsgDots';

export default {
  title: 'HighLevel/SpinAndMsgDots',
  component: SpinAndMsgDots,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<ISpinAndMsgDotsProps> = (args) => (
  <SpinAndMsgDots {...args} message="-^-" fontSize={34} />
);

export const Default = Template.bind({});

export const Styled = Template.bind({});
Styled.args = {
  ...Template.args,
  color: '#D22385',
  size: 200,
  time: '3s',
  thickness: 80,
};
