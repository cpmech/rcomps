import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { LayoutB } from '../LayoutB';
import { loremIpsum } from './loremIpsum';

const stories = storiesOf('LayoutB', module);

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
    HEADER
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
    FOOTER
  </div>
);

stories.add('default', () => {
  return <LayoutB header={header} sidebar={sidebar} main={main} footer={footer} />;
});

stories.add('sticky S', () => {
  return (
    <LayoutB
      header={header}
      sidebar={sidebar}
      main={main}
      footer={footer}
      stickyHeader={false}
      stickySidebar={true}
    />
  );
});

stories.add('sticky H', () => {
  return (
    <LayoutB
      header={header}
      sidebar={sidebar}
      main={main}
      footer={footer}
      stickyHeader={true}
      stickySidebar={false}
    />
  );
});

stories.add('sticky H & S', () => {
  return (
    <LayoutB
      header={header}
      sidebar={sidebar}
      main={main}
      footer={footer}
      stickyHeader={true}
      stickySidebar={true}
    />
  );
});

stories.add('narrowWidth', () => {
  return (
    <LayoutB header={header} sidebar={sidebar} main={main} footer={footer} narrowWidth={200} />
  );
});
