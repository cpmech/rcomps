/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { hex2rgb } from './helpers';

export interface ISpinDotsProps {
  size?: number;
  color?: string;
  thickness?: number;
  time?: string;
}

export const SpinDots: React.FC<ISpinDotsProps> = ({
  size = 64,
  color = '#ffffff',
  thickness,
  time = '0.6s',
}) => {
  const f = size / 7;
  const d = thickness || size / 5;

  const { r, g, b } = hex2rgb(color);

  const cpt2 = `rgba(${r}, ${g}, ${b}, 0.2)`;
  const cpt5 = `rgba(${r}, ${g}, ${b}, 0.5)`;
  const cpt7 = `rgba(${r}, ${g}, ${b}, 0.7)`;

  const label = `spinner-${color.substr(1)}`;

  return (
    <div
      css={css`
        height: ${size}px;
        width: ${size}px;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        className="loader"
        css={css`
          font-size: ${f}px;
          width: ${d}px;
          height: ${d}px;
          border-radius: 50%;
          position: relative;
          text-indent: -9999em;
          -webkit-animation: ${label} ${time} infinite ease;
          animation: ${label} ${time} infinite ease;
          -webkit-transform: translateZ(0);
          -ms-transform: translateZ(0);
          transform: translateZ(0);
          @-webkit-keyframes ${label} {
            0%,
            100% {
              box-shadow: 0em -2.6em 0em 0em ${color}, 1.8em -1.8em 0 0em ${cpt2},
                2.5em 0em 0 0em ${cpt2}, 1.75em 1.75em 0 0em ${cpt2}, 0em 2.5em 0 0em ${cpt2},
                -1.8em 1.8em 0 0em ${cpt2}, -2.6em 0em 0 0em ${cpt5}, -1.8em -1.8em 0 0em ${cpt7};
            }
            12.5% {
              box-shadow: 0em -2.6em 0em 0em ${cpt7}, 1.8em -1.8em 0 0em ${color},
                2.5em 0em 0 0em ${cpt2}, 1.75em 1.75em 0 0em ${cpt2}, 0em 2.5em 0 0em ${cpt2},
                -1.8em 1.8em 0 0em ${cpt2}, -2.6em 0em 0 0em ${cpt2}, -1.8em -1.8em 0 0em ${cpt5};
            }
            25% {
              box-shadow: 0em -2.6em 0em 0em ${cpt5}, 1.8em -1.8em 0 0em ${cpt7},
                2.5em 0em 0 0em ${color}, 1.75em 1.75em 0 0em ${cpt2}, 0em 2.5em 0 0em ${cpt2},
                -1.8em 1.8em 0 0em ${cpt2}, -2.6em 0em 0 0em ${cpt2}, -1.8em -1.8em 0 0em ${cpt2};
            }
            37.5% {
              box-shadow: 0em -2.6em 0em 0em ${cpt2}, 1.8em -1.8em 0 0em ${cpt5},
                2.5em 0em 0 0em ${cpt7}, 1.75em 1.75em 0 0em ${color}, 0em 2.5em 0 0em ${cpt2},
                -1.8em 1.8em 0 0em ${cpt2}, -2.6em 0em 0 0em ${cpt2}, -1.8em -1.8em 0 0em ${cpt2};
            }
            50% {
              box-shadow: 0em -2.6em 0em 0em ${cpt2}, 1.8em -1.8em 0 0em ${cpt2},
                2.5em 0em 0 0em ${cpt5}, 1.75em 1.75em 0 0em ${cpt7}, 0em 2.5em 0 0em ${color},
                -1.8em 1.8em 0 0em ${cpt2}, -2.6em 0em 0 0em ${cpt2}, -1.8em -1.8em 0 0em ${cpt2};
            }
            62.5% {
              box-shadow: 0em -2.6em 0em 0em ${cpt2}, 1.8em -1.8em 0 0em ${cpt2},
                2.5em 0em 0 0em ${cpt2}, 1.75em 1.75em 0 0em ${cpt5}, 0em 2.5em 0 0em ${cpt7},
                -1.8em 1.8em 0 0em ${color}, -2.6em 0em 0 0em ${cpt2}, -1.8em -1.8em 0 0em ${cpt2};
            }
            75% {
              box-shadow: 0em -2.6em 0em 0em ${cpt2}, 1.8em -1.8em 0 0em ${cpt2},
                2.5em 0em 0 0em ${cpt2}, 1.75em 1.75em 0 0em ${cpt2}, 0em 2.5em 0 0em ${cpt5},
                -1.8em 1.8em 0 0em ${cpt7}, -2.6em 0em 0 0em ${color}, -1.8em -1.8em 0 0em ${cpt2};
            }
            87.5% {
              box-shadow: 0em -2.6em 0em 0em ${cpt2}, 1.8em -1.8em 0 0em ${cpt2},
                2.5em 0em 0 0em ${cpt2}, 1.75em 1.75em 0 0em ${cpt2}, 0em 2.5em 0 0em ${cpt2},
                -1.8em 1.8em 0 0em ${cpt5}, -2.6em 0em 0 0em ${cpt7}, -1.8em -1.8em 0 0em ${color};
            }
          }
          @keyframes ${label} {
            0%,
            100% {
              box-shadow: 0em -2.6em 0em 0em ${color}, 1.8em -1.8em 0 0em ${cpt2},
                2.5em 0em 0 0em ${cpt2}, 1.75em 1.75em 0 0em ${cpt2}, 0em 2.5em 0 0em ${cpt2},
                -1.8em 1.8em 0 0em ${cpt2}, -2.6em 0em 0 0em ${cpt5}, -1.8em -1.8em 0 0em ${cpt7};
            }
            12.5% {
              box-shadow: 0em -2.6em 0em 0em ${cpt7}, 1.8em -1.8em 0 0em ${color},
                2.5em 0em 0 0em ${cpt2}, 1.75em 1.75em 0 0em ${cpt2}, 0em 2.5em 0 0em ${cpt2},
                -1.8em 1.8em 0 0em ${cpt2}, -2.6em 0em 0 0em ${cpt2}, -1.8em -1.8em 0 0em ${cpt5};
            }
            25% {
              box-shadow: 0em -2.6em 0em 0em ${cpt5}, 1.8em -1.8em 0 0em ${cpt7},
                2.5em 0em 0 0em ${color}, 1.75em 1.75em 0 0em ${cpt2}, 0em 2.5em 0 0em ${cpt2},
                -1.8em 1.8em 0 0em ${cpt2}, -2.6em 0em 0 0em ${cpt2}, -1.8em -1.8em 0 0em ${cpt2};
            }
            37.5% {
              box-shadow: 0em -2.6em 0em 0em ${cpt2}, 1.8em -1.8em 0 0em ${cpt5},
                2.5em 0em 0 0em ${cpt7}, 1.75em 1.75em 0 0em ${color}, 0em 2.5em 0 0em ${cpt2},
                -1.8em 1.8em 0 0em ${cpt2}, -2.6em 0em 0 0em ${cpt2}, -1.8em -1.8em 0 0em ${cpt2};
            }
            50% {
              box-shadow: 0em -2.6em 0em 0em ${cpt2}, 1.8em -1.8em 0 0em ${cpt2},
                2.5em 0em 0 0em ${cpt5}, 1.75em 1.75em 0 0em ${cpt7}, 0em 2.5em 0 0em ${color},
                -1.8em 1.8em 0 0em ${cpt2}, -2.6em 0em 0 0em ${cpt2}, -1.8em -1.8em 0 0em ${cpt2};
            }
            62.5% {
              box-shadow: 0em -2.6em 0em 0em ${cpt2}, 1.8em -1.8em 0 0em ${cpt2},
                2.5em 0em 0 0em ${cpt2}, 1.75em 1.75em 0 0em ${cpt5}, 0em 2.5em 0 0em ${cpt7},
                -1.8em 1.8em 0 0em ${color}, -2.6em 0em 0 0em ${cpt2}, -1.8em -1.8em 0 0em ${cpt2};
            }
            75% {
              box-shadow: 0em -2.6em 0em 0em ${cpt2}, 1.8em -1.8em 0 0em ${cpt2},
                2.5em 0em 0 0em ${cpt2}, 1.75em 1.75em 0 0em ${cpt2}, 0em 2.5em 0 0em ${cpt5},
                -1.8em 1.8em 0 0em ${cpt7}, -2.6em 0em 0 0em ${color}, -1.8em -1.8em 0 0em ${cpt2};
            }
            87.5% {
              box-shadow: 0em -2.6em 0em 0em ${cpt2}, 1.8em -1.8em 0 0em ${cpt2},
                2.5em 0em 0 0em ${cpt2}, 1.75em 1.75em 0 0em ${cpt2}, 0em 2.5em 0 0em ${cpt2},
                -1.8em 1.8em 0 0em ${cpt5}, -2.6em 0em 0 0em ${cpt7}, -1.8em -1.8em 0 0em ${color};
            }
          }
        `}
      ></div>
    </div>
  );
};
