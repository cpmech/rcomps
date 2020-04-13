/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { MenuHorizontal } from '../MenuHorizontal';
import { entries } from './menuEntries';

const stories = storiesOf('MenuHorizontal', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  return (
    <div
      css={css`
        background-color: #a4baff;
      `}
    >
      <MenuHorizontal entries={entries} />
    </div>
  );
});

stories.add('maxWidth', () => {
  return (
    <div
      css={css`
        background-color: #a4baff;
      `}
    >
      <MenuHorizontal entries={entries} maxWidth={900} />
    </div>
  );
});

stories.add('no padding', () => {
  return (
    <div
      css={css`
        background-color: #a4baff;
      `}
    >
      <MenuHorizontal
        entries={entries}
        maxWidth={900}
        gapVert={0}
        gapVertSubEntries={0}
        paddingVert={0}
      />
    </div>
  );
});
