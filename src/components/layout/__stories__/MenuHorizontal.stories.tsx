import { Story, Meta } from '@storybook/react/types-6-0';
import { MenuHorizontal, IMenuHorizontalProps } from '../MenuHorizontal';
import { entries } from './menuEntries';

export default {
  title: 'Layout/MenuHorizontal',
  component: MenuHorizontal,
} as Meta;

const Template: Story<IMenuHorizontalProps> = (args) => (
  <MenuHorizontal {...args} entries={entries} />
);

export const Default = Template.bind({});

export const NoPadding = Template.bind({});
NoPadding.args = {
  ...Template.args,
  gapVert: 0,
  gapVertSubEntries: 0,
  paddingVert: 0,
};

export const MaxWidth = Template.bind({});
MaxWidth.args = {
  ...Template.args,
  maxWidth: 900,
};
