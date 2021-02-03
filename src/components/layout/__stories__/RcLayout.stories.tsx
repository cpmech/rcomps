import { Story, Meta } from '@storybook/react/types-6-0';
import { RcLayout, RcLayoutProps } from '../RcLayout';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { LoremIpsum } from '../../helpers';
import { rcConfig } from '../rcConfig';

const warning = (
  <div
    style={{
      backgroundColor: '#c01626',
      minHeight: 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    WARNING WARNING WARNING
  </div>
);

interface HeaderProps {
  showLeftMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ showLeftMenu }) => {
  return (
    <div
      style={{
        backgroundColor: '#4a76ff',
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button onClick={() => showLeftMenu()}>SHOW LEFT MENU</button>
      <p>HEADER HEADER HEADER</p>
    </div>
  );
};

const sidebar = (
  <div
    style={{
      backgroundColor: '#dedede',
      minHeight: 200,
      paddingTop: 40,
      paddingLeft: 20,
      paddingRight: 20,
    }}
  >
    <p>SIDEBAR</p>
    <p>SIDEBAR</p>
    <p>SIDEBAR</p>
    <p>SIDEBAR</p>
    <p>SIDEBAR</p>
  </div>
);

const main = <div>{LoremIpsum}</div>;

const footer = (
  <div
    style={{
      backgroundColor: '#343434',
      height: 100,
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    FOOTER FOOTER FOOTER
  </div>
);

interface LeftMenuProps {
  hide: () => void;
}

const LeftMenu: React.FC<LeftMenuProps> = ({ hide }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: 120,
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: rcConfig.zIndices.sideNav,
      }}
    >
      <button onClick={() => hide()}>CLOSE</button>
      <div
        style={{
          backgroundColor: '#f5d2b5',
          height: '100vh',
          paddingTop: 20,
          paddingLeft: 10,
        }}
      >
        <p>LEFT MENU</p>
        <p>LEFT MENU</p>
        <p>LEFT MENU</p>
        <p>LEFT MENU</p>
        <p>LEFT MENU</p>
      </div>
    </div>
  );
};

export default {
  title: 'Layout/RcLayout',
  component: RcLayout,
  argTypes: {
    showLeftMenu: { control: 'boolean' },
    showSideBar: { control: 'boolean' },
    stickyHeader: { control: 'boolean' },
    stickyWarning: { control: 'boolean' },
  },
} as Meta;

export const Default: Story<RcLayoutProps> = (args) => {
  const [showLeftMenu, setShowLeftMenu] = useState(false);
  const isNarrow = useMediaQuery({ maxWidth: 600 });
  return (
    <RcLayout
      {...args}
      warning={warning}
      header={<Header showLeftMenu={() => setShowLeftMenu(true)} />}
      sidebar={sidebar}
      main={main}
      footer={footer}
      leftMenu={<LeftMenu hide={() => setShowLeftMenu(false)} />}
      showSideBar={!isNarrow}
      showLeftMenu={showLeftMenu}
    />
  );
};

export const StickyHeader: Story<RcLayoutProps> = (args) => {
  const [showLeftMenu, setShowLeftMenu] = useState(false);
  const isNarrow = useMediaQuery({ maxWidth: 600 });
  return (
    <RcLayout
      {...args}
      warning={warning}
      header={<Header showLeftMenu={() => setShowLeftMenu(true)} />}
      sidebar={sidebar}
      main={main}
      footer={footer}
      leftMenu={<LeftMenu hide={() => setShowLeftMenu(false)} />}
      showSideBar={!isNarrow}
      showLeftMenu={showLeftMenu}
      stickyHeader={true}
    />
  );
};

export const Minimalist: Story<RcLayoutProps> = (args) => (
  <RcLayout {...args} main={main} footer={footer} />
);
