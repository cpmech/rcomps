import { Story, Meta } from '@storybook/react/types-6-0';
import { RcMenuVert, RcMenuVertProps } from '../RcMenuVert';
import { entries } from './menuEntries';

export default {
  title: 'Layout/RcMenuVert',
  component: RcMenuVert,
} as Meta;

const Template: Story<RcMenuVertProps> = (args) => <RcMenuVert {...args} entries={entries} />;

export const Default = Template.bind({});
