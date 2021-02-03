export interface RcConfig {
  media: {
    phone: {
      maxWidth: number;
    };
    tablet: {
      maxWidth: number;
    };
    landscape: {
      maxWidth: number;
    };
    desktop: {
      maxPageWidth: number;
    };
  };
  zIndices: {
    sideNav: number;
    warning: number;
    header: number;
  };
}

export const rcConfig: RcConfig = {
  media: {
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
  },
  zIndices: {
    sideNav: 11002,
    warning: 11001,
    header: 11000,
  },
};
