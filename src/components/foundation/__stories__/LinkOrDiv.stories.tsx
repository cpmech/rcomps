import { IconAccount } from '@cpmech/react-icons';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LinkOrDiv, ILinkOrDivProps } from '../LinkOrDiv';

export default {
  title: 'Foundation/LinkOrDiv',
  component: LinkOrDiv,
  argTypes: {
    onClick: { action: 'link-clicked' },
  },
} as Meta;

const Template: Story<ILinkOrDivProps> = (args) => <LinkOrDiv {...args}>click me</LinkOrDiv>;

export const Default = Template.bind({});

export const Styled: Story<ILinkOrDivProps> = (args) => (
  <LinkOrDiv {...args} color="#803ced" hoverColor="#9f6cf1">
    <IconAccount size={64} />
  </LinkOrDiv>
);
