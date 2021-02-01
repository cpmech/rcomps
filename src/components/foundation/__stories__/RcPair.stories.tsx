import { Story, Meta } from '@storybook/react/types-6-0';
import { RcPair, RcPairProps } from '../RcPair';
import { ReactComponent as HouseIcon } from '../../../assets/house.svg';

export default {
  title: 'Foundation/RcPair',
  component: RcPair,
  argTypes: {
    spacing: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    spaceBetween: { control: 'boolean' },
  },
} as Meta;

const Template: Story<RcPairProps> = (args) => (
  <RcPair {...args} left={<HouseIcon width={32} />} right="Hello World" />
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
