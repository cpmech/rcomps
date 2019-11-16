import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { SpinnerCircle, ISpinnerCircleProps } from './SpinnerCircle';

export interface ISpinCircleMsgProps extends ISpinnerCircleProps {
  message: string;
  size?: number;
  color?: string;
  fontSize?: number;
  gap?: number;
}

export const SpinCircleMsg: React.FC<ISpinCircleMsgProps> = ({
  message,
  size = 60,
  color = '#ffffff',
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
      <SpinnerCircle size={size} color={color} {...rest} />
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
