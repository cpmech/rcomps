import React, { ReactNode } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';

export interface ILayoutProps {
  header: ReactNode;
  sidebar?: ReactNode;
  main: ReactNode;
  footer: ReactNode;
  stickyHeader?: boolean;
  headerHeight?: number;
}

interface ILayoutAProps extends ILayoutProps {
  maxContentWidth?: number;
}

export const LayoutA: React.FC<ILayoutAProps> = ({
  header,
  sidebar,
  main,
  footer,
  stickyHeader = false,
  headerHeight = 80,
  maxContentWidth = 1124,
}) => {
  const styleRoot = css`
    height: 100vh;
    display: grid;
    grid-template-areas:
      'header'
      'main'
      'footer';
    grid-template-columns: auto;
    grid-template-rows: ${headerHeight}px 1fr auto;
  `;

  const styleHeader = stickyHeader
    ? css`
        grid-area: header;
        z-index: 1;
        position: sticky;
        top: 0;
      `
    : css`
        grid-area: header;
        z-index: 1;
      `;

  return (
    <React.Fragment>
      <div css={styleRoot}>
        {/* header */}
        <div css={styleHeader}>{header}</div>

        {/* main */}
        <div
          css={css`
            grid-area: main;
          `}
        >
          {/* main centralizer */}
          <div
            css={css`
              max-width: ${maxContentWidth}px;
              margin: 0 auto;
            `}
          >
            {/* main wrapper */}
            <div
              css={css`
                display: flex;
                flex-direction: row;
              `}
            >
              {/* sidebar */}
              <div>{sidebar}</div>

              {/* main content */}
              <div
                css={css`
                  margin: 0 auto;
                `}
              >
                {main}
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div
          css={css`
            grid-area: footer;
          `}
        >
          {footer}
        </div>
      </div>
    </React.Fragment>
  );
};
