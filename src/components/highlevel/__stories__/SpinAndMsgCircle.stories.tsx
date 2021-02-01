import { Story, Meta } from '@storybook/react/types-6-0';
import { SpinAndMsgCircle, ISpinAndMsgCircleProps } from '../SpinAndMsgCircle';

export default {
  title: 'HighLevel/SpinAndMsgCircle',
  component: SpinAndMsgCircle,
  argTypes: {
    color: { control: 'color' },
    size: { control: 'range', min: 0, max: 300, step: 1 },
  },
} as Meta;

const Template: Story<ISpinAndMsgCircleProps> = (args) => (
  <SpinAndMsgCircle {...args} message="-^-" fontSize={34} />
);

export const Default = Template.bind({});

export const Styled = Template.bind({});
Styled.args = {
  ...Template.args,
  color: '#D22385',
  size: 200,
};
