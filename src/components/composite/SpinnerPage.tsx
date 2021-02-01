/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { SpinCircle } from '../foundation/SpinCircle';

export interface ISpinnerPageProps {
  color?: string;
  heightMenu?: number;
}

export const SpinnerPage: React.FC<ISpinnerPageProps> = ({
  color = '#5d5c61',
  heightMenu = 120,
}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
        height: calc(100vh - ${heightMenu}px);
        max-width: 960px;
        padding-left: 20px;
        padding-right: 20px;
      `}
    >
      <SpinCircle color={color} />
    </div>
  );
};
