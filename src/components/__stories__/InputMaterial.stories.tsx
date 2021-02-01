import { Story, Meta } from '@storybook/react/types-6-0';
import { InputMaterial, IInputMaterialProps } from '../InputMaterial';

export default {
  title: 'Components/InputMaterial',
  component: InputMaterial,
} as Meta;

const Template: Story<IInputMaterialProps> = (args) => (
  <InputMaterial {...args} name="name" label="Name" />
);

export const Default = Template.bind({});

export const Multiple: Story<IInputMaterialProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <InputMaterial name="name" label="Name" value="Hello World!" />
    <InputMaterial name="email" label="Email" />
    <InputMaterial name="password" label="Password" type="password" />
  </div>
);
