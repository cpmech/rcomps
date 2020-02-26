import React, { useState } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Card } from '../Card';
import { loremIpsumFew } from './loremIpsum';
import { Notifier } from '../Notifier';
import { IconHouseThreeD } from '@cpmech/react-icons';

const stories = storiesOf('Card', module);

stories.addDecorator(withKnobs);

const styles = {
  bg1: css`
    background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  bg2: css`
    background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  bg3: css`
    background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

stories.add('default', () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div css={styles.bg1}>
      <Card openMenu={() => setShowMenu(true)} title="Good news!">
        {loremIpsumFew}
      </Card>

      {showMenu && (
        <Notifier
          onClose={() => setShowMenu(false)}
          message="Showing this because the menu was clicked"
        />
      )}
    </div>
  );
});

stories.add('with zoom', () => {
  return (
    <div css={styles.bg2}>
      <Card openMenu={() => console.log('hello')} title="Good news!" noZoom={false}>
        {loremIpsumFew}
      </Card>
    </div>
  );
});

const Hero = () => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
      align-items: center;
    `}
  >
    <IconHouseThreeD size={80} />
    <p
      css={css`
        padding-left: 20px;
        font-size: 1.2em;
        font-weight: bold;
        color: #4a76ff;
        width: 120px;
        line-height: 1.2em;
      `}
    >
      Found my new house!
    </p>
  </div>
);

stories.add('with hero', () => {
  return (
    <div css={styles.bg3}>
      <Card openMenu={() => console.log('hello')} title="Good news!" hero={<Hero />}>
        {loremIpsumFew}
      </Card>
    </div>
  );
});
