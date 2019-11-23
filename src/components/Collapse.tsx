import React, { useState } from 'react';
/** @jsx jsx */ import { jsx, css, SerializedStyles } from '@emotion/core';
import { IconAngleDown, IconAngleUp } from '@cpmech/react-icons';

export interface ICollapseProps {
  title: string;
  initOpen?: boolean;
  fontSize?: number;
  iconsize?: number;
  width?: string;
  height?: number;
  paddingHoriz?: number;
  iconPaddingRight?: number;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  titleBgColor?: string;
  titleBorderColor?: string;
  titleStyle?: SerializedStyles;
}

export const Collapse: React.FC<ICollapseProps> = ({
  title,
  initOpen,
  fontSize = 18,
  iconsize = 18,
  width,
  height = 50,
  paddingHoriz = 20,
  iconPaddingRight = 15,
  color = '#484848',
  bgColor = '#ffffff',
  borderColor = '#cccccc',
  titleBgColor,
  titleBorderColor,
  titleStyle,
  children,
}) => {
  const [open, setOpen] = useState(initOpen);

  return (
    <div
      css={css`
        ${width && `width:${width};`}
        cursor: pointer;
      `}
    >
      <div
        css={css`
          position: relative;
          color: ${color};
          background-color: ${bgColor};
        `}
        onClick={() => setOpen(!open)}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: ${fontSize}px;
            box-sizing: border-box;
            height: ${height}px;
            ${titleBgColor ? `background-color:${titleBgColor};` : ''}
            ${titleBorderColor ? `border-bottom: 1px solid ${titleBorderColor};` : ''}
            padding-left: ${paddingHoriz}px;
            padding-right: ${paddingHoriz}px;
        `}
        >
          {titleStyle ? <span css={titleStyle}>{title}</span> : <span>{title}</span>}
        </div>
        <div
          css={css`
            display: ${open ? 'inline-block' : 'none'};
            padding-left: ${paddingHoriz}px;
            padding-right: ${paddingHoriz}px;
          `}
        >
          {children}
        </div>
        {borderColor && !titleBorderColor && (
          <div
            css={css`
              border-bottom: 1px solid ${borderColor};
            `}
          ></div>
        )}
        <div
          css={css`
            position: absolute;
            line-height: ${fontSize}px;
            top: ${height / 2 - fontSize / 2}px;
            right: ${iconPaddingRight}px;
            color: ${color};
          `}
          onClick={() => setOpen(!open)}
        >
          {open ? <IconAngleUp size={iconsize} /> : <IconAngleDown size={iconsize} />}
        </div>
      </div>
    </div>
  );
};
