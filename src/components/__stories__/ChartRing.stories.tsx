import { Story, Meta } from '@storybook/react/types-6-0';
import { ChartRing, IChartRingProps } from '../ChartRing';

export default {
  title: 'Components/ChartRing',
  component: ChartRing,
  argTypes: {
    pct: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
} as Meta;

const Template: Story<IChartRingProps> = (args) => <ChartRing {...args} />;

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
