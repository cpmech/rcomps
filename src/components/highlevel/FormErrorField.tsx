import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { hasProp } from '../helpers';

interface IFormErrorFieldProps {
  error?: any;
  fixedHeight?: boolean;
  height?: number;
  fontSize?: number;
  hpadding?: number;
  vpadding?: number;
  marginTop?: number;
  color?: string;
}

export const FormErrorField: React.FC<IFormErrorFieldProps> = ({
  error,
  fixedHeight = false,
  height = 18,
  fontSize = 14,
  hpadding = 20,
  vpadding = 2,
  marginTop = 7,
  color = '#e62739',
}) => {
  if (!error) {
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
