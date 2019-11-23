/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Collapse } from '../Collapse';

const stories = storiesOf('Collapse', module);

stories.addDecorator(withKnobs);

const content = (
  <div>
    <p>This information can be hidden or not</p>
    <p>Hello World!</p>
    <p>Hello Again.</p>
    <p>Goodbye.</p>
  </div>
);

const something = (
  <div>
    <p>More stuff goes here. And can be any kind of ReactNode.</p>
    <p>Information.</p>
    <p>Information.</p>
    <p>Information.</p>
    <p>Information.</p>
    <p>Information.</p>
    <p>Information.</p>
    <p>Information.</p>
    <p>Information.</p>
    <p>Information.</p>
  </div>
);

stories.add('default', () => (
  <Collapse title="Here you go more information" initOpen={true}>
    {content}
  </Collapse>
));

stories.add('styled', () => (
  <Collapse
    title="Here you go more information"
    initOpen={true}
    titleBgColor="#cccccc"
    titleBorderColor="red"
  >
    {content}
  </Collapse>
));

stories.add('side-by-side', () => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
    `}
  >
    <Collapse
      title="Here you go more information"
      initOpen={true}
      color="white"
      bgColor="#2ecc71"
      width="50%"
      titleStyle={css`
        font-weight: bold;
      `}
    >
      {content}
    </Collapse>
    <Collapse
      title="And here you'll have something else"
      initOpen={true}
      width="50%"
      titleStyle={css`
        font-weight: bold;
      `}
    >
      {something}
    </Collapse>
  </div>
));
