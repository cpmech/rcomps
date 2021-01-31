import { Story, Meta } from '@storybook/react/types-6-0';
import { Picker, IPickerProps } from '../Picker';
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
  title: 'Components/Picker',
  component: Picker,
} as Meta;

const Template: Story<IPickerProps> = (args) => (
  <Picker {...args} entries={entries} selected={entries[1].message} />
);

export const Default = Template.bind({});

export const UseTitle: Story<IPickerProps> = (args) => (
  <Picker {...args} entries={entriesT} selected={entriesT[1].title} />
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

export const OnRow: Story<IPickerProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
    <Picker
      {...args}
      entries={entries}
      selected={entries[1].message}
      width="200px"
      height={80}
      color="white"
      backgroundColor="#803ced"
      hoverColor="#9f6cf1"
    />
    <Picker
      selected={entries[1].message}
      entries={entries}
      width="200px"
      height={60}
      color="white"
      backgroundColor="#236cd2"
      hoverColor="#548fe2"
    />
    <Picker
      selected={entries[2].message}
      entries={entries}
      width="200px"
      height={40}
      color="white"
      backgroundColor="#17b580"
      hoverColor="#33e5a9"
    />
  </div>
);

export const WithScrollbar: Story<IPickerProps> = (args) => (
  <Picker {...args} entries={manyEntries} selected={manyEntries[1].message} heightBox={300} />
);

export const Controlled: Story<IPickerProps> = (args) => {
  const [title, setTitle] = useState(entries[1].message);
  return (
    <Picker
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
