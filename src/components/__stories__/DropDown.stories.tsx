import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { DropDown } from '../DropDown';
import { action } from '@storybook/addon-actions';

const stories = storiesOf('DropDown', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <DropDown
    title="Please select one"
    entries={[
      {
        message: 'First entry',
        link: {
          onClick: action('First entry was clicked'),
        },
      },
      {
        message: 'Second entry',
        link: {
          onClick: action('Second entry was clicked'),
        },
      },
      {
        message: 'Third entry',
        link: {
          onClick: action('Third entry was clicked'),
        },
      },
    ]}
  />
));
