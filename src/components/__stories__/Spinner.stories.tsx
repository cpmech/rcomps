/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Spinner } from '../Spinner';

const stories = storiesOf('Spinner', module);

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
    <Spinner />
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
    <Spinner size={400} color="#2ecc71" />
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
      <Spinner size={200} />
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
      <Spinner size={200} color="#2ecc71" />
    </div>
  </div>
));
