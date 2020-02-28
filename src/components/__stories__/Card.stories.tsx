import React, { useState } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Card } from '../Card';
import { loremIpsumFew } from './loremIpsum';
import { Notifier } from '../Notifier';
import { IconHouseThreeD } from '@cpmech/react-icons';
import { ButtonLink } from '../ButtonLink';
import { action } from '@storybook/addon-actions';

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

  bg4: css`
    background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  bg5: css`
    background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
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
      <Card title="Good news!">{loremIpsumFew}</Card>

      {showMenu && (
        <Notifier
          onClose={() => setShowMenu(false)}
          message="Showing this because the menu was clicked"
        />
      )}
    </div>
  );
});

stories.add('zoom', () => {
  return (
    <div css={styles.bg2}>
      <Card title="Good news!" noZoom={false}>
        {loremIpsumFew}
      </Card>
    </div>
  );
});

const Hero: React.FC = () => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
      align-items: center;
    `}
  >
    <IconHouseThreeD size={90} />
    <p
      css={css`
        padding-left: 20px;
        font-size: 1.2em;
        font-weight: bold;
        color: #4a76ff;
        width: 120px;
        /* line-height: 1.2em; */
      `}
    >
      Found my new house!
    </p>
  </div>
);

stories.add('hero', () => {
  return (
    <div css={styles.bg3}>
      <Card title="Good news!" hero={<Hero />}>
        {loremIpsumFew}
      </Card>
    </div>
  );
});

const Buttons = () => (
  <div>
    <ButtonLink color="#4a76ff" onClick={() => console.log('hello')}>
      Vist my website
    </ButtonLink>
  </div>
);

stories.add('buttons', () => {
  return (
    <div css={styles.bg4}>
      <Card title="Good news!" buttons={<Buttons />}>
        {loremIpsumFew}
      </Card>
    </div>
  );
});

stories.add('hero and buttons', () => {
  return (
    <div css={styles.bg5}>
      <Card title="Good news!" hero={<Hero />} buttons={<Buttons />}>
        {loremIpsumFew}
      </Card>
    </div>
  );
});

stories.add('menu', () => {
  return (
    <div css={styles.bg5}>
      <Card
        title="Good news!"
        menuEntries={[
          { message: 'do something', onClick: action('do something') },
          { message: 'do something else', onClick: action('do something else') },
        ]}
      >
        {loremIpsumFew}
      </Card>
    </div>
  );
});
