/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Fragment, ReactNode } from 'react';
import { rcConfig } from './rcConfig';

export interface RcLayoutProps {
  warning?: ReactNode;
  header?: ReactNode;
  sidebar?: ReactNode;
  main: ReactNode;
  footer?: ReactNode;
  leftMenu?: ReactNode;
  showLeftMenu?: boolean;
  showSideBar?: boolean;
  stickyHeader?: boolean;
  stickyWarning?: boolean;
  maxContentWidth?: number;
  zIndexStickyWarning?: number;
  zIndexStickyHeader?: number;
}

export const RcLayout: React.FC<RcLayoutProps> = ({
  warning,
  header,
  sidebar,
  main,
  footer,
  leftMenu,
  showLeftMenu = false,
  showSideBar = true,
  stickyWarning = true,
  stickyHeader = false,
  maxContentWidth = 1124,
  zIndexStickyWarning,
  zIndexStickyHeader,
}) => {
  zIndexStickyWarning = zIndexStickyWarning || rcConfig.zIndices.warning;
  zIndexStickyHeader = zIndexStickyHeader || rcConfig.zIndices.header;

  const styleRoot = css`
    height: 100vh;
    display: grid;
    grid-template-areas:
      'warning'
      'header'
      'main'
      'footer';
    grid-template-columns: auto;
    grid-template-rows: auto auto 1fr auto;
  `;

  const styleWarning = stickyWarning
    ? css`
        grid-area: warning;
        position: sticky;
        z-index: ${zIndexStickyWarning};
        top: 0;
      `
    : css`
        grid-area: warning;
      `;

  const styleHeader = stickyHeader
    ? css`
        grid-area: header;
        position: sticky;
        z-index: ${zIndexStickyHeader};
        top: 0;
      `
    : css`
        grid-area: header;
      `;

  return (
    <Fragment>
      <div css={styleRoot}>
        {/* warning */}
        {warning && <div css={styleWarning}>{warning}</div>}

        {/* header */}
        {header && <div css={styleHeader}>{header}</div>}

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
              {showSideBar && sidebar}

              {/* main content */}
              <div
                css={css`
                  width: 100%;
                  margin: 0 auto;
                `}
              >
                {main}
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        {footer && (
          <div
            css={css`
              grid-area: footer;
            `}
          >
            {footer}
          </div>
        )}
      </div>
      {showLeftMenu && leftMenu}
    </Fragment>
  );
};
