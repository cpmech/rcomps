import React from 'react';
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

stories.add('ErrorModal', () => (
  <ErrorModal
    isOpen={boolean('Show Error Modal', true)}
    onClose={action('Close Erorr Modal')}
    message="User name is incorrect"
  />
));

stories.add('ErrorPage', () => <ErrorPage heightMenu={0} />);

stories.add('MessagePage', () => <MessagePage heightMenu={0} />);

stories.add('SpinnerPage', () => <SpinnerPage heightMenu={0} />);
