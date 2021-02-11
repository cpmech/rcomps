/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RcSpinCircle } from '../foundation';

export interface RcSpinnerPageProps {
  color?: string;
  heightMenu?: string;
}

export const RcSpinnerPage: React.FC<RcSpinnerPageProps> = ({
  color = '#5d5c61',
  heightMenu = '120px',
}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
        height: calc(100vh - ${heightMenu});
        max-width: 960px;
        padding-left: 20px;
        padding-right: 20px;
      `}
    >
      <RcSpinCircle color={color} />
    </div>
  );
};
