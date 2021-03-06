/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export interface RcChartRingProps {
  pct: number;
  prefix?: string;
  message?: string;
  sufix?: string;
  animated?: boolean;
  color?: string;
  thickness?: string;
  fontSizePrefix?: string;
  fontSizeMessage?: string;
  fontSizeSufix?: string;
  maxWidthPct?: number;
  height?: string;
}

export const RcChartRing: React.FC<RcChartRingProps> = ({
  pct,
  prefix,
  message,
  sufix,
  animated = true,
  color = '#4cc790',
  thickness = '1.8px',
  fontSizePrefix = '4px',
  fontSizeMessage = '10px',
  fontSizeSufix = '4px',
  maxWidthPct = 100,
  height = '250px',
}) => {
  return (
    <div
      css={css`
        ${animated ? `@keyframes progress { 0% { stroke-dasharray: 0 100; } }` : ''}
      `}
    >
      <svg
        viewBox="0 0 36 36"
        css={css`
          display: block;
          margin: 10px auto;
          max-width: ${maxWidthPct}%;
          height: ${height};
        `}
      >
        <path
          css={css`
            stroke: ${color};
            fill: none;
            stroke-width: ${thickness};
            stroke-linecap: round;
            animation: progress 1s ease-out forwards;
          `}
          strokeDasharray={`${pct}, 100`}
          d="M 18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        {prefix && (
          <text
            css={css`
              font-size: ${fontSizePrefix};
            `}
            x="50%"
            y="10"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            {prefix}
          </text>
        )}
        {message && (
          <text
            css={css`
              font-size: ${fontSizeMessage};
            `}
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            {message}
          </text>
        )}
        {sufix && (
          <text
            css={css`
              font-size: ${fontSizeSufix};
            `}
            x="50%"
            y="26"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            {sufix}
          </text>
        )}
      </svg>
    </div>
  );
};
