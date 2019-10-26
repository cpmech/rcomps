import React from 'react';
/** @jsx jsx */ import { jsx } from '@emotion/core';
import { getButtonCss } from './styles';

export interface IButtonProps {
  href?: string;
  onClick?: () => void;
  width?: number;
  height?: number;
  paddingHoriz?: number;
  borderRadius?: number;
  fontSize?: number;
  fontWeight?: string;
  color?: string;
  backgroundColor?: string;
  hoverColor?: string;
}

export const Button: React.FC<IButtonProps> = ({
  href,
  onClick,
  width = 0, // optional
  height = 40,
  paddingHoriz = 28,
  borderRadius = 6,
  fontSize = 0, // optional
  fontWeight = 'normal',
  color = '#343434',
  backgroundColor = '#ebebeb',
  hoverColor = '#d7d7d7',
  children,
}) => {
  const buttonCss = getButtonCss(
    width,
    height,
    paddingHoriz,
    borderRadius,
    fontSize,
    fontWeight,
    color,
    backgroundColor,
    hoverColor,
  );

  return (
    <button
      css={buttonCss}
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
