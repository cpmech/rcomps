/** @jsx jsx */ import { jsx, css } from '@emotion/core';

// hlColor = '#00bafa', // lighter blue
// hlColor = '#2196F3', // darker blue

export interface ITypeAProps {
  height?: number;
  borderRadius?: number;
  flatLeft?: boolean;
  flatRight?: boolean;
  width?: string;
  fontSize?: number;
  labelFontSize?: number;
  scaleLabel?: number;
  paddingHoriz?: number;
  labelPaddingHoriz?: number;
  mutedColor?: string;
  bgColor?: string;
  borderColor?: string;
  darkMode?: boolean;
  borderWidth?: number;
  error?: boolean;
  color?: string;
  hlColor?: string;
  colorError?: string;
  transTime?: string;
  marginVert?: number;
}

export const getTypeAcss = (
  textMode: boolean,
  pickerMode: boolean,
  {
    height = 50,
    borderRadius = 300,
    flatLeft = false,
    flatRight = false,
    width = '100%',
    fontSize = 18,
    labelFontSize = 18,
    scaleLabel = 0.8,
    paddingHoriz = 20,
    labelPaddingHoriz = 5,
    mutedColor = '#898989',
    bgColor = '#ffffff',
    borderColor = '#cccccc',
    darkMode = false,
    borderWidth = 1,
    error = false,
    color = '#484848',
    hlColor = '#1ca086',
    colorError = '#e62739',
    transTime = '300ms',
    marginVert,
  }: ITypeAProps,
) => {
  const deltaLabel = height / 2 + labelFontSize / 2;
  const deltaLine = height / 2;
  const marginTop = marginVert || (scaleLabel * labelFontSize) / 2;

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
    position: relative;
    height: ${height}px;
    margin-top: ${marginTop}px;
    width: ${width};
    input {
      font-size: ${fontSize}px;
      box-sizing: border-box;
      height: ${height}px;
      width: 100%;
      padding-left: ${paddingHoriz}px;
      padding-right: ${paddingHoriz}px;
      border: ${borderWidth}px solid ${borderColor};
      border-radius: ${borderRadius}px;
      ${flatLeft ? `border-top-left-radius:0;border-bottom-left-radius:0;` : ''}
      ${flatRight ? `border-top-right-radius:0;border-bottom-right-radius:0;` : ''}
      color: ${textMode ? mutedColor : color};
      background-color: ${bgColor};
      resize: none;
      outline: none;
      ${pickerMode ? `cursor:pointer;` : ''}
    }
    input[required] + label[placeholder] {
      display: block;
      pointer-events: none;
      line-height: ${labelFontSize}px;
      margin-top: -${deltaLabel}px;
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
    transform: translate(0, -${deltaLine}px) scale(${scaleLabel}, ${scaleLabel});
    padding-left: ${borderWidth === 0 ? 0 : labelPaddingHoriz}px;
  `;

  const placeholder = `
    content: attr(placeholder);
    display: inline-block;
    font-size: ${labelFontSize}px;
    margin-left: ${borderWidth === 0 ? 0 : paddingHoriz + labelPaddingHoriz}px;
    padding-right: ${labelPaddingHoriz}px;
    color: ${mutedColor};
    white-space: nowrap;
    transition: 0.3s ease-in-out;
    background-image: linear-gradient(to bottom, ${bgColor}, ${bgColor});
    background-size: 100% ${height}px;
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
