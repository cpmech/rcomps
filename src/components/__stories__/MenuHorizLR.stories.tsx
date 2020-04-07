import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { MenuHorizLR } from '../MenuHorizLR';
import { entriesLeft, entriesRight } from './menuEntries';

const stories = storiesOf('MenuHorizLR', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  return (
    <MenuHorizLR
      left={{ entries: entriesLeft, gapHorizEntries: 20 }}
      right={{ entries: entriesRight, gapHorizEntries: 50 }}
    />
  );
});
