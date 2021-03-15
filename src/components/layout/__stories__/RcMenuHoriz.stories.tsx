import { Story, Meta } from '@storybook/react/types-6-0';
import { RcMenuHoriz, RcMenuHorizProps } from '../RcMenuHoriz';
import { rcDefaultMenuOptions } from '../RcMenuTypes';
import { entries } from './menuEntries';

export default {
  title: 'Layout/RcMenuHoriz',
  component: RcMenuHoriz,
} as Meta;

const Template: Story<RcMenuHorizProps> = (args) => <RcMenuHoriz {...args} entries={entries} />;

export const Default = Template.bind({});

export const NoPadding = Template.bind({});
NoPadding.args = {
  ...Template.args,
  gapVert: '0px',
  gapVertSubEntries: '0px',
  paddingVert: '0px',
};

export const MaxWidth = Template.bind({});
MaxWidth.args = {
  ...Template.args,
  options: rcDefaultMenuOptions({ maxWidth: '900px' }),
};
