/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RcProgress } from '../foundation';

export interface RcProgressBarProps {
  progress: number;
}

export const RcProgressBar: React.FC<RcProgressBarProps> = ({ progress }) => {
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
        <RcProgress progress={progress} />
      </div>
    </div>
  );
};
