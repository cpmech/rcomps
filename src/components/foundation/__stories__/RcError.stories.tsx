import { Story, Meta } from '@storybook/react/types-6-0';
import { RcError, IRcErrorProps } from '../RcError';

export default {
  title: 'Foundation/RcError',
  component: RcError,
} as Meta;

const Template: Story<IRcErrorProps> = (args) => <RcError {...args} />;

export const Default = Template.bind({});

export const WithError = Template.bind({});
WithError.args = {
  ...Template.args,
  error: 'Email is invalid',
};
