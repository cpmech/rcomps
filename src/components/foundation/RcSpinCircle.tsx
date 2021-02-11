/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { hex2rgb } from '../helpers';

export interface RcSpinCircleProps {
  size?: string;
  color?: string;
  thickness?: string;
  time?: string;
}

export const RcSpinCircle: React.FC<RcSpinCircleProps> = ({
  size = '64px',
  color = '#236cd2',
  thickness = '6px',
  time = '0.6s',
}) => {
  const len = `calc(${size} - ${thickness} * 2)`;
  const { r, g, b } = hex2rgb(color);
  return (
    <div
      css={css`
        position: relative;
        width: ${size};
        height: ${size};
        overflow: hidden;
      `}
    >
      <div
        css={css`
          position: absolute;
          height: ${len};
          width: ${len};
          -webkit-animation: rotation ${time} infinite linear;
          -moz-animation: rotation ${time} infinite linear;
          -o-animation: rotation ${time} infinite linear;
          animation: rotation ${time} infinite linear;
          border-left: ${thickness} solid rgba(${r}, ${g}, ${b}, 0.15);
          border-right: ${thickness} solid rgba(${r}, ${g}, ${b}, 0.15);
          border-bottom: ${thickness} solid rgba(${r}, ${g}, ${b}, 0.15);
          border-top: ${thickness} solid rgba(${r}, ${g}, ${b}, 0.8);
          border-radius: 100%;
          @-webkit-keyframes rotation {
            from {
              -webkit-transform: rotate(0deg);
            }
            to {
              -webkit-transform: rotate(359deg);
            }
          }
          @-moz-keyframes rotation {
            from {
              -moz-transform: rotate(0deg);
            }
            to {
              -moz-transform: rotate(359deg);
            }
          }
          @-o-keyframes rotation {
            from {
              -o-transform: rotate(0deg);
            }
            to {
              -o-transform: rotate(359deg);
            }
          }
          @keyframes rotation {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(359deg);
            }
          }
        `}
      ></div>
    </div>
  );
};
