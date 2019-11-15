import React from 'react';
import { css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { DropDown } from '../DropDown';

const stories = storiesOf('DropDown', module);

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

stories.add('default', () => <DropDown title="Please select one" entries={entries} />);

stories.add('no icon', () => (
  <DropDown title="Please select one" entries={entries} withIcon={false} />
));

stories.add('on click', () => (
  <DropDown title="Please select one" entries={entries} showOnHover={false} />
));

stories.add('fixed width', () => <DropDown title="Choose one" entries={entries} width={400} />);

stories.add('styled', () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}
  >
    <DropDown
      title="Please select one"
      entries={entries}
      height={80}
      color="white"
      backgroundColor="#803ced"
      hoverColor="#9f6cf1"
    />

    <DropDown
      title="Please select another one"
      entries={entries}
      height={60}
      color="white"
      backgroundColor="#236cd2"
      hoverColor="#548fe2"
    />

    <DropDown
      title="Final one"
      entries={entries}
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

stories.add('sized', () => <DropDown title="Choose one" entries={manyEntries} size={200} />);

stories.add('sized / on click', () => (
  <DropDown title="Choose one" entries={manyEntries} size={200} showOnHover={false} />
));

stories.add('message / styled', () => (
  <DropDown
    title="Choose one"
    entries={entries}
    messageStyle={css`
      line-height: 2;
      font-size: 20px;
      color: #343434;
    `}
  />
));
