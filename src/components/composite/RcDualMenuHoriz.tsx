/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RcMenuHorizProps, RcMenuHoriz } from '../layout';

export interface RcDualMenuHorizProps {
  left: RcMenuHorizProps;
  right: RcMenuHorizProps;
}

export const RcDualMenuHoriz: React.FC<RcDualMenuHorizProps> = ({
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
