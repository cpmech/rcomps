import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { LayoutA } from '../LayoutA';
import { loremIpsum } from './loremIpsum';

const stories = storiesOf('LayoutA', module);

stories.addDecorator(withKnobs);

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
    HEADER HEADER HEADER HEADER HEADER HEADER HEADER HEADER HEADER HEADER HEADER HEADER
  </div>
);

const sidebar = (
  <div
    css={css`
      background-color: #dedede;
      min-height: 200px;
      padding-top: 40px;
      padding-left: 20px;
    `}
  >
    SIDEBAR
  </div>
);

const main = <div css={css``}>{loremIpsum}</div>;

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
    FOOTER FOOTER FOOTER FOOTER FOOTER FOOTER FOOTER FOOTER FOOTER FOOTER
  </div>
);

stories.add('default', () => {
  return <LayoutA header={header} sidebar={sidebar} main={main} footer={footer} />;
});

stories.add('sticky H', () => {
  return (
    <LayoutA header={header} sidebar={sidebar} main={main} footer={footer} stickyHeader={true} />
  );
});

stories.add('max width', () => {
  return (
    <LayoutA header={header} sidebar={sidebar} main={main} footer={footer} maxContentWidth={300} />
  );
});
