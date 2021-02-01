/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RcSpinDots, RcSpinDotsProps } from '../foundation';

export interface ISpinAndMsgDotsProps extends RcSpinDotsProps {
  message: string;
  color?: string;
  fontSize?: number;
  gap?: number;
}

export const SpinAndMsgDots: React.FC<ISpinAndMsgDotsProps> = ({
  message,
  color = '#236cd2',
  fontSize = 14,
  gap = 20,
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
          margin-bottom: ${gap}px;
        `}
      >
        <RcSpinDots {...rest} color={color} />
      </div>
      <div
        css={css`
          color: ${color};
          font-size: ${fontSize}px;
        `}
      >
        {message}
      </div>
    </div>
  );
};
