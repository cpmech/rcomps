import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';

export interface ISelectorEntry {
  message: string;
  href?: string;
  onClick?: () => void;
}

export interface ISelectorProps {
  entries: ISelectorEntry[];
  size?: number;
  withIcon?: boolean;
  color?: string;
  fontSize?: number;
  fontWeight?: string;
  backgroundColor?: string;
  hoverColor?: string;
  height?: number;
  width?: number;
  paddingHoriz?: number;
  borderRadius?: number;
}

export const Selector: React.FC<ISelectorProps> = ({
  entries,
  size,
  color = '#343434',
  backgroundColor = '#ebebeb',
  hoverColor = '#d7d7d7',
  fontSize = 14,
  fontWeight = 'normal',
  height = 40,
  width,
  paddingHoriz = 28,
  borderRadius = 0,
}) => {
  const c = color.replace('#', '%23');
  const angleDown = `<svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path fill="${c}" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/></svg>`;

  return (
    <select
      size={size}
      css={css`
          display: block;
          font-size: ${fontSize}px;
          font-weight: ${fontWeight};
          color: ${color};
          ${height && `height: ${height}px;`}
          ${width && `width: ${width}px;`}
          line-height: 1.3;
          padding-left: ${paddingHoriz}px;
          padding-right: ${paddingHoriz}px;
          max-width: 100%;
          box-sizing: border-box;
          margin: 0;
          border: 1px solid ${backgroundColor};
          border-radius: ${borderRadius}px;
          -moz-appearance: none;
          -webkit-appearance: none;
          appearance: none;
          background-color: ${backgroundColor};
          background-image: url('data:image/svg+xml;utf8,${angleDown}'),
            linear-gradient(to bottom, ${backgroundColor} 0%, ${backgroundColor} 100%);
          background-repeat: no-repeat, repeat;
          background-position: right 0.7em top 50%, 0 0;
          background-size: 0.65em auto, 100%;
          cursor: pointer;
          &::-ms-expand {
            display: none;
          }
          &:hover {
            background-color: ${hoverColor};
          }
          option {
            font-weight: ${fontWeight};
          }
          option:first-child {
            display: none;
          }
        `}
    >
      {entries.map(e => (
        <option key={e.message}>{e.message}</option>
      ))}
    </select>
  );
};
