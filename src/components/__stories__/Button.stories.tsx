import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { Button } from '../Button';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('default', () => <Button onClick={action('Button')}>Hello World</Button>);

stories.add('styled', () => (
  <Button
    onClick={action('Button')}
    backgroundColor="#803ced"
    hoverColor="#9f6cf1"
    paddingHoriz={100}
    paddingVert={20}
  >
    HELLO WORLD
  </Button>
));
