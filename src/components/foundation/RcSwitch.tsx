/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export interface RcSwitchProps {
  on?: boolean;
  onClick?: ((event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void) | undefined;
  gap?: string;
  height?: string;
  knobColor?: string;
  knobColorMuted?: string;
  backgroundColor?: string;
  backgroundColorMuted?: string;
  borderColor?: string;
  borderWidth?: string;
  knobBorderColor?: string;
  knobBorderWidth?: string;
  transitionTime?: string;
  outline?: boolean;
  darkMode?: boolean;
}

export const RcSwitch: React.FC<RcSwitchProps> = ({
  on,
  onClick,
  gap = '4px',
  height = '40px',
  knobColor = 'white',
  knobColorMuted = 'white',
  backgroundColor = '#2ecc71',
  backgroundColorMuted = '#ccc',
  borderColor = '#484848',
  borderWidth = '0px',
  knobBorderColor = '#484848',
  knobBorderWidth = '0px',
  transitionTime = '0.3s',
  outline,
  darkMode,
}) => {
  // check widths
  if (borderColor === '') {
    borderWidth = '0px';
  }
  if (knobBorderColor === '') {
    knobBorderWidth = '0px';
  }

  // fix height
  height = `calc(${height} - ${borderWidth} * 2)`;

  // outline mode
  if (outline && !darkMode) {
    borderWidth = '1px';
    knobBorderWidth = '1px';
    knobColor = knobBorderColor;
    backgroundColor = '';
    backgroundColorMuted = '';
  }

  // dark mode
  if (darkMode && !outline) {
    knobBorderWidth = '1px';
    knobColor = '#484848';
    knobColorMuted = 'white';
    backgroundColorMuted = 'white';
    backgroundColor = '';
  }

  // darkmode and outline
  if (darkMode && outline) {
    borderWidth = '1px';
    borderColor = 'white';
    backgroundColor = '';
    backgroundColorMuted = '';
    knobColor = '#484848';
  }

  // constants
  const diam = `calc(${height} - 2 * ${gap} - 2 * ${knobBorderWidth} - 2 * ${borderWidth})`;
  const width = `calc(2 * ${diam} + 2 * ${gap} + 2 * ${knobBorderWidth} + 2 * ${borderWidth})`;

  return (
    <div>
      <label
        css={css`
          position: relative;
          display: inline-block;
          width: ${width};
          height: ${height};
          line-height: ${height};

          input:checked + span:before {
            -webkit-transform: translateX(${diam});
            -ms-transform: translateX(${diam});
            transform: translateX(${diam});
            ${knobColor ? `background-color: ${knobColor};` : ''}
          }

          input:checked + span {
            ${backgroundColor ? `background-color: ${backgroundColor};` : ''}
          }

          input:focus + span {
            box-shadow: 0 0 1px #2196f3;
          }
        `}
      >
        <input
          type="checkbox"
          defaultChecked={on}
          onClick={onClick}
          css={css`
            opacity: 0;
            width: 0;
            height: 0;
          `}
        />
        <span
          css={css`
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            ${backgroundColorMuted ? `background-color: ${backgroundColorMuted};` : ''}
            -webkit-transition: ${transitionTime};
            transition: ${transitionTime};
            border-radius: calc(2 * ${height});
            border: ${borderWidth} solid ${borderColor};

            :before {
              position: absolute;
              content: '';
              height: ${diam};
              width: ${diam};
              left: ${gap};
              bottom: ${gap};
              ${knobColorMuted ? `background-color: ${knobColorMuted};` : ''}
              -webkit-transition: ${transitionTime};
              transition: ${transitionTime};
              border: ${knobBorderWidth} solid ${knobBorderColor};
            }

            :before {
              border-radius: 50%;
            }
          `}
        ></span>
      </label>
    </div>
  );
};
