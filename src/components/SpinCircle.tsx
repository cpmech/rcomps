import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { hex2rgb } from './helpers';

export interface ISpinCircleProps {
  size?: number;
  color?: string;
  thickness?: number;
  time?: string;
}

export const SpinCircle: React.FC<ISpinCircleProps> = ({
  size = 60,
  color = '#ffffff',
  thickness = 6,
  time = '0.6s',
}) => {
  const width = Math.SQRT2 * size;
  const { r, g, b } = hex2rgb(color);
  return (
    <div
      css={css`
        position: relative;
        width: ${width}px;
        height: ${width}px;
      `}
    >
      <div
        css={css`
          position: absolute;
          left: calc(50% - ${width / 2.3}px);
          top: calc(50% - ${width / 2.3}px);
          height: ${size}px;
          width: ${size}px;
          -webkit-animation: rotation ${time} infinite linear;
          -moz-animation: rotation ${time} infinite linear;
          -o-animation: rotation ${time} infinite linear;
          animation: rotation ${time} infinite linear;
          border-left: ${thickness}px solid rgba(${r}, ${g}, ${b}, 0.15);
          border-right: ${thickness}px solid rgba(${r}, ${g}, ${b}, 0.15);
          border-bottom: ${thickness}px solid rgba(${r}, ${g}, ${b}, 0.15);
          border-top: ${thickness}px solid rgba(${r}, ${g}, ${b}, 0.8);
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
