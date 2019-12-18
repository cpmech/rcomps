import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';

declare type ValidateResult = string | boolean | undefined;

declare type MultipleFieldErrors = Record<string, ValidateResult>;

declare type Ref = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | any;

interface IFieldError {
  type: string;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: string;
  isManual?: boolean;
}

interface IFormErrorFieldProps {
  error?: string | IFieldError;
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
  let message = '';
  if (error) {
    message = typeof error === 'string' ? error : error.message || '';
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
