import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import {
  IconGlobe,
  IconHouseThreeD,
  IconArrowLeft,
  IconAngleRight,
  IconAngleLeft,
} from '@cpmech/react-icons';
import { ButtonIcon } from '../ButtonIcon';

const stories = storiesOf('ButtonIcon', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <ButtonIcon
    onClick={action('Icon button clicked')}
    icon={
      <div>
        <IconAngleLeft />
        <IconHouseThreeD /> <IconArrowLeft /> <IconGlobe />
        <IconAngleRight />
      </div>
    }
    width="200px"
  />
));
