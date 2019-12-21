import React, { useState } from 'react';
import { css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Notifier } from '../Notifier';
import { loremIpsum } from './loremIpsum';

const stories = storiesOf('Notifier', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Show Notifier</button>
      {loremIpsum}
      {open && (
        <Notifier
          onClose={() => setOpen(false)}
          title="Notifications"
          message="Hello World!"
          titleStyle={css`
            font-weight: bold;
            color: #e62739;
          `}
        />
      )}
    </div>
  );
});

stories.add('with caption', () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Show Notifier</button>
      {loremIpsum}
      {open && (
        <Notifier
          onClose={() => setOpen(false)}
          caption="Warning. "
          message="Hello World! This is a very long message used to check text wrapping."
        />
      )}
    </div>
  );
});
