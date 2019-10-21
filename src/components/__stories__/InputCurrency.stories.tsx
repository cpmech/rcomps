import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { InputCurrency } from '../InputCurrency';

const stories = storiesOf('InputCurrency', module);

stories.addDecorator(withKnobs);

stories.add('default', () => <InputCurrency />);
