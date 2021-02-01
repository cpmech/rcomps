import { Story, Meta } from '@storybook/react/types-6-0';
import { RcProgressBar, RcProgressBarProps } from '../RcProgressBar';

export default {
  title: 'Composite/RcProgressBar',
  component: RcProgressBar,
  argTypes: {
    progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
} as Meta;

const Template: Story<RcProgressBarProps> = (args) => <RcProgressBar {...args} />;

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
