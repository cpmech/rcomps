import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { SpinnerAndMessage } from '../SpinnerAndMessage';

const stories = storiesOf('SpinnerAndMessage', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #2ecc71;
      height: 100vh;
      width: 100%;
    `}
  >
    <SpinnerAndMessage message="Loading..." />
  </div>
));

stories.add('green', () => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100%;
    `}
  >
    <SpinnerAndMessage size={100} fontSize={20} color="#2ecc71" message="Loading..." />
  </div>
));

stories.add('both', () => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  >
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #2ecc71;
        height: 50vh;
        width: 100%;
      `}
    >
      <SpinnerAndMessage size={100} fontSize={20} message="Loading..." />
    </div>
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50vh;
        width: 100%;
      `}
    >
      <SpinnerAndMessage size={100} fontSize={20} color="#2ecc71" message="Loading..." />
    </div>
  </div>
));
