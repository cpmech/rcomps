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
  hoverColorOutline = '#efefef',
  disabled = false,
  outline = false,
) => css`
  ${width && `width: ${width};`}
  height: ${height}px;
  padding-left: ${paddingHoriz}px;
  padding-right: ${paddingHoriz}px;
  border-radius: ${borderRadius}px;
  border-width: 0;
  ${fontSize && `font-size: ${fontSize}px;`}
  font-weight: ${fontWeight};
  color: ${disabled ? colorDisabled : color};
  ${!disabled && `cursor: pointer`};
  ${!disabled && `&:hover { background-color: ${outline ? hoverColorOutline : hoverColor}; }`}
  ${outline && `border: 1px solid ${color};`}
  ${outline ? `background-color: rgba(0,0,0,0);` : `background-color: ${backgroundColor};`}
  transition: all 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
`;
