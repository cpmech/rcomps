import { useState } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { SwitchAndText } from '../SwitchAndText';

const stories = storiesOf('SwitchAndText', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const [onA, setOnA] = useState(false);
  const [onB, setOnB] = useState(false);

  return (
    <div
      css={css`
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        max-width: 300px;
      `}
    >
      <SwitchAndText
        text="This is a very long text used to decide if this switch should be turned on or not"
        on={onA}
        onClick={() => setOnA(!onA)}
      />
      <SwitchAndText
        text="This is a very long text used to decide if this switch should be turned on or not"
        on={onB}
        onClick={() => setOnB(!onB)}
        textAtRight={true}
      />
    </div>
  );
});
