import { Story, Meta } from '@storybook/react/types-6-0';
import { Link, ILinkProps } from '../Link';

export default {
  title: 'Foundation/Link',
  component: Link,
  argTypes: {
    onClick: { action: 'link-clicked' },
  },
} as Meta;

const Template: Story<ILinkProps> = (args) => <Link {...args}>click me</Link>;

export const Default = Template.bind({});
