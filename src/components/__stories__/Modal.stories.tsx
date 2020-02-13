import React, { useState } from 'react';
import { css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Modal } from '../Modal';
import { loremIpsum } from './loremIpsum';
import { Button } from '../Button';

const stories = storiesOf('Modal', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <Button
        onClick={() => setOpen(true)}
        fontWeight="bold"
        color="white"
        backgroundColor="#803ced"
        borderRadius={300}
      >
        Show Modal
      </Button>
      <div>{loremIpsum}</div>
      <Button
        onClick={() => setOpen(true)}
        fontWeight="bold"
        color="white"
        backgroundColor="#803ced"
        borderRadius={300}
      >
        Show Modal
      </Button>
      <div>{loremIpsum}</div>
      <Button
        onClick={() => setOpen(true)}
        fontWeight="bold"
        color="white"
        backgroundColor="#803ced"
        borderRadius={300}
      >
        Show Modal
      </Button>
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

stories.add('no close button', () => {
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
          noCloseButton={true}
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
