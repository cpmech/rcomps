import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { ProgressBar } from '../ProgressBar';

const stories = storiesOf('ProgressBar', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  return <ProgressBar progress={number('Progress', 30)} />;
});
