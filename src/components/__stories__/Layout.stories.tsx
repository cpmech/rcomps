import { Story, Meta } from '@storybook/react/types-6-0';
import { Layout, ILayoutProps } from '../Layout';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { LoremIpsum } from '../helpers';

export default {
  title: 'Components/Layout',
  component: Layout,
  argTypes: {
    showLeftMenu: { control: 'boolean' },
    showSideBar: { control: 'boolean' },
    stickyHeader: { control: 'boolean' },
    stickyWarning: { control: 'boolean' },
  },
} as Meta;

export const Default: Story<ILayoutProps> = (args) => {
  const [showLeftMenu, setShowLeftMenu] = useState(false);
  const isNarrow = useMediaQuery({ maxWidth: 600 });

  const warning = (
    <div
      style={{
        backgroundColor: '#c01626',
        minHeight: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING
    </div>
  );

  const header = (
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
      <button onClick={() => setShowLeftMenu(true)}>SHOW LEFT MENU</button>
      <p>HEADER HEADER HEADER HEADER HEADER HEADER HEADER HEADER HEADER HEADER HEADER HEADER</p>
    </div>
  );

  const sidebar = (
    <div
      style={{
        backgroundColor: '#dedede',
        minHeight: 200,
        paddingTop: 40,
        paddingLeft: 20,
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
      FOOTER FOOTER FOOTER FOOTER FOOTER FOOTER FOOTER FOOTER FOOTER FOOTER
    </div>
  );

  const leftMenu = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: 120,
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 2,
      }}
    >
      <button onClick={() => setShowLeftMenu(false)}>CLOSE</button>
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

  return (
    <Layout
      {...args}
      warning={warning}
      header={header}
      sidebar={sidebar}
      main={main}
      footer={footer}
      leftMenu={leftMenu}
      showSideBar={!isNarrow}
      showLeftMenu={showLeftMenu}
    />
  );
};

export const WithNullAreas: Story<ILayoutProps> = (args) => (
  <Layout
    {...args}
    warning={null}
    header={<div>HEADER</div>}
    sidebar={null}
    main={<div>MAIN</div>}
    footer={null}
  />
);
