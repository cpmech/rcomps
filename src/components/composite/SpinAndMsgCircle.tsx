/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { SpinCircle, ISpinCircleProps } from '../foundation/SpinCircle';

export interface ISpinAndMsgCircleProps extends ISpinCircleProps {
  message: string;
  color?: string;
  fontSize?: number;
  gap?: number;
}

export const SpinAndMsgCircle: React.FC<ISpinAndMsgCircleProps> = ({
  message,
  color = '#236cd2',
  fontSize = 14,
  gap = 10,
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
      <SpinCircle {...rest} color={color} />
      <div
        css={css`
          color: ${color};
          font-size: ${fontSize}px;
          line-height: ${fontSize}px;
          width: 100%;
          margin: 0;
          padding: 0;
          margin-top: ${gap}px;
          text-align: center;
        `}
      >
        {message}
      </div>
    </div>
  );
};
