import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { ProgressLinear } from '../ProgressLinear';

const stories = storiesOf('ProgressLinear', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  return (
    <div>
      <ProgressLinear progress={number('Progress', 30)} />
    </div>
  );
});
