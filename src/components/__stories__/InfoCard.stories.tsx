import React from 'react';
/** @jsx jsx */ import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { InfoCard } from '../InfoCard';
import { loremIpsumFew } from './loremIpsum';

const stories = storiesOf('InfoCard', module);

stories.addDecorator(withKnobs);

stories.add('default', () => <InfoCard title="Good news!">{loremIpsumFew}</InfoCard>);
