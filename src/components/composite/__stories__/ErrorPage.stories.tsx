import { Story, Meta } from '@storybook/react/types-6-0';
import { ErrorPage, IErrorPageProps } from '../ErrorPage';

export default {
  title: 'Composite/ErrorPage',
  component: ErrorPage,
} as Meta;

const Template: Story<IErrorPageProps> = (args) => <ErrorPage {...args} heightMenu={0} />;

export const Default = Template.bind({});
