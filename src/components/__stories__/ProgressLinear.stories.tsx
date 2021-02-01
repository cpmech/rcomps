import { Story, Meta } from '@storybook/react/types-6-0';
import { ProgressLinear, IProgressLinearProps } from '../ProgressLinear';

export default {
  title: 'Components/ProgressLinear',
  component: ProgressLinear,
  argTypes: {
    progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    barColor: { control: 'color' },
    borderRadius: { control: { type: 'range', min: 0, max: 300, step: 1 } },
  },
} as Meta;

const Template: Story<IProgressLinearProps> = (args) => <ProgressLinear {...args} />;

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
