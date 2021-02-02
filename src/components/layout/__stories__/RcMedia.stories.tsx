import { Story, Meta } from '@storybook/react/types-6-0';
import {
  RcMediaNotPhone,
  RcMediaNotTablet,
  RcMediaNotLandscape,
  RcMediaNotDesktop,
  RcMediaPhoneOrNot,
  RcMediaMobileOrNot,
  RcMedia,
  RcMediaProps,
} from '../RcMedia';
import { Fragment, useEffect, useRef, useState } from 'react';

const getStyleRoot = (bgColor: string): React.CSSProperties => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: bgColor,
  fontSize: 40,
  fontWeight: 'bold',
});

const styleCentered: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

interface IProps {
  bgColor: string;
}

const Helper: React.FC<IProps> = ({ bgColor, children }) => {
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
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dimensions = (
    <div
      style={{ position: 'absolute', top: 0, right: 0, fontSize: 24, fontWeight: 'normal' }}
    >{`(${dims.w} x ${dims.h})`}</div>
  );

  const phone = (
    <div style={styleCentered}>
      <div>{children}</div>
      <div style={{ fontSize: 18, color: '#c21c1c' }}>(PHONE)</div>
      <div style={{ fontSize: 12, color: '#c21c1c', marginTop: 8 }}>(RESIZE TO SEE OTHERS)</div>
    </div>
  );

  const notPhone = (
    <div style={styleCentered}>
      <div>{children}</div>
      <div style={{ fontSize: 18, color: '#581b8a' }}>(NOT PHONE)</div>
      <div style={{ fontSize: 12, color: '#581b8a', marginTop: 8 }}>(RESIZE TO SEE OTHERS)</div>
    </div>
  );

  const mobile = (
    <div style={{ position: 'absolute', top: '30%', left: 0, fontSize: 24, color: '#f36310' }}>
      MOBILE
    </div>
  );

  const notMobile = (
    <div style={{ position: 'absolute', top: '30%', left: 0, fontSize: 24, color: '#003cff' }}>
      NOT MOBILE
    </div>
  );

  const notSomething = (
    <Fragment>
      <RcMediaNotPhone>
        <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, fontSize: 14 }}>
          NOT PHONE
        </div>
      </RcMediaNotPhone>
      <RcMediaNotTablet>
        <div style={{ position: 'absolute', top: 14, left: 0, zIndex: 1, fontSize: 14 }}>
          NOT TABLET
        </div>
      </RcMediaNotTablet>
      <RcMediaNotLandscape>
        <div style={{ position: 'absolute', top: 28, left: 0, zIndex: 1, fontSize: 14 }}>
          NOT LANDSCAPE
        </div>
      </RcMediaNotLandscape>
      <RcMediaNotDesktop>
        <div style={{ position: 'absolute', top: 42, left: 0, zIndex: 1, fontSize: 14 }}>
          NOT DESKTOP
        </div>
      </RcMediaNotDesktop>
    </Fragment>
  );

  return (
    <div ref={ref} style={getStyleRoot(bgColor)}>
      {dimensions}
      <RcMediaPhoneOrNot phone={phone} notPhone={notPhone} />
      <RcMediaMobileOrNot mobile={mobile} notMobile={notMobile} />
      {notSomething}
    </div>
  );
};

export default {
  title: 'Layout/RcMedia',
  component: RcMedia,
} as Meta;

export const Default: Story<RcMediaProps> = (args) => (
  <RcMedia
    {...args}
    phone={<Helper bgColor="#cecece">PHONE</Helper>}
    tablet={<Helper bgColor="#ffcdcd">TABLET</Helper>}
    landscape={<Helper bgColor="#cdd1ff">LANDSCAPE</Helper>}
    desktop={<Helper bgColor="#d7ffcd">DESKTOP</Helper>}
  />
);
