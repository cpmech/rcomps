import { Story, Meta } from '@storybook/react/types-6-0';
import { RcButton, RcButtonProps } from '../RcButton';

export default {
  title: 'Foundation/RcButton',
  component: RcButton,
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
        options: ['button', 'submit', 'reset'],
      },
    },
    onClick: { action: 'rc-button-clicked' },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    colorDisabled: { control: 'color' },
    hoverColor: { control: 'color' },
    hoverColorOutline: { control: 'color' },
    spinning: { control: 'boolean' },
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

const Template: Story<RcButtonProps> = (args) => <RcButton {...args}>CLICK ME</RcButton>;

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
  height: '60px',
  paddingLeft: '100px',
  paddingRight: '100px',
  borderRadius: '100px',
  fontSize: '24px',
  fontWeight: 'bold',
  color: 'white',
  backgroundColor: '#803ced',
  hoverColor: '#9f6cf1',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Template.args,
  icon: <div>ICON</div>,
  width: '100px',
  height: '100px',
  paddingLeft: '4px',
  paddingRight: '0px',
  borderRadius: '300px',
};

export const MoreIcons = Template.bind({});
MoreIcons.args = {
  ...Template.args,
  icon: (
    <div>
      <div>ICON</div>
      <div>ICON</div> <div>ICON</div> <div>ICON</div>
      <div>ICON</div>
    </div>
  ),
};

export const Spinning = Template.bind({});
Spinning.args = {
  ...Template.args,
  spinning: true,
};
