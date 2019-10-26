import { css } from '@emotion/core';

export const getFloatCss = (show: boolean, height?: number) => css`
  display: ${show ? 'block' : 'none'};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  ${height && `height: ${height}px; overflow: auto;`}
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