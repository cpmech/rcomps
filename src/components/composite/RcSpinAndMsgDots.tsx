/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RcSpinDots, RcSpinDotsProps } from '../foundation';

export interface RcSpinAndMsgDotsProps extends RcSpinDotsProps {
  message: string;
  color?: string;
  fontSize?: string;
  gap?: string;
}

export const RcSpinAndMsgDots: React.FC<RcSpinAndMsgDotsProps> = ({
  message,
  color = '#236cd2',
  fontSize = '14px',
  gap = '20px',
  ...rest
}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={css`
          margin-bottom: ${gap};
        `}
      >
        <RcSpinDots {...rest} color={color} />
      </div>
      <div
        css={css`
          color: ${color};
          font-size: ${fontSize};
        `}
      >
        {message}
      </div>
    </div>
  );
};
