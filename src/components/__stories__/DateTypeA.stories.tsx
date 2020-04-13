/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { dateTranslationPt } from '../helpers';
import { DateTypeA } from '../DateTypeA';
import { Button } from '../Button';

const VSpace: React.FC = () => {
  return <div style={{ height: 20 }} />;
};

const stories = storiesOf('DateTypeA', module);

stories.addDecorator(withKnobs);

stories.add('default', () => <DateTypeA />);

stories.add('monthFirst', () => <DateTypeA monthFirst={true} />);

stories.add('pt-br', () => <DateTypeA translation={dateTranslationPt} />);

stories.add('touched', () => (
  <div>
    <DateTypeA date="1995-03-03T00:00:00.000Z" touched={true} />
    <DateTypeA date="" touched={true} />
  </div>
));

stories.add('initial date', () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
    `}
  >
    <DateTypeA date="2020-04-13T01:53:30.000Z" touched={true} />
    <DateTypeA date="1908-08-08T00:00:00.000Z" touched={true} />
    <DateTypeA date={new Date().toISOString()} touched={true} />
  </div>
));

stories.add('controlled', () => {
  const [touched, setTouched] = useState(false);
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const onChange = (date: string) => {
    setDate(date);
    if (!date) {
      setError('INVALID');
    } else {
      setError('');
    }
  };

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
        <DateTypeA date={date} touched={touched} onChange={onChange} />
      </div>
      <VSpace />

      <div
        css={css`
          font-weight: bold;
          font-size: 1.2em;
        `}
      >
        {date}
      </div>
      <VSpace />

      {error && (
        <div>
          <div>{error}</div>
          <VSpace />
        </div>
      )}

      <Button
        onClick={() => {
          setTouched(true);
          if (date) {
            alert(`sending ${date} to someone`);
          }
        }}
      >
        SUBMIT
      </Button>
    </div>
  );
});
