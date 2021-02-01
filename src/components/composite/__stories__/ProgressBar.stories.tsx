import { Story, Meta } from '@storybook/react/types-6-0';
import { ProgressBar, IProgressBarProps } from '../ProgressBar';

export default {
  title: 'Composite/ProgressBar',
  component: ProgressBar,
  argTypes: {
    progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
} as Meta;

const Template: Story<IProgressBarProps> = (args) => <ProgressBar {...args} />;

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
