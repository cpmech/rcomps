import { Story, Meta } from '@storybook/react/types-6-0';
import { Progress, IProgressProps } from '../Progress';

export default {
  title: 'Foundation/Progress',
  component: Progress,
  argTypes: {
    progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    barColor: { control: 'color' },
    borderRadius: { control: { type: 'range', min: 0, max: 300, step: 1 } },
  },
} as Meta;

const Template: Story<IProgressProps> = (args) => <Progress {...args} />;

export const Default = Template.bind({});

export const Fifty = Template.bind({});
Fifty.args = {
  ...Template.args,
  progress: 50,
};

export const NinetyNine = Template.bind({});
NinetyNine.args = {
  ...Template.args,
  progress: 99,
};
