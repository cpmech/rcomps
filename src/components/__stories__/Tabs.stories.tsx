import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { IconGlobe, IconHouseThreeD, IconMoney } from '@cpmech/react-icons';
import { Tabs } from '../Tabs';

const stories = storiesOf('Tabs', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  return (
    <div css={css``}>
      <Tabs
        width="80%"
        bgColor="white"
        entries={[
          {
            icon: <IconHouseThreeD />,
            label: 'Home',
            onClick: action('house selected'),
          },
          {
            icon: <IconGlobe />,
            label: 'Mundo',
            active: true,
            onClick: action('mundo selected'),
          },
          {
            icon: <IconMoney />,
            label: 'Dinheiro',
            onClick: action('dinheiro selected'),
          },
        ]}
      />
    </div>
  );
});
