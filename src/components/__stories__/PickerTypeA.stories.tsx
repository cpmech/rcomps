import { Story, Meta } from '@storybook/react/types-6-0';
import { PickerTypeA, IPickerTypeAProps } from '../PickerTypeA';

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
  title: 'Components/PickerTypeA',
  component: PickerTypeA,
} as Meta;

const Template: Story<IPickerTypeAProps> = (args) => (
  <PickerTypeA {...args} entries={entries} selected={entries[1].message} />
);

export const Default = Template.bind({});

export const UseTitle: Story<IPickerTypeAProps> = (args) => (
  <PickerTypeA {...args} entries={entriesT} selected={entriesT[1].title} />
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

export const OnRow: Story<IPickerTypeAProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <PickerTypeA {...args} entries={entries} selected={entries[0].message} flatRight={true} />
    <PickerTypeA selected={entries[1].message} entries={entries} flatLeft={true} flatRight={true} />
    <PickerTypeA selected={entries[2].message} entries={entries} flatLeft={true} />
  </div>
);

export const WithScrollbar: Story<IPickerTypeAProps> = (args) => (
  <PickerTypeA {...args} entries={manyEntries} selected={manyEntries[1].message} heightBox={300} />
);

export const Controlled: Story<IPickerTypeAProps> = (args) => {
  const [title, setTitle] = useState(entries[1].message);
  return (
    <PickerTypeA
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
  );
};

export const Stacked: Story<IPickerTypeAProps> = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <PickerTypeA {...args} entries={entries} selected={entries[0].message} />
    <PickerTypeA selected={entries[1].message} entries={entries} />
    <PickerTypeA selected={entries[2].message} entries={entries} />
  </div>
);

const bgColor = '#2ecc71';

export const LightAndDarkBg: Story<IPickerTypeAProps> = (args) => (
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
      <PickerTypeA
        selected={entries[0].message}
        entries={entries}
        width="250px"
        label="Please, choose one"
        bgColor={bgColor}
        darkMode={true}
      />
      <PickerTypeA
        selected={entries[1].message}
        entries={entries}
        width="250px"
        label="Please, choose another"
        bgColor={bgColor}
        darkMode={true}
      />
      <PickerTypeA
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
      <PickerTypeA
        selected={entries[0].message}
        entries={entries}
        width="250px"
        label="Please, choose one"
      />
      <PickerTypeA
        selected={entries[1].message}
        entries={entries}
        width="250px"
        label="Please, choose another"
      />
      <PickerTypeA
        selected={entries[2].message}
        entries={entries}
        width="250px"
        label="More, choose more!"
      />
    </div>
  </div>
);
