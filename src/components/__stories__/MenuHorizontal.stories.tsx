import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Button } from '../Button';
import { MenuHorizontal } from '../MenuHorizontal';
import { IconGlobe, IconHouseThreeD, IconMoney } from '@cpmech/react-icons';
import {} from '@cpmech/react-icons';

const stories = storiesOf('MenuHorizontal', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  return (
    <MenuHorizontal
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
          active: true,
          onClick: action('dinheiro selected'),
        },
      ]}
    />
  );
});
