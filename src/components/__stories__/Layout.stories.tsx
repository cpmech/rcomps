import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Layout } from '../Layout';
import { loremIpsumFew } from './loremIpsum';

const stories = storiesOf('Layout', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const header = (
    <div
      css={css`
        background-color: #cecece;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      HEADER
    </div>
  );

  const sidebar = (
    <div
      css={css`
        background-color: #dedede;
        min-height: 400px;
        padding-top: 40px;
        padding-left: 20px;
      `}
    >
      SIDEBAR
    </div>
  );

  const main = <div css={css``}>{loremIpsumFew}</div>;

  const footer = (
    <div
      css={css`
        background-color: #343434;
        height: 100px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      FOOTER
    </div>
  );

  return (
    <div
      css={css`
        margin: 0;
        padding: 0;
      `}
    >
      <Layout header={header} sidebar={sidebar} main={main} footer={footer} />;
    </div>
  );
});
