/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export interface RcProgressProps {
  progress: number;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  barColor?: string;
  borderRadius?: string;
}

export const RcProgress: React.FC<RcProgressProps> = ({
  progress,
  color = '#ffffff',
  backgroundColor = '#e5e5e5',
  borderColor,
  barColor = '#4d50c6',
  borderRadius = '300px',
}) => {
  const p = progress || 0;
  const width = p < 0 ? 0 : p > 100 ? 100 : p;
  return (
    <div
      css={css`
        ${backgroundColor ? `background-color: ${backgroundColor};` : ''}
        ${borderColor ? `border: 1px solid ${borderColor};` : ''}
        border-radius: ${borderRadius};
      `}
    >
      <div
        css={css`
          height: 24px;
          width: ${width}%;
          color: ${color};
          font-weight: bold;
          font-size: 15px;
          line-height: 1.5;
          background-color: ${barColor};
          border-radius: ${borderRadius};
          text-align: center;
          padding-top: 1px;
        `}
      >
        {width > 3 && `${width}%`}
      </div>
    </div>
  );
};
