import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';

export interface ITextTypeAProps {
  name?: string;
  type?: string;
  label?: string;
  value?: string;
  height?: number;
  width?: string;
  borderRadius?: number;
  fontSize?: number;
  scaleLabel?: number;
  paddingHoriz?: number;
  labelPaddingHoriz?: number;
  color?: string;
  mutedColor?: string;
  bgColor?: string;
  borderColor?: string;
  darkMode?: boolean;
  marginVert?: number;
  borderWidth?: number;
}

export const TextTypeA: React.FC<ITextTypeAProps> = ({
  type,
  label,
  value,
  height = 50,
  borderRadius = 300,
  width = '100%',
  fontSize = 18,
  scaleLabel = 0.8,
  paddingHoriz = 20,
  labelPaddingHoriz = 10,
  mutedColor = '#898989',
  bgColor = '#ffffff',
  borderColor = '#cccccc',
  darkMode,
  marginVert,
  borderWidth = 1,
}) => {
  const deltaLabel = height / 2 + fontSize / 2;
  const deltaLine = height / 2;
  const marginTop = marginVert || (scaleLabel * fontSize) / 2;
  if (darkMode) {
    mutedColor = '#cccccc';
  }
  return (
    <div
      css={css`
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
          border: ${borderWidth}px solid ${borderColor};
          border-radius: ${borderRadius}px;
          color: ${mutedColor};
          background-color: ${bgColor};
          resize: none;
          outline: none;
        }
        input[required] + label[placeholder] {
          display: block;
          pointer-events: none;
          line-height: ${fontSize}px;
          margin-top: -${deltaLabel}px;
        }
        input[required] + label[placeholder]:before {
          transform: translate(0, -${deltaLine}px) scale(${scaleLabel}, ${scaleLabel});
          padding-left: ${borderWidth === 0 ? 0 : labelPaddingHoriz}px;
          content: attr(placeholder);
          display: inline-block;
          font-size: ${fontSize}px;
          margin-left: ${borderWidth === 0 ? 0 : paddingHoriz}px;
          padding-right: ${labelPaddingHoriz}px;
          color: ${mutedColor};
          white-space: nowrap;
          background-image: linear-gradient(to bottom, ${bgColor}, ${bgColor});
          background-size: 100% ${height}px;
          background-repeat: no-repeat;
          background-position: center;
        }
      `}
    >
      <input required={true} type={type || 'text'} value={value} disabled={true} />
      <label placeholder={label}></label>
    </div>
  );
};
