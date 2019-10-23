import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { DropDown } from '../DropDown';

const stories = storiesOf('DropDown', module);

stories.addDecorator(withKnobs);

const entries = [
  {
    message: 'First entry',
    onClick: action('First entry was clicked'),
  },
  {
    message: 'Second entry',
    onClick: action('Second entry was clicked'),
  },
  {
    message: 'Third entry',
    onClick: action('Third entry was clicked'),
  },
];

stories.add('default', () => <DropDown title="Please select one" entries={entries} />);

stories.add('no icon', () => (
  <DropDown title="Please select one" entries={entries} withIcon={false} />
));
