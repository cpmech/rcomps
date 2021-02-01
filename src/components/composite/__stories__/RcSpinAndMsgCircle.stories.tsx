import { Story, Meta } from '@storybook/react/types-6-0';
import { RcSpinAndMsgCircle, RcSpinAndMsgCircleProps } from '../RcSpinAndMsgCircle';

export default {
  title: 'Composite/RcSpinAndMsgCircle',
  component: RcSpinAndMsgCircle,
  argTypes: {
    color: { control: 'color' },
    size: { control: { type: 'range', min: 0, max: 300, step: 1 } },
  },
} as Meta;

const Template: Story<RcSpinAndMsgCircleProps> = (args) => (
  <RcSpinAndMsgCircle {...args} message="-^-" fontSize={34} />
);

export const Default = Template.bind({});

export const Styled = Template.bind({});
Styled.args = {
  ...Template.args,
  color: '#D22385',
  size: 200,
};
