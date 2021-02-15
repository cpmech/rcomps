/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRef, useEffect } from 'react';
import { RcIconClose } from '../icons';
import { useLockBodyScroll } from '../helpers';

export interface RcModalProps {
  onClose?: () => void;
  title?: string;
  titleFontSize?: string;
  iconSize?: string;
  marginVert?: string;
  verticalGap?: string;
  paddingHoriz?: string;
  iconPadding?: string;
  color?: string;
  bgColor?: string;
  bgOpacity?: number;
  titleBgColor?: string;
  titleBorderColor?: string;
  width?: string;
  height?: string;
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
  borderRadius?: string;
  zIndex?: number;
  allowClickOutsideToClose?: boolean;
  noCloseButton?: boolean;
  noHightlightCloseButton?: boolean;
  cssTitle?: string;
}

export const RcModal: React.FC<RcModalProps> = ({
  onClose,
  title,
  titleFontSize = '16px',
  iconSize = '20px',
  marginVert = '10px',
  verticalGap = '10px',
  paddingHoriz = '20px',
  iconPadding = '25px',
  color = '#484848',
  bgColor = '#ffffff',
  bgOpacity = 0.4,
  titleBgColor,
  titleBorderColor,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  borderRadius = '8px',
  zIndex = 1,
  allowClickOutsideToClose = true,
  noCloseButton,
  noHightlightCloseButton = true,
  cssTitle = `font-weight: bold; font-size: 1.2em;`,
  children,
}) => {
  const refRoot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (allowClickOutsideToClose) {
        if (refRoot.current && e.target) {
          if (!refRoot.current.contains(e.target as Node)) {
            if (onClose) {
              onClose();
            }
          }
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose, allowClickOutsideToClose]);

  useLockBodyScroll();

  return (
    <div
      css={css`
        /* background */
        position: fixed;
        z-index: ${zIndex};
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, ${bgOpacity});
      `}
    >
      <div
        ref={refRoot}
        css={css`
          /* modal-content */
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: ${color};
          background-color: ${bgColor};
          ${width ? `width:${width}; overflow:auto;` : ''}
          ${height ? `height:${height}; overflow:auto;` : ''}
          ${minWidth ? `min-width:${minWidth}; overflow:auto;` : ''}
          ${maxWidth ? `max-width:${maxWidth}; overflow:auto;` : ''}
          ${minHeight ? `min-height:${minHeight}; overflow:auto;` : ''}
          ${maxHeight ? `max-height:${maxHeight}; overflow:auto;` : ''}
          ${borderRadius ? `border-radius: ${borderRadius};` : ''}
        `}
      >
        {title && (
          <div
            css={css`
              /* title */
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

        <div
          css={css`
            /* children */
            padding-left: ${paddingHoriz};
            padding-right: ${paddingHoriz};
            margin-top: ${verticalGap};
          `}
        >
          {children}
        </div>

        {!noCloseButton && onClose && (
          <div
            css={css`
              /* icon container */
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
                /* close icon */
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
        )}
      </div>
    </div>
  );
};
