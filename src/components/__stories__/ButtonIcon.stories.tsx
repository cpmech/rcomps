import { Story, Meta } from '@storybook/react/types-6-0';
import { ButtonIcon, IButtonIconProps } from '../ButtonIcon';
import {
  IconAngleLeft,
  IconAngleRight,
  IconArrowLeft,
  IconGlobe,
  IconHouseThreeD,
} from '@cpmech/react-icons';

export default {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
        options: ['button', 'submit', 'reset'],
      },
    },
    onClick: { action: 'button-icon-clicked' },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    colorDisabled: { control: 'color' },
    hoverColor: { control: 'color' },
    hoverColorOutline: { control: 'color' },
    height: { control: 'range', min: 0, max: 100, step: 1 },
    paddingLeft: { control: 'range', min: 0, max: 100, step: 1 },
    paddingRight: { control: 'range', min: 0, max: 100, step: 1 },
    borderRadius: { control: 'range', min: 0, max: 100, step: 1 },
    fontSize: { control: 'range', min: 0, max: 100, step: 1 },
    disabled: { control: 'boolean' },
    outline: { control: 'boolean' },
    flatLeft: { control: 'boolean' },
    flatRight: { control: 'boolean' },
  },
} as Meta;

const Template: Story<IButtonIconProps> = (args) => (
  <ButtonIcon icon={<div>ICON GOES HERE</div>} {...args} />
);

export const Default = Template.bind({});

export const MoreIcons = Template.bind({});
MoreIcons.args = {
  ...Template.args,
  icon: (
    <div>
      <IconAngleLeft />
      <IconHouseThreeD /> <IconArrowLeft /> <IconGlobe />
      <IconAngleRight />
    </div>
  ),
};

export const Arrow = Template.bind({});
Arrow.args = {
  ...Template.args,
  icon: <IconAngleRight size={80} />,
  width: '100px',
  height: 100,
  paddingLeft: 4,
  paddingRight: 0,
  borderRadius: 300,
};
