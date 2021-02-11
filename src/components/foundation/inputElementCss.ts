import { css } from '@emotion/react';

export interface InputElementCssOptions {
  height?: string;
  borderRadius?: string;
  flatLeft?: boolean;
  flatRight?: boolean;
  width?: string;
  fontSize?: string;
  labelFontSize?: string;
  scaleLabel?: number;
  paddingHoriz?: string;
  paddingRightPicker?: string;
  labelPaddingHoriz?: string;
  mutedColor?: string;
  bgColor?: string;
  borderColor?: string;
  darkMode?: boolean;
  borderWidth?: string;
  error?: boolean | string;
  color?: string;
  hlColor?: string;
  colorError?: string;
  transTime?: string;
  marginVert?: string;
  extraDeltaLabel?: string; // to account for weird fonts, because all the computations here are precise
}

export const inputElementCss = (
  textMode: boolean,
  pickerMode: boolean,
  {
    height = '50px',
    borderRadius = '300px',
    flatLeft = false,
    flatRight = false,
    width = '100%',
    fontSize = '18px',
    labelFontSize = '18px',
    scaleLabel = 0.8,
    paddingHoriz = '20px',
    paddingRightPicker = '40px',
    labelPaddingHoriz = '5px',
    mutedColor = '#898989',
    bgColor = '#ffffff',
    borderColor = '#cccccc',
    darkMode = false,
    borderWidth = '1px',
    error = false,
    color = '#484848',
    hlColor = '#1ca086',
    colorError = '#e62739',
    transTime = '300ms',
    extraDeltaLabel = '0px',
    marginVert,
  }: InputElementCssOptions,
) => {
  const deltaLabel = `--deltaLabel: calc((${height} + ${labelFontSize}) / 2 + ${extraDeltaLabel})`;
  const deltaLine = `--deltaLine: calc(${height} / 2)`;
  const marginTop = marginVert
    ? `--marginTop: ${marginVert}`
    : `--marginTop: calc((${labelFontSize} * ${scaleLabel}) / 2)`;

  if (darkMode) {
    color = 'white';
    hlColor = 'white';
    mutedColor = '#cccccc';
  }

  if (error) {
    color = colorError;
    hlColor = colorError;
    mutedColor = colorError;
    borderColor = colorError;
  }

  const common = `
    ${deltaLabel};
    ${deltaLine};
    ${marginTop};

    position: relative;
    height: ${height};
    margin-top: var(--marginTop);
    width: ${width};
    input {
      font-size: ${fontSize};
      box-sizing: border-box;
      height: ${height};
      width: 100%;
      padding-left: ${paddingHoriz};
      padding-right: ${pickerMode ? paddingRightPicker : paddingHoriz};
      border: ${borderWidth} solid ${borderColor};
      border-radius: ${borderRadius};
      ${flatLeft ? `border-top-left-radius:0;border-bottom-left-radius:0;` : ''}
      ${flatRight ? `border-top-right-radius:0;border-bottom-right-radius:0;` : ''}
      color: ${textMode ? mutedColor : color};
      background-color: ${bgColor};
      resize: none;
      outline: none;
      ${pickerMode && !textMode ? `cursor:pointer;` : ''}
      ${
        pickerMode
          ? `text-overflow: ellipsis;
             white-space: nowrap;
             overflow: hidden;`
          : ''
      }
    }
    input[required] + label[placeholder] {
      display: block;
      pointer-events: none;
      line-height: ${labelFontSize};
      margin-top: calc(var(--deltaLabel) * -1);
    }
  `;

  const highlight = `
    input[required]:focus {
      border-color: ${hlColor};
    }
    input[required]:focus + label[placeholder]:before {
      color: ${hlColor};
    }
  `;

  const transform = `
    transform-origin: center left;
    transform: translate(0, calc(var(--deltaLine) * -1)) scale(${scaleLabel}, ${scaleLabel});
    padding-left: ${borderWidth === '0px' ? 0 : labelPaddingHoriz};
  `;

  const placeholder = `
    content: attr(placeholder);
    display: inline-block;
    font-size: ${labelFontSize};
    margin-left: ${borderWidth === '0px' ? 0 : `calc(${paddingHoriz} + ${labelPaddingHoriz});`};
    padding-right: ${labelPaddingHoriz};
    color: ${mutedColor};
    white-space: nowrap;
    transition: 0.3s ease-in-out;
    background-image: linear-gradient(to bottom, ${bgColor}, ${bgColor});
    background-size: 100% ${height};
    background-repeat: no-repeat;
    background-position: center;
  `;

  if (textMode) {
    return css`
      ${common}
      input[required] + label[placeholder]:before {
        ${transform}
        ${placeholder}
      }
    `;
  }

  if (pickerMode) {
    return css`
      ${common}
      ${highlight}
      input[required] + label[placeholder]:before {
        ${transform}
        ${placeholder}
      }
    `;
  }

  return css`
    ${common}
    ${highlight}
    input[required]:focus + label[placeholder]:before,
    input[required]:valid + label[placeholder]:before {
      transition-duration: ${transTime};
      ${transform}
    }
    input[required]:invalid + label[placeholder][alt]:before {
      content: attr(placeholder);
    }
    input[required] + label[placeholder]:before {
      ${placeholder}
    }
  `;
};
