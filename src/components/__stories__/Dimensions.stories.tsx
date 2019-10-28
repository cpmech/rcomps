import React, { useRef, useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import {
  Phone,
  NotPhone,
  Tablet,
  NotTablet,
  Landscape,
  NotLandscape,
  Desktop,
  NotDesktop,
  LandscapeOrDesktop,
  NotLandscapeOrDesktop,
  Narrow,
  Wide,
} from '../Dimensions';

const stories = storiesOf('Dimensions', module);

interface IProps {
  bgColor: string;
}

const H: React.FC<IProps> = ({ bgColor, children }) => {
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const w = ref.current ? ref.current.offsetWidth : 0;
        const h = ref.current ? ref.current.offsetHeight : 0;
        setDims({ w, h });
      }
    };
    // handleResize(); // <<<<<<<<<<<<<<<< MUST NOT DO THIS HERE!
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dims, setDims, ref]);
  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: bgColor,
        fontSize: 40,
        fontWeight: 'bold',
      }}
    >
      <div
        style={{ position: 'absolute', top: 0, right: 0, fontSize: 24, fontWeight: 'normal' }}
      >{`(${dims.w} x ${dims.h})`}</div>
      <Narrow>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>{children}</div>
          <div style={{ fontSize: 18 }}>(narrow)</div>
        </div>
      </Narrow>
      <Wide>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>{children}</div>
          <div style={{ fontSize: 18 }}>(wide)</div>
        </div>
      </Wide>
      <LandscapeOrDesktop>
        <div
          style={{ position: 'absolute', top: '30%', right: 0, fontSize: 24, fontWeight: 'normal' }}
        >
          LANDSCAPE OR DESKTOP
        </div>
      </LandscapeOrDesktop>
      <NotLandscapeOrDesktop>
        <div
          style={{ position: 'absolute', top: '30%', left: 0, fontSize: 24, fontWeight: 'normal' }}
        >
          NOT (LANDSCAPE OR DESKTOP)
        </div>
      </NotLandscapeOrDesktop>
    </div>
  );
};

stories.add('default', () => (
  <React.Fragment>
    <Phone>
      <H bgColor="#cecece">PHONE</H>
    </Phone>
    <NotPhone>
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>NOT PHONE</div>
    </NotPhone>

    <Tablet>
      <H bgColor="#ffcdcd">TABLET</H>
    </Tablet>
    <NotTablet>
      <div style={{ position: 'absolute', top: '60%', left: 0, zIndex: 1 }}>NOT TABLET</div>
    </NotTablet>

    <Landscape>
      <H bgColor="#cdd1ff">LANDSCAPE</H>
    </Landscape>
    <NotLandscape>
      <div style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 1 }}>NOT LANDSCAPE</div>
    </NotLandscape>

    <Desktop>
      <H bgColor="#d7ffcd">DESKTOP</H>
    </Desktop>
    <NotDesktop>
      <div style={{ position: 'absolute', bottom: 0, right: 0, zIndex: 1 }}>NOT DESKTOP</div>
    </NotDesktop>
  </React.Fragment>
));
