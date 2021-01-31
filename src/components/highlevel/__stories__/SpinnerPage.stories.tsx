import { Story, Meta } from '@storybook/react/types-6-0';
import { SpinnerPage, ISpinnerPageProps } from '../SpinnerPage';

export default {
  title: 'HighLevel/SpinnerPage',
  component: SpinnerPage,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<ISpinnerPageProps> = (args) => <SpinnerPage {...args} heightMenu={0} />;

export const Default = Template.bind({});
