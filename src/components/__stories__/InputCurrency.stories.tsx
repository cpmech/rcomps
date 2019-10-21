import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, optionsKnob, boolean } from '@storybook/addon-knobs';
import { InputCurrency } from '../InputCurrency';

const stories = storiesOf('InputCurrency', module);

stories.addDecorator(withKnobs);

stories.add('default', () => <InputCurrency />);
