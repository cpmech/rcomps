import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { Button, Link, TopMenu } from '../';
import { ReactComponent as HouseIcon } from '../../assets/house.svg';
import { IconAccount } from '@cpmech/react-icons';
import { ButtonLink } from '../ButtonLink';

const stories = storiesOf('TopMenu', module);

stories.addDecorator(withKnobs);

const entries = [
  <Link key="home" onClick={action('Home')}>
    <HouseIcon height={64} width={64} />
  </Link>,

  <Link key="dashboard" onClick={action('Dashboard')}>
    Dashboard
  </Link>,

  <Link key="google" onClick={action('Google')}>
    Google
  </Link>,

  <Button key="alert" onClick={action('Alert')}>
    Alert
  </Button>,
];

stories.add('default', () => <TopMenu entries={entries} />);

stories.add('centered', () => <TopMenu entries={entries} centered={true} />);

stories.add('with ButtonLink', () => (
  <TopMenu
    entries={[
      <Link key="home" onClick={action('Home')}>
        <HouseIcon height={64} width={64} />
      </Link>,

      <Link key="dashboard" onClick={action('Dashboard')}>
        Dashboard
      </Link>,

      <Link key="google" onClick={action('Google')}>
        Google
      </Link>,

      <ButtonLink key="alert" onClick={action('Alert')}>
        <IconAccount />
      </ButtonLink>,
    ]}
  />
));
