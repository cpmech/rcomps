/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export interface RcCenterPageProps {
  message?: string;
  subMessage?: string;
  colorMessage?: string;
  colorSubMessage?: string;
  sizeMessage?: string;
  sizeSubMessage?: string;
  heightMenu?: string;
}

export const RcCenterPage: React.FC<RcCenterPageProps> = ({
  message,
  subMessage,
  colorMessage = '#c01626',
  colorSubMessage = '#255fdf',
  sizeMessage = '32px',
  sizeSubMessage = '24px',
  heightMenu = '0px',
  children,
}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
        height: calc(100vh - ${heightMenu});
        max-width: 960px;
        padding-left: 20px;
        padding-right: 20px;
      `}
    >
      {message && (
        <span
          css={css`
            font-size: ${sizeMessage};
            color: ${colorMessage};
          `}
        >
          {message}
        </span>
      )}
      {subMessage && (
        <span
          css={css`
            font-size: ${sizeSubMessage};
            color: ${colorSubMessage};
          `}
        >
          {subMessage}
        </span>
      )}
      {children}
    </div>
  );
};
