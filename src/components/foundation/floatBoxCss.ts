import { css } from '@emotion/react';

export const floatBoxCss = (
  show: boolean,
  height?: string,
  width?: string,
  boxToRight?: boolean,
  zIndex = 1,
) => css`
  display: ${show ? 'block' : 'none'};
  position: absolute;
  ${boxToRight ? `right: 0;` : ''}
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: ${zIndex};
  ${height ? `height: ${height}; overflow: auto;` : ''}
  ${width ? `width: ${width};` : ''}
`;

export const floatBoxItemCss = (paddingHoriz = '20px', itemHeight = '50px') => css`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: ${paddingHoriz};
  padding-right: ${paddingHoriz};
  height: ${itemHeight};
  transition: all 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
