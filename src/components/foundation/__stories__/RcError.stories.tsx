import { Story, Meta } from '@storybook/react/types-6-0';
import { RcError, RcErrorProps } from '../RcError';

export default {
  title: 'Foundation/RcError',
  component: RcError,
} as Meta;

const Template: Story<RcErrorProps> = (args) => <RcError {...args} />;

export const Default = Template.bind({});

export const WithError = Template.bind({});
WithError.args = {
  ...Template.args,
  error: 'Email is invalid',
};
