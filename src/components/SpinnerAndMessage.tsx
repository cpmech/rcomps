import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { Spinner, ISpinnerProps } from './Spinner';

export interface ISpinnerAndMessageProps extends ISpinnerProps {
  message: string;
  color?: string;
  fontSize?: number;
  gap?: number;
}

export const SpinnerAndMessage: React.FC<ISpinnerAndMessageProps> = ({
  message,
  color = '#ffffff',
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
        <Spinner color={color} {...rest} />
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
