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
Default.args = {
  ...Template.args,
  options: rcDefaultMenuOptions({
    colorIcon: '#f57d1b',
    iconSize: '32px',
    subIconSize: '24px',
  }),
};

export const MaxWidth = Template.bind({});
MaxWidth.args = {
  ...Template.args,
  options: rcDefaultMenuOptions({
    colorIcon: '#f57d1b',
    maxWidth: '900px',
    iconSize: '32px',
    subIconSize: '24px',
  }),
};
