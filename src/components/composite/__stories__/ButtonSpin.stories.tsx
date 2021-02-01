import { Story, Meta } from '@storybook/react/types-6-0';
import { ButtonSpin, IButtonSpinProps } from '../ButtonSpin';

export default {
  title: 'Composite/ButtonSpin',
  component: ButtonSpin,
  argTypes: {
    onClick: { action: 'button-clicked' },
  },
} as Meta;

const Template: Story<IButtonSpinProps> = (args) => <ButtonSpin {...args}>Hello World</ButtonSpin>;

export const Default = Template.bind({});

export const Spinning = Template.bind({});
Spinning.args = {
  ...Template.args,
  spin: true,
};

export const FixedWidth = Template.bind({});
FixedWidth.args = {
  ...Template.args,
  width: '200px',
  spin: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Template.args,
  disabled: true,
  spin: true,
};
