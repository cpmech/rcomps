import React, { useState } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { Picker } from '../Picker';

const stories = storiesOf('Picker', module);

stories.addDecorator(withKnobs);

const entries = [
  {
    message: 'First entry',
    onClick: action('First entry was clicked'),
  },
  {
    message: 'Second entry',
    onClick: action('Second entry was clicked'),
  },
  {
    message: 'Third entry',
    onClick: action('Third entry was clicked'),
  },
];

const entriesT = [
  {
    title: '1st',
    message: 'First entry',
    onClick: action('First entry was clicked'),
  },
  {
    title: '2nd',
    message: 'Second entry',
    onClick: action('Second entry was clicked'),
  },
  {
    title: '3rd',
    message: 'Third entry',
    onClick: action('Third entry was clicked'),
  },
];

stories.add('default', () => (
  <Picker selected={entries[1].message} entries={entries} width={250} />
));

stories.add('messageStyle', () => (
  <Picker
    selected={entries[1].message}
    entries={entries}
    width={250}
    messageStyle={css`
      color: red;
    `}
  />
));

stories.add('use title', () => (
  <Picker selected={entriesT[1].title} entries={entriesT} width={150} />
));

stories.add('styled', () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}
  >
    <Picker
      selected={entries[0].message}
      entries={entries}
      width={200}
      height={80}
      color="white"
      backgroundColor="#803ced"
      hoverColor="#9f6cf1"
    />

    <Picker
      selected={entries[1].message}
      entries={entries}
      width={200}
      height={60}
      color="white"
      backgroundColor="#236cd2"
      hoverColor="#548fe2"
    />

    <Picker
      selected={entries[1].message}
      entries={entries}
      width={200}
      height={40}
      color="white"
      backgroundColor="#17b580"
      hoverColor="#33e5a9"
    />
  </div>
));

const manyEntries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(
  i => ({
    message: `Number ${i}`,
    onClick: action(`${i} clicked`),
  }),
);

stories.add('sized', () => (
  <Picker selected="Number 5" entries={manyEntries} width={200} size={300} />
));

const Controlled = () => {
  const [title, setTitle] = useState(entries[1].message);
  return (
    <Picker
      title={title}
      entries={[
        {
          message: 'First entry',
          onClick: () => {
            setTitle('First');
            action('First entry was clicked');
          },
        },
        {
          message: 'Second entry',
          onClick: () => {
            setTitle('Second');
            action('Second entry was clicked');
          },
        },
        {
          message: 'Third entry',
          onClick: () => {
            setTitle('Third');
            action('Third entry was clicked');
          },
        },
      ]}
      width={250}
    />
  );
};

stories.add('controlled', () => <Controlled />);
