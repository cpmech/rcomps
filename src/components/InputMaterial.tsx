import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';

export interface IInputMaterialProps {
  name: string;
  type?: string;
  label?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  mutedColor?: string;
  hlColor?: string;
  width?: string;
  transTime?: string;
}

// NOTE: the field required must be set to true in input

export const InputMaterial: React.FC<IInputMaterialProps> = ({
  name,
  type,
  label,
  value,
  onChange,
  onBlur,
  mutedColor = '#5d5c61',
  hlColor = '#1ca086', //'#2196F3',
  transTime = '300ms',
  width = '100%',
}) => (
  <div
    css={css`
      *,
      :before,
      :after {
        box-sizing: border-box;
      }

      position: relative;
      margin: 45px 0;

      textarea {
        resize: none;
      }

      input,
      textarea {
        background: none;
        color: ${mutedColor};
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        display: block;
        width: ${width};
        border: none;
        border-radius: 0;
        border-bottom: 1px solid ${mutedColor};
        &:focus {
          outline: none;
        }
        &:focus ~ label,
        &:valid ~ label {
          top: -14px;
          font-size: 12px;
          color: ${hlColor};
        }
        &:focus ~ .bar:before {
          width: ${width};
        }
      }

      input[type='password'] {
        letter-spacing: 0.3em;
      }

      label {
        color: ${mutedColor};
        font-size: 16px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 10px;
        transition: ${transTime} ease all;
      }

      .bar {
        position: relative;
        display: block;
        width: ${width};
        &:before {
          content: '';
          height: 2px;
          width: 0;
          bottom: 0px;
          position: absolute;
          background: ${hlColor};
          transition: ${transTime} ease all;
          left: 0%;
        }
      }
    `}
  >
    <input
      name={name}
      required={true}
      type={type || 'text'}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
    <span className="highlight"></span>
    <span className="bar"></span>
    <label>{label}</label>
  </div>
);
