import { Story, Meta } from '@storybook/react/types-6-0';
import { InfoCard, IInfoCardProps } from '../InfoCard';
import { loremIpsumFew } from './loremIpsum';

export default {
  title: 'Components/InfoCard',
  component: InfoCard,
  argTypes: {
    initShow: { control: 'boolean' },
  },
} as Meta;

const Template: Story<IInfoCardProps> = (args) => (
  <InfoCard {...args} title="Good News!">
    {loremIpsumFew}
  </InfoCard>
);

export const Default = Template.bind({});
