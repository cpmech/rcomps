import { Story, Meta } from '@storybook/react/types-6-0';
import { TextTypeA, ITextTypeAProps } from '../TextTypeA';
import { argTypesTypeA } from './argTypes';
import { IconExclamation } from '@cpmech/react-icons';

export default {
  title: 'Foundation/TextTypeA',
  component: TextTypeA,
  argTypes: {
    ...argTypesTypeA,
  },
} as Meta;

const Template: Story<ITextTypeAProps> = (args) => <TextTypeA {...args} name="name" label="Name" />;

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  ...Template.args,
  height: 32,
  fontSize: 14,
  labelFontSize: 14,
  value: 'Smaller',
};

export const OnRow: Story<ITextTypeAProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <TextTypeA {...args} name="name" label="Name" value="Hello World!" flatRight={true} />
    <TextTypeA {...args} name="email" label="Email" flatLeft={true} flatRight={true} />
  </div>
);

export const Stacked: Story<ITextTypeAProps> = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <TextTypeA {...args} name="name" label="Name" value="Hello World!" />
    <TextTypeA {...args} name="email" label="Email" />
  </div>
);

export const WithSuffix: Story<ITextTypeAProps> = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: 250,
    }}
  >
    <TextTypeA label="Energy" value="123.456" suffix="kWh" />
    <TextTypeA label="Energy" value="123.456" suffix={<IconExclamation size={18} />} />
  </div>
);

const bgColor = '#2ecc71';

export const LightAndDarkBg: Story<ITextTypeAProps> = (args) => (
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
      <TextTypeA
        {...args}
        width="250px"
        name="name"
        label="Name"
        bgColor={bgColor}
        darkMode={true}
      />
      <TextTypeA
        {...args}
        width="250px"
        name="email"
        label="Email"
        bgColor={bgColor}
        darkMode={true}
      />
      <TextTypeA
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
      <TextTypeA {...args} width="250px" name="name" label="Name" />
      <TextTypeA {...args} width="250px" name="email" label="Email" />
    </div>
  </div>
);
