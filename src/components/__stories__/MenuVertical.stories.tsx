import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { MenuVertical } from '../MenuVertical';
import { entries } from './menuEntries';

const stories = storiesOf('MenuVertical', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  return <MenuVertical entries={entries} />;
});
