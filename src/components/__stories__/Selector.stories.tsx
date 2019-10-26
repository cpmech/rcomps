import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { Selector } from '../Selector';

const stories = storiesOf('Selector', module);

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

stories.add('default', () => <Selector entries={entries} />);

stories.add('styled', () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}
  >
    <Selector
      entries={entries}
      color="white"
      backgroundColor="#803ced"
      hoverColor="#9f6cf1"
      height={80}
    />

    <Selector
      entries={entries}
      color="white"
      backgroundColor="#236cd2"
      hoverColor="#548fe2"
      height={60}
    />

    <Selector
      entries={entries}
      color="white"
      backgroundColor="#17b580"
      hoverColor="#33e5a9"
      height={40}
      width={220}
    />
  </div>
));

const manyEntries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(
  i => ({
    message: `Number ${i}`,
    onClick: action(`${i} clicked`),
  }),
);

stories.add('given size', () => <Selector entries={manyEntries} size={5} />);
