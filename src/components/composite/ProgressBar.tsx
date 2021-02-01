/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Progress } from '../foundation';

export interface IProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<IProgressBarProps> = ({ progress }) => {
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
        <Progress progress={progress} />
      </div>
    </div>
  );
};
