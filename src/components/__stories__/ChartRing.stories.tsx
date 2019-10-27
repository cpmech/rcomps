import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { ChartRing } from '../ChartRing';

const stories = storiesOf('ChartRing', module);

stories.addDecorator(withKnobs);

stories.add('default', () => <ChartRing pct={100} />);

stories.add('80%', () => <ChartRing pct={80} />);

stories.add('with message', () => <ChartRing pct={80} message="hello" />);

stories.add('with prefix and sufix', () => (
  <ChartRing pct={100} prefix=":-)" message="hello" sufix="world" />
));
