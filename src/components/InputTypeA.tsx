import React, { ReactNode } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';

export interface IInputTypeAProps {
  name?: string;
  type?: string;
  label?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  height?: number;
  width?: string;
  borderRadius?: number;
  flatLeft?: boolean;
  flatRight?: boolean;
  fontSize?: number;
  labelFontSize?: number;
  scaleLabel?: number;
  paddingHoriz?: number;
  labelPaddingHoriz?: number;
  transTime?: string;
  color?: string;
  mutedColor?: string;
  hlColor?: string;
  bgColor?: string;
  borderColor?: string;
  darkMode?: boolean;
  marginVert?: number;
  suffix?: ReactNode;
  suffixPaddingRight?: number;
}

export const InputTypeA: React.FC<IInputTypeAProps> = ({
  name,
  type,
  label,
  value,
  onChange,
  onBlur,
  height = 50,
  borderRadius = 300,
  flatLeft,
  flatRight,
  width = '100%',
  fontSize = 18,
  labelFontSize = 18,
  scaleLabel = 0.8,
  paddingHoriz = 20,
  labelPaddingHoriz = 5,
  transTime = '300ms',
  color = '#484848',
  mutedColor = '#898989',
  hlColor = '#1ca086', // green
  // hlColor = '#00bafa', // lighter blue
  // hlColor = '#2196F3', // darker blue
  bgColor = '#ffffff',
  borderColor = '#cccccc',
  darkMode,
  marginVert,
  suffix,
  suffixPaddingRight = 20,
}) => {
  const deltaLabel = height / 2 + labelFontSize / 2;
  const deltaLine = height / 2;
  const marginTop = marginVert || (scaleLabel * labelFontSize) / 2;
  if (darkMode) {
    color = 'white';
    hlColor = 'white';
    mutedColor = '#cccccc';
  }
  return (
    <div
      css={css`
        position: relative;
        height: ${height}px;
        margin-top: ${marginTop}px;
        width: ${width};

        input {
          font-size: ${fontSize}px;
          box-sizing: border-box;
          height: ${height}px;
          width: 100%;
          padding-left: ${paddingHoriz}px;
          padding-right: ${paddingHoriz}px;
          border: 1px solid ${borderColor};
          border-radius: ${borderRadius}px;
          ${flatLeft && `border-top-left-radius:0;border-bottom-left-radius:0;`}
          ${flatRight && `border-top-right-radius:0;border-bottom-right-radius:0;`}
          color: ${color};
          background-color: ${bgColor};
          resize: none;
          outline: none;
        }
        input[required]:focus {
          border-color: ${hlColor};
        }
        input[required]:focus + label[placeholder]:before {
          color: ${hlColor};
        }
        input[required]:focus + label[placeholder]:before,
        input[required]:valid + label[placeholder]:before {
          transition-duration: ${transTime};
          transform-origin: center left;
          transform: translate(0, -${deltaLine}px) scale(${scaleLabel}, ${scaleLabel});
          padding-left: ${labelPaddingHoriz}px;
        }
        input[required]:invalid + label[placeholder][alt]:before {
          content: attr(placeholder);
        }
        input[required] + label[placeholder] {
          display: block;
          pointer-events: none;
          line-height: ${labelFontSize}px;
          margin-top: -${deltaLabel}px;
        }
        input[required] + label[placeholder]:before {
          content: attr(placeholder);
          display: inline-block;
          font-size: ${labelFontSize}px;
          margin-left: ${paddingHoriz + labelPaddingHoriz}px;
          padding-right: ${labelPaddingHoriz}px;
          color: ${mutedColor};
          white-space: nowrap;
          transition: 0.3s ease-in-out;
          background-image: linear-gradient(to bottom, ${bgColor}, ${bgColor});
          background-size: 100% ${height}px;
          background-repeat: no-repeat;
          background-position: center;
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
      <label placeholder={label}></label>
      {suffix && (
        <div
          css={css`
            position: absolute;
            line-height: ${fontSize}px;
            top: ${height / 2 - fontSize / 2}px;
            right: ${suffixPaddingRight}px;
            color: ${mutedColor};
          `}
        >
          {suffix}
        </div>
      )}
    </div>
  );
};
