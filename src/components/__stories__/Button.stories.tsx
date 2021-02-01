import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, IButtonProps } from '../Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
        options: ['button', 'submit', 'reset'],
      },
    },
    onClick: { action: 'button-clicked' },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    colorDisabled: { control: 'color' },
    hoverColor: { control: 'color' },
    hoverColorOutline: { control: 'color' },
    height: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    paddingLeft: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    paddingRight: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    borderRadius: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    fontSize: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    disabled: { control: 'boolean' },
    outline: { control: 'boolean' },
    flatLeft: { control: 'boolean' },
    flatRight: { control: 'boolean' },
  },
  parameters: {
    backgrounds: {
      values: [
        { name: 'white', value: '#fff' },
        { name: 'light', value: '#cecece' },
        { name: 'dark', value: '#484848' },
      ],
    },
  },
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args}>CLICK ME</Button>;

export const Default = Template.bind({});

export const FullWidth = Template.bind({});
FullWidth.args = { ...Template.args, width: '100%' };

export const Disabled = Template.bind({});
Disabled.args = { ...Template.args, disabled: true };

export const Outline = Template.bind({});
Outline.args = { ...Template.args, outline: true };

export const Styled = Template.bind({});
Styled.args = {
  ...Template.args,
  height: 60,
  paddingLeft: 100,
  paddingRight: 100,
  borderRadius: 100,
  fontSize: 24,
  fontWeight: 'bold',
  color: 'white',
  backgroundColor: '#803ced',
  hoverColor: '#9f6cf1',
};
