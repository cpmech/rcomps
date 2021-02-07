import { Story, Meta } from '@storybook/react/types-6-0';
import { RcCenterPage, RcCenterPageProps } from '../RcCenterPage';

export default {
  title: 'Composite/RcCenterPage',
  component: RcCenterPage,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<RcCenterPageProps> = (args) => (
  <RcCenterPage {...args} message="Hello" subMessage="World" />
);

export const Default = Template.bind({});
