/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { SpinnerCircle } from '../SpinnerCircle';

const stories = storiesOf('SpinnerCircle', module);

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
    <SpinnerCircle />
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
    <SpinnerCircle color="#2ecc71" />
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
      <SpinnerCircle />
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
      <SpinnerCircle color="#2ecc71" />
    </div>
  </div>
));
