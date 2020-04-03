import { useState } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { SideNav } from '../SideNav';
import { Button } from '../Button';
import { action } from '@storybook/addon-actions';
import { MenuVertical } from '../MenuVertical';
import { entries } from './menuEntries';

const stories = storiesOf('SideNav', module);

stories.addDecorator(withKnobs);

const styles = {
  bg1: css`
    background-image: linear-gradient(-225deg, #7085b6 0%, #87a7d9 50%, #def3f8 100%);
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  bg2: css`
    background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  bg3: css`
    background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
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
    background-image: linear-gradient(-225deg, #b7f8db 0%, #50a7c2 100%);
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

stories.add('default', () => {
  const [showSideNav, setShowSideNav] = useState(true);
  return (
    <div css={styles.bg1}>
      <Button onClick={() => setShowSideNav(true)}>Show SideNav</Button>
      {showSideNav && (
        <SideNav
          entries={[
            { item: 'First', onClick: action('First clicked') },
            { item: 'Second', onClick: action('Second clicked') },
            { item: 'Third', onClick: action('Third clicked') },
          ]}
          onClose={() => setShowSideNav(false)}
        />
      )}
    </div>
  );
});

stories.add('with menu', () => {
  const [showSideNav, setShowSideNav] = useState(true);
  return (
    <div css={styles.bg1}>
      <Button onClick={() => setShowSideNav(true)}>Show SideNav</Button>
      {showSideNav && (
        <SideNav onClose={() => setShowSideNav(false)} bottomVSpace={100}>
          <MenuVertical entries={entries} color="white" colorHover="#cecece" />
        </SideNav>
      )}
    </div>
  );
});
