/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Fragment } from 'react';
import { RcIconClose } from '../icons';

export interface RcNotifierProps {
  onClose: () => void;
  title?: string;
  caption?: string;
  message?: string;
  titleFontSize?: string;
  messageFontSize?: string;
  iconSize?: string;
  marginVert?: string;
  verticalGap?: string;
  paddingHoriz?: string;
  iconPadding?: string;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  titleBgColor?: string;
  titleBorderColor?: string;
  heightPhone?: string;
  heightTablet?: string;
  heightDesktop?: string;
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
  titleFontSize = '16px',
  messageFontSize = '14px',
  iconSize = '20px',
  marginVert = '10px',
  verticalGap = '10px',
  paddingHoriz = '20px',
  iconPadding = '25px',
  color = '#484848',
  bgColor = '#ffffff',
  borderColor = '#cccccc',
  titleBgColor,
  titleBorderColor,
  heightPhone = '60px',
  heightTablet = '100px',
  heightDesktop = '150px',
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
        height: ${heightPhone};
        @media only screen and (min-width: 375px) {
          height: ${heightTablet};
        }
        @media only screen and (min-width: 600px) {
          height: ${heightDesktop};
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
            font-size: ${titleFontSize};
            box-sizing: border-box;
            ${titleBgColor ? `background-color:${titleBgColor};` : ''}
            ${titleBorderColor ? `border-bottom: 1px solid ${titleBorderColor};` : ''}
          margin-top: ${marginVert};
            padding-left: ${paddingHoriz};
            padding-right: ${paddingHoriz};
          `}
        >
          {cssTitle ? <span css={css(cssTitle)}>{title}</span> : <span>{title}</span>}
        </div>
      )}
      {message && (
        <div
          css={css`
            padding-left: ${paddingHoriz};
            padding-right: ${paddingHoriz};
            font-size: ${messageFontSize};
            margin-top: ${verticalGap};
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
            width: calc(${iconSize} + ${iconPadding});
            height: calc(${iconSize} + ${iconPadding});
            border-radius: 2px;
            ${noHightlightCloseButton ? '' : `:hover { background-color: rgba(0, 0, 0, 0.1); }`}
          `}
        >
          <RcIconClose size={iconSize} />
        </div>
      </div>
    </div>
  );
};
