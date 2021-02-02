import { Fragment, ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

export const rcSizes = {
  phone: {
    maxWidth: 620,
  },
  tablet: {
    maxWidth: 768,
  },
  landscape: {
    maxWidth: 960,
  },
  desktop: {
    maxPageWidth: 960,
  },
};

export const RcMediaPhone: React.FC = ({ children }) => {
  const isPhone = useMediaQuery({ maxWidth: rcSizes.phone.maxWidth });
  return <>{isPhone ? children : null}</>;
};

export const RcMediaNotPhone: React.FC = ({ children }) => {
  const isPhone = useMediaQuery({ maxWidth: rcSizes.phone.maxWidth });
  return <>{isPhone ? null : children}</>;
};

export const RcMediaTablet: React.FC = ({ children }) => {
  const isTablet = useMediaQuery({
    minWidth: rcSizes.phone.maxWidth + 1,
    maxWidth: rcSizes.tablet.maxWidth,
  });
  return <>{isTablet ? children : null}</>;
};

export const RcMediaNotTablet: React.FC = ({ children }) => {
  const isTablet = useMediaQuery({
    minWidth: rcSizes.phone.maxWidth + 1,
    maxWidth: rcSizes.tablet.maxWidth,
  });
  return <>{isTablet ? null : children}</>;
};

export const RcMediaLandscape: React.FC = ({ children }) => {
  const isLandscape = useMediaQuery({
    minWidth: rcSizes.tablet.maxWidth + 1,
    maxWidth: rcSizes.landscape.maxWidth,
  });
  return <>{isLandscape ? children : null}</>;
};

export const RcMediaNotLandscape: React.FC = ({ children }) => {
  const isLandscape = useMediaQuery({
    minWidth: rcSizes.tablet.maxWidth + 1,
    maxWidth: rcSizes.landscape.maxWidth,
  });
  return <>{isLandscape ? null : children}</>;
};

export const RcMediaDesktop: React.FC = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: rcSizes.landscape.maxWidth + 1 });
  return <>{isDesktop ? children : null}</>;
};

export const RcMediaNotDesktop: React.FC = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: rcSizes.landscape.maxWidth + 1 });
  return <>{isDesktop ? null : children}</>;
};

export const RcMediaMobile: React.FC = ({ children }) => {
  const isLandscapeOrDesktop = useMediaQuery({ minWidth: rcSizes.tablet.maxWidth + 1 });
  return <>{isLandscapeOrDesktop ? null : children}</>;
};

export const RcMediaNotMobile: React.FC = ({ children }) => {
  const isLandscapeOrDesktop = useMediaQuery({ minWidth: rcSizes.tablet.maxWidth + 1 });
  return <>{isLandscapeOrDesktop ? children : null}</>;
};

export interface RcMediaProps {
  phone?: ReactNode;
  tablet?: ReactNode;
  landscape?: ReactNode;
  desktop?: ReactNode;
}

export const RcMedia: React.FC<RcMediaProps> = ({ phone, tablet, landscape, desktop }) => (
  <Fragment>
    <RcMediaPhone>{phone}</RcMediaPhone>
    <RcMediaTablet>{tablet}</RcMediaTablet>
    <RcMediaLandscape>{landscape}</RcMediaLandscape>
    <RcMediaDesktop>{desktop}</RcMediaDesktop>
  </Fragment>
);

export interface RcMediaPhoneOrNotProps {
  phone?: ReactNode;
  notPhone?: ReactNode;
}

export const RcMediaPhoneOrNot: React.FC<RcMediaPhoneOrNotProps> = ({ phone, notPhone }) => (
  <Fragment>
    <RcMediaPhone>{phone}</RcMediaPhone>
    <RcMediaNotPhone>{notPhone}</RcMediaNotPhone>
  </Fragment>
);

export interface RcMediaMobileOrNotProps {
  mobile?: ReactNode;
  notMobile?: ReactNode;
}

export const RcMediaMobileOrNot: React.FC<RcMediaMobileOrNotProps> = ({ mobile, notMobile }) => (
  <Fragment>
    <RcMediaMobile>{mobile}</RcMediaMobile>
    <RcMediaNotMobile>{notMobile}</RcMediaNotMobile>
  </Fragment>
);
