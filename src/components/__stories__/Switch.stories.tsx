import { useState } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Switch } from '../Switch';

const stories = storiesOf('Switch', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const [on, setOn] = useState(false);
  return <Switch on={on} onClick={() => setOn(!on)} />;
});

stories.add('outline', () => {
  const [on, setOn] = useState(false);
  return <Switch on={on} onClick={() => setOn(!on)} outline={true} />;
});

stories.add('dark mode', () => {
  const [on, setOn] = useState(false);
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #2196f3;
      `}
    >
      <Switch on={on} onClick={() => setOn(!on)} darkMode={true} />
    </div>
  );
});

stories.add('dark mode and outline', () => {
  const [on, setOn] = useState(false);
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #2196f3;
      `}
    >
      <Switch on={on} onClick={() => setOn(!on)} outline={true} darkMode={true} />
    </div>
  );
});
