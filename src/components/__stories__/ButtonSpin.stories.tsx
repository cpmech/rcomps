import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { ButtonSpin } from '../ButtonSpin';

const stories = storiesOf('ButtonSpin', module);

stories.addDecorator(withKnobs);

stories.add('spinning', () => (
  <ButtonSpin onClick={action('Spinning button clicked')} spin={true} width={200}>
    Hello World
  </ButtonSpin>
));

stories.add('spinning / disabled', () => (
  <ButtonSpin
    onClick={action('Disabled spinning button clicked')}
    disabled={true}
    spin={true}
    width={200}
  >
    Hello World
  </ButtonSpin>
));

stories.add('not spinning', () => (
  <ButtonSpin onClick={action('Not spinning button clicked')} spin={false} width={200}>
    Hello World
  </ButtonSpin>
));
