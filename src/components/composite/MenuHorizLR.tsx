/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RcMenuHorizProps, RcMenuHoriz } from '../layout';

export interface IMenuHorizLRProps {
  left: RcMenuHorizProps;
  right: RcMenuHorizProps;
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
      <RcMenuHoriz {...left} />
      <RcMenuHoriz {...right} />
    </div>
  );
};
