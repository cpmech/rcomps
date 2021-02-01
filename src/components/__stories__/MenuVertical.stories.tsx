import { Story, Meta } from '@storybook/react/types-6-0';
import { MenuVertical, IMenuVerticalProps } from '../MenuVertical';
import { entries } from './menuEntries';

export default {
  title: 'Components/MenuVertical',
  component: MenuVertical,
} as Meta;

const Template: Story<IMenuVerticalProps> = (args) => <MenuVertical {...args} entries={entries} />;

export const Default = Template.bind({});
