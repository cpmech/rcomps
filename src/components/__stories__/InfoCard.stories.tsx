/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import React from 'react';
/** @jsx jsx */ import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { InfoCard } from '../InfoCard';
import { loremIpsumFew } from './loremIpsum';

const stories = storiesOf('InfoCard', module);

stories.addDecorator(withKnobs);

stories.add('default', () => <InfoCard title="Good news!">{loremIpsumFew}</InfoCard>);

stories.add('no show/hide', () => (
  <InfoCard title="Good news!" withShowHide={false}>
    {loremIpsumFew}
  </InfoCard>
));
