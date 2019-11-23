import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Collapse } from '../Collapse';

const stories = storiesOf('Collapse', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Collapse title="Here you go more information" initOpen={true}>
    <div>
      <h1>This information can be hidden or not</h1>
      <p>Hello World!</p>
      <p>Hello Again.</p>
      <p>Goodbye.</p>
    </div>
  </Collapse>
));

stories.add('styled', () => (
  <Collapse
    title="Here you go more information"
    initOpen={true}
    titleBgColor="#cccccc"
    titleBorderColor="red"
  >
    <div>
      <h1>This information can be hidden or not</h1>
      <p>Hello World!</p>
      <p>Hello Again.</p>
      <p>Goodbye.</p>
    </div>
  </Collapse>
));
