import React, { useState } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Card } from '../Card';
import { loremIpsumFew } from './loremIpsum';
import { Notifier } from '../Notifier';

const stories = storiesOf('Card', module);

stories.addDecorator(withKnobs);

const styles = {
  bg: css`
    background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
    /* background-image: linear-gradient(to top, #dfe9f3 0%, white 100%); */
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
    <div css={styles.bg}>
      <Card openMenu={() => setShowMenu(true)} title="Good news!">
        {loremIpsumFew}
      </Card>

      {showMenu && (
        <Notifier
          onClose={() => setShowMenu(false)}
          title="Show this because the menu was clicked"
        />
      )}
    </div>
  );
});
