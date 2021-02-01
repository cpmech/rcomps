/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IMenuHorizontalProps, MenuHorizontal } from '../layout';

export interface IMenuHorizLRProps {
  left: IMenuHorizontalProps;
  right: IMenuHorizontalProps;
}

export const MenuHorizLR: React.FC<IMenuHorizLRProps> = ({
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
