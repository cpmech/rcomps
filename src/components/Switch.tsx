/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export interface ISwitchProps {
  on?: boolean;
  onClick?: ((event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void) | undefined;
  gap?: number;
  height?: number;
  knobColor?: string;
  knobColorMuted?: string;
  backgroundColor?: string;
  backgroundColorMuted?: string;
  borderColor?: string;
  borderWidth?: number;
  knobBorderColor?: string;
  knobBorderWidth?: number;
  transitionTime?: string;
  outline?: boolean;
  darkMode?: boolean;
}

export const Switch: React.FC<ISwitchProps> = ({
  on,
  onClick,
  gap = 4,
  height = 40,
  knobColor = 'white',
  knobColorMuted = 'white',
  backgroundColor = '#2ecc71',
  backgroundColorMuted = '#ccc',
  borderColor = '#484848',
  borderWidth = 0,
  knobBorderColor = '#484848',
  knobBorderWidth = 0,
  transitionTime = '0.3s',
  outline,
  darkMode,
}) => {
  // check widths
  if (borderColor === '') {
    borderWidth = 0;
  }
  if (knobBorderColor === '') {
    knobBorderWidth = 0;
  }

  // check limits
  if (borderWidth > height / 2) {
    borderWidth = height / 2;
  }
  height -= 2 * borderWidth;
  if (height < 0) {
    height = 1;
  }
  if (knobBorderWidth + gap > height / 2) {
    knobBorderWidth = height / 2 - gap;
  }
  if (gap > height / 3) {
    gap = height / 3;
  }

  // outline mode
  if (outline && !darkMode) {
    borderWidth = 1;
    knobBorderWidth = 1;
    knobColor = knobBorderColor;
    backgroundColor = '';
    backgroundColorMuted = '';
  }

  // dark mode
  if (darkMode && !outline) {
    knobBorderWidth = 1;
    knobColor = '#484848';
    knobColorMuted = 'white';
    backgroundColorMuted = 'white';
    backgroundColor = '';
  }

  // darkmode and outline
  if (darkMode && outline) {
    borderWidth = 1;
    borderColor = 'white';
    backgroundColor = '';
    backgroundColorMuted = '';
    knobColor = '#484848';
  }

  // constants
  let diam = height - 2 * gap - 2 * knobBorderWidth - 2 * borderWidth;
  if (diam < 0) {
    diam = 1;
  }
  const width = 2 * diam + 2 * gap + 2 * knobBorderWidth + 2 * borderWidth;

  return (
    <div>
      <label
        css={css`
          position: relative;
          display: inline-block;
          width: ${width}px;
          height: ${height}px;
          line-height: ${height}px;

          input:checked + span:before {
            -webkit-transform: translateX(${diam}px);
            -ms-transform: translateX(${diam}px);
            transform: translateX(${diam}px);
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
            border-radius: ${height * 2}px;
            border: ${borderWidth}px solid ${borderColor};

            :before {
              position: absolute;
              content: '';
              height: ${diam}px;
              width: ${diam}px;
              left: ${gap}px;
              bottom: ${gap}px;
              ${knobColorMuted ? `background-color: ${knobColorMuted};` : ''}
              -webkit-transition: ${transitionTime};
              transition: ${transitionTime};
              border: ${knobBorderWidth}px solid ${knobBorderColor};
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
