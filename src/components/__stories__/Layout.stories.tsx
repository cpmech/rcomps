/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Layout } from '../Layout';
import { loremIpsum } from './loremIpsum';

const stories = storiesOf('Layout', module);

stories.addDecorator(withKnobs);

const warning = (
  <div
    css={css`
      background-color: #c01626;
      min-height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  >
    WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING
  </div>
);

const header = (
  <div
    css={css`
      background-color: #4a76ff;
      height: 200px;
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
  return <Layout warning={warning} header={header} sidebar={sidebar} main={main} footer={footer} />;
});

stories.add('sticky H', () => {
  return (
    <Layout
      warning={warning}
      header={header}
      sidebar={sidebar}
      main={main}
      footer={footer}
      stickyHeader={true}
    />
  );
});

stories.add('no sticky W', () => {
  return (
    <Layout
      warning={warning}
      header={header}
      sidebar={sidebar}
      main={main}
      footer={footer}
      stickyWarning={false}
    />
  );
});

stories.add('no sticky W / sticky H', () => {
  return (
    <Layout
      warning={warning}
      header={header}
      sidebar={sidebar}
      main={main}
      footer={footer}
      stickyWarning={false}
      stickyHeader={true}
    />
  );
});

stories.add('no warning', () => {
  return <Layout warning={null} header={header} sidebar={sidebar} main={main} footer={footer} />;
});

stories.add('no warning / sticky H', () => {
  return (
    <Layout
      warning={null}
      header={header}
      sidebar={sidebar}
      main={main}
      footer={footer}
      stickyHeader={true}
    />
  );
});
