import React, { useState } from 'react';
import { css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Modal } from '../Modal';
import { loremIpsum } from './loremIpsum';

const stories = storiesOf('Modal', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Show Modal</button>
      <p>{loremIpsum}</p>
      <p>{loremIpsum}</p>
      {open && (
        <Modal
          onClose={() => setOpen(false)}
          title="Notifications"
          titleStyle={css`
            font-weight: bold;
            color: #e62739;
          `}
          height="70vh"
          width="90%"
        >
          {loremIpsum}
        </Modal>
      )}
    </div>
  );
});

stories.add('no click outside', () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Show Modal</button>
      {open && (
        <Modal
          onClose={() => setOpen(false)}
          title="Notifications"
          titleStyle={css`
            font-weight: bold;
            color: #e62739;
          `}
          height="70vh"
          width="90%"
          allowClickOutsideToClose={false}
        >
          {loremIpsum}
        </Modal>
      )}
    </div>
  );
});

stories.add('with buttons', () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Show Modal</button>
      {open && (
        <Modal
          onClose={() => setOpen(false)}
          title="Notifications"
          titleStyle={css`
            font-weight: bold;
            color: #e62739;
          `}
          height="70vh"
          width="90%"
        >
          <div>
            <h3>Upload file</h3>
            <input type="file" />
          </div>
        </Modal>
      )}
    </div>
  );
});
