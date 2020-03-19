import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  ErrorModal,
  ErrorPage,
  FormErrorField,
  MessagePage,
  SpinnerPage,
  ProgressPage,
} from '../index';

const stories = storiesOf('high-level', module);

stories.addDecorator(withKnobs);

stories.add('FormErrorField', () => <FormErrorField error={'Email is invalid'} />);

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

stories.add('ProgressPage', () => <ProgressPage heightMenu={0} progress={50} />);
