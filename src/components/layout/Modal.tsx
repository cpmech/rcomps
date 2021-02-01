/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRef, useEffect } from 'react';
import { IconClose } from '@cpmech/react-icons';
import { useLockBodyScroll } from '../helpers';

export interface IModalProps {
  onClose?: () => void;
  title?: string;
  titleFontSize?: number;
  iconSize?: number;
  marginVert?: number;
  verticalGap?: number;
  paddingHoriz?: number;
  iconPadding?: number;
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
  borderRadius?: number;
  zIndex?: number;
  allowClickOutsideToClose?: boolean;
  noCloseButton?: boolean;
  noHightlightCloseButton?: boolean;
  cssTitle?: string;
}

export const Modal: React.FC<IModalProps> = ({
  onClose,
  title,
  titleFontSize = 16,
  iconSize = 20,
  marginVert = 10,
  verticalGap = 10,
  paddingHoriz = 20,
  iconPadding = 25,
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
  borderRadius = 8,
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
          ${borderRadius ? `border-radius: ${borderRadius}px;` : ''}
        `}
      >
        {title && (
          <div
            css={css`
              /* title */
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

        <div
          css={css`
            /* children */
            padding-left: ${paddingHoriz}px;
            padding-right: ${paddingHoriz}px;
            margin-top: ${verticalGap}px;
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
                width: ${iconSize + iconPadding}px;
                height: ${iconSize + iconPadding}px;
                border-radius: 2px;
                ${noHightlightCloseButton ? '' : `:hover { background-color: rgba(0, 0, 0, 0.1); }`}
              `}
            >
              <IconClose size={iconSize} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
