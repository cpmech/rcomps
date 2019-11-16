/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { SpinDots } from '../SpinDots';

const stories = storiesOf('SpinDots', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <div
    css={css`
      background-color: #2ecc71;
    `}
  >
    <SpinDots />
  </div>
));

stories.add('large', () => (
  <div
    css={css`
      background-color: #2ecc71;
    `}
  >
    <SpinDots size={128} thickness={20} />
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
    <SpinDots color="#2ecc71" />
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
      <SpinDots />
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
      <SpinDots color="#2ecc71" />
    </div>
  </div>
));