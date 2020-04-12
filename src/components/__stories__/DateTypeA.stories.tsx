/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { DateTypeA } from '../DateTypeA';

const stories = storiesOf('DateTypeA', module);

stories.addDecorator(withKnobs);

stories.add('default', () => <DateTypeA />);
