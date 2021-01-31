/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Fragment } from 'react';
import { IDefaultLayoutProps } from './Layout';

export interface ILayoutAProps extends IDefaultLayoutProps {
  maxContentWidth?: number;
}

export const LayoutA: React.FC<ILayoutAProps> = ({
  header,
  sidebar,
  main,
  footer,
  maxContentWidth = 1124,
  stickyHeader = false,
}) => {
  const styleRoot = css`
    height: 100vh;
    display: grid;
    grid-template-areas:
      'header'
      'main'
      'footer';
    grid-template-columns: auto;
    grid-template-rows: auto 1fr auto;
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
