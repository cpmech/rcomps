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
  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    cursor: pointer;
  }
  a:hover {
    background-color: #f1f1f1;
  }
`;
