import { Story, Meta } from '@storybook/react/types-6-0';
import { ButtonLink, IButtonLinkProps } from '../ButtonLink';
import { IconAccount } from '@cpmech/react-icons';

export default {
  title: 'Composite/ButtonLink',
  component: ButtonLink,
  argTypes: {
    onClick: { action: 'button-link-clicked' },
    color: { control: 'color' },
    hoverColor: { control: 'color' },
  },
} as Meta;

const Template: Story<IButtonLinkProps> = (args) => <ButtonLink {...args}>Hello World</ButtonLink>;

export const Default = Template.bind({});

export const Styled: Story<IButtonLinkProps> = (args) => (
  <ButtonLink {...args} color="#803ced" hoverColor="#9f6cf1">
    <IconAccount size={64} />
  </ButtonLink>
);
