import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Pair } from '../Pair';
import { ReactComponent as HouseIcon } from '../../assets/house.svg';

const stories = storiesOf('Pair', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Pair
    left={<HouseIcon width={64} />}
    right="Hello World"
    spacing={20}
    styleRight={{ fontSize: 40 }}
  />
));
