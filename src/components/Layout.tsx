/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Fragment, ReactNode } from 'react';

export interface IDefaultLayoutProps {
  header: ReactNode;
  sidebar?: ReactNode;
  main: ReactNode;
  footer: ReactNode;
  stickyHeader?: boolean;
}

export interface ILayoutProps extends IDefaultLayoutProps {
  warning: ReactNode;
  stickyWarning?: boolean;
  maxContentWidth?: number;
}

export const Layout: React.FC<ILayoutProps> = ({
  warning,
  header,
  sidebar,
  main,
  footer,
  stickyWarning = true,
  stickyHeader = false,
  maxContentWidth = 1124,
}) => {
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
        z-index: 2;
        position: sticky;
        top: 0;
      `
    : css`
        grid-area: warning;
        z-index: 1;
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
    <Fragment>
      <div css={styleRoot}>
        {/* warning */}
        <div css={styleWarning}>{warning}</div>

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
        <div
          css={css`
            grid-area: footer;
          `}
        >
          {footer}
        </div>
      </div>
    </Fragment>
  );
};
