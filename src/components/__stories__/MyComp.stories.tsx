import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, optionsKnob, boolean } from '@storybook/addon-knobs';
import { MyComp } from '../MyComp';

const stories = storiesOf('MyComp', module);

stories.addDecorator(withKnobs);

stories.add('default', () => <MyComp />);

stories.add('with callback', () => <MyComp callback={action('CallBack')} />);

stories.add('with flags and options', () => (
  <MyComp
    flag={boolean('flag', true)}
    options={['first', 'second', 'third']}
    selectedOption={optionsKnob(
      'selectedOption',
      {
        first: 'first',
        second: 'second',
        third: 'third',
      },
      'first',
      { display: 'inline-radio' },
    )}
  />
));
