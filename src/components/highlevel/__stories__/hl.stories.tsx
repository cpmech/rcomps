import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import {
  ErrorFormField,
  ErrorModal,
  ErrorPage,
  FormErrorField,
  MessagePage,
  SpinnerPage,
} from '../index';
import { action } from '@storybook/addon-actions';

const stories = storiesOf('high-level', module);

stories.addDecorator(withKnobs);

stories.add('ErrorFormField', () => (
  <ErrorFormField canShow={boolean('Show Error Message', true)} message="Email is invalid" />
));

stories.add('FormErrorField', () => (
  <FormErrorField error={{ type: '', message: 'Email is invalid' }} />
));

stories.add('ErrorModal', () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Show modal</button>
      {open && <ErrorModal onClose={() => setOpen(false)} message="User name is incorrect" />}
    </div>
  );
});

stories.add('ErrorPage', () => <ErrorPage heightMenu={0} />);

stories.add('MessagePage', () => <MessagePage heightMenu={0} />);

stories.add('SpinnerPage', () => <SpinnerPage heightMenu={0} />);
