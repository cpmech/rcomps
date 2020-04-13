/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { DateTypeA } from '../DateTypeA';
import { Button } from '../Button';

const VSpace: React.FC = () => {
  return <div style={{ height: 20 }} />;
};

const stories = storiesOf('DateTypeA', module);

stories.addDecorator(withKnobs);

stories.add('default', () => <DateTypeA />);

stories.add('touched', () => <DateTypeA touched={true} />);

stories.add('controlled', () => {
  const [touched, setTouched] = useState(false);
  const [dateString, setDateString] = useState('');

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 300px;
      `}
    >
      <div>
        <DateTypeA touched={touched} onChange={async (v) => setDateString(v)} />
      </div>
      <VSpace />

      <div
        css={css`
          font-weight: bold;
          font-size: 1.2em;
        `}
      >
        {dateString}
      </div>
      <VSpace />

      <Button
        onClick={() => {
          setTouched(true);
          if (dateString) {
            alert(`sending ${dateString} to someone`);
          }
        }}
      >
        SUBMIT
      </Button>
    </div>
  );
});
