import { Story, Meta } from '@storybook/react/types-6-0';
import { RcPicker, RcPickerProps } from '../RcPicker';
import { argTypesTypeA } from './argTypes';
import { useState } from 'react';

const entries = [
  {
    message: 'First entry',
    onClick: () => window.alert('First entry was clicked'),
  },
  {
    message: 'Second entry',
    onClick: () => window.alert('Second entry was clicked'),
  },
  {
    message: 'Third entry',
    onClick: () => window.alert('Third entry was clicked'),
  },
];

const entriesT = [
  {
    title: '1st',
    message: 'First entry',
    onClick: () => window.alert('First entry was clicked'),
  },
  {
    title: '2nd',
    message: 'Second entry',
    onClick: () => window.alert('Second entry was clicked'),
  },
  {
    title: '3rd',
    message: 'Third entry',
    onClick: () => window.alert('Third entry was clicked'),
  },
];

const manyEntries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(
  (i) => ({
    message: `Number ${i}`,
    onClick: () => window.alert(`${i} clicked`),
  }),
);

export default {
  title: 'Foundation/RcPicker',
  component: RcPicker,
  argTypes: {
    ...argTypesTypeA,
  },
} as Meta;

const Template: Story<RcPickerProps> = (args) => (
  <RcPicker {...args} entries={entries} selected={entries[1].message} />
);

export const Default = Template.bind({});

export const UseTitle: Story<RcPickerProps> = (args) => (
  <RcPicker {...args} entries={entriesT} selected={entriesT[1].title} />
);

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Template.args,
  width: '100%',
  widthBox: '100%',
};

export const BoxToRight = Template.bind({});
BoxToRight.args = {
  ...Template.args,
  width: '100%',
  boxToRight: true,
};

export const CssMessage = Template.bind({});
CssMessage.args = {
  ...Template.args,
  cssMessage: `color: red;`,
};

export const OnRow: Story<RcPickerProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <RcPicker
      {...args}
      entries={entries}
      selected={entries[0].message}
      flatRight={true}
      boxToRight={true}
    />
    <RcPicker
      {...args}
      selected={entries[1].message}
      entries={entries}
      flatLeft={true}
      flatRight={true}
    />
    <RcPicker {...args} selected={entries[2].message} entries={entries} flatLeft={true} />
  </div>
);

export const Stacked: Story<RcPickerProps> = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <RcPicker {...args} entries={entries} selected={entries[0].message} />
    <RcPicker {...args} selected={entries[1].message} entries={entries} boxToRight={true} />
    <RcPicker {...args} selected={entries[2].message} entries={entries} />
  </div>
);

export const WithScrollbar: Story<RcPickerProps> = (args) => (
  <RcPicker {...args} entries={manyEntries} selected={manyEntries[1].message} heightBox={300} />
);

export const Controlled: Story<RcPickerProps> = (args) => {
  const [title, setTitle] = useState(entries[1].message);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <RcPicker
        {...args}
        value={title}
        entries={[
          {
            message: 'First entry',
            onClick: () => {
              setTitle('First');
              window.alert('First entry was clicked');
            },
          },
          {
            message: 'Second entry',
            onClick: () => {
              setTitle('Second');
              window.alert('Second entry was clicked');
            },
          },
          {
            message: 'Third entry',
            onClick: () => {
              setTitle('Third');
              window.alert('Third entry was clicked');
            },
          },
        ]}
        width="250px"
      />
      <div>Selection = {title}</div>
    </div>
  );
};

const bgColor = '#2ecc71';

export const LightAndDarkBg: Story<RcPickerProps> = (args) => (
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
      <RcPicker
        {...args}
        selected={entries[0].message}
        entries={entries}
        width="250px"
        label="Please, choose one"
        bgColor={bgColor}
        darkMode={true}
      />
      <RcPicker
        {...args}
        selected={entries[1].message}
        entries={entries}
        width="250px"
        label="Please, choose another"
        bgColor={bgColor}
        darkMode={true}
        boxToRight={true}
      />
      <RcPicker
        {...args}
        selected={entries[2].message}
        entries={entries}
        width="250px"
        label="More, choose more!"
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
      <RcPicker
        {...args}
        selected={entries[0].message}
        entries={entries}
        width="250px"
        label="Please, choose one"
      />
      <RcPicker
        {...args}
        selected={entries[1].message}
        entries={entries}
        width="250px"
        label="Please, choose another"
        boxToRight={true}
      />
      <RcPicker
        {...args}
        selected={entries[2].message}
        entries={entries}
        width="250px"
        label="More, choose more!"
      />
    </div>
  </div>
);
