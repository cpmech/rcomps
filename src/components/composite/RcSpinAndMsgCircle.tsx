/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RcSpinCircle, RcSpinCircleProps } from '../foundation';

export interface RcSpinAndMsgCircleProps extends RcSpinCircleProps {
  message: string;
  color?: string;
  fontSize?: string;
  gap?: string;
}

export const RcSpinAndMsgCircle: React.FC<RcSpinAndMsgCircleProps> = ({
  message,
  color = '#236cd2',
  fontSize = '14px',
  gap = '10px',
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
      <RcSpinCircle {...rest} color={color} />
      <div
        css={css`
          color: ${color};
          font-size: ${fontSize};
          line-height: ${fontSize};
          width: 100%;
          margin: 0;
          padding: 0;
          margin-top: ${gap};
          text-align: center;
        `}
      >
        {message}
      </div>
    </div>
  );
};
