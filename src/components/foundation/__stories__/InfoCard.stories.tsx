import { Story, Meta } from '@storybook/react/types-6-0';
import { InfoCard, IInfoCardProps } from '../InfoCard';
import { LoremIpsumSmall } from '../../helpers';

export default {
  title: 'Foundation/InfoCard',
  component: InfoCard,
  argTypes: {
    initShow: { control: 'boolean' },
  },
} as Meta;

const Template: Story<IInfoCardProps> = (args) => (
  <InfoCard {...args} title="Good News!">
    {LoremIpsumSmall}
  </InfoCard>
);

export const Default = Template.bind({});
