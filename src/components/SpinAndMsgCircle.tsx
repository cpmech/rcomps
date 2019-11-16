import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { SpinCircle, ISpinCircleProps } from './SpinCircle';

export interface ISpinAndMsgCircleProps extends ISpinCircleProps {
  message: string;
  size?: number;
  color?: string;
  fontSize?: number;
  gap?: number;
}

export const SpinAndMsgCircle: React.FC<ISpinAndMsgCircleProps> = ({
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
      <SpinCircle size={size} color={color} {...rest} />
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
