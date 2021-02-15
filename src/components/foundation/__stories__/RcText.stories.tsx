import { Story, Meta } from '@storybook/react/types-6-0';
import { RcText, RcTextProps } from '../RcText';
import { argTypesTypeA } from './argTypes';

export default {
  title: 'Foundation/RcText',
  component: RcText,
  argTypes: {
    ...argTypesTypeA,
  },
} as Meta;

const Template: Story<RcTextProps> = (args) => <RcText {...args} name="name" label="Name" />;

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  ...Template.args,
  height: '32px',
  fontSize: '14px',
  labelFontSize: '14px',
  value: 'Smaller',
};

export const OnRow: Story<RcTextProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <RcText {...args} name="name" label="Name" value="Hello World!" flatRight={true} />
    <RcText {...args} name="email" label="Email" flatLeft={true} flatRight={true} />
  </div>
);

export const Stacked: Story<RcTextProps> = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <RcText {...args} name="name" label="Name" value="Hello World!" />
    <RcText {...args} name="email" label="Email" />
  </div>
);

export const WithSuffix: Story<RcTextProps> = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: 250,
    }}
  >
    <RcText {...args} label="Energy" value="123.456" suffix="kWh" />
    <RcText {...args} label="Energy" value="123.456" suffix={<div>ICON</div>} />
  </div>
);

const bgColor = '#2ecc71';

export const LightAndDarkBg: Story<RcTextProps> = (args) => (
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
      <RcText {...args} width="250px" name="name" label="Name" bgColor={bgColor} darkMode={true} />
      <RcText
        {...args}
        width="250px"
        name="email"
        label="Email"
        bgColor={bgColor}
        darkMode={true}
      />
      <RcText
        {...args}
        width="250px"
        name="password"
        label="Password"
        bgColor={bgColor}
        darkMode={true}
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
      <RcText {...args} width="250px" name="name" label="Name" />
      <RcText {...args} width="250px" name="email" label="Email" />
    </div>
  </div>
);
