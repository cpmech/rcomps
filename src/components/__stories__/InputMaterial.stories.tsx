import React from 'react';
/** @jsx jsx */ import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { InputMaterial } from '../InputMaterial';

const stories = storiesOf('InputMaterial', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <form>
    <InputMaterial name="name" label="Name" value="Hello World!" />
    <InputMaterial name="email" label="Email" />
    <InputMaterial name="password" label="Password" type="password" />
  </form>
));
