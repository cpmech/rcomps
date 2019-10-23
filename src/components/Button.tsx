import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';

export interface IRoundButtonProps {
  href?: string;
  onClick?: () => void;
  backgroundColor?: string;
  hoverColor?: string;
  paddingHoriz?: number;
  paddingVert?: number;
}

export const Button: React.FC<IRoundButtonProps> = ({
  href,
  onClick,
  backgroundColor = '#4caf50',
  hoverColor = '#3e8e41',
  paddingHoriz = 40,
  paddingVert = 12,
  children,
}) => {
  return (
    <button
      css={css`
        padding: ${paddingVert}px ${paddingHoriz}px;
        border-radius: 100px;
        border-width: 0;
        color: white;
        background-color: ${backgroundColor};
        font-weight: bold;
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
