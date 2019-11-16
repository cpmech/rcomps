import { css } from '@emotion/core';

export const getButtonCss = (
  width?: string,
  height = 40,
  paddingHoriz = 28,
  borderRadius = 0,
  fontSize?: number,
  fontWeight = 'normal',
  color = '#343434',
  colorDisabled = '#666666',
  backgroundColor = '#ebebeb',
  hoverColor = '#d7d7d7',
  disabled = false,
) => css`
  ${width && `width: ${width};`}
  height: ${height}px;
  padding-left: ${paddingHoriz}px;
  padding-right: ${paddingHoriz}px;
  border-radius: ${borderRadius}px;
  border-width: 0;
  ${fontSize && `font-size: ${fontSize}px;`}
  font-weight: ${fontWeight};
  ${!disabled && `cursor: pointer`};
  color: ${disabled ? colorDisabled : color};
  background-color: ${backgroundColor};
  ${!disabled && `&:hover { background-color: ${hoverColor}; }`}
  transition: all 0.3s ease;
`;
