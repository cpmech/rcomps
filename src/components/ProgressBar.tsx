/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ProgressLinear } from './ProgressLinear';

export interface IProgressBar {
  progress: number;
}

export const ProgressBar: React.FC<IProgressBar> = ({ progress }) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
      `}
    >
      <div
        css={css`
          width: 200px;
        `}
      >
        <ProgressLinear progress={progress} />
      </div>
    </div>
  );
};
