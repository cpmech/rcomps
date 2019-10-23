import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { Link } from '@reach/router';
import { Button, TopMenu, ITopMenuEntry, Link as MyLink } from '../components';
import { ReactComponent as HouseIcon } from '../assets/house.svg';

const topMenuEntries: ITopMenuEntry[] = [
  <Link key="home" to="/">
    <HouseIcon height={64} width={64} />
  </Link>,

  <Link key="dashboard" to="/dashboard">
    Dashboard
  </Link>,

  <MyLink
    key="google"
    href="https://www.google.com/"
    css={css`
      font-weight: bold;
    `}
  >
    Google
  </MyLink>,

  <Button key="alert" onClick={() => alert('HELLO WORLD')}>
    Alert
  </Button>,
];

export const MainMenu: React.FC = () => {
  return (
    <div>
      <TopMenu entries={topMenuEntries} />
      <span style={{ marginBottom: 60 }}></span>
      <TopMenu entries={topMenuEntries} centered={true} />
    </div>
  );
};
