import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const sizes = {
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

export const Phone: React.FC = ({ children }) => {
  const isPhone = useMediaQuery({ maxWidth: sizes.phone.maxWidth });
  return <>{isPhone ? children : null}</>;
};

export const NotPhone: React.FC = ({ children }) => {
  const isPhone = useMediaQuery({ maxWidth: sizes.phone.maxWidth });
  return <>{isPhone ? null : children}</>;
};

export const Tablet: React.FC = ({ children }) => {
  const isTablet = useMediaQuery({
    minWidth: sizes.phone.maxWidth + 1,
    maxWidth: sizes.tablet.maxWidth,
  });
  return <>{isTablet ? children : null}</>;
};

export const Landscape: React.FC = ({ children }) => {
  const isLandscape = useMediaQuery({
    minWidth: sizes.tablet.maxWidth + 1,
    maxWidth: sizes.landscape.maxWidth,
  });
  return <>{isLandscape ? children : null}</>;
};

export const NotLandscape: React.FC = ({ children }) => {
  const isLandscape = useMediaQuery({
    minWidth: sizes.tablet.maxWidth + 1,
    maxWidth: sizes.landscape.maxWidth,
  });
  return <>{isLandscape ? null : children}</>;
};

export const NotTablet: React.FC = ({ children }) => {
  const isTablet = useMediaQuery({
    minWidth: sizes.phone.maxWidth + 1,
    maxWidth: sizes.tablet.maxWidth,
  });
  return <>{isTablet ? null : children}</>;
};

export const Desktop: React.FC = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: sizes.landscape.maxWidth + 1 });
  return <>{isDesktop ? children : null}</>;
};

export const NotDesktop: React.FC = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: sizes.landscape.maxWidth + 1 });
  return <>{isDesktop ? null : children}</>;
};

export const LandscapeOrDesktop: React.FC = ({ children }) => {
  const isLandscapeOrDesktop = useMediaQuery({ minWidth: sizes.tablet.maxWidth + 1 });
  return <>{isLandscapeOrDesktop ? children : null}</>;
};

export const NotLandscapeOrDesktop: React.FC = ({ children }) => {
  const isLandscapeOrDesktop = useMediaQuery({ minWidth: sizes.tablet.maxWidth + 1 });
  return <>{isLandscapeOrDesktop ? null : children}</>;
};

export const Narrow = Phone;

export const Wide = NotPhone;
