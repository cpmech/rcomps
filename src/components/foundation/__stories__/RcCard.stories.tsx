import { Story, Meta } from '@storybook/react/types-6-0';
import { RcCard, RcCardProps } from '../RcCard';
import { LoremIpsumSmall } from '../../helpers';

export default {
  title: 'Foundation/RcCard',
  component: RcCard,
  argTypes: {
    initShow: { control: 'boolean' },
  },
} as Meta;

const Template: Story<RcCardProps> = (args) => (
  <RcCard {...args} title="Good News!">
    {LoremIpsumSmall}
  </RcCard>
);

export const Default = Template.bind({});
