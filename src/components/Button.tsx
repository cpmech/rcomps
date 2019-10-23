import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';

export interface IRoundButtonProps {
  href?: string;
  onClick?: () => void;
  backgroundColor?: string;
  hoverColor?: string;
}

export const Button: React.FC<IRoundButtonProps> = ({
  href,
  onClick,
  backgroundColor = '#4caf50',
  hoverColor = '#3e8e41',
  children,
}) => {
  return (
    <button
      css={css`
        padding: 12px 40px 12px 40px;
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
