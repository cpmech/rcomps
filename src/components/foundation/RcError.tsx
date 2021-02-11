/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { hasProp } from '@cpmech/basic';

export interface RcErrorProps {
  error?: any;
  fixedHeight?: boolean;
  height?: string;
  fontSize?: string;
  hpadding?: string;
  vpadding?: string;
  marginTop?: string;
  color?: string;
}

export const RcError: React.FC<RcErrorProps> = ({
  error,
  fixedHeight = false,
  height = '18px',
  fontSize = '14px',
  hpadding = '20px',
  vpadding = '2px',
  marginTop = '7px',
  color = '#e62739',
}) => {
  if (error === undefined || error === null) {
    return null;
  }
  let message = '';
  if (typeof error === 'string') {
    message = error;
  } else if (hasProp(error, 'message')) {
    message = error.message;
  } else {
    message = JSON.stringify(error);
  }
  if (!message && !fixedHeight) {
    return null;
  }
  return (
    <div
      css={css`
        ${fixedHeight ? `height:${height};` : ''}
        font-size: ${fontSize};
        line-height: ${fontSize};
        padding: ${vpadding} ${hpadding};
        margin-top: ${marginTop};
        color: ${color};
      `}
    >
      {message}
    </div>
  );
};
