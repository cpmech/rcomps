import { Story, Meta } from '@storybook/react/types-6-0';
import { ProgressPage, IProgressPageProps } from '../ProgressPage';

export default {
  title: 'HighLevel/ProgressPage',
  component: ProgressPage,
  argTypes: {
    progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
} as Meta;

const Template: Story<IProgressPageProps> = (args) => <ProgressPage {...args} heightMenu={0} />;

export const Default = Template.bind({});

export const FiftyPct = Template.bind({});
FiftyPct.args = { ...Template.args, progress: 50 };
