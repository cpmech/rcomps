import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { IconAngleDown } from '@cpmech/react-icons';
import { Link } from './Link';
import { Pair } from './Pair';

export interface IDropDownEntry {
  message: string;
  href?: string;
  onClick?: () => void;
}

export interface IDropDownProps {
  title: string;
  entries: IDropDownEntry[];
  withIcon?: boolean;
  btnColor?: string;
  btnFontSize?: number;
  btnFontWeight?: string;
  btnBackgroundColor?: string;
  btnHoverColor?: string;
  btnHeight?: number;
  btnPaddingHoriz?: number;
  btnBorderRadius?: number;
  fixedHeight?: number;
}

export const DropDown: React.FC<IDropDownProps> = ({
  title,
  entries,
  withIcon = true,
  btnColor = '#343434',
  btnBackgroundColor = '#ebebeb',
  btnHoverColor = '#d7d7d7',
  btnFontSize = 14,
  btnFontWeight = 'normal',
  btnHeight = 40,
  btnPaddingHoriz = 28,
  btnBorderRadius = 0,
  fixedHeight,
}) => {
  return (
    <div
      css={css`
        position: relative;
        display: inline-block;
        &:hover > div {
          display: block;
        }
      `}
    >
      <button
        css={css`
          height: ${btnHeight}px;
          padding-left: ${btnPaddingHoriz}px;
          padding-right: ${btnPaddingHoriz}px;
          border-radius: ${btnBorderRadius}px;
          border-width: 0;
          color: ${btnColor};
          background-color: ${btnBackgroundColor};
          font-size: ${btnFontSize}px;
          font-weight: ${btnFontWeight};
          cursor: pointer;
          transition: all 0.3s ease;
          &:hover {
            background-color: ${btnHoverColor};
          }
        `}
      >
        {withIcon ? <Pair left={title} right={<IconAngleDown size={btnFontSize} />} /> : title}
      </button>
      <div
        css={css`
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          z-index: 1;
          ${fixedHeight && `height: ${fixedHeight}px; overflow: auto;`}
          a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            cursor: pointer;
          }
          a:hover {
            background-color: #f1f1f1;
          }
        `}
      >
        {entries.map(e => (
          <Link key={e.message} href={e.href} onClick={e.onClick}>
            {e.message}
          </Link>
        ))}
      </div>
    </div>
  );
};
