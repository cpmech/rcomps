import React, { useState } from 'react';
import { css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { Notifier } from '../Notifier';

const stories = storiesOf('Notifier', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Show Notifier</button>
      {open && (
        <Notifier
          title="Notifications"
          message="Hello World!"
          titleStyle={css`
            font-weight: bold;
            color: #e62739;
          `}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
});
