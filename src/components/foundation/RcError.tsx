/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { hasProp } from '@cpmech/basic';

export interface RcErrorProps {
  error?: any;
  fixedHeight?: boolean;
  height?: number;
  fontSize?: number;
  hpadding?: number;
  vpadding?: number;
  marginTop?: number;
  color?: string;
}

export const RcError: React.FC<RcErrorProps> = ({
  error,
  fixedHeight = false,
  height = 18,
  fontSize = 14,
  hpadding = 20,
  vpadding = 2,
  marginTop = 7,
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
        ${fixedHeight ? `height:${height}px;` : ''}
        font-size: ${fontSize}px;
        line-height: ${fontSize}px;
        padding: ${vpadding}px ${hpadding}px;
        margin-top: ${marginTop}px;
        color: ${color};
      `}
    >
      {message}
    </div>
  );
};
