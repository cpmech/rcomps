import { Story, Meta } from '@storybook/react/types-6-0';
import { RcProgress, RcProgressProps } from '../RcProgress';

export default {
  title: 'Foundation/RcProgress',
  component: RcProgress,
  argTypes: {
    progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    barColor: { control: 'color' },
  },
} as Meta;

const Template: Story<RcProgressProps> = (args) => <RcProgress {...args} />;

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
