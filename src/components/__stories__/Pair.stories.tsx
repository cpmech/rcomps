import { Story, Meta } from '@storybook/react/types-6-0';
import { Pair, IPairProps } from '../Pair';
import { ReactComponent as HouseIcon } from '../../assets/house.svg';

export default {
  title: 'Components/Pair',
  component: Pair,
  argTypes: {
    spacing: { control: 'range', min: 0, max: 100, step: 1 },
    spaceBetween: { control: 'boolean' },
  },
} as Meta;

const Template: Story<IPairProps> = (args) => (
  <Pair {...args} left={<HouseIcon width={32} />} right="Hello World" />
);

export const Default = Template.bind({});

export const Styled = Template.bind({});
Styled.args = {
  ...Template.args,
  spacing: 20,
  cssRight: 'font-size: 40px;',
};

export const SpaceBetween = Template.bind({});
SpaceBetween.args = {
  ...Template.args,
  spaceBetween: true,
};
