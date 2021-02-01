import { Story, Meta } from '@storybook/react/types-6-0';
import { InputTypeA, IInputTypeAProps } from '../InputTypeA';
import { IconExclamation, IconEye, IconEyeNo } from '@cpmech/react-icons';
import { useState } from 'react';
import { argTypesTypeA } from './argTypes';

export default {
  title: 'Foundation/InputTypeA',
  component: InputTypeA,
  argTypes: {
    ...argTypesTypeA,
    password: { control: 'boolean' },
  },
} as Meta;

const Template: Story<IInputTypeAProps> = (args) => (
  <InputTypeA {...args} name="name" label="Name" />
);

export const Default = Template.bind({});

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  ...Template.args,
  readOnly: true,
  value: "Don't change this",
};

export const Small = Template.bind({});
Small.args = {
  ...Template.args,
  height: 32,
  fontSize: 14,
  labelFontSize: 14,
  value: 'Smaller',
};

export const Errors: Story<IInputTypeAProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <InputTypeA {...args} name="email" label="Email" error="Please, enter a valid email" />
    <InputTypeA {...args} name="email" label="Email" error="" value="No error here" />
    <InputTypeA {...args} name="email" label="Email" error={true} />
    <InputTypeA {...args} name="email" label="Email" error={false} value="No error here" />
  </div>
);

export const OnRow: Story<IInputTypeAProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <InputTypeA {...args} name="name" label="Name" value="Hello World!" flatRight={true} />
    <InputTypeA {...args} name="email" label="Email" flatLeft={true} flatRight={true} />
    <InputTypeA {...args} name="password" label="Password" password={true} flatLeft={true} />
  </div>
);

export const Stacked: Story<IInputTypeAProps> = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <InputTypeA {...args} name="name" label="Name" value="Hello World!" />
    <InputTypeA {...args} name="email" label="Email" />
    <InputTypeA {...args} name="password" label="Password" password={true} />
  </div>
);

export const Controlled: Story<IInputTypeAProps> = (args) => {
  const [name, setName] = useState('My Name Goes Here');
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <InputTypeA {...args} width="250px" value={name} onChange={(e) => setName(e.target.value)} />
      <div>Name = {name}</div>
    </div>
  );
};

export const Password: Story<IInputTypeAProps> = (args) => {
  const [value, setValue] = useState('1234-5678');
  const [show, setShow] = useState(false);
  const icon = (
    <div onClick={() => setShow(!show)}>
      {show ? <IconEye size={18} /> : <IconEyeNo size={18} />}
    </div>
  );
  return (
    <InputTypeA
      label="Password"
      password={!show}
      value={value}
      suffix={icon}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const WithSuffix: Story<IInputTypeAProps> = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: 250,
    }}
  >
    <InputTypeA label="Energy" value="123.456" suffix="kWh" />
    <InputTypeA label="Energy" value="123.456" suffix={<IconExclamation size={18} />} />
  </div>
);

const bgColor = '#2ecc71';

export const LightAndDarkBg: Story<IInputTypeAProps> = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: bgColor,
        height: '50vh',
        width: '100%',
      }}
    >
      <InputTypeA
        {...args}
        width="250px"
        name="name"
        label="Name"
        bgColor={bgColor}
        darkMode={true}
      />
      <InputTypeA
        {...args}
        width="250px"
        name="email"
        label="Email"
        bgColor={bgColor}
        darkMode={true}
      />
      <InputTypeA
        {...args}
        width="250px"
        name="password"
        label="Password"
        bgColor={bgColor}
        darkMode={true}
        password={true}
      />
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        width: '100%',
      }}
    >
      <InputTypeA {...args} width="250px" name="name" label="Name" />
      <InputTypeA {...args} width="250px" name="email" label="Email" />
      <InputTypeA {...args} width="250px" name="password" label="Password" password={true} />
    </div>
  </div>
);
