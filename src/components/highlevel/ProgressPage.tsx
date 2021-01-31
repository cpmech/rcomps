/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IProgressLinearProps, ProgressLinear } from '../ProgressLinear';

export interface IProgressPageProps extends IProgressLinearProps {
  heightMenu?: number;
  maxWidth?: string;
}

export const ProgressPage: React.FC<IProgressPageProps> = ({
  heightMenu = 120,
  maxWidth = '80%',
  ...rest
}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        height: calc(100vh - ${heightMenu}px);
        max-width: ${maxWidth};
        padding-left: 20px;
        padding-right: 20px;
      `}
    >
      <ProgressLinear {...rest} />
    </div>
  );
};
