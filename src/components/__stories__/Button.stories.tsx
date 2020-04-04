import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { Button } from '../Button';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('default', () => <Button onClick={action('Button clicked')}>Hello World</Button>);

stories.add('100%', () => (
  <Button onClick={action('Button clicked')} width="100%">
    Hello World
  </Button>
));

stories.add('disabled', () => (
  <Button onClick={action('Disabled button clicked')} disabled={true}>
    Hello World
  </Button>
));

stories.add('outline', () => (
  <Button onClick={action('Outline button clicked')} outline={true}>
    Hello World
  </Button>
));

stories.add('styled', () => (
  <Button
    onClick={action('Button')}
    height={60}
    paddingHoriz={100}
    borderRadius={100}
    fontSize={24}
    fontWeight="bold"
    color="white"
    backgroundColor="#803ced"
    hoverColor="#9f6cf1"
  >
    HELLO WORLD
  </Button>
));

stories.add('flat left', () => (
  <Button
    onClick={action('Button')}
    height={60}
    paddingHoriz={100}
    borderRadius={100}
    fontSize={24}
    fontWeight="bold"
    color="white"
    backgroundColor="#803ced"
    hoverColor="#9f6cf1"
    flatLeft={true}
  >
    HELLO WORLD
  </Button>
));

stories.add('flat right', () => (
  <Button
    onClick={action('Button')}
    height={60}
    paddingHoriz={100}
    borderRadius={100}
    fontSize={24}
    fontWeight="bold"
    color="white"
    backgroundColor="#803ced"
    hoverColor="#9f6cf1"
    flatRight={true}
  >
    HELLO WORLD
  </Button>
));
