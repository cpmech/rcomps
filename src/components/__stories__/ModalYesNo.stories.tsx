import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ModalYesNo } from '../ModalYesNo';

const stories = storiesOf('ModalYesNo', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Show Modal</button>
      {open && (
        <ModalYesNo
          onClose={() => setOpen(false)}
          onYes={action('yes clicked')}
          message="Are you sure you want to have fun with React?"
        />
      )}
    </div>
  );
});

stories.add('styled', () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Show Modal</button>
      {open && (
        <ModalYesNo
          onClose={() => setOpen(false)}
          onYes={action('yes clicked')}
          message="Are you sure you want to have fun with React?"
          noAtLeft={true}
          txtYes="Of course"
          txtNo="Maybe"
          colorNo="green"
          btnWidth="150px"
        />
      )}
    </div>
  );
});
