/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { PickerTypeA } from '../PickerTypeA';
import { InputTypeA } from '../InputTypeA';
import { TextTypeA } from '../TextTypeA';

const stories = storiesOf('PickerTypeA', module);

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

stories.add('default', () => (
  <PickerTypeA
    name="sel1"
    selected={entries[1].message}
    entries={entries}
    label="Please, choose one"
  />
));

stories.add('readonly', () => (
  <PickerTypeA
    name="sel1"
    selected={entries[1].message}
    entries={entries}
    label="Please, choose one"
    readOnly={boolean('readOnly', true)}
  />
));

stories.add('box to right', () => (
  <PickerTypeA
    name="sel1"
    selected={entries[1].message}
    entries={entries}
    label="Please, choose one"
    width="100%"
    boxToRight={true}
  />
));

stories.add('stacked', () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    `}
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
));

stories.add('on row', () => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
    `}
  >
    <PickerTypeA
      selected={entries[0].message}
      entries={entries}
      width="250px"
      label="Please, choose one"
      flatRight={true}
    />
    <PickerTypeA
      selected={entries[1].message}
      entries={entries}
      width="250px"
      label="Please, choose another"
      flatLeft={true}
      flatRight={true}
      widthBox="250px"
    />
    <PickerTypeA
      selected={entries[2].message}
      entries={entries}
      width="250px"
      label="More, choose more!"
      flatLeft={true}
    />
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
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 50vh;
        width: 100%;
      `}
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
));

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
    <TextTypeA name="name" label="E" value="Hello World!" width="250px" />
    <TextTypeA name="name" label="EEEEEE" value="Hello World!" width="250px" />
    <TextTypeA name="name" label="EEEEEEEEEEEEE" value="Hello World!" width="250px" />
    <InputTypeA name="email" label="E" width="250px" value="First entry" />
    <InputTypeA name="email" label="EEEEEE" width="250px" value="First entry" />
    <InputTypeA name="email" label="EEEEEEEEEEEEE" width="250px" value="First entry" />
    <PickerTypeA
      selected={entries[0].message}
      entries={entries}
      width="250px"
      widthBox="250px"
      label="E"
    />
    <PickerTypeA
      selected={entries[0].message}
      entries={entries}
      width="250px"
      widthBox="250px"
      label="EEEEEE"
    />
    <PickerTypeA
      selected={entries[0].message}
      entries={entries}
      width="250px"
      widthBox="250px"
      label="EEEEEEEEEEEEE"
    />
  </div>
));

stories.add('with others on row', () => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
    `}
  >
    <TextTypeA name="name" label="Hello" value="Hello World!" width="250px" flatRight={true} />
    <InputTypeA
      name="email"
      label="Results"
      width="250px"
      value="First entry"
      flatLeft={true}
      flatRight={true}
    />
    <PickerTypeA
      label="Choose one"
      selected={entries[0].message}
      entries={entries}
      width="250px"
      widthBox="250px"
      flatLeft={true}
    />
  </div>
));

const Controlled = () => {
  const [title, setTitle] = useState(entries[1].message);
  return (
    <PickerTypeA
      value={title}
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
      width="250px"
    />
  );
};

stories.add('controlled', () => <Controlled />);
