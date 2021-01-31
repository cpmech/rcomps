import { css } from '@emotion/react';

export const getButtonCss = (
  width?: string,
  height = 40,
  paddingLeft = 28,
  paddingRight = 28,
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
  flatLeft = false,
  flatRight = false,
) => css`
  ${width ? `width: ${width};` : ''}
  height: ${height}px;
  padding-left: ${paddingLeft}px;
  padding-right: ${paddingRight}px;
  border-radius: ${borderRadius}px;
  ${flatLeft ? `border-top-left-radius:0;border-bottom-left-radius:0;` : ''}
  ${flatRight ? `border-top-right-radius:0;border-bottom-right-radius:0;` : ''}
  border-width: 0;
  ${fontSize ? `font-size: ${fontSize}px;` : ''}
  font-weight: ${fontWeight};
  color: ${disabled ? colorDisabled : color};
  ${!disabled ? `cursor: pointer` : ''};
  ${!disabled ? `&:hover { background-color: ${outline ? hoverColorOutline : hoverColor}; }` : ''}
  ${outline ? `border: 1px solid ${color};` : ''}
  ${outline ? `background-color: rgba(0,0,0,0);` : `background-color: ${backgroundColor};`}
  transition: all 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
`;
