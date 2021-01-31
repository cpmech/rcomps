/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react';
import { Fragment } from 'react';
import { IconClose } from '@cpmech/react-icons';

interface INotifierProps {
  onClose: () => void;
  title?: string;
  caption?: string;
  message?: string;
  titleFontSize?: number;
  messageFontSize?: number;
  iconSize?: number;
  marginVert?: number;
  verticalGap?: number;
  paddingHoriz?: number;
  iconPadding?: number;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  titleBgColor?: string;
  titleBorderColor?: string;
  titleStyle?: SerializedStyles;
  captionStyle?: SerializedStyles;
  messageStyle?: SerializedStyles;
  heightPhone?: number;
  heightTablet?: number;
  heightDesktop?: number;
  noHightlightCloseButton?: boolean;
}

export const Notifier: React.FC<INotifierProps> = ({
  onClose,
  title,
  caption,
  message,
  titleFontSize = 16,
  messageFontSize = 14,
  iconSize = 20,
  marginVert = 10,
  verticalGap = 10,
  paddingHoriz = 20,
  iconPadding = 25,
  color = '#484848',
  bgColor = '#ffffff',
  borderColor = '#cccccc',
  titleBgColor,
  titleBorderColor,
  titleStyle,
  captionStyle = css`
    font-size: 14;
    font-weight: bold;
    color: #e62739;
  `,
  messageStyle,
  heightPhone = 60,
  heightTablet = 100,
  heightDesktop = 150,
  noHightlightCloseButton = true,
}) => {
  return (
    <div
      css={css`
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 9999;
        width: 100%;
        color: ${color};
        background-color: ${bgColor};
        border-top: 1px solid ${borderColor};
        height: ${heightPhone}px;
        @media only screen and (min-width: 375px) {
          height: ${heightTablet}px;
        }
        @media only screen and (min-width: 600px) {
          height: ${heightDesktop}px;
        }
        overflow: auto;
      `}
    >
      {title && (
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: ${titleFontSize}px;
            box-sizing: border-box;
            ${titleBgColor ? `background-color:${titleBgColor};` : ''}
            ${titleBorderColor ? `border-bottom: 1px solid ${titleBorderColor};` : ''}
          margin-top: ${marginVert}px;
            padding-left: ${paddingHoriz}px;
            padding-right: ${paddingHoriz}px;
          `}
        >
          {titleStyle ? <span css={titleStyle}>{title}</span> : <span>{title}</span>}
        </div>
      )}
      {message && (
        <div
          css={css`
            padding-left: ${paddingHoriz}px;
            padding-right: ${paddingHoriz}px;
            font-size: ${messageFontSize}px;
            margin-top: ${verticalGap}px;
            width: 85%;
          `}
        >
          <Fragment>
            {caption && <span css={captionStyle}>{caption}</span>}
            {messageStyle ? <span css={messageStyle}>{message}</span> : <span>{message}</span>}
          </Fragment>
        </div>
      )}
      <div
        css={css`
          position: absolute;
          top: 0;
          right: 0;
          color: ${color};
          cursor: pointer;
        `}
        onClick={onClose}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            width: ${iconSize + iconPadding}px;
            height: ${iconSize + iconPadding}px;
            border-radius: 2px;
            ${noHightlightCloseButton ? '' : `:hover { background-color: rgba(0, 0, 0, 0.1); }`}
          `}
        >
          <IconClose size={iconSize} />
        </div>
      </div>
    </div>
  );
};
