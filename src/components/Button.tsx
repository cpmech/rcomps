import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';

export interface IRoundButtonProps {
  href?: string;
  onClick?: () => void;
  color?: string;
  fontWeight?: string;
  backgroundColor?: string;
  hoverColor?: string;
  paddingHoriz?: number;
  paddingVert?: number;
  borderRadius?: number;
}

export const Button: React.FC<IRoundButtonProps> = ({
  href,
  onClick,
  color = '#343434',
  backgroundColor = '#ebebeb',
  hoverColor = '#d7d7d7',
  fontWeight = 'normal',
  paddingHoriz = 28,
  paddingVert = 10,
  borderRadius = 6,
  children,
}) => {
  return (
    <button
      css={css`
        padding: ${paddingVert}px ${paddingHoriz}px;
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
