import { Story, Meta } from '@storybook/react/types-6-0';
import { FormErrorField, IFormErrorFieldProps } from '../FormErrorField';

export default {
  title: 'Foundation/FormErrorField',
  component: FormErrorField,
} as Meta;

const Template: Story<IFormErrorFieldProps> = (args) => (
  <FormErrorField {...args} error="Email is invalid" />
);

export const Default = Template.bind({});
