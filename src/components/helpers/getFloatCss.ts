import { css } from '@emotion/react';

export const getFloatCss = (
  show: boolean,
  height?: number,
  width?: string,
  boxToRight?: boolean,
) => css`
  display: ${show ? 'block' : 'none'};
  position: absolute;
  ${boxToRight ? `right: 0;` : ''}
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  ${height ? `height: ${height}px; overflow: auto;` : ''}
  ${width ? `width: ${width};` : ''}
`;

export const getMenuEntryCss = (paddingHoriz = 20, menuEntryHeight = 50) => css`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: ${paddingHoriz}px;
  padding-right: ${paddingHoriz}px;
  height: ${menuEntryHeight}px;
  transition: all 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
