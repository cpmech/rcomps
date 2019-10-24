import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';

export interface IButtonProps {
  href?: string;
  onClick?: () => void;
  color?: string;
  fontWeight?: string;
  backgroundColor?: string;
  hoverColor?: string;
  height?: number;
  paddingHoriz?: number;
  borderRadius?: number;
}

export const Button: React.FC<IButtonProps> = ({
  href,
  onClick,
  color = '#343434',
  backgroundColor = '#ebebeb',
  hoverColor = '#d7d7d7',
  fontWeight = 'normal',
  height = 40,
  paddingHoriz = 28,
  borderRadius = 6,
  children,
}) => {
  return (
    <button
      css={css`
        height: ${height}px;
        padding-left: ${paddingHoriz}px;
        padding-right: ${paddingHoriz}px;
        border-radius: ${borderRadius}px;
        border-width: 0;
        color: ${color};
        background-color: ${backgroundColor};
        font-weight: ${fontWeight};
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
          background-color: ${hoverColor};
        }
      `}
      onClick={e => {
        e.preventDefault();
        if (href) {
          window.location.href = href;
        } else if (onClick) {
          onClick();
        }
      }}
    >
      {children}
    </button>
  );
};
