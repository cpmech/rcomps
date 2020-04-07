import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { IMenuHorizontalProps, MenuHorizontal } from './MenuHorizontal';

export interface IMenuHorizProps {
  left: IMenuHorizontalProps;
  right: IMenuHorizontalProps;
}

export const MenuHorizLR: React.FC<IMenuHorizProps> = ({
  left,
  right,
  //
}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
      `}
    >
      <MenuHorizontal {...left} />
      <MenuHorizontal {...right} />
    </div>
  );
};
