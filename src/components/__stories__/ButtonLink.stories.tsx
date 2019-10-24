import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { ButtonLink } from '../ButtonLink';
import { IconAccount } from '@cpmech/react-icons';
import { Pair } from '../Pair';

const stories = storiesOf('ButtonLink', module);

stories.addDecorator(withKnobs);

stories.add('default', () => <ButtonLink onClick={action('Button')}>Hello World</ButtonLink>);

stories.add('styled', () => (
  <ButtonLink onClick={action('Button')} color="#803ced" hoverColor="#9f6cf1">
    <IconAccount size={64} />
  </ButtonLink>
));

stories.add('with text', () => (
  <ButtonLink onClick={action('Button')} color="#236cd2" hoverColor="#548fe2">
    <Pair left={<IconAccount size={32} />} right="ACCOUNT" />
  </ButtonLink>
));
