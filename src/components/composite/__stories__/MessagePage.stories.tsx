import { Story, Meta } from '@storybook/react/types-6-0';
import { MessagePage, IMessagePageProps } from '../MessagePage';

export default {
  title: 'HighLevel/MessagePage',
  component: MessagePage,
} as Meta;

const Template: Story<IMessagePageProps> = (args) => <MessagePage {...args} heightMenu={0} />;

export const Default = Template.bind({});
