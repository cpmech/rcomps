import { Story, Meta } from '@storybook/react/types-6-0';
import { RcChartRing, RcChartRingProps } from '../RcChartRing';

export default {
  title: 'Foundation/RcChartRing',
  component: RcChartRing,
  argTypes: {
    pct: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
} as Meta;

const Template: Story<RcChartRingProps> = (args) => <RcChartRing {...args} />;

export const Default = Template.bind({});

export const Eighty = Template.bind({});
Eighty.args = {
  ...Template.args,
  pct: 80,
};

export const WithMessage = Template.bind({});
WithMessage.args = {
  ...Template.args,
  message: 'hello',
};

export const PrefixAndSufix = Template.bind({});
PrefixAndSufix.args = {
  ...Template.args,
  message: 'hello',
  prefix: ':-)',
  sufix: 'world',
};
