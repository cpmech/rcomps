import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { IconGlobe, IconHouseThreeD, IconMoney } from '@cpmech/react-icons';
import { Tabs } from '../Tabs';
import { loremIpsumFew } from './loremIpsum';

const stories = storiesOf('Tabs', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  return (
    <div>
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

stories.add('entry width', () => {
  return (
    <div>
      <Tabs
        bgColor="white"
        tabMinWidth={150}
        entries={[
          {
            label: 'Home',
            onClick: action('house selected'),
          },
          {
            label: 'Mundo',
            onClick: action('mundo selected'),
          },
          {
            label: 'Dinheiro',
            active: true,
            onClick: action('dinheiro selected'),
          },
        ]}
      />
      <div
        css={css`
          border-right: 1px solid #17b580;
          border-left: 1px solid #17b580;
          border-bottom: 1px solid #17b580;
          padding: 30px 20px;
        `}
      >
        {loremIpsumFew}
      </div>
    </div>
  );
});
