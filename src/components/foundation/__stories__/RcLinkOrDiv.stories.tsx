import { Story, Meta } from '@storybook/react/types-6-0';
import { RcLinkOrDiv, RcLinkOrDivProps } from '../RcLinkOrDiv';
import { IconHome } from '../../layout/__stories__/IconHome';

export default {
  title: 'Foundation/RcLinkOrDiv',
  component: RcLinkOrDiv,
  argTypes: {
    onClick: { action: 'rc-link-clicked' },
  },
} as Meta;

const Template: Story<RcLinkOrDivProps> = (args) => <RcLinkOrDiv {...args}>click me</RcLinkOrDiv>;

export const Default = Template.bind({});

export const Underline = Template.bind({});
Underline.args = {
  ...Template.args,
  underline: true,
};

export const Styled: Story<RcLinkOrDivProps> = (args) => (
  <RcLinkOrDiv {...args} color="#803ced" hoverColor="#9f6cf1">
    <IconHome size="64px" />
  </RcLinkOrDiv>
);
