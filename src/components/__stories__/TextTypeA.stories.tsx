/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { TextTypeA } from '../TextTypeA';
import { PickerTypeA } from '../PickerTypeA';
import { InputTypeA } from '../InputTypeA';

const stories = storiesOf('TextTypeA', module);

stories.addDecorator(withKnobs);

stories.add('default', () => <TextTypeA label="Name" value="Hello World!" />);

stories.add('no border', () => <TextTypeA label="Name" value="Hello World!" borderWidth={0} />);

stories.add('on row', () => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
    `}
  >
    <TextTypeA name="name" label="Name" value="Hello World!" flatRight={true} />
    <TextTypeA name="email" label="Email" flatLeft={true} flatRight={true} />
    <TextTypeA name="password" label="Password" type="password" flatLeft={true} />
  </div>
));

const bgColor = '#2ecc71';

stories.add('light and dark bg', () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
  >
    <div
      css={css`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: ${bgColor};
        height: 50vh;
        width: 100%;
      `}
    >
      <TextTypeA
        label="Name"
        value="Hello World!"
        bgColor={bgColor}
        darkMode={true}
        mutedColor="#ffffff"
      />
    </div>
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 50vh;
        width: 100%;
      `}
    >
      <TextTypeA label="Name" value="Hello World!" />
    </div>
  </div>
));

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

stories.add('with others', () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    `}
  >
    <TextTypeA name="name" label="Name" value="Hello World!" width="250px" />
    <InputTypeA name="email" label="Email" width="250px" value="First entry" />
    <PickerTypeA
      selected={entries[0].message}
      entries={entries}
      width="250px"
      label="Choose one!"
    />
  </div>
));
