/** @jsx jsx */ import { jsx, css } from '@emotion/core';

export const getButtonCss = (
  width = 0, // optional
  height = 40,
  paddingHoriz = 28,
  borderRadius = 0,
  fontSize = 0, // optional
  fontWeight = 'normal',
  color = '#343434',
  backgroundColor = '#ebebeb',
  hoverColor = '#d7d7d7',
) => css`
  ${width > 0 ? `width: ${width}px;` : ''}
  height: ${height}px;
  padding-left: ${paddingHoriz}px;
  padding-right: ${paddingHoriz}px;
  border-radius: ${borderRadius}px;
  border-width: 0;
  ${fontSize > 0 ? `font-size: ${fontSize}px;` : ''}
  font-weight: ${fontWeight};
  cursor: pointer;
  color: ${color};
  background-color: ${backgroundColor};
  &:hover {
    background-color: ${hoverColor};
  }
  transition: all 0.3s ease;
`;
