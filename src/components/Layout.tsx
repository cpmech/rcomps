import React, { ReactNode } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';

interface IProps {
  header: ReactNode;
  sidebar?: ReactNode;
  main: ReactNode;
  footer: ReactNode;
  stickyHeader?: boolean;
  stickySidebar?: boolean;
  headerHeight?: number;
  minHeightToStick?: number;
  sidebarColumnWidth?: string; // e.g.: auto
  narrowWidth?: number;
}

export const Layout: React.FC<IProps> = ({
  header,
  sidebar,
  main,
  footer,
  stickyHeader = false,
  stickySidebar = true,
  headerHeight = 80,
  minHeightToStick = 350,
  sidebarColumnWidth = '250px', // e.g.: auto
  narrowWidth = 600,
}) => {
  const styleRootNoSidebar = css`
    height: 100vh;
    display: grid;
    grid-template-areas:
      'header'
      'main'
      'footer';
    grid-template-columns: auto;
    grid-template-rows: ${headerHeight}px 1fr auto;
  `;

  const styleRoot = css`
    height: 100vh;
    display: grid;
    grid-template-areas:
      'header header'
      'sidebar main'
      'footer footer';
    grid-template-columns: ${sidebarColumnWidth} auto;
    grid-template-rows: ${headerHeight}px 1fr auto;
    @media (max-width: ${narrowWidth + 1}px) {
      grid-template-areas:
        'header'
        'sidebar'
        'main'
        'footer';
      grid-template-columns: auto;
      grid-template-rows: ${headerHeight}px auto 1fr auto;
    }
  `;

  const styleHeader = stickyHeader
    ? css`
        grid-area: header;
        z-index: 1;
        @media (max-width: ${narrowWidth + 1}px) and (min-height: ${minHeightToStick}px) {
          position: sticky;
          top: 0;
        }
      `
    : css`
        grid-area: header;
        z-index: 1;
      `;

  const styleSidebarContent = stickySidebar
    ? css`
        @media (min-height: ${minHeightToStick}px) {
          position: sticky;
          top: ${headerHeight}px;
        }
      `
    : '';

  return (
    <React.Fragment>
      <div css={sidebar ? styleRoot : styleRootNoSidebar}>
        {/* header */}
        <div css={styleHeader}>{header}</div>

        {/* sidebar */}
        {sidebar && (
          <div
            css={css`
              grid-area: sidebar;
            `}
          >
            <div css={styleSidebarContent}>{sidebar}</div>
          </div>
        )}

        {/* main */}
        <div
          css={css`
            grid-area: main;
          `}
        >
          {main}
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
