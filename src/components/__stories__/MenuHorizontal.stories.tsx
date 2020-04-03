import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { MenuHorizontal } from '../MenuHorizontal';
import { entries } from './menuEntries';

const stories = storiesOf('MenuHorizontal', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  return <MenuHorizontal entries={entries} />;
});
