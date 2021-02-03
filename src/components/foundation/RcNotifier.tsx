/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Fragment } from 'react';
import { IconClose } from '@cpmech/react-icons';

export interface RcNotifierProps {
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
  heightPhone?: number;
  heightTablet?: number;
  heightDesktop?: number;
  noHightlightCloseButton?: boolean;
  cssTitle?: string;
  cssCaption?: string;
  cssMessage?: string;
}

export const RcNotifier: React.FC<RcNotifierProps> = ({
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
  heightPhone = 60,
  heightTablet = 100,
  heightDesktop = 150,
  noHightlightCloseButton = true,
  cssTitle,
  cssCaption = `font-size: 14; font-weight: bold; color: #e62739;`,
  cssMessage,
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
          {cssTitle ? <span css={css(cssTitle)}>{title}</span> : <span>{title}</span>}
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
            {caption && <span css={css(cssCaption)}>{caption}</span>}
            {cssMessage ? <span css={css(cssMessage)}>{message}</span> : <span>{message}</span>}
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