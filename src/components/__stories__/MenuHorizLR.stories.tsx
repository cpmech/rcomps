import { Story, Meta } from '@storybook/react/types-6-0';
import { MenuHorizLR, IMenuHorizLRProps } from '../MenuHorizLR';
import { entriesLeft, entriesRight } from './menuEntries';

export default {
  title: 'Components/MenuHorizLR',
  component: MenuHorizLR,
} as Meta;

const Template: Story<IMenuHorizLRProps> = (args) => (
  <MenuHorizLR
    {...args}
    left={{ entries: entriesLeft, gapHorizEntries: 20 }}
    right={{ entries: entriesRight, gapHorizEntries: 50 }}
  />
);

export const Default = Template.bind({});
