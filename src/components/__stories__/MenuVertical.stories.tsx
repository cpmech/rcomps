import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Button } from '../Button';
import { MenuVertical } from '../MenuVertical';
import {
  IconGlobe,
  IconHouseThreeD,
  IconMoney,
  IconAddressBook,
  IconUser,
} from '@cpmech/react-icons';

const stories = storiesOf('MenuVertical', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  return (
    <MenuVertical
      entries={[
        {
          comp: <Button onClick={action('first clicked')}>First</Button>,
        },
        {
          comp: <Button onClick={action('second clicked')}>Second</Button>,
        },
        {
          icon: <IconHouseThreeD size={80} />,
          onClick: action('house selected'),
        },
        {
          icon: <IconGlobe />,
          label: 'Mundo',
          onClick: action('mundo selected'),
        },
        {
          icon: <IconMoney />,
          label: 'Dinheiro',
          onClick: action('dinheiro selected'),
        },
        {
          icon: <IconHouseThreeD />,
          label: 'Casa',
          entries: [
            {
              label: 'First',
              onClick: action('First clicked'),
            },
            {
              label: 'Second',
              onClick: action('Second clicked'),
            },
            {
              label: 'Third',
              onClick: action('Third clicked'),
            },
          ],
        },
        {
          icon: <IconAddressBook />,
          label: 'Address book',
          entries: [
            {
              icon: <IconUser size={16} />,
              label: 'Bender',
              onClick: action('Bender clicked'),
            },
            {
              icon: <IconUser size={16} />,
              label: 'Leela',
              onClick: action('Leela clicked'),
            },
            {
              icon: <IconUser size={16} />,
              label: 'Fry',
              onClick: action('Fry clicked'),
            },
          ],
        },
      ]}
    />
  );
});
