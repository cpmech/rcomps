import { Story, Meta } from '@storybook/react/types-6-0';
import { RcSpinnerPage, RcSpinnerPageProps } from '../RcSpinnerPage';

export default {
  title: 'Composite/RcSpinnerPage',
  component: RcSpinnerPage,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<RcSpinnerPageProps> = (args) => <RcSpinnerPage {...args} />;

export const Default = Template.bind({});
