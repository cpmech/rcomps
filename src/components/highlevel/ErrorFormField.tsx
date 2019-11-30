import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';

interface IErrorFormFieldProps {
  canShow?: boolean;
  message?: string;
  height?: number;
  color?: string;
}

export const ErrorFormField: React.FC<IErrorFormFieldProps> = ({
  canShow = false,
  message,
  height = 22,
  color = '#e62739',
}) => (
  <div
    css={css`
      height: ${height}px;
      font-size: 14px;
      line-height: 14px;
      padding: 2px 20px;
      color: ${color};
    `}
  >
    {(canShow && message) || ' '}
  </div>
);
